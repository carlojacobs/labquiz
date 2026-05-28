import fs from "node:fs/promises";

const PANEL_DEFINITIONS = {
  cbc: {
    hemoglobin: { value: "13.8" },
    mcv: { value: "89" },
    wbc: { value: "6.8" },
    neutrophils: { value: "4.2" },
    eosinophils: { value: "0.2" },
    basophils: { value: "0.1" },
    lymphocytes: { value: "1.9" },
    monocytes: { value: "0.5" },
    platelets: { value: "260" },
  },
  renal: {
    sodium: { value: "140" },
    potassium: { value: "4.2" },
    chloride: { value: "103" },
    bicarbonate: { value: "24" },
    bun: { value: "14" },
    creatinine: { value: "0.9" },
    egfr: { value: "92" },
    glucose: { value: "96" },
    calcium: { value: "9.4" },
  },
  liver: {
    ast: { value: "24" },
    alt: { value: "28" },
    alp: { value: "86" },
    bilirubin: { value: "0.7" },
    bilirubin_direct: { value: "0.1" },
    ggt: { value: "26" },
    albumin: { value: "4.2" },
    inr: { value: "1.0" },
  },
  anemia: {
    reticulocytes: { value: "55" },
    iron: { value: "95" },
    ferritin: { value: "95" },
    transferrin: { value: "270" },
    transferrin_saturation: { value: "30" },
    b12: { value: "420" },
    folate: { value: "8.8" },
    methylmalonic_acid: { value: "0.18" },
  },
  inflammation: {
    crp: { value: "3" },
  },
  thyroid: {
    tsh: { value: "1.6" },
    free_t4: { value: "1.2" },
    free_t3: { value: "3.2" },
  },
  bloodGas: {
    blood_gas_ph: { value: "7.38" },
    blood_gas_pco2: { value: "42" },
    bicarbonate: { value: "24" },
    base_excess: { value: "0" },
  },
  urine: {
    urine_specific_gravity: { value: "1.015" },
    urine_ph: { value: "6.0" },
    urine_protein: { value: "Negative" },
    urine_blood: { value: "Negative" },
    urine_leukocytes: { value: "Negative" },
    urine_nitrite: { value: "Negative" },
    urine_glucose: { value: "Negative" },
    urine_ketones: { value: "Negative" },
    urine_creatinine: { value: "8.0" },
    urine_sodium: { value: "80" },
    urine_osmolality: { value: "550" },
    urine_urea: { value: "320" },
    urine_acr: { value: "2" },
    urine_pcr: { value: "8" },
  },
  hemeMalignancy: {
    basophils: { value: "0.1" },
    blasts: { value: "0" },
    ldh: { value: "190" },
    uric_acid: { value: "5.2" },
    total_protein: { value: "7.1" },
    m_protein: { value: "Not detected" },
  },
};

export { PANEL_DEFINITIONS };

export async function loadCaseBank(filePath) {
  const note = await fs.readFile(filePath, "utf8");
  const bank = parseCaseBankNote(note);
  hydrateCasePanels(bank);
  validateCaseBank(bank);

  return {
    ...bank,
    results: [...new Set(bank.cases.map((item) => item.answer))].sort((a, b) =>
      a.localeCompare(b),
    ),
  };
}

export function parseCaseBankNote(note) {
  const match = note.match(/```json\s*([\s\S]*?)```/i);

  if (!match) {
    throw new Error("Case note must contain one fenced json block.");
  }

  return JSON.parse(match[1]);
}

export function hydrateCasePanels(bank) {
  if (!Array.isArray(bank.cases)) {
    return bank;
  }

  for (const item of bank.cases) {
    const panelLabs = {};

    for (const panelName of item.panels ?? []) {
      const panel = PANEL_DEFINITIONS[panelName];

      if (!panel) {
        continue;
      }

      for (const [key, value] of Object.entries(panel)) {
        panelLabs[key] = { ...value };
      }
    }

    item.labs = {
      ...panelLabs,
      ...item.labs,
    };
  }

  return bank;
}

export function validateCaseBank(bank) {
  if (!Array.isArray(bank.labRows) || bank.labRows.length === 0) {
    throw new Error("Case bank must define labRows.");
  }

  if (!Array.isArray(bank.cases) || bank.cases.length === 0) {
    throw new Error("Case bank must define cases.");
  }

  const labKeys = new Set();

  for (const row of bank.labRows) {
    if (!row.key || !row.label || !row.group) {
      throw new Error("Every lab row needs key, label, and group.");
    }

    if (labKeys.has(row.key)) {
      throw new Error(`Duplicate lab row key: ${row.key}`);
    }

    labKeys.add(row.key);
  }

  const caseIds = new Set();
  const answers = new Set();

  for (const item of bank.cases) {
    if (
      !item.id ||
      !item.answer ||
      !item.explanation ||
      !item.labs ||
      !Array.isArray(item.hints)
    ) {
      throw new Error("Every case needs id, answer, explanation, labs, and hints.");
    }

    if (caseIds.has(item.id)) {
      throw new Error(`Duplicate case id: ${item.id}`);
    }

    caseIds.add(item.id);
    answers.add(item.answer);

    for (const panelName of item.panels ?? []) {
      if (!PANEL_DEFINITIONS[panelName]) {
        throw new Error(`Case ${item.id} uses unknown panel: ${panelName}`);
      }
    }

    if (item.hints.length < 5) {
      throw new Error(`Case ${item.id} needs at least five hints.`);
    }

    for (const [key, value] of Object.entries(item.labs)) {
      if (!labKeys.has(key)) {
        throw new Error(`Case ${item.id} uses unknown lab key: ${key}`);
      }

      if (typeof value !== "object" || value === null || !("value" in value)) {
        throw new Error(`Case ${item.id} lab ${key} must be an object with value.`);
      }

      if (value.flag && !["H", "L"].includes(value.flag)) {
        throw new Error(`Case ${item.id} lab ${key} uses unsupported flag: ${value.flag}`);
      }
    }

    validatePanelCompanions(item);
    validateInternalConsistency(item);
  }

  if (answers.size !== bank.cases.length) {
    throw new Error("Each generated test case should have a unique answer.");
  }
}

function validatePanelCompanions(item) {
  const requiredTogether = [
    ["sodium", "potassium", "chloride", "bicarbonate", "bun", "creatinine", "egfr"],
    ["tsh", "free_t4"],
  ];

  for (const keys of requiredTogether) {
    const present = keys.filter((key) => item.labs[key]);

    if (present.length > 0 && present.length < keys.length) {
      const missing = keys.filter((key) => !item.labs[key]);
      throw new Error(
        `Case ${item.id} has partial panel (${present.join(", ")}); missing ${missing.join(", ")}.`,
      );
    }
  }
}

function validateInternalConsistency(item) {
  if (item.labs.creatinine?.flag === "H" && item.labs.egfr?.flag !== "L") {
    throw new Error(`Case ${item.id} has high creatinine without low eGFR.`);
  }

  if (item.labs.free_t4?.flag === "L" && item.labs.tsh?.flag !== "H") {
    throw new Error(`Case ${item.id} has low free T4 without high TSH.`);
  }

  if (item.labs.free_t4?.flag === "H" && item.labs.tsh?.flag !== "L") {
    throw new Error(`Case ${item.id} has high free T4 without low TSH.`);
  }
}
