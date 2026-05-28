# LabQuiz Case Bank

This note is the single source of truth for the quiz. Edit the JSON block below to add lab rows, cases, answer options, or hints. The app reads this file on each `/api/cases` request.

Content rule of thumb: cases should be solvable primarily from the lab pattern. Clinical hints can add context, but the answer should not depend on imaging, cultures, specialist tests, or history that is absent from the fixed table. Avoid copy-paste severity: abnormal values in the same category should vary between cases unless a repeated value is intentional.

Generated case count: 365. To regenerate this broad teaching bank, run `npm run generate:cases`.

```json
{
  "labRows": [
    {
      "key": "glucose",
      "group": "Chemistry",
      "label": "Glucose",
      "unit": "mg/dL",
      "reference": "70-140 random"
    },
    {
      "key": "sodium",
      "group": "Chemistry",
      "label": "Sodium",
      "unit": "mmol/L",
      "reference": "135-145"
    },
    {
      "key": "potassium",
      "group": "Chemistry",
      "label": "Potassium",
      "unit": "mmol/L",
      "reference": "3.5-5.0"
    },
    {
      "key": "bun",
      "group": "Chemistry",
      "label": "Urea/BUN",
      "unit": "mg/dL",
      "reference": "7-20"
    },
    {
      "key": "creatinine",
      "group": "Chemistry",
      "label": "Creatinine",
      "unit": "mg/dL",
      "reference": "0.6-1.3"
    },
    {
      "key": "uric_acid",
      "group": "Chemistry",
      "label": "Uric acid",
      "unit": "mg/dL",
      "reference": "3.5-7.2"
    },
    {
      "key": "calcium",
      "group": "Chemistry",
      "label": "Calcium",
      "unit": "mg/dL",
      "reference": "8.6-10.2"
    },
    {
      "key": "chloride",
      "group": "Chemistry",
      "label": "Chloride",
      "unit": "mmol/L",
      "reference": "98-107"
    },
    {
      "key": "bilirubin",
      "group": "Chemistry",
      "label": "Total bilirubin",
      "unit": "mg/dL",
      "reference": "0.1-1.2"
    },
    {
      "key": "bilirubin_direct",
      "group": "Chemistry",
      "label": "Conjugated bilirubin",
      "unit": "mg/dL",
      "reference": "0.0-0.3"
    },
    {
      "key": "alp",
      "group": "Chemistry",
      "label": "Alkaline phosphatase",
      "unit": "U/L",
      "reference": "44-147"
    },
    {
      "key": "ggt",
      "group": "Chemistry",
      "label": "GGT",
      "unit": "U/L",
      "reference": "9-48"
    },
    {
      "key": "ast",
      "group": "Chemistry",
      "label": "AST",
      "unit": "U/L",
      "reference": "10-40"
    },
    {
      "key": "alt",
      "group": "Chemistry",
      "label": "ALT",
      "unit": "U/L",
      "reference": "7-56"
    },
    {
      "key": "ldh",
      "group": "Chemistry",
      "label": "LDH",
      "unit": "U/L",
      "reference": "120-250"
    },
    {
      "key": "ck",
      "group": "Chemistry",
      "label": "CK",
      "unit": "U/L",
      "reference": "30-200"
    },
    {
      "key": "lipase",
      "group": "Chemistry",
      "label": "Lipase",
      "unit": "U/L",
      "reference": "0-160"
    },
    {
      "key": "total_protein",
      "group": "Chemistry",
      "label": "Total protein",
      "unit": "g/dL",
      "reference": "6.0-8.3"
    },
    {
      "key": "albumin",
      "group": "Chemistry",
      "label": "Albumin",
      "unit": "g/dL",
      "reference": "3.5-5.0"
    },
    {
      "key": "cholesterol",
      "group": "Chemistry",
      "label": "Cholesterol",
      "unit": "mg/dL",
      "reference": "<200"
    },
    {
      "key": "triglycerides",
      "group": "Chemistry",
      "label": "Triglycerides",
      "unit": "mg/dL",
      "reference": "<150"
    },
    {
      "key": "hdl",
      "group": "Chemistry",
      "label": "HDL cholesterol",
      "unit": "mg/dL",
      "reference": ">40"
    },
    {
      "key": "ldl",
      "group": "Chemistry",
      "label": "LDL cholesterol",
      "unit": "mg/dL",
      "reference": "<100"
    },
    {
      "key": "egfr",
      "group": "Chemistry",
      "label": "eGFR",
      "unit": "mL/min/1.73 m2",
      "reference": ">=60"
    },
    {
      "key": "crp",
      "group": "Chemistry",
      "label": "CRP",
      "unit": "mg/L",
      "reference": "<10"
    },
    {
      "key": "hba1c",
      "group": "Chemistry",
      "label": "HbA1c",
      "unit": "%",
      "reference": "<5.7"
    },
    {
      "key": "tsh",
      "group": "Chemistry",
      "label": "TSH",
      "unit": "mIU/L",
      "reference": "0.4-4.0"
    },
    {
      "key": "free_t4",
      "group": "Chemistry",
      "label": "Free T4",
      "unit": "ng/dL",
      "reference": "0.8-1.8"
    },
    {
      "key": "free_t3",
      "group": "Chemistry",
      "label": "Free T3",
      "unit": "pg/mL",
      "reference": "2.3-4.2"
    },
    {
      "key": "hemoglobin",
      "group": "Hematology",
      "label": "Hemoglobin",
      "unit": "g/dL",
      "reference": "12.0-17.5"
    },
    {
      "key": "mcv",
      "group": "Hematology",
      "label": "MCV",
      "unit": "fL",
      "reference": "80-100"
    },
    {
      "key": "wbc",
      "group": "Hematology",
      "label": "Leukocytes",
      "unit": "10^9/L",
      "reference": "4.0-11.0"
    },
    {
      "key": "platelets",
      "group": "Hematology",
      "label": "Platelets",
      "unit": "10^9/L",
      "reference": "150-450"
    },
    {
      "key": "neutrophils",
      "group": "Hematology",
      "label": "Neutrophils (abs.)",
      "unit": "10^9/L",
      "reference": "1.8-7.5"
    },
    {
      "key": "eosinophils",
      "group": "Hematology",
      "label": "Eosinophils",
      "unit": "10^9/L",
      "reference": "0.0-0.5"
    },
    {
      "key": "basophils",
      "group": "Hematology",
      "label": "Basophils",
      "unit": "10^9/L",
      "reference": "0.0-0.2"
    },
    {
      "key": "lymphocytes",
      "group": "Hematology",
      "label": "Lymphocytes",
      "unit": "10^9/L",
      "reference": "1.0-4.0"
    },
    {
      "key": "monocytes",
      "group": "Hematology",
      "label": "Monocytes",
      "unit": "10^9/L",
      "reference": "0.2-0.8"
    },
    {
      "key": "reticulocytes",
      "group": "Hematology",
      "label": "Reticulocytes",
      "unit": "10^9/L",
      "reference": "25-100"
    },
    {
      "key": "iron",
      "group": "Hematology",
      "label": "Iron",
      "unit": "ug/dL",
      "reference": "60-170"
    },
    {
      "key": "ferritin",
      "group": "Hematology",
      "label": "Ferritin",
      "unit": "ng/mL",
      "reference": "30-400"
    },
    {
      "key": "transferrin",
      "group": "Hematology",
      "label": "Transferrin",
      "unit": "mg/dL",
      "reference": "200-360"
    },
    {
      "key": "transferrin_saturation",
      "group": "Hematology",
      "label": "Transferrin saturation",
      "unit": "%",
      "reference": "20-50"
    },
    {
      "key": "b12",
      "group": "Hematology",
      "label": "Vitamin B12",
      "unit": "pg/mL",
      "reference": "200-900"
    },
    {
      "key": "folate",
      "group": "Hematology",
      "label": "Folate",
      "unit": "ng/mL",
      "reference": ">4"
    },
    {
      "key": "methylmalonic_acid",
      "group": "Hematology",
      "label": "Methylmalonic acid",
      "unit": "umol/L",
      "reference": "<0.40"
    },
    {
      "key": "blasts",
      "group": "Hematology",
      "label": "Peripheral blasts",
      "unit": "%",
      "reference": "0"
    },
    {
      "key": "blood_gas_ph",
      "group": "Blood gases",
      "label": "pH (venous)",
      "unit": "",
      "reference": "7.32-7.43"
    },
    {
      "key": "blood_gas_pco2",
      "group": "Blood gases",
      "label": "pCO2 (venous)",
      "unit": "mmHg",
      "reference": "38-52"
    },
    {
      "key": "bicarbonate",
      "group": "Blood gases",
      "label": "Bicarbonate (venous)",
      "unit": "mmol/L",
      "reference": "22-29"
    },
    {
      "key": "base_excess",
      "group": "Blood gases",
      "label": "Base excess (venous)",
      "unit": "mmol/L",
      "reference": "-2 to +2"
    },
    {
      "key": "m_protein",
      "group": "Immunology",
      "label": "M-protein",
      "unit": "g/dL",
      "reference": "Not detected"
    },
    {
      "key": "inr",
      "group": "Coagulation",
      "label": "INR",
      "unit": "",
      "reference": "0.8-1.2"
    },
    {
      "key": "d_dimer",
      "group": "Coagulation",
      "label": "D-dimer",
      "unit": "ng/mL",
      "reference": "<500"
    },
    {
      "key": "urine_ph",
      "group": "Urine sample",
      "label": "Urine pH",
      "unit": "",
      "reference": "5.0-8.0"
    },
    {
      "key": "urine_leukocytes",
      "group": "Urine sample",
      "label": "Urine leukocytes",
      "unit": "dip",
      "reference": "Negative"
    },
    {
      "key": "urine_nitrite",
      "group": "Urine sample",
      "label": "Urine nitrite",
      "unit": "dip",
      "reference": "Negative"
    },
    {
      "key": "urine_protein",
      "group": "Urine sample",
      "label": "Urine protein",
      "unit": "dip",
      "reference": "Negative"
    },
    {
      "key": "urine_glucose",
      "group": "Urine sample",
      "label": "Urine glucose",
      "unit": "dip",
      "reference": "Negative"
    },
    {
      "key": "urine_ketones",
      "group": "Urine sample",
      "label": "Urine ketones",
      "unit": "dip",
      "reference": "Negative"
    },
    {
      "key": "urine_blood",
      "group": "Urine sample",
      "label": "Urine erythrocytes",
      "unit": "dip",
      "reference": "Negative"
    },
    {
      "key": "urine_specific_gravity",
      "group": "Urine sample",
      "label": "Specific gravity",
      "unit": "",
      "reference": "1.005-1.030"
    },
    {
      "key": "urine_creatinine",
      "group": "Urine sample",
      "label": "Urine creatinine",
      "unit": "mmol/L",
      "reference": "2-20"
    },
    {
      "key": "urine_sodium",
      "group": "Urine sample",
      "label": "Urine sodium",
      "unit": "mmol/L",
      "reference": "Variable"
    },
    {
      "key": "urine_osmolality",
      "group": "Urine sample",
      "label": "Urine osmolality",
      "unit": "mOsm/kg",
      "reference": "50-1200"
    },
    {
      "key": "urine_urea",
      "group": "Urine sample",
      "label": "Urine urea",
      "unit": "mmol/L",
      "reference": "Variable"
    },
    {
      "key": "urine_acr",
      "group": "Urine sample",
      "label": "Albumin/creatinine ratio",
      "unit": "mg/mmol",
      "reference": "<3"
    },
    {
      "key": "urine_pcr",
      "group": "Urine sample",
      "label": "Protein/creatinine ratio",
      "unit": "mg/mmol",
      "reference": "<15"
    }
  ],
  "cases": [
    {
      "id": "iron-deficiency-anemia-early",
      "answer": "Iron deficiency anemia",
      "explanation": "Microcytic anemia with depleted ferritin, low serum iron, high transferrin, and low transferrin saturation supports iron deficiency. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "10.8",
          "flag": "L"
        },
        "mcv": {
          "value": "74",
          "flag": "L"
        },
        "platelets": {
          "value": "470",
          "flag": "H"
        },
        "ferritin": {
          "value": "14",
          "flag": "L"
        },
        "iron": {
          "value": "32",
          "flag": "L"
        },
        "transferrin": {
          "value": "385",
          "flag": "H"
        },
        "transferrin_saturation": {
          "value": "8",
          "flag": "L"
        },
        "reticulocytes": {
          "value": "38"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "The red cell size is low rather than macrocytic.",
        "Iron stores are depleted instead of sequestered.",
        "Platelets may rise reactively.",
        "The pattern separates true iron lack from inflammatory iron restriction."
      ],
      "panels": [
        "cbc",
        "anemia",
        "inflammation"
      ]
    },
    {
      "id": "iron-deficiency-anemia-classic",
      "answer": "Iron deficiency anemia",
      "explanation": "Microcytic anemia with depleted ferritin, low serum iron, high transferrin, and low transferrin saturation supports iron deficiency. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "9.4",
          "flag": "L"
        },
        "mcv": {
          "value": "69",
          "flag": "L"
        },
        "platelets": {
          "value": "535",
          "flag": "H"
        },
        "ferritin": {
          "value": "8",
          "flag": "L"
        },
        "iron": {
          "value": "24",
          "flag": "L"
        },
        "transferrin": {
          "value": "420",
          "flag": "H"
        },
        "transferrin_saturation": {
          "value": "5",
          "flag": "L"
        },
        "reticulocytes": {
          "value": "32"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "The red cell size is low rather than macrocytic.",
        "Iron stores are depleted instead of sequestered.",
        "Platelets may rise reactively.",
        "The pattern separates true iron lack from inflammatory iron restriction."
      ],
      "panels": [
        "cbc",
        "anemia",
        "inflammation"
      ]
    },
    {
      "id": "iron-deficiency-anemia-marked",
      "answer": "Iron deficiency anemia",
      "explanation": "Microcytic anemia with depleted ferritin, low serum iron, high transferrin, and low transferrin saturation supports iron deficiency. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "7.8",
          "flag": "L"
        },
        "mcv": {
          "value": "64",
          "flag": "L"
        },
        "platelets": {
          "value": "620",
          "flag": "H"
        },
        "ferritin": {
          "value": "5",
          "flag": "L"
        },
        "iron": {
          "value": "18",
          "flag": "L"
        },
        "transferrin": {
          "value": "455",
          "flag": "H"
        },
        "transferrin_saturation": {
          "value": "4",
          "flag": "L"
        },
        "reticulocytes": {
          "value": "28"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "The red cell size is low rather than macrocytic.",
        "Iron stores are depleted instead of sequestered.",
        "Platelets may rise reactively.",
        "The pattern separates true iron lack from inflammatory iron restriction."
      ],
      "panels": [
        "cbc",
        "anemia",
        "inflammation"
      ]
    },
    {
      "id": "iron-deficiency-anemia-complicated",
      "answer": "Iron deficiency anemia",
      "explanation": "Microcytic anemia with depleted ferritin, low serum iron, high transferrin, and low transferrin saturation supports iron deficiency. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "8.5",
          "flag": "L"
        },
        "mcv": {
          "value": "72",
          "flag": "L"
        },
        "platelets": {
          "value": "500",
          "flag": "H"
        },
        "ferritin": {
          "value": "11",
          "flag": "L"
        },
        "iron": {
          "value": "28",
          "flag": "L"
        },
        "transferrin": {
          "value": "405",
          "flag": "H"
        },
        "transferrin_saturation": {
          "value": "7",
          "flag": "L"
        },
        "reticulocytes": {
          "value": "36"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "The red cell size is low rather than macrocytic.",
        "Iron stores are depleted instead of sequestered.",
        "Platelets may rise reactively.",
        "The pattern separates true iron lack from inflammatory iron restriction."
      ],
      "panels": [
        "cbc",
        "anemia",
        "inflammation"
      ]
    },
    {
      "id": "iron-deficiency-anemia-follow-up",
      "answer": "Iron deficiency anemia",
      "explanation": "Microcytic anemia with depleted ferritin, low serum iron, high transferrin, and low transferrin saturation supports iron deficiency. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "11.2",
          "flag": "L"
        },
        "mcv": {
          "value": "78",
          "flag": "L"
        },
        "platelets": {
          "value": "455",
          "flag": "H"
        },
        "ferritin": {
          "value": "18",
          "flag": "L"
        },
        "iron": {
          "value": "36",
          "flag": "L"
        },
        "transferrin": {
          "value": "375",
          "flag": "H"
        },
        "transferrin_saturation": {
          "value": "9",
          "flag": "L"
        },
        "reticulocytes": {
          "value": "42"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "The red cell size is low rather than macrocytic.",
        "Iron stores are depleted instead of sequestered.",
        "Platelets may rise reactively.",
        "The pattern separates true iron lack from inflammatory iron restriction."
      ],
      "panels": [
        "cbc",
        "anemia",
        "inflammation"
      ]
    },
    {
      "id": "cobalamin-deficiency-early",
      "answer": "Cobalamin deficiency",
      "explanation": "Macrocytosis with low cobalamin, elevated methylmalonic acid, cytopenias, and mild hemolysis markers supports B12 deficiency. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "10.2",
          "flag": "L"
        },
        "mcv": {
          "value": "108",
          "flag": "H"
        },
        "wbc": {
          "value": "3.7",
          "flag": "L"
        },
        "neutrophils": {
          "value": "1.6",
          "flag": "L"
        },
        "platelets": {
          "value": "135",
          "flag": "L"
        },
        "bilirubin": {
          "value": "1.4",
          "flag": "H"
        },
        "ldh": {
          "value": "360",
          "flag": "H"
        },
        "b12": {
          "value": "150",
          "flag": "L"
        },
        "methylmalonic_acid": {
          "value": "0.72",
          "flag": "H"
        },
        "reticulocytes": {
          "value": "30"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "The MCV is high and more than one cell line can be low.",
        "Methylmalonic acid rises with this deficiency.",
        "Mild bilirubin and LDH elevation can reflect ineffective erythropoiesis.",
        "The pattern is not explained by isolated iron depletion."
      ],
      "panels": [
        "cbc",
        "anemia",
        "liver"
      ]
    },
    {
      "id": "cobalamin-deficiency-classic",
      "answer": "Cobalamin deficiency",
      "explanation": "Macrocytosis with low cobalamin, elevated methylmalonic acid, cytopenias, and mild hemolysis markers supports B12 deficiency. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "8.9",
          "flag": "L"
        },
        "mcv": {
          "value": "116",
          "flag": "H"
        },
        "wbc": {
          "value": "3.0",
          "flag": "L"
        },
        "neutrophils": {
          "value": "1.1",
          "flag": "L"
        },
        "platelets": {
          "value": "96",
          "flag": "L"
        },
        "bilirubin": {
          "value": "1.8",
          "flag": "H"
        },
        "ldh": {
          "value": "520",
          "flag": "H"
        },
        "b12": {
          "value": "92",
          "flag": "L"
        },
        "methylmalonic_acid": {
          "value": "1.20",
          "flag": "H"
        },
        "reticulocytes": {
          "value": "26"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "The MCV is high and more than one cell line can be low.",
        "Methylmalonic acid rises with this deficiency.",
        "Mild bilirubin and LDH elevation can reflect ineffective erythropoiesis.",
        "The pattern is not explained by isolated iron depletion."
      ],
      "panels": [
        "cbc",
        "anemia",
        "liver"
      ]
    },
    {
      "id": "cobalamin-deficiency-marked",
      "answer": "Cobalamin deficiency",
      "explanation": "Macrocytosis with low cobalamin, elevated methylmalonic acid, cytopenias, and mild hemolysis markers supports B12 deficiency. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "7.6",
          "flag": "L"
        },
        "mcv": {
          "value": "124",
          "flag": "H"
        },
        "wbc": {
          "value": "2.5",
          "flag": "L"
        },
        "neutrophils": {
          "value": "0.9",
          "flag": "L"
        },
        "platelets": {
          "value": "72",
          "flag": "L"
        },
        "bilirubin": {
          "value": "2.2",
          "flag": "H"
        },
        "ldh": {
          "value": "690",
          "flag": "H"
        },
        "b12": {
          "value": "65",
          "flag": "L"
        },
        "methylmalonic_acid": {
          "value": "1.80",
          "flag": "H"
        },
        "reticulocytes": {
          "value": "22"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "The MCV is high and more than one cell line can be low.",
        "Methylmalonic acid rises with this deficiency.",
        "Mild bilirubin and LDH elevation can reflect ineffective erythropoiesis.",
        "The pattern is not explained by isolated iron depletion."
      ],
      "panels": [
        "cbc",
        "anemia",
        "liver"
      ]
    },
    {
      "id": "cobalamin-deficiency-complicated",
      "answer": "Cobalamin deficiency",
      "explanation": "Macrocytosis with low cobalamin, elevated methylmalonic acid, cytopenias, and mild hemolysis markers supports B12 deficiency. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "9.4",
          "flag": "L"
        },
        "mcv": {
          "value": "119",
          "flag": "H"
        },
        "wbc": {
          "value": "3.2",
          "flag": "L"
        },
        "neutrophils": {
          "value": "1.3",
          "flag": "L"
        },
        "platelets": {
          "value": "118",
          "flag": "L"
        },
        "bilirubin": {
          "value": "1.7",
          "flag": "H"
        },
        "ldh": {
          "value": "610",
          "flag": "H"
        },
        "b12": {
          "value": "120",
          "flag": "L"
        },
        "methylmalonic_acid": {
          "value": "1.05",
          "flag": "H"
        },
        "reticulocytes": {
          "value": "28"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "The MCV is high and more than one cell line can be low.",
        "Methylmalonic acid rises with this deficiency.",
        "Mild bilirubin and LDH elevation can reflect ineffective erythropoiesis.",
        "The pattern is not explained by isolated iron depletion."
      ],
      "panels": [
        "cbc",
        "anemia",
        "liver"
      ]
    },
    {
      "id": "cobalamin-deficiency-follow-up",
      "answer": "Cobalamin deficiency",
      "explanation": "Macrocytosis with low cobalamin, elevated methylmalonic acid, cytopenias, and mild hemolysis markers supports B12 deficiency. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "10.8",
          "flag": "L"
        },
        "mcv": {
          "value": "110",
          "flag": "H"
        },
        "wbc": {
          "value": "3.8",
          "flag": "L"
        },
        "neutrophils": {
          "value": "1.7",
          "flag": "L"
        },
        "platelets": {
          "value": "142",
          "flag": "L"
        },
        "bilirubin": {
          "value": "1.3",
          "flag": "H"
        },
        "ldh": {
          "value": "410",
          "flag": "H"
        },
        "b12": {
          "value": "170",
          "flag": "L"
        },
        "methylmalonic_acid": {
          "value": "0.64",
          "flag": "H"
        },
        "reticulocytes": {
          "value": "34"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "The MCV is high and more than one cell line can be low.",
        "Methylmalonic acid rises with this deficiency.",
        "Mild bilirubin and LDH elevation can reflect ineffective erythropoiesis.",
        "The pattern is not explained by isolated iron depletion."
      ],
      "panels": [
        "cbc",
        "anemia",
        "liver"
      ]
    },
    {
      "id": "folate-deficiency-early",
      "answer": "Folate deficiency",
      "explanation": "Macrocytosis with low folate, preserved B12, and normal methylmalonic acid supports folate deficiency. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "11.0",
          "flag": "L"
        },
        "mcv": {
          "value": "103",
          "flag": "H"
        },
        "wbc": {
          "value": "3.8",
          "flag": "L"
        },
        "platelets": {
          "value": "145",
          "flag": "L"
        },
        "albumin": {
          "value": "3.4",
          "flag": "L"
        },
        "b12": {
          "value": "410"
        },
        "folate": {
          "value": "3.1",
          "flag": "L"
        },
        "methylmalonic_acid": {
          "value": "0.18"
        },
        "reticulocytes": {
          "value": "34"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "The anemia is macrocytic.",
        "Cobalamin markers are not the driver.",
        "Low albumin can travel with poor intake or malabsorption.",
        "The reticulocyte response is not brisk."
      ],
      "panels": [
        "cbc",
        "anemia",
        "liver"
      ]
    },
    {
      "id": "folate-deficiency-classic",
      "answer": "Folate deficiency",
      "explanation": "Macrocytosis with low folate, preserved B12, and normal methylmalonic acid supports folate deficiency. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "10.1",
          "flag": "L"
        },
        "mcv": {
          "value": "109",
          "flag": "H"
        },
        "wbc": {
          "value": "3.4",
          "flag": "L"
        },
        "platelets": {
          "value": "130",
          "flag": "L"
        },
        "albumin": {
          "value": "3.2",
          "flag": "L"
        },
        "b12": {
          "value": "460"
        },
        "folate": {
          "value": "2.4",
          "flag": "L"
        },
        "methylmalonic_acid": {
          "value": "0.22"
        },
        "reticulocytes": {
          "value": "31"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "The anemia is macrocytic.",
        "Cobalamin markers are not the driver.",
        "Low albumin can travel with poor intake or malabsorption.",
        "The reticulocyte response is not brisk."
      ],
      "panels": [
        "cbc",
        "anemia",
        "liver"
      ]
    },
    {
      "id": "folate-deficiency-marked",
      "answer": "Folate deficiency",
      "explanation": "Macrocytosis with low folate, preserved B12, and normal methylmalonic acid supports folate deficiency. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "8.8",
          "flag": "L"
        },
        "mcv": {
          "value": "116",
          "flag": "H"
        },
        "wbc": {
          "value": "3.0",
          "flag": "L"
        },
        "platelets": {
          "value": "105",
          "flag": "L"
        },
        "albumin": {
          "value": "2.9",
          "flag": "L"
        },
        "b12": {
          "value": "520"
        },
        "folate": {
          "value": "1.7",
          "flag": "L"
        },
        "methylmalonic_acid": {
          "value": "0.25"
        },
        "reticulocytes": {
          "value": "27"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "The anemia is macrocytic.",
        "Cobalamin markers are not the driver.",
        "Low albumin can travel with poor intake or malabsorption.",
        "The reticulocyte response is not brisk."
      ],
      "panels": [
        "cbc",
        "anemia",
        "liver"
      ]
    },
    {
      "id": "folate-deficiency-complicated",
      "answer": "Folate deficiency",
      "explanation": "Macrocytosis with low folate, preserved B12, and normal methylmalonic acid supports folate deficiency. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "9.6",
          "flag": "L"
        },
        "mcv": {
          "value": "112",
          "flag": "H"
        },
        "wbc": {
          "value": "3.3",
          "flag": "L"
        },
        "platelets": {
          "value": "118",
          "flag": "L"
        },
        "albumin": {
          "value": "3.1",
          "flag": "L"
        },
        "b12": {
          "value": "390"
        },
        "folate": {
          "value": "2.0",
          "flag": "L"
        },
        "methylmalonic_acid": {
          "value": "0.20"
        },
        "reticulocytes": {
          "value": "30"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "The anemia is macrocytic.",
        "Cobalamin markers are not the driver.",
        "Low albumin can travel with poor intake or malabsorption.",
        "The reticulocyte response is not brisk."
      ],
      "panels": [
        "cbc",
        "anemia",
        "liver"
      ]
    },
    {
      "id": "folate-deficiency-follow-up",
      "answer": "Folate deficiency",
      "explanation": "Macrocytosis with low folate, preserved B12, and normal methylmalonic acid supports folate deficiency. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "10.6",
          "flag": "L"
        },
        "mcv": {
          "value": "105",
          "flag": "H"
        },
        "wbc": {
          "value": "3.9",
          "flag": "L"
        },
        "platelets": {
          "value": "148",
          "flag": "L"
        },
        "albumin": {
          "value": "3.4",
          "flag": "L"
        },
        "b12": {
          "value": "445"
        },
        "folate": {
          "value": "3.5",
          "flag": "L"
        },
        "methylmalonic_acid": {
          "value": "0.17"
        },
        "reticulocytes": {
          "value": "36"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "The anemia is macrocytic.",
        "Cobalamin markers are not the driver.",
        "Low albumin can travel with poor intake or malabsorption.",
        "The reticulocyte response is not brisk."
      ],
      "panels": [
        "cbc",
        "anemia",
        "liver"
      ]
    },
    {
      "id": "inflammatory-anemia-early",
      "answer": "Anemia of chronic inflammation",
      "explanation": "Normocytic or mildly microcytic anemia with high CRP, high ferritin, low transferrin, and thrombocytosis supports inflammation-driven iron restriction. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "10.4",
          "flag": "L"
        },
        "mcv": {
          "value": "84"
        },
        "wbc": {
          "value": "11.8",
          "flag": "H"
        },
        "neutrophils": {
          "value": "8.8",
          "flag": "H"
        },
        "platelets": {
          "value": "465",
          "flag": "H"
        },
        "albumin": {
          "value": "3.4",
          "flag": "L"
        },
        "crp": {
          "value": "58",
          "flag": "H"
        },
        "ferritin": {
          "value": "430",
          "flag": "H"
        },
        "iron": {
          "value": "45",
          "flag": "L"
        },
        "transferrin": {
          "value": "185",
          "flag": "L"
        },
        "transferrin_saturation": {
          "value": "16",
          "flag": "L"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "Ferritin is high instead of depleted.",
        "The iron panel points to sequestration.",
        "CRP and platelets are reactive.",
        "Albumin can fall during sustained inflammation."
      ],
      "panels": [
        "cbc",
        "anemia",
        "inflammation",
        "liver",
        "renal"
      ]
    },
    {
      "id": "inflammatory-anemia-classic",
      "answer": "Anemia of chronic inflammation",
      "explanation": "Normocytic or mildly microcytic anemia with high CRP, high ferritin, low transferrin, and thrombocytosis supports inflammation-driven iron restriction. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "9.5",
          "flag": "L"
        },
        "mcv": {
          "value": "82"
        },
        "wbc": {
          "value": "13.4",
          "flag": "H"
        },
        "neutrophils": {
          "value": "10.1",
          "flag": "H"
        },
        "platelets": {
          "value": "535",
          "flag": "H"
        },
        "albumin": {
          "value": "3.1",
          "flag": "L"
        },
        "crp": {
          "value": "94",
          "flag": "H"
        },
        "ferritin": {
          "value": "620",
          "flag": "H"
        },
        "iron": {
          "value": "34",
          "flag": "L"
        },
        "transferrin": {
          "value": "160",
          "flag": "L"
        },
        "transferrin_saturation": {
          "value": "12",
          "flag": "L"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "Ferritin is high instead of depleted.",
        "The iron panel points to sequestration.",
        "CRP and platelets are reactive.",
        "Albumin can fall during sustained inflammation."
      ],
      "panels": [
        "cbc",
        "anemia",
        "inflammation",
        "liver",
        "renal"
      ]
    },
    {
      "id": "inflammatory-anemia-marked",
      "answer": "Anemia of chronic inflammation",
      "explanation": "Normocytic or mildly microcytic anemia with high CRP, high ferritin, low transferrin, and thrombocytosis supports inflammation-driven iron restriction. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "8.7",
          "flag": "L"
        },
        "mcv": {
          "value": "80"
        },
        "wbc": {
          "value": "15.0",
          "flag": "H"
        },
        "neutrophils": {
          "value": "12.2",
          "flag": "H"
        },
        "platelets": {
          "value": "610",
          "flag": "H"
        },
        "albumin": {
          "value": "2.8",
          "flag": "L"
        },
        "crp": {
          "value": "142",
          "flag": "H"
        },
        "ferritin": {
          "value": "880",
          "flag": "H"
        },
        "iron": {
          "value": "25",
          "flag": "L"
        },
        "transferrin": {
          "value": "140",
          "flag": "L"
        },
        "transferrin_saturation": {
          "value": "9",
          "flag": "L"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "Ferritin is high instead of depleted.",
        "The iron panel points to sequestration.",
        "CRP and platelets are reactive.",
        "Albumin can fall during sustained inflammation."
      ],
      "panels": [
        "cbc",
        "anemia",
        "inflammation",
        "liver",
        "renal"
      ]
    },
    {
      "id": "inflammatory-anemia-complicated",
      "answer": "Anemia of chronic inflammation",
      "explanation": "Normocytic or mildly microcytic anemia with high CRP, high ferritin, low transferrin, and thrombocytosis supports inflammation-driven iron restriction. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "9.1",
          "flag": "L"
        },
        "mcv": {
          "value": "83"
        },
        "wbc": {
          "value": "12.6",
          "flag": "H"
        },
        "neutrophils": {
          "value": "9.6",
          "flag": "H"
        },
        "platelets": {
          "value": "505",
          "flag": "H"
        },
        "albumin": {
          "value": "3.0",
          "flag": "L"
        },
        "crp": {
          "value": "76",
          "flag": "H"
        },
        "ferritin": {
          "value": "510",
          "flag": "H"
        },
        "iron": {
          "value": "38",
          "flag": "L"
        },
        "transferrin": {
          "value": "170",
          "flag": "L"
        },
        "transferrin_saturation": {
          "value": "14",
          "flag": "L"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "Ferritin is high instead of depleted.",
        "The iron panel points to sequestration.",
        "CRP and platelets are reactive.",
        "Albumin can fall during sustained inflammation."
      ],
      "panels": [
        "cbc",
        "anemia",
        "inflammation",
        "liver",
        "renal"
      ]
    },
    {
      "id": "inflammatory-anemia-follow-up",
      "answer": "Anemia of chronic inflammation",
      "explanation": "Normocytic or mildly microcytic anemia with high CRP, high ferritin, low transferrin, and thrombocytosis supports inflammation-driven iron restriction. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "10.0",
          "flag": "L"
        },
        "mcv": {
          "value": "85"
        },
        "wbc": {
          "value": "10.9",
          "flag": "H"
        },
        "neutrophils": {
          "value": "8.0",
          "flag": "H"
        },
        "platelets": {
          "value": "455",
          "flag": "H"
        },
        "albumin": {
          "value": "3.3",
          "flag": "L"
        },
        "crp": {
          "value": "45",
          "flag": "H"
        },
        "ferritin": {
          "value": "360",
          "flag": "H"
        },
        "iron": {
          "value": "48",
          "flag": "L"
        },
        "transferrin": {
          "value": "195",
          "flag": "L"
        },
        "transferrin_saturation": {
          "value": "18",
          "flag": "L"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "Ferritin is high instead of depleted.",
        "The iron panel points to sequestration.",
        "CRP and platelets are reactive.",
        "Albumin can fall during sustained inflammation."
      ],
      "panels": [
        "cbc",
        "anemia",
        "inflammation",
        "liver",
        "renal"
      ]
    },
    {
      "id": "ckd-related-anemia-early",
      "answer": "CKD-related anemia",
      "explanation": "Normocytic anemia with reduced eGFR, high creatinine, acidosis, and albuminuria supports kidney disease as the anemia driver. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "10.1",
          "flag": "L"
        },
        "mcv": {
          "value": "88"
        },
        "bun": {
          "value": "38",
          "flag": "H"
        },
        "creatinine": {
          "value": "2.1",
          "flag": "H"
        },
        "egfr": {
          "value": "34",
          "flag": "L"
        },
        "potassium": {
          "value": "5.1",
          "flag": "H"
        },
        "bicarbonate": {
          "value": "20",
          "flag": "L"
        },
        "ferritin": {
          "value": "140"
        },
        "urine_acr": {
          "value": "42",
          "flag": "H"
        },
        "urine_pcr": {
          "value": "80",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "The iron stores are not severely depleted.",
        "Reduced kidney function is prominent.",
        "Bicarbonate and potassium show chronic renal stress.",
        "Albuminuria supports chronic kidney involvement."
      ],
      "panels": [
        "cbc",
        "anemia",
        "renal",
        "urine"
      ]
    },
    {
      "id": "ckd-related-anemia-classic",
      "answer": "CKD-related anemia",
      "explanation": "Normocytic anemia with reduced eGFR, high creatinine, acidosis, and albuminuria supports kidney disease as the anemia driver. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "9.0",
          "flag": "L"
        },
        "mcv": {
          "value": "90"
        },
        "bun": {
          "value": "54",
          "flag": "H"
        },
        "creatinine": {
          "value": "3.4",
          "flag": "H"
        },
        "egfr": {
          "value": "20",
          "flag": "L"
        },
        "potassium": {
          "value": "5.4",
          "flag": "H"
        },
        "bicarbonate": {
          "value": "18",
          "flag": "L"
        },
        "ferritin": {
          "value": "180"
        },
        "urine_acr": {
          "value": "95",
          "flag": "H"
        },
        "urine_pcr": {
          "value": "160",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "The iron stores are not severely depleted.",
        "Reduced kidney function is prominent.",
        "Bicarbonate and potassium show chronic renal stress.",
        "Albuminuria supports chronic kidney involvement."
      ],
      "panels": [
        "cbc",
        "anemia",
        "renal",
        "urine"
      ]
    },
    {
      "id": "ckd-related-anemia-marked",
      "answer": "CKD-related anemia",
      "explanation": "Normocytic anemia with reduced eGFR, high creatinine, acidosis, and albuminuria supports kidney disease as the anemia driver. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "8.2",
          "flag": "L"
        },
        "mcv": {
          "value": "91"
        },
        "bun": {
          "value": "72",
          "flag": "H"
        },
        "creatinine": {
          "value": "4.8",
          "flag": "H"
        },
        "egfr": {
          "value": "12",
          "flag": "L"
        },
        "potassium": {
          "value": "5.8",
          "flag": "H"
        },
        "bicarbonate": {
          "value": "16",
          "flag": "L"
        },
        "ferritin": {
          "value": "220"
        },
        "urine_acr": {
          "value": "180",
          "flag": "H"
        },
        "urine_pcr": {
          "value": "280",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "The iron stores are not severely depleted.",
        "Reduced kidney function is prominent.",
        "Bicarbonate and potassium show chronic renal stress.",
        "Albuminuria supports chronic kidney involvement."
      ],
      "panels": [
        "cbc",
        "anemia",
        "renal",
        "urine"
      ]
    },
    {
      "id": "ckd-related-anemia-complicated",
      "answer": "CKD-related anemia",
      "explanation": "Normocytic anemia with reduced eGFR, high creatinine, acidosis, and albuminuria supports kidney disease as the anemia driver. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "8.8",
          "flag": "L"
        },
        "mcv": {
          "value": "89"
        },
        "bun": {
          "value": "60",
          "flag": "H"
        },
        "creatinine": {
          "value": "3.8",
          "flag": "H"
        },
        "egfr": {
          "value": "18",
          "flag": "L"
        },
        "potassium": {
          "value": "5.5",
          "flag": "H"
        },
        "bicarbonate": {
          "value": "17",
          "flag": "L"
        },
        "ferritin": {
          "value": "165"
        },
        "urine_acr": {
          "value": "125",
          "flag": "H"
        },
        "urine_pcr": {
          "value": "210",
          "flag": "H"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "The iron stores are not severely depleted.",
        "Reduced kidney function is prominent.",
        "Bicarbonate and potassium show chronic renal stress.",
        "Albuminuria supports chronic kidney involvement."
      ],
      "panels": [
        "cbc",
        "anemia",
        "renal",
        "urine"
      ]
    },
    {
      "id": "ckd-related-anemia-follow-up",
      "answer": "CKD-related anemia",
      "explanation": "Normocytic anemia with reduced eGFR, high creatinine, acidosis, and albuminuria supports kidney disease as the anemia driver. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "9.6",
          "flag": "L"
        },
        "mcv": {
          "value": "87"
        },
        "bun": {
          "value": "44",
          "flag": "H"
        },
        "creatinine": {
          "value": "2.6",
          "flag": "H"
        },
        "egfr": {
          "value": "28",
          "flag": "L"
        },
        "potassium": {
          "value": "5.2",
          "flag": "H"
        },
        "bicarbonate": {
          "value": "19",
          "flag": "L"
        },
        "ferritin": {
          "value": "130"
        },
        "urine_acr": {
          "value": "68",
          "flag": "H"
        },
        "urine_pcr": {
          "value": "120",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "The iron stores are not severely depleted.",
        "Reduced kidney function is prominent.",
        "Bicarbonate and potassium show chronic renal stress.",
        "Albuminuria supports chronic kidney involvement."
      ],
      "panels": [
        "cbc",
        "anemia",
        "renal",
        "urine"
      ]
    },
    {
      "id": "thalassemia-trait-pattern-early",
      "answer": "Thalassemia trait pattern",
      "explanation": "Marked microcytosis with preserved iron stores and only mild anemia supports a thalassemia trait pattern. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "11.6",
          "flag": "L"
        },
        "mcv": {
          "value": "68",
          "flag": "L"
        },
        "wbc": {
          "value": "6.0"
        },
        "platelets": {
          "value": "250"
        },
        "ferritin": {
          "value": "95"
        },
        "iron": {
          "value": "96"
        },
        "transferrin_saturation": {
          "value": "31"
        },
        "reticulocytes": {
          "value": "60"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "The MCV is disproportionately low for the hemoglobin.",
        "Iron stores and transferrin saturation are preserved.",
        "Inflammation is not needed to explain the pattern.",
        "The CBC is otherwise fairly stable."
      ],
      "panels": [
        "cbc",
        "anemia"
      ]
    },
    {
      "id": "thalassemia-trait-pattern-classic",
      "answer": "Thalassemia trait pattern",
      "explanation": "Marked microcytosis with preserved iron stores and only mild anemia supports a thalassemia trait pattern. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "10.9",
          "flag": "L"
        },
        "mcv": {
          "value": "64",
          "flag": "L"
        },
        "wbc": {
          "value": "7.1"
        },
        "platelets": {
          "value": "285"
        },
        "ferritin": {
          "value": "120"
        },
        "iron": {
          "value": "112"
        },
        "transferrin_saturation": {
          "value": "35"
        },
        "reticulocytes": {
          "value": "68"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "The MCV is disproportionately low for the hemoglobin.",
        "Iron stores and transferrin saturation are preserved.",
        "Inflammation is not needed to explain the pattern.",
        "The CBC is otherwise fairly stable."
      ],
      "panels": [
        "cbc",
        "anemia"
      ]
    },
    {
      "id": "thalassemia-trait-pattern-marked",
      "answer": "Thalassemia trait pattern",
      "explanation": "Marked microcytosis with preserved iron stores and only mild anemia supports a thalassemia trait pattern. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "10.2",
          "flag": "L"
        },
        "mcv": {
          "value": "60",
          "flag": "L"
        },
        "wbc": {
          "value": "5.8"
        },
        "platelets": {
          "value": "310"
        },
        "ferritin": {
          "value": "150"
        },
        "iron": {
          "value": "128"
        },
        "transferrin_saturation": {
          "value": "38"
        },
        "reticulocytes": {
          "value": "72"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "The MCV is disproportionately low for the hemoglobin.",
        "Iron stores and transferrin saturation are preserved.",
        "Inflammation is not needed to explain the pattern.",
        "The CBC is otherwise fairly stable."
      ],
      "panels": [
        "cbc",
        "anemia"
      ]
    },
    {
      "id": "thalassemia-trait-pattern-complicated",
      "answer": "Thalassemia trait pattern",
      "explanation": "Marked microcytosis with preserved iron stores and only mild anemia supports a thalassemia trait pattern. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "11.2",
          "flag": "L"
        },
        "mcv": {
          "value": "66",
          "flag": "L"
        },
        "wbc": {
          "value": "6.5"
        },
        "platelets": {
          "value": "270"
        },
        "ferritin": {
          "value": "105"
        },
        "iron": {
          "value": "104"
        },
        "transferrin_saturation": {
          "value": "33"
        },
        "reticulocytes": {
          "value": "64"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "The MCV is disproportionately low for the hemoglobin.",
        "Iron stores and transferrin saturation are preserved.",
        "Inflammation is not needed to explain the pattern.",
        "The CBC is otherwise fairly stable."
      ],
      "panels": [
        "cbc",
        "anemia"
      ]
    },
    {
      "id": "thalassemia-trait-pattern-follow-up",
      "answer": "Thalassemia trait pattern",
      "explanation": "Marked microcytosis with preserved iron stores and only mild anemia supports a thalassemia trait pattern. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "11.8",
          "flag": "L"
        },
        "mcv": {
          "value": "70",
          "flag": "L"
        },
        "wbc": {
          "value": "6.3"
        },
        "platelets": {
          "value": "240"
        },
        "ferritin": {
          "value": "88"
        },
        "iron": {
          "value": "90"
        },
        "transferrin_saturation": {
          "value": "29"
        },
        "reticulocytes": {
          "value": "58"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "The MCV is disproportionately low for the hemoglobin.",
        "Iron stores and transferrin saturation are preserved.",
        "Inflammation is not needed to explain the pattern.",
        "The CBC is otherwise fairly stable."
      ],
      "panels": [
        "cbc",
        "anemia"
      ]
    },
    {
      "id": "hemolytic-anemia-early",
      "answer": "Hemolytic anemia",
      "explanation": "Anemia with reticulocytosis, high LDH, and predominantly indirect bilirubin supports hemolysis. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "10.0",
          "flag": "L"
        },
        "mcv": {
          "value": "92"
        },
        "reticulocytes": {
          "value": "145",
          "flag": "H"
        },
        "bilirubin": {
          "value": "1.8",
          "flag": "H"
        },
        "bilirubin_direct": {
          "value": "0.2"
        },
        "ldh": {
          "value": "420",
          "flag": "H"
        },
        "platelets": {
          "value": "240"
        },
        "ferritin": {
          "value": "120"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "The marrow response is brisk.",
        "LDH is high out of proportion to liver enzymes.",
        "Bilirubin is elevated with little conjugated fraction.",
        "Iron stores are not the limiting problem."
      ],
      "panels": [
        "cbc",
        "anemia",
        "liver"
      ]
    },
    {
      "id": "hemolytic-anemia-classic",
      "answer": "Hemolytic anemia",
      "explanation": "Anemia with reticulocytosis, high LDH, and predominantly indirect bilirubin supports hemolysis. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "8.8",
          "flag": "L"
        },
        "mcv": {
          "value": "94"
        },
        "reticulocytes": {
          "value": "210",
          "flag": "H"
        },
        "bilirubin": {
          "value": "2.6",
          "flag": "H"
        },
        "bilirubin_direct": {
          "value": "0.3"
        },
        "ldh": {
          "value": "680",
          "flag": "H"
        },
        "platelets": {
          "value": "225"
        },
        "ferritin": {
          "value": "155"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "The marrow response is brisk.",
        "LDH is high out of proportion to liver enzymes.",
        "Bilirubin is elevated with little conjugated fraction.",
        "Iron stores are not the limiting problem."
      ],
      "panels": [
        "cbc",
        "anemia",
        "liver"
      ]
    },
    {
      "id": "hemolytic-anemia-marked",
      "answer": "Hemolytic anemia",
      "explanation": "Anemia with reticulocytosis, high LDH, and predominantly indirect bilirubin supports hemolysis. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "7.4",
          "flag": "L"
        },
        "mcv": {
          "value": "97"
        },
        "reticulocytes": {
          "value": "320",
          "flag": "H"
        },
        "bilirubin": {
          "value": "3.8",
          "flag": "H"
        },
        "bilirubin_direct": {
          "value": "0.3"
        },
        "ldh": {
          "value": "980",
          "flag": "H"
        },
        "platelets": {
          "value": "205"
        },
        "ferritin": {
          "value": "180"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "The marrow response is brisk.",
        "LDH is high out of proportion to liver enzymes.",
        "Bilirubin is elevated with little conjugated fraction.",
        "Iron stores are not the limiting problem."
      ],
      "panels": [
        "cbc",
        "anemia",
        "liver"
      ]
    },
    {
      "id": "hemolytic-anemia-complicated",
      "answer": "Hemolytic anemia",
      "explanation": "Anemia with reticulocytosis, high LDH, and predominantly indirect bilirubin supports hemolysis. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "9.2",
          "flag": "L"
        },
        "mcv": {
          "value": "95"
        },
        "reticulocytes": {
          "value": "260",
          "flag": "H"
        },
        "bilirubin": {
          "value": "3.0",
          "flag": "H"
        },
        "bilirubin_direct": {
          "value": "0.2"
        },
        "ldh": {
          "value": "760",
          "flag": "H"
        },
        "platelets": {
          "value": "230"
        },
        "ferritin": {
          "value": "140"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "The marrow response is brisk.",
        "LDH is high out of proportion to liver enzymes.",
        "Bilirubin is elevated with little conjugated fraction.",
        "Iron stores are not the limiting problem."
      ],
      "panels": [
        "cbc",
        "anemia",
        "liver"
      ]
    },
    {
      "id": "hemolytic-anemia-follow-up",
      "answer": "Hemolytic anemia",
      "explanation": "Anemia with reticulocytosis, high LDH, and predominantly indirect bilirubin supports hemolysis. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "10.6",
          "flag": "L"
        },
        "mcv": {
          "value": "91"
        },
        "reticulocytes": {
          "value": "160",
          "flag": "H"
        },
        "bilirubin": {
          "value": "1.6",
          "flag": "H"
        },
        "bilirubin_direct": {
          "value": "0.2"
        },
        "ldh": {
          "value": "510",
          "flag": "H"
        },
        "platelets": {
          "value": "255"
        },
        "ferritin": {
          "value": "110"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "The marrow response is brisk.",
        "LDH is high out of proportion to liver enzymes.",
        "Bilirubin is elevated with little conjugated fraction.",
        "Iron stores are not the limiting problem."
      ],
      "panels": [
        "cbc",
        "anemia",
        "liver"
      ]
    },
    {
      "id": "aplastic-marrow-failure-early",
      "answer": "Aplastic marrow failure",
      "explanation": "Pancytopenia with very low reticulocytes and no circulating blasts supports marrow failure rather than peripheral destruction. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "9.5",
          "flag": "L"
        },
        "mcv": {
          "value": "92"
        },
        "wbc": {
          "value": "2.8",
          "flag": "L"
        },
        "neutrophils": {
          "value": "0.9",
          "flag": "L"
        },
        "platelets": {
          "value": "82",
          "flag": "L"
        },
        "reticulocytes": {
          "value": "18",
          "flag": "L"
        },
        "blasts": {
          "value": "0"
        },
        "ldh": {
          "value": "190"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "All three major cell lines are low.",
        "The reticulocyte count is inappropriately low.",
        "Blasts are absent in the peripheral sample.",
        "The pattern is production failure rather than hemolysis."
      ],
      "panels": [
        "cbc",
        "anemia",
        "hemeMalignancy"
      ]
    },
    {
      "id": "aplastic-marrow-failure-classic",
      "answer": "Aplastic marrow failure",
      "explanation": "Pancytopenia with very low reticulocytes and no circulating blasts supports marrow failure rather than peripheral destruction. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "8.1",
          "flag": "L"
        },
        "mcv": {
          "value": "94"
        },
        "wbc": {
          "value": "2.1",
          "flag": "L"
        },
        "neutrophils": {
          "value": "0.5",
          "flag": "L"
        },
        "platelets": {
          "value": "48",
          "flag": "L"
        },
        "reticulocytes": {
          "value": "12",
          "flag": "L"
        },
        "blasts": {
          "value": "0"
        },
        "ldh": {
          "value": "210"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "All three major cell lines are low.",
        "The reticulocyte count is inappropriately low.",
        "Blasts are absent in the peripheral sample.",
        "The pattern is production failure rather than hemolysis."
      ],
      "panels": [
        "cbc",
        "anemia",
        "hemeMalignancy"
      ]
    },
    {
      "id": "aplastic-marrow-failure-marked",
      "answer": "Aplastic marrow failure",
      "explanation": "Pancytopenia with very low reticulocytes and no circulating blasts supports marrow failure rather than peripheral destruction. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "6.9",
          "flag": "L"
        },
        "mcv": {
          "value": "96"
        },
        "wbc": {
          "value": "1.4",
          "flag": "L"
        },
        "neutrophils": {
          "value": "0.2",
          "flag": "L"
        },
        "platelets": {
          "value": "18",
          "flag": "L"
        },
        "reticulocytes": {
          "value": "6",
          "flag": "L"
        },
        "blasts": {
          "value": "0"
        },
        "ldh": {
          "value": "230"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "All three major cell lines are low.",
        "The reticulocyte count is inappropriately low.",
        "Blasts are absent in the peripheral sample.",
        "The pattern is production failure rather than hemolysis."
      ],
      "panels": [
        "cbc",
        "anemia",
        "hemeMalignancy"
      ]
    },
    {
      "id": "aplastic-marrow-failure-complicated",
      "answer": "Aplastic marrow failure",
      "explanation": "Pancytopenia with very low reticulocytes and no circulating blasts supports marrow failure rather than peripheral destruction. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "7.6",
          "flag": "L"
        },
        "mcv": {
          "value": "95"
        },
        "wbc": {
          "value": "1.8",
          "flag": "L"
        },
        "neutrophils": {
          "value": "0.4",
          "flag": "L"
        },
        "platelets": {
          "value": "34",
          "flag": "L"
        },
        "reticulocytes": {
          "value": "10",
          "flag": "L"
        },
        "blasts": {
          "value": "0"
        },
        "ldh": {
          "value": "205"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "All three major cell lines are low.",
        "The reticulocyte count is inappropriately low.",
        "Blasts are absent in the peripheral sample.",
        "The pattern is production failure rather than hemolysis."
      ],
      "panels": [
        "cbc",
        "anemia",
        "hemeMalignancy"
      ]
    },
    {
      "id": "aplastic-marrow-failure-follow-up",
      "answer": "Aplastic marrow failure",
      "explanation": "Pancytopenia with very low reticulocytes and no circulating blasts supports marrow failure rather than peripheral destruction. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "10.0",
          "flag": "L"
        },
        "mcv": {
          "value": "91"
        },
        "wbc": {
          "value": "3.1",
          "flag": "L"
        },
        "neutrophils": {
          "value": "1.0",
          "flag": "L"
        },
        "platelets": {
          "value": "96",
          "flag": "L"
        },
        "reticulocytes": {
          "value": "20",
          "flag": "L"
        },
        "blasts": {
          "value": "0"
        },
        "ldh": {
          "value": "180"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "All three major cell lines are low.",
        "The reticulocyte count is inappropriately low.",
        "Blasts are absent in the peripheral sample.",
        "The pattern is production failure rather than hemolysis."
      ],
      "panels": [
        "cbc",
        "anemia",
        "hemeMalignancy"
      ]
    },
    {
      "id": "acute-blood-loss-anemia-early",
      "answer": "Acute blood loss anemia",
      "explanation": "A normocytic anemia with stress leukocytosis, reactive thrombocytosis, and a reticulocyte response supports recent blood loss. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "10.3",
          "flag": "L"
        },
        "mcv": {
          "value": "88"
        },
        "wbc": {
          "value": "11.2",
          "flag": "H"
        },
        "platelets": {
          "value": "430",
          "flag": "H"
        },
        "reticulocytes": {
          "value": "115",
          "flag": "H"
        },
        "ferritin": {
          "value": "82"
        },
        "iron": {
          "value": "86"
        },
        "bun": {
          "value": "24",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "The MCV has not had time to become microcytic.",
        "Iron stores are not yet depleted.",
        "The reticulocyte response is active.",
        "The pattern differs from chronic iron deficiency."
      ],
      "panels": [
        "cbc",
        "anemia",
        "renal"
      ]
    },
    {
      "id": "acute-blood-loss-anemia-classic",
      "answer": "Acute blood loss anemia",
      "explanation": "A normocytic anemia with stress leukocytosis, reactive thrombocytosis, and a reticulocyte response supports recent blood loss. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "8.9",
          "flag": "L"
        },
        "mcv": {
          "value": "89"
        },
        "wbc": {
          "value": "12.8",
          "flag": "H"
        },
        "platelets": {
          "value": "470",
          "flag": "H"
        },
        "reticulocytes": {
          "value": "160",
          "flag": "H"
        },
        "ferritin": {
          "value": "95"
        },
        "iron": {
          "value": "100"
        },
        "bun": {
          "value": "32",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "The MCV has not had time to become microcytic.",
        "Iron stores are not yet depleted.",
        "The reticulocyte response is active.",
        "The pattern differs from chronic iron deficiency."
      ],
      "panels": [
        "cbc",
        "anemia",
        "renal"
      ]
    },
    {
      "id": "acute-blood-loss-anemia-marked",
      "answer": "Acute blood loss anemia",
      "explanation": "A normocytic anemia with stress leukocytosis, reactive thrombocytosis, and a reticulocyte response supports recent blood loss. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "7.2",
          "flag": "L"
        },
        "mcv": {
          "value": "90"
        },
        "wbc": {
          "value": "15.5",
          "flag": "H"
        },
        "platelets": {
          "value": "520",
          "flag": "H"
        },
        "reticulocytes": {
          "value": "230",
          "flag": "H"
        },
        "ferritin": {
          "value": "120"
        },
        "iron": {
          "value": "118"
        },
        "bun": {
          "value": "44",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "The MCV has not had time to become microcytic.",
        "Iron stores are not yet depleted.",
        "The reticulocyte response is active.",
        "The pattern differs from chronic iron deficiency."
      ],
      "panels": [
        "cbc",
        "anemia",
        "renal"
      ]
    },
    {
      "id": "acute-blood-loss-anemia-complicated",
      "answer": "Acute blood loss anemia",
      "explanation": "A normocytic anemia with stress leukocytosis, reactive thrombocytosis, and a reticulocyte response supports recent blood loss. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "8.0",
          "flag": "L"
        },
        "mcv": {
          "value": "87"
        },
        "wbc": {
          "value": "13.4",
          "flag": "H"
        },
        "platelets": {
          "value": "485",
          "flag": "H"
        },
        "reticulocytes": {
          "value": "190",
          "flag": "H"
        },
        "ferritin": {
          "value": "100"
        },
        "iron": {
          "value": "92"
        },
        "bun": {
          "value": "36",
          "flag": "H"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "The MCV has not had time to become microcytic.",
        "Iron stores are not yet depleted.",
        "The reticulocyte response is active.",
        "The pattern differs from chronic iron deficiency."
      ],
      "panels": [
        "cbc",
        "anemia",
        "renal"
      ]
    },
    {
      "id": "acute-blood-loss-anemia-follow-up",
      "answer": "Acute blood loss anemia",
      "explanation": "A normocytic anemia with stress leukocytosis, reactive thrombocytosis, and a reticulocyte response supports recent blood loss. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "9.8",
          "flag": "L"
        },
        "mcv": {
          "value": "88"
        },
        "wbc": {
          "value": "10.8",
          "flag": "H"
        },
        "platelets": {
          "value": "455",
          "flag": "H"
        },
        "reticulocytes": {
          "value": "125",
          "flag": "H"
        },
        "ferritin": {
          "value": "88"
        },
        "iron": {
          "value": "90"
        },
        "bun": {
          "value": "26",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "The MCV has not had time to become microcytic.",
        "Iron stores are not yet depleted.",
        "The reticulocyte response is active.",
        "The pattern differs from chronic iron deficiency."
      ],
      "panels": [
        "cbc",
        "anemia",
        "renal"
      ]
    },
    {
      "id": "sideroblastic-iron-loading-anemia-early",
      "answer": "Sideroblastic iron-loading anemia",
      "explanation": "Microcytic or dimorphic anemia with iron overload markers supports a sideroblastic iron-loading pattern. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "10.2",
          "flag": "L"
        },
        "mcv": {
          "value": "77",
          "flag": "L"
        },
        "ferritin": {
          "value": "520",
          "flag": "H"
        },
        "iron": {
          "value": "190",
          "flag": "H"
        },
        "transferrin": {
          "value": "185",
          "flag": "L"
        },
        "transferrin_saturation": {
          "value": "58",
          "flag": "H"
        },
        "reticulocytes": {
          "value": "36"
        },
        "ast": {
          "value": "52",
          "flag": "H"
        },
        "alt": {
          "value": "58",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "Ferritin and serum iron are high rather than low.",
        "Transferrin saturation is elevated.",
        "The reticulocyte response is not appropriately high.",
        "Mild liver enzyme elevation can accompany iron loading."
      ],
      "panels": [
        "cbc",
        "anemia",
        "liver"
      ]
    },
    {
      "id": "sideroblastic-iron-loading-anemia-classic",
      "answer": "Sideroblastic iron-loading anemia",
      "explanation": "Microcytic or dimorphic anemia with iron overload markers supports a sideroblastic iron-loading pattern. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "9.4",
          "flag": "L"
        },
        "mcv": {
          "value": "73",
          "flag": "L"
        },
        "ferritin": {
          "value": "760",
          "flag": "H"
        },
        "iron": {
          "value": "225",
          "flag": "H"
        },
        "transferrin": {
          "value": "165",
          "flag": "L"
        },
        "transferrin_saturation": {
          "value": "68",
          "flag": "H"
        },
        "reticulocytes": {
          "value": "30"
        },
        "ast": {
          "value": "68",
          "flag": "H"
        },
        "alt": {
          "value": "72",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "Ferritin and serum iron are high rather than low.",
        "Transferrin saturation is elevated.",
        "The reticulocyte response is not appropriately high.",
        "Mild liver enzyme elevation can accompany iron loading."
      ],
      "panels": [
        "cbc",
        "anemia",
        "liver"
      ]
    },
    {
      "id": "sideroblastic-iron-loading-anemia-marked",
      "answer": "Sideroblastic iron-loading anemia",
      "explanation": "Microcytic or dimorphic anemia with iron overload markers supports a sideroblastic iron-loading pattern. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "8.1",
          "flag": "L"
        },
        "mcv": {
          "value": "70",
          "flag": "L"
        },
        "ferritin": {
          "value": "1100",
          "flag": "H"
        },
        "iron": {
          "value": "260",
          "flag": "H"
        },
        "transferrin": {
          "value": "145",
          "flag": "L"
        },
        "transferrin_saturation": {
          "value": "78",
          "flag": "H"
        },
        "reticulocytes": {
          "value": "24"
        },
        "ast": {
          "value": "86",
          "flag": "H"
        },
        "alt": {
          "value": "94",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "Ferritin and serum iron are high rather than low.",
        "Transferrin saturation is elevated.",
        "The reticulocyte response is not appropriately high.",
        "Mild liver enzyme elevation can accompany iron loading."
      ],
      "panels": [
        "cbc",
        "anemia",
        "liver"
      ]
    },
    {
      "id": "sideroblastic-iron-loading-anemia-complicated",
      "answer": "Sideroblastic iron-loading anemia",
      "explanation": "Microcytic or dimorphic anemia with iron overload markers supports a sideroblastic iron-loading pattern. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "8.8",
          "flag": "L"
        },
        "mcv": {
          "value": "75",
          "flag": "L"
        },
        "ferritin": {
          "value": "880",
          "flag": "H"
        },
        "iron": {
          "value": "240",
          "flag": "H"
        },
        "transferrin": {
          "value": "170",
          "flag": "L"
        },
        "transferrin_saturation": {
          "value": "72",
          "flag": "H"
        },
        "reticulocytes": {
          "value": "28"
        },
        "ast": {
          "value": "74",
          "flag": "H"
        },
        "alt": {
          "value": "80",
          "flag": "H"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "Ferritin and serum iron are high rather than low.",
        "Transferrin saturation is elevated.",
        "The reticulocyte response is not appropriately high.",
        "Mild liver enzyme elevation can accompany iron loading."
      ],
      "panels": [
        "cbc",
        "anemia",
        "liver"
      ]
    },
    {
      "id": "sideroblastic-iron-loading-anemia-follow-up",
      "answer": "Sideroblastic iron-loading anemia",
      "explanation": "Microcytic or dimorphic anemia with iron overload markers supports a sideroblastic iron-loading pattern. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "10.6",
          "flag": "L"
        },
        "mcv": {
          "value": "79",
          "flag": "L"
        },
        "ferritin": {
          "value": "460",
          "flag": "H"
        },
        "iron": {
          "value": "180",
          "flag": "H"
        },
        "transferrin": {
          "value": "190",
          "flag": "L"
        },
        "transferrin_saturation": {
          "value": "55",
          "flag": "H"
        },
        "reticulocytes": {
          "value": "40"
        },
        "ast": {
          "value": "48",
          "flag": "H"
        },
        "alt": {
          "value": "50",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "Ferritin and serum iron are high rather than low.",
        "Transferrin saturation is elevated.",
        "The reticulocyte response is not appropriately high.",
        "Mild liver enzyme elevation can accompany iron loading."
      ],
      "panels": [
        "cbc",
        "anemia",
        "liver"
      ]
    },
    {
      "id": "mixed-iron-b12-deficiency-early",
      "answer": "Mixed iron and B12 deficiency",
      "explanation": "A near-normal or high-normal MCV can mask combined microcytic iron deficiency and macrocytic B12 deficiency. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "10.0",
          "flag": "L"
        },
        "mcv": {
          "value": "91"
        },
        "wbc": {
          "value": "3.8",
          "flag": "L"
        },
        "platelets": {
          "value": "205"
        },
        "ferritin": {
          "value": "18",
          "flag": "L"
        },
        "iron": {
          "value": "40",
          "flag": "L"
        },
        "transferrin_saturation": {
          "value": "10",
          "flag": "L"
        },
        "b12": {
          "value": "180",
          "flag": "L"
        },
        "methylmalonic_acid": {
          "value": "0.58",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "The MCV is less helpful because two processes pull in opposite directions.",
        "Iron stores are low.",
        "B12 markers are also abnormal.",
        "More than one deficiency is needed to explain the full panel."
      ],
      "panels": [
        "cbc",
        "anemia",
        "liver"
      ]
    },
    {
      "id": "mixed-iron-b12-deficiency-classic",
      "answer": "Mixed iron and B12 deficiency",
      "explanation": "A near-normal or high-normal MCV can mask combined microcytic iron deficiency and macrocytic B12 deficiency. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "8.8",
          "flag": "L"
        },
        "mcv": {
          "value": "96"
        },
        "wbc": {
          "value": "3.2",
          "flag": "L"
        },
        "platelets": {
          "value": "185"
        },
        "ferritin": {
          "value": "11",
          "flag": "L"
        },
        "iron": {
          "value": "28",
          "flag": "L"
        },
        "transferrin_saturation": {
          "value": "7",
          "flag": "L"
        },
        "b12": {
          "value": "120",
          "flag": "L"
        },
        "methylmalonic_acid": {
          "value": "0.95",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "The MCV is less helpful because two processes pull in opposite directions.",
        "Iron stores are low.",
        "B12 markers are also abnormal.",
        "More than one deficiency is needed to explain the full panel."
      ],
      "panels": [
        "cbc",
        "anemia",
        "liver"
      ]
    },
    {
      "id": "mixed-iron-b12-deficiency-marked",
      "answer": "Mixed iron and B12 deficiency",
      "explanation": "A near-normal or high-normal MCV can mask combined microcytic iron deficiency and macrocytic B12 deficiency. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "7.5",
          "flag": "L"
        },
        "mcv": {
          "value": "101"
        },
        "wbc": {
          "value": "2.7",
          "flag": "L"
        },
        "platelets": {
          "value": "160"
        },
        "ferritin": {
          "value": "7",
          "flag": "L"
        },
        "iron": {
          "value": "20",
          "flag": "L"
        },
        "transferrin_saturation": {
          "value": "5",
          "flag": "L"
        },
        "b12": {
          "value": "80",
          "flag": "L"
        },
        "methylmalonic_acid": {
          "value": "1.40",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "The MCV is less helpful because two processes pull in opposite directions.",
        "Iron stores are low.",
        "B12 markers are also abnormal.",
        "More than one deficiency is needed to explain the full panel."
      ],
      "panels": [
        "cbc",
        "anemia",
        "liver"
      ]
    },
    {
      "id": "mixed-iron-b12-deficiency-complicated",
      "answer": "Mixed iron and B12 deficiency",
      "explanation": "A near-normal or high-normal MCV can mask combined microcytic iron deficiency and macrocytic B12 deficiency. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "9.2",
          "flag": "L"
        },
        "mcv": {
          "value": "94"
        },
        "wbc": {
          "value": "3.4",
          "flag": "L"
        },
        "platelets": {
          "value": "190"
        },
        "ferritin": {
          "value": "14",
          "flag": "L"
        },
        "iron": {
          "value": "34",
          "flag": "L"
        },
        "transferrin_saturation": {
          "value": "9",
          "flag": "L"
        },
        "b12": {
          "value": "145",
          "flag": "L"
        },
        "methylmalonic_acid": {
          "value": "0.82",
          "flag": "H"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "The MCV is less helpful because two processes pull in opposite directions.",
        "Iron stores are low.",
        "B12 markers are also abnormal.",
        "More than one deficiency is needed to explain the full panel."
      ],
      "panels": [
        "cbc",
        "anemia",
        "liver"
      ]
    },
    {
      "id": "mixed-iron-b12-deficiency-follow-up",
      "answer": "Mixed iron and B12 deficiency",
      "explanation": "A near-normal or high-normal MCV can mask combined microcytic iron deficiency and macrocytic B12 deficiency. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "10.4",
          "flag": "L"
        },
        "mcv": {
          "value": "89"
        },
        "wbc": {
          "value": "3.9",
          "flag": "L"
        },
        "platelets": {
          "value": "220"
        },
        "ferritin": {
          "value": "20",
          "flag": "L"
        },
        "iron": {
          "value": "44",
          "flag": "L"
        },
        "transferrin_saturation": {
          "value": "11",
          "flag": "L"
        },
        "b12": {
          "value": "190",
          "flag": "L"
        },
        "methylmalonic_acid": {
          "value": "0.50",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "The MCV is less helpful because two processes pull in opposite directions.",
        "Iron stores are low.",
        "B12 markers are also abnormal.",
        "More than one deficiency is needed to explain the full panel."
      ],
      "panels": [
        "cbc",
        "anemia",
        "liver"
      ]
    },
    {
      "id": "marrow-recovery-reticulocytosis-early",
      "answer": "Marrow recovery reticulocytosis",
      "explanation": "A high reticulocyte count with improving nutritional markers supports marrow recovery after a treated anemia trigger. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "10.6",
          "flag": "L"
        },
        "mcv": {
          "value": "91"
        },
        "reticulocytes": {
          "value": "160",
          "flag": "H"
        },
        "ferritin": {
          "value": "80"
        },
        "b12": {
          "value": "420"
        },
        "folate": {
          "value": "6.8"
        },
        "bilirubin": {
          "value": "1.3",
          "flag": "H"
        },
        "ldh": {
          "value": "280",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "The dominant new finding is reticulocytosis.",
        "Iron, B12, and folate are not currently depleted.",
        "Mild bilirubin and LDH can rise during brisk erythropoiesis.",
        "The pattern points to recovery rather than persistent underproduction."
      ],
      "panels": [
        "cbc",
        "anemia",
        "inflammation"
      ]
    },
    {
      "id": "marrow-recovery-reticulocytosis-classic",
      "answer": "Marrow recovery reticulocytosis",
      "explanation": "A high reticulocyte count with improving nutritional markers supports marrow recovery after a treated anemia trigger. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "9.8",
          "flag": "L"
        },
        "mcv": {
          "value": "94"
        },
        "reticulocytes": {
          "value": "230",
          "flag": "H"
        },
        "ferritin": {
          "value": "110"
        },
        "b12": {
          "value": "520"
        },
        "folate": {
          "value": "8.2"
        },
        "bilirubin": {
          "value": "1.5",
          "flag": "H"
        },
        "ldh": {
          "value": "330",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "The dominant new finding is reticulocytosis.",
        "Iron, B12, and folate are not currently depleted.",
        "Mild bilirubin and LDH can rise during brisk erythropoiesis.",
        "The pattern points to recovery rather than persistent underproduction."
      ],
      "panels": [
        "cbc",
        "anemia",
        "inflammation"
      ]
    },
    {
      "id": "marrow-recovery-reticulocytosis-marked",
      "answer": "Marrow recovery reticulocytosis",
      "explanation": "A high reticulocyte count with improving nutritional markers supports marrow recovery after a treated anemia trigger. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "8.9",
          "flag": "L"
        },
        "mcv": {
          "value": "98"
        },
        "reticulocytes": {
          "value": "340",
          "flag": "H"
        },
        "ferritin": {
          "value": "150"
        },
        "b12": {
          "value": "610"
        },
        "folate": {
          "value": "10.4"
        },
        "bilirubin": {
          "value": "1.8",
          "flag": "H"
        },
        "ldh": {
          "value": "410",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "The dominant new finding is reticulocytosis.",
        "Iron, B12, and folate are not currently depleted.",
        "Mild bilirubin and LDH can rise during brisk erythropoiesis.",
        "The pattern points to recovery rather than persistent underproduction."
      ],
      "panels": [
        "cbc",
        "anemia",
        "inflammation"
      ]
    },
    {
      "id": "marrow-recovery-reticulocytosis-complicated",
      "answer": "Marrow recovery reticulocytosis",
      "explanation": "A high reticulocyte count with improving nutritional markers supports marrow recovery after a treated anemia trigger. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "9.4",
          "flag": "L"
        },
        "mcv": {
          "value": "96"
        },
        "reticulocytes": {
          "value": "280",
          "flag": "H"
        },
        "ferritin": {
          "value": "125"
        },
        "b12": {
          "value": "470"
        },
        "folate": {
          "value": "7.5"
        },
        "bilirubin": {
          "value": "1.6",
          "flag": "H"
        },
        "ldh": {
          "value": "360",
          "flag": "H"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "The dominant new finding is reticulocytosis.",
        "Iron, B12, and folate are not currently depleted.",
        "Mild bilirubin and LDH can rise during brisk erythropoiesis.",
        "The pattern points to recovery rather than persistent underproduction."
      ],
      "panels": [
        "cbc",
        "anemia",
        "inflammation"
      ]
    },
    {
      "id": "marrow-recovery-reticulocytosis-follow-up",
      "answer": "Marrow recovery reticulocytosis",
      "explanation": "A high reticulocyte count with improving nutritional markers supports marrow recovery after a treated anemia trigger. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "11.0",
          "flag": "L"
        },
        "mcv": {
          "value": "92"
        },
        "reticulocytes": {
          "value": "175",
          "flag": "H"
        },
        "ferritin": {
          "value": "90"
        },
        "b12": {
          "value": "390"
        },
        "folate": {
          "value": "6.2"
        },
        "bilirubin": {
          "value": "1.2",
          "flag": "H"
        },
        "ldh": {
          "value": "260",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "The dominant new finding is reticulocytosis.",
        "Iron, B12, and folate are not currently depleted.",
        "Mild bilirubin and LDH can rise during brisk erythropoiesis.",
        "The pattern points to recovery rather than persistent underproduction."
      ],
      "panels": [
        "cbc",
        "anemia",
        "inflammation"
      ]
    },
    {
      "id": "bacterial-inflammation-early",
      "answer": "Bacterial-type inflammation",
      "explanation": "Neutrophilic leukocytosis with high CRP supports a bacterial-type inflammatory response. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "wbc": {
          "value": "15.4",
          "flag": "H"
        },
        "neutrophils": {
          "value": "12.8",
          "flag": "H"
        },
        "lymphocytes": {
          "value": "0.9",
          "flag": "L"
        },
        "platelets": {
          "value": "455",
          "flag": "H"
        },
        "crp": {
          "value": "96",
          "flag": "H"
        },
        "sodium": {
          "value": "134",
          "flag": "L"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "The white count is driven mainly by neutrophils.",
        "CRP is markedly elevated.",
        "Relative lymphopenia can accompany the stress response.",
        "Mild hyponatremia is a common companion marker."
      ],
      "panels": [
        "cbc",
        "renal",
        "inflammation"
      ]
    },
    {
      "id": "bacterial-inflammation-classic",
      "answer": "Bacterial-type inflammation",
      "explanation": "Neutrophilic leukocytosis with high CRP supports a bacterial-type inflammatory response. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "wbc": {
          "value": "18.7",
          "flag": "H"
        },
        "neutrophils": {
          "value": "15.9",
          "flag": "H"
        },
        "lymphocytes": {
          "value": "0.8",
          "flag": "L"
        },
        "platelets": {
          "value": "510",
          "flag": "H"
        },
        "crp": {
          "value": "168",
          "flag": "H"
        },
        "sodium": {
          "value": "132",
          "flag": "L"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "The white count is driven mainly by neutrophils.",
        "CRP is markedly elevated.",
        "Relative lymphopenia can accompany the stress response.",
        "Mild hyponatremia is a common companion marker."
      ],
      "panels": [
        "cbc",
        "renal",
        "inflammation"
      ]
    },
    {
      "id": "bacterial-inflammation-marked",
      "answer": "Bacterial-type inflammation",
      "explanation": "Neutrophilic leukocytosis with high CRP supports a bacterial-type inflammatory response. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "wbc": {
          "value": "24.2",
          "flag": "H"
        },
        "neutrophils": {
          "value": "21.4",
          "flag": "H"
        },
        "lymphocytes": {
          "value": "0.6",
          "flag": "L"
        },
        "platelets": {
          "value": "590",
          "flag": "H"
        },
        "crp": {
          "value": "245",
          "flag": "H"
        },
        "sodium": {
          "value": "129",
          "flag": "L"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "The white count is driven mainly by neutrophils.",
        "CRP is markedly elevated.",
        "Relative lymphopenia can accompany the stress response.",
        "Mild hyponatremia is a common companion marker."
      ],
      "panels": [
        "cbc",
        "renal",
        "inflammation"
      ]
    },
    {
      "id": "bacterial-inflammation-complicated",
      "answer": "Bacterial-type inflammation",
      "explanation": "Neutrophilic leukocytosis with high CRP supports a bacterial-type inflammatory response. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "wbc": {
          "value": "20.6",
          "flag": "H"
        },
        "neutrophils": {
          "value": "17.6",
          "flag": "H"
        },
        "lymphocytes": {
          "value": "0.7",
          "flag": "L"
        },
        "platelets": {
          "value": "540",
          "flag": "H"
        },
        "crp": {
          "value": "210",
          "flag": "H"
        },
        "sodium": {
          "value": "131",
          "flag": "L"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "The white count is driven mainly by neutrophils.",
        "CRP is markedly elevated.",
        "Relative lymphopenia can accompany the stress response.",
        "Mild hyponatremia is a common companion marker."
      ],
      "panels": [
        "cbc",
        "renal",
        "inflammation"
      ]
    },
    {
      "id": "bacterial-inflammation-follow-up",
      "answer": "Bacterial-type inflammation",
      "explanation": "Neutrophilic leukocytosis with high CRP supports a bacterial-type inflammatory response. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "wbc": {
          "value": "13.8",
          "flag": "H"
        },
        "neutrophils": {
          "value": "10.9",
          "flag": "H"
        },
        "lymphocytes": {
          "value": "1.0",
          "flag": "L"
        },
        "platelets": {
          "value": "430",
          "flag": "H"
        },
        "crp": {
          "value": "72",
          "flag": "H"
        },
        "sodium": {
          "value": "135",
          "flag": "L"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "The white count is driven mainly by neutrophils.",
        "CRP is markedly elevated.",
        "Relative lymphopenia can accompany the stress response.",
        "Mild hyponatremia is a common companion marker."
      ],
      "panels": [
        "cbc",
        "renal",
        "inflammation"
      ]
    },
    {
      "id": "viral-inflammatory-pattern-early",
      "answer": "Viral-type inflammation",
      "explanation": "Leukopenia with mild thrombocytopenia, modest CRP, and mild transaminitis supports a viral-type inflammatory pattern. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "wbc": {
          "value": "3.5",
          "flag": "L"
        },
        "neutrophils": {
          "value": "1.5",
          "flag": "L"
        },
        "lymphocytes": {
          "value": "1.6"
        },
        "platelets": {
          "value": "145",
          "flag": "L"
        },
        "ast": {
          "value": "48",
          "flag": "H"
        },
        "alt": {
          "value": "56",
          "flag": "H"
        },
        "crp": {
          "value": "18",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "The pattern is not dominated by neutrophilia.",
        "Platelets may be mildly low.",
        "Liver enzymes are only moderately elevated.",
        "CRP is elevated but not in the severe bacterial range."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "inflammation"
      ]
    },
    {
      "id": "viral-inflammatory-pattern-classic",
      "answer": "Viral-type inflammation",
      "explanation": "Leukopenia with mild thrombocytopenia, modest CRP, and mild transaminitis supports a viral-type inflammatory pattern. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "wbc": {
          "value": "3.0",
          "flag": "L"
        },
        "neutrophils": {
          "value": "1.1",
          "flag": "L"
        },
        "lymphocytes": {
          "value": "1.4"
        },
        "platelets": {
          "value": "122",
          "flag": "L"
        },
        "ast": {
          "value": "62",
          "flag": "H"
        },
        "alt": {
          "value": "70",
          "flag": "H"
        },
        "crp": {
          "value": "28",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "The pattern is not dominated by neutrophilia.",
        "Platelets may be mildly low.",
        "Liver enzymes are only moderately elevated.",
        "CRP is elevated but not in the severe bacterial range."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "inflammation"
      ]
    },
    {
      "id": "viral-inflammatory-pattern-marked",
      "answer": "Viral-type inflammation",
      "explanation": "Leukopenia with mild thrombocytopenia, modest CRP, and mild transaminitis supports a viral-type inflammatory pattern. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "wbc": {
          "value": "2.4",
          "flag": "L"
        },
        "neutrophils": {
          "value": "0.8",
          "flag": "L"
        },
        "lymphocytes": {
          "value": "1.2"
        },
        "platelets": {
          "value": "92",
          "flag": "L"
        },
        "ast": {
          "value": "95",
          "flag": "H"
        },
        "alt": {
          "value": "110",
          "flag": "H"
        },
        "crp": {
          "value": "46",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "The pattern is not dominated by neutrophilia.",
        "Platelets may be mildly low.",
        "Liver enzymes are only moderately elevated.",
        "CRP is elevated but not in the severe bacterial range."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "inflammation"
      ]
    },
    {
      "id": "viral-inflammatory-pattern-complicated",
      "answer": "Viral-type inflammation",
      "explanation": "Leukopenia with mild thrombocytopenia, modest CRP, and mild transaminitis supports a viral-type inflammatory pattern. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "wbc": {
          "value": "2.8",
          "flag": "L"
        },
        "neutrophils": {
          "value": "1.0",
          "flag": "L"
        },
        "lymphocytes": {
          "value": "1.5"
        },
        "platelets": {
          "value": "110",
          "flag": "L"
        },
        "ast": {
          "value": "74",
          "flag": "H"
        },
        "alt": {
          "value": "86",
          "flag": "H"
        },
        "crp": {
          "value": "34",
          "flag": "H"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "The pattern is not dominated by neutrophilia.",
        "Platelets may be mildly low.",
        "Liver enzymes are only moderately elevated.",
        "CRP is elevated but not in the severe bacterial range."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "inflammation"
      ]
    },
    {
      "id": "viral-inflammatory-pattern-follow-up",
      "answer": "Viral-type inflammation",
      "explanation": "Leukopenia with mild thrombocytopenia, modest CRP, and mild transaminitis supports a viral-type inflammatory pattern. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "wbc": {
          "value": "3.8",
          "flag": "L"
        },
        "neutrophils": {
          "value": "1.6",
          "flag": "L"
        },
        "lymphocytes": {
          "value": "1.8"
        },
        "platelets": {
          "value": "150",
          "flag": "L"
        },
        "ast": {
          "value": "44",
          "flag": "H"
        },
        "alt": {
          "value": "52",
          "flag": "H"
        },
        "crp": {
          "value": "14",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "The pattern is not dominated by neutrophilia.",
        "Platelets may be mildly low.",
        "Liver enzymes are only moderately elevated.",
        "CRP is elevated but not in the severe bacterial range."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "inflammation"
      ]
    },
    {
      "id": "allergic-eosinophilic-inflammation-early",
      "answer": "Allergic eosinophilic inflammation",
      "explanation": "Eosinophilia with only modest inflammatory markers supports an allergic or eosinophilic inflammatory pattern. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "wbc": {
          "value": "11.2",
          "flag": "H"
        },
        "eosinophils": {
          "value": "0.9",
          "flag": "H"
        },
        "neutrophils": {
          "value": "5.8"
        },
        "crp": {
          "value": "12",
          "flag": "H"
        },
        "alt": {
          "value": "48",
          "flag": "H"
        },
        "ast": {
          "value": "42",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "Eosinophils are the standout cell line.",
        "Neutrophils are not the main driver.",
        "CRP is modest rather than extreme.",
        "Mild transaminitis can occur in drug or allergic reactions."
      ],
      "panels": [
        "cbc",
        "inflammation",
        "liver"
      ]
    },
    {
      "id": "allergic-eosinophilic-inflammation-classic",
      "answer": "Allergic eosinophilic inflammation",
      "explanation": "Eosinophilia with only modest inflammatory markers supports an allergic or eosinophilic inflammatory pattern. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "wbc": {
          "value": "12.6",
          "flag": "H"
        },
        "eosinophils": {
          "value": "1.4",
          "flag": "H"
        },
        "neutrophils": {
          "value": "6.4"
        },
        "crp": {
          "value": "18",
          "flag": "H"
        },
        "alt": {
          "value": "58",
          "flag": "H"
        },
        "ast": {
          "value": "50",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "Eosinophils are the standout cell line.",
        "Neutrophils are not the main driver.",
        "CRP is modest rather than extreme.",
        "Mild transaminitis can occur in drug or allergic reactions."
      ],
      "panels": [
        "cbc",
        "inflammation",
        "liver"
      ]
    },
    {
      "id": "allergic-eosinophilic-inflammation-marked",
      "answer": "Allergic eosinophilic inflammation",
      "explanation": "Eosinophilia with only modest inflammatory markers supports an allergic or eosinophilic inflammatory pattern. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "wbc": {
          "value": "14.8",
          "flag": "H"
        },
        "eosinophils": {
          "value": "2.6",
          "flag": "H"
        },
        "neutrophils": {
          "value": "7.2"
        },
        "crp": {
          "value": "26",
          "flag": "H"
        },
        "alt": {
          "value": "76",
          "flag": "H"
        },
        "ast": {
          "value": "68",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "Eosinophils are the standout cell line.",
        "Neutrophils are not the main driver.",
        "CRP is modest rather than extreme.",
        "Mild transaminitis can occur in drug or allergic reactions."
      ],
      "panels": [
        "cbc",
        "inflammation",
        "liver"
      ]
    },
    {
      "id": "allergic-eosinophilic-inflammation-complicated",
      "answer": "Allergic eosinophilic inflammation",
      "explanation": "Eosinophilia with only modest inflammatory markers supports an allergic or eosinophilic inflammatory pattern. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "wbc": {
          "value": "13.4",
          "flag": "H"
        },
        "eosinophils": {
          "value": "1.9",
          "flag": "H"
        },
        "neutrophils": {
          "value": "6.8"
        },
        "crp": {
          "value": "20",
          "flag": "H"
        },
        "alt": {
          "value": "64",
          "flag": "H"
        },
        "ast": {
          "value": "56",
          "flag": "H"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "Eosinophils are the standout cell line.",
        "Neutrophils are not the main driver.",
        "CRP is modest rather than extreme.",
        "Mild transaminitis can occur in drug or allergic reactions."
      ],
      "panels": [
        "cbc",
        "inflammation",
        "liver"
      ]
    },
    {
      "id": "allergic-eosinophilic-inflammation-follow-up",
      "answer": "Allergic eosinophilic inflammation",
      "explanation": "Eosinophilia with only modest inflammatory markers supports an allergic or eosinophilic inflammatory pattern. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "wbc": {
          "value": "10.8",
          "flag": "H"
        },
        "eosinophils": {
          "value": "0.8",
          "flag": "H"
        },
        "neutrophils": {
          "value": "5.4"
        },
        "crp": {
          "value": "10",
          "flag": "H"
        },
        "alt": {
          "value": "44",
          "flag": "H"
        },
        "ast": {
          "value": "40",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "Eosinophils are the standout cell line.",
        "Neutrophils are not the main driver.",
        "CRP is modest rather than extreme.",
        "Mild transaminitis can occur in drug or allergic reactions."
      ],
      "panels": [
        "cbc",
        "inflammation",
        "liver"
      ]
    },
    {
      "id": "parasitic-eosinophilia-early",
      "answer": "Parasitic eosinophilia",
      "explanation": "Marked eosinophilia with mild anemia and low albumin supports a parasitic eosinophilia pattern in the right setting. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "11.5",
          "flag": "L"
        },
        "mcv": {
          "value": "84"
        },
        "wbc": {
          "value": "12.8",
          "flag": "H"
        },
        "eosinophils": {
          "value": "1.8",
          "flag": "H"
        },
        "albumin": {
          "value": "3.4",
          "flag": "L"
        },
        "crp": {
          "value": "18",
          "flag": "H"
        },
        "ferritin": {
          "value": "85"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "The eosinophil count is much higher than in routine allergy.",
        "Albumin may be low when gut involvement or inflammation is present.",
        "The anemia is not driven by depleted iron stores.",
        "CRP is elevated but neutrophils are not the central clue."
      ],
      "panels": [
        "cbc",
        "anemia",
        "liver",
        "inflammation"
      ]
    },
    {
      "id": "parasitic-eosinophilia-classic",
      "answer": "Parasitic eosinophilia",
      "explanation": "Marked eosinophilia with mild anemia and low albumin supports a parasitic eosinophilia pattern in the right setting. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "10.7",
          "flag": "L"
        },
        "mcv": {
          "value": "82"
        },
        "wbc": {
          "value": "15.6",
          "flag": "H"
        },
        "eosinophils": {
          "value": "3.4",
          "flag": "H"
        },
        "albumin": {
          "value": "3.1",
          "flag": "L"
        },
        "crp": {
          "value": "34",
          "flag": "H"
        },
        "ferritin": {
          "value": "100"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "The eosinophil count is much higher than in routine allergy.",
        "Albumin may be low when gut involvement or inflammation is present.",
        "The anemia is not driven by depleted iron stores.",
        "CRP is elevated but neutrophils are not the central clue."
      ],
      "panels": [
        "cbc",
        "anemia",
        "liver",
        "inflammation"
      ]
    },
    {
      "id": "parasitic-eosinophilia-marked",
      "answer": "Parasitic eosinophilia",
      "explanation": "Marked eosinophilia with mild anemia and low albumin supports a parasitic eosinophilia pattern in the right setting. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "9.8",
          "flag": "L"
        },
        "mcv": {
          "value": "80"
        },
        "wbc": {
          "value": "18.9",
          "flag": "H"
        },
        "eosinophils": {
          "value": "5.8",
          "flag": "H"
        },
        "albumin": {
          "value": "2.8",
          "flag": "L"
        },
        "crp": {
          "value": "52",
          "flag": "H"
        },
        "ferritin": {
          "value": "120"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "The eosinophil count is much higher than in routine allergy.",
        "Albumin may be low when gut involvement or inflammation is present.",
        "The anemia is not driven by depleted iron stores.",
        "CRP is elevated but neutrophils are not the central clue."
      ],
      "panels": [
        "cbc",
        "anemia",
        "liver",
        "inflammation"
      ]
    },
    {
      "id": "parasitic-eosinophilia-complicated",
      "answer": "Parasitic eosinophilia",
      "explanation": "Marked eosinophilia with mild anemia and low albumin supports a parasitic eosinophilia pattern in the right setting. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "10.2",
          "flag": "L"
        },
        "mcv": {
          "value": "81"
        },
        "wbc": {
          "value": "16.4",
          "flag": "H"
        },
        "eosinophils": {
          "value": "4.2",
          "flag": "H"
        },
        "albumin": {
          "value": "3.0",
          "flag": "L"
        },
        "crp": {
          "value": "40",
          "flag": "H"
        },
        "ferritin": {
          "value": "95"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "The eosinophil count is much higher than in routine allergy.",
        "Albumin may be low when gut involvement or inflammation is present.",
        "The anemia is not driven by depleted iron stores.",
        "CRP is elevated but neutrophils are not the central clue."
      ],
      "panels": [
        "cbc",
        "anemia",
        "liver",
        "inflammation"
      ]
    },
    {
      "id": "parasitic-eosinophilia-follow-up",
      "answer": "Parasitic eosinophilia",
      "explanation": "Marked eosinophilia with mild anemia and low albumin supports a parasitic eosinophilia pattern in the right setting. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "11.0",
          "flag": "L"
        },
        "mcv": {
          "value": "83"
        },
        "wbc": {
          "value": "13.2",
          "flag": "H"
        },
        "eosinophils": {
          "value": "2.2",
          "flag": "H"
        },
        "albumin": {
          "value": "3.3",
          "flag": "L"
        },
        "crp": {
          "value": "16",
          "flag": "H"
        },
        "ferritin": {
          "value": "80"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "The eosinophil count is much higher than in routine allergy.",
        "Albumin may be low when gut involvement or inflammation is present.",
        "The anemia is not driven by depleted iron stores.",
        "CRP is elevated but neutrophils are not the central clue."
      ],
      "panels": [
        "cbc",
        "anemia",
        "liver",
        "inflammation"
      ]
    },
    {
      "id": "chronic-inflammatory-flare-early",
      "answer": "Chronic inflammatory flare",
      "explanation": "High CRP, thrombocytosis, low albumin, and inflammatory anemia support an active chronic inflammatory flare. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "11.2",
          "flag": "L"
        },
        "wbc": {
          "value": "10.8",
          "flag": "H"
        },
        "neutrophils": {
          "value": "8.0",
          "flag": "H"
        },
        "platelets": {
          "value": "520",
          "flag": "H"
        },
        "crp": {
          "value": "72",
          "flag": "H"
        },
        "albumin": {
          "value": "3.4",
          "flag": "L"
        },
        "ferritin": {
          "value": "360",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "The inflammatory marker is persistently high.",
        "Platelets rise as part of the acute-phase response.",
        "Albumin trends low.",
        "The iron panel resembles sequestration rather than depletion."
      ],
      "panels": [
        "cbc",
        "anemia",
        "inflammation",
        "liver"
      ]
    },
    {
      "id": "chronic-inflammatory-flare-classic",
      "answer": "Chronic inflammatory flare",
      "explanation": "High CRP, thrombocytosis, low albumin, and inflammatory anemia support an active chronic inflammatory flare. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "10.4",
          "flag": "L"
        },
        "wbc": {
          "value": "12.2",
          "flag": "H"
        },
        "neutrophils": {
          "value": "9.4",
          "flag": "H"
        },
        "platelets": {
          "value": "640",
          "flag": "H"
        },
        "crp": {
          "value": "118",
          "flag": "H"
        },
        "albumin": {
          "value": "3.0",
          "flag": "L"
        },
        "ferritin": {
          "value": "520",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "The inflammatory marker is persistently high.",
        "Platelets rise as part of the acute-phase response.",
        "Albumin trends low.",
        "The iron panel resembles sequestration rather than depletion."
      ],
      "panels": [
        "cbc",
        "anemia",
        "inflammation",
        "liver"
      ]
    },
    {
      "id": "chronic-inflammatory-flare-marked",
      "answer": "Chronic inflammatory flare",
      "explanation": "High CRP, thrombocytosis, low albumin, and inflammatory anemia support an active chronic inflammatory flare. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "9.6",
          "flag": "L"
        },
        "wbc": {
          "value": "14.0",
          "flag": "H"
        },
        "neutrophils": {
          "value": "11.2",
          "flag": "H"
        },
        "platelets": {
          "value": "760",
          "flag": "H"
        },
        "crp": {
          "value": "190",
          "flag": "H"
        },
        "albumin": {
          "value": "2.7",
          "flag": "L"
        },
        "ferritin": {
          "value": "760",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "The inflammatory marker is persistently high.",
        "Platelets rise as part of the acute-phase response.",
        "Albumin trends low.",
        "The iron panel resembles sequestration rather than depletion."
      ],
      "panels": [
        "cbc",
        "anemia",
        "inflammation",
        "liver"
      ]
    },
    {
      "id": "chronic-inflammatory-flare-complicated",
      "answer": "Chronic inflammatory flare",
      "explanation": "High CRP, thrombocytosis, low albumin, and inflammatory anemia support an active chronic inflammatory flare. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "10.0",
          "flag": "L"
        },
        "wbc": {
          "value": "13.1",
          "flag": "H"
        },
        "neutrophils": {
          "value": "10.1",
          "flag": "H"
        },
        "platelets": {
          "value": "680",
          "flag": "H"
        },
        "crp": {
          "value": "146",
          "flag": "H"
        },
        "albumin": {
          "value": "2.9",
          "flag": "L"
        },
        "ferritin": {
          "value": "610",
          "flag": "H"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "The inflammatory marker is persistently high.",
        "Platelets rise as part of the acute-phase response.",
        "Albumin trends low.",
        "The iron panel resembles sequestration rather than depletion."
      ],
      "panels": [
        "cbc",
        "anemia",
        "inflammation",
        "liver"
      ]
    },
    {
      "id": "chronic-inflammatory-flare-follow-up",
      "answer": "Chronic inflammatory flare",
      "explanation": "High CRP, thrombocytosis, low albumin, and inflammatory anemia support an active chronic inflammatory flare. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "11.0",
          "flag": "L"
        },
        "wbc": {
          "value": "10.5",
          "flag": "H"
        },
        "neutrophils": {
          "value": "7.8",
          "flag": "H"
        },
        "platelets": {
          "value": "490",
          "flag": "H"
        },
        "crp": {
          "value": "60",
          "flag": "H"
        },
        "albumin": {
          "value": "3.3",
          "flag": "L"
        },
        "ferritin": {
          "value": "330",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "The inflammatory marker is persistently high.",
        "Platelets rise as part of the acute-phase response.",
        "Albumin trends low.",
        "The iron panel resembles sequestration rather than depletion."
      ],
      "panels": [
        "cbc",
        "anemia",
        "inflammation",
        "liver"
      ]
    },
    {
      "id": "leukemoid-reaction-early",
      "answer": "Leukemoid reaction",
      "explanation": "Very high neutrophilic leukocytosis with high CRP, absent blasts, and no basophilia supports a leukemoid reaction. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "wbc": {
          "value": "28.0",
          "flag": "H"
        },
        "neutrophils": {
          "value": "24.0",
          "flag": "H"
        },
        "basophils": {
          "value": "0.1"
        },
        "blasts": {
          "value": "0"
        },
        "platelets": {
          "value": "455",
          "flag": "H"
        },
        "crp": {
          "value": "140",
          "flag": "H"
        },
        "ldh": {
          "value": "280",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "The neutrophil count is very high.",
        "Blasts are absent.",
        "Basophils are not prominent.",
        "The inflammatory marker is high enough to explain a reactive process."
      ],
      "panels": [
        "cbc",
        "inflammation",
        "hemeMalignancy"
      ]
    },
    {
      "id": "leukemoid-reaction-classic",
      "answer": "Leukemoid reaction",
      "explanation": "Very high neutrophilic leukocytosis with high CRP, absent blasts, and no basophilia supports a leukemoid reaction. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "wbc": {
          "value": "38.5",
          "flag": "H"
        },
        "neutrophils": {
          "value": "33.0",
          "flag": "H"
        },
        "basophils": {
          "value": "0.1"
        },
        "blasts": {
          "value": "0"
        },
        "platelets": {
          "value": "520",
          "flag": "H"
        },
        "crp": {
          "value": "220",
          "flag": "H"
        },
        "ldh": {
          "value": "360",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "The neutrophil count is very high.",
        "Blasts are absent.",
        "Basophils are not prominent.",
        "The inflammatory marker is high enough to explain a reactive process."
      ],
      "panels": [
        "cbc",
        "inflammation",
        "hemeMalignancy"
      ]
    },
    {
      "id": "leukemoid-reaction-marked",
      "answer": "Leukemoid reaction",
      "explanation": "Very high neutrophilic leukocytosis with high CRP, absent blasts, and no basophilia supports a leukemoid reaction. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "wbc": {
          "value": "55.0",
          "flag": "H"
        },
        "neutrophils": {
          "value": "48.5",
          "flag": "H"
        },
        "basophils": {
          "value": "0.2"
        },
        "blasts": {
          "value": "0"
        },
        "platelets": {
          "value": "650",
          "flag": "H"
        },
        "crp": {
          "value": "310",
          "flag": "H"
        },
        "ldh": {
          "value": "480",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "The neutrophil count is very high.",
        "Blasts are absent.",
        "Basophils are not prominent.",
        "The inflammatory marker is high enough to explain a reactive process."
      ],
      "panels": [
        "cbc",
        "inflammation",
        "hemeMalignancy"
      ]
    },
    {
      "id": "leukemoid-reaction-complicated",
      "answer": "Leukemoid reaction",
      "explanation": "Very high neutrophilic leukocytosis with high CRP, absent blasts, and no basophilia supports a leukemoid reaction. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "wbc": {
          "value": "44.2",
          "flag": "H"
        },
        "neutrophils": {
          "value": "38.0",
          "flag": "H"
        },
        "basophils": {
          "value": "0.1"
        },
        "blasts": {
          "value": "0"
        },
        "platelets": {
          "value": "590",
          "flag": "H"
        },
        "crp": {
          "value": "260",
          "flag": "H"
        },
        "ldh": {
          "value": "420",
          "flag": "H"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "The neutrophil count is very high.",
        "Blasts are absent.",
        "Basophils are not prominent.",
        "The inflammatory marker is high enough to explain a reactive process."
      ],
      "panels": [
        "cbc",
        "inflammation",
        "hemeMalignancy"
      ]
    },
    {
      "id": "leukemoid-reaction-follow-up",
      "answer": "Leukemoid reaction",
      "explanation": "Very high neutrophilic leukocytosis with high CRP, absent blasts, and no basophilia supports a leukemoid reaction. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "wbc": {
          "value": "26.4",
          "flag": "H"
        },
        "neutrophils": {
          "value": "22.0",
          "flag": "H"
        },
        "basophils": {
          "value": "0.1"
        },
        "blasts": {
          "value": "0"
        },
        "platelets": {
          "value": "430",
          "flag": "H"
        },
        "crp": {
          "value": "120",
          "flag": "H"
        },
        "ldh": {
          "value": "260",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "The neutrophil count is very high.",
        "Blasts are absent.",
        "Basophils are not prominent.",
        "The inflammatory marker is high enough to explain a reactive process."
      ],
      "panels": [
        "cbc",
        "inflammation",
        "hemeMalignancy"
      ]
    },
    {
      "id": "neutropenic-sepsis-pattern-early",
      "answer": "Neutropenic sepsis pattern",
      "explanation": "Severe neutropenia with high CRP and early organ stress supports a neutropenic sepsis lab pattern. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "wbc": {
          "value": "2.2",
          "flag": "L"
        },
        "neutrophils": {
          "value": "0.7",
          "flag": "L"
        },
        "platelets": {
          "value": "120",
          "flag": "L"
        },
        "crp": {
          "value": "88",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.4",
          "flag": "H"
        },
        "egfr": {
          "value": "56",
          "flag": "L"
        },
        "sodium": {
          "value": "134",
          "flag": "L"
        },
        "bilirubin": {
          "value": "1.3",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "The white count is low despite strong inflammation.",
        "Absolute neutrophils are dangerously reduced.",
        "Platelets can fall during systemic illness.",
        "Kidney and liver markers show physiologic stress."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "inflammation"
      ]
    },
    {
      "id": "neutropenic-sepsis-pattern-classic",
      "answer": "Neutropenic sepsis pattern",
      "explanation": "Severe neutropenia with high CRP and early organ stress supports a neutropenic sepsis lab pattern. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "wbc": {
          "value": "1.4",
          "flag": "L"
        },
        "neutrophils": {
          "value": "0.3",
          "flag": "L"
        },
        "platelets": {
          "value": "86",
          "flag": "L"
        },
        "crp": {
          "value": "160",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.8",
          "flag": "H"
        },
        "egfr": {
          "value": "42",
          "flag": "L"
        },
        "sodium": {
          "value": "132",
          "flag": "L"
        },
        "bilirubin": {
          "value": "1.7",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "The white count is low despite strong inflammation.",
        "Absolute neutrophils are dangerously reduced.",
        "Platelets can fall during systemic illness.",
        "Kidney and liver markers show physiologic stress."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "inflammation"
      ]
    },
    {
      "id": "neutropenic-sepsis-pattern-marked",
      "answer": "Neutropenic sepsis pattern",
      "explanation": "Severe neutropenia with high CRP and early organ stress supports a neutropenic sepsis lab pattern. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "wbc": {
          "value": "0.8",
          "flag": "L"
        },
        "neutrophils": {
          "value": "0.1",
          "flag": "L"
        },
        "platelets": {
          "value": "48",
          "flag": "L"
        },
        "crp": {
          "value": "260",
          "flag": "H"
        },
        "creatinine": {
          "value": "2.5",
          "flag": "H"
        },
        "egfr": {
          "value": "26",
          "flag": "L"
        },
        "sodium": {
          "value": "129",
          "flag": "L"
        },
        "bilirubin": {
          "value": "2.2",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "The white count is low despite strong inflammation.",
        "Absolute neutrophils are dangerously reduced.",
        "Platelets can fall during systemic illness.",
        "Kidney and liver markers show physiologic stress."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "inflammation"
      ]
    },
    {
      "id": "neutropenic-sepsis-pattern-complicated",
      "answer": "Neutropenic sepsis pattern",
      "explanation": "Severe neutropenia with high CRP and early organ stress supports a neutropenic sepsis lab pattern. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "wbc": {
          "value": "1.0",
          "flag": "L"
        },
        "neutrophils": {
          "value": "0.2",
          "flag": "L"
        },
        "platelets": {
          "value": "65",
          "flag": "L"
        },
        "crp": {
          "value": "210",
          "flag": "H"
        },
        "creatinine": {
          "value": "2.0",
          "flag": "H"
        },
        "egfr": {
          "value": "36",
          "flag": "L"
        },
        "sodium": {
          "value": "131",
          "flag": "L"
        },
        "bilirubin": {
          "value": "1.9",
          "flag": "H"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "The white count is low despite strong inflammation.",
        "Absolute neutrophils are dangerously reduced.",
        "Platelets can fall during systemic illness.",
        "Kidney and liver markers show physiologic stress."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "inflammation"
      ]
    },
    {
      "id": "neutropenic-sepsis-pattern-follow-up",
      "answer": "Neutropenic sepsis pattern",
      "explanation": "Severe neutropenia with high CRP and early organ stress supports a neutropenic sepsis lab pattern. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "wbc": {
          "value": "2.6",
          "flag": "L"
        },
        "neutrophils": {
          "value": "0.8",
          "flag": "L"
        },
        "platelets": {
          "value": "130",
          "flag": "L"
        },
        "crp": {
          "value": "70",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.5",
          "flag": "H"
        },
        "egfr": {
          "value": "52",
          "flag": "L"
        },
        "sodium": {
          "value": "135",
          "flag": "L"
        },
        "bilirubin": {
          "value": "1.2",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "The white count is low despite strong inflammation.",
        "Absolute neutrophils are dangerously reduced.",
        "Platelets can fall during systemic illness.",
        "Kidney and liver markers show physiologic stress."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "inflammation"
      ]
    },
    {
      "id": "reactive-thrombocytosis-early",
      "answer": "Reactive thrombocytosis",
      "explanation": "Marked thrombocytosis with inflammatory or iron-deficient companions supports a reactive platelet response. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "11.4",
          "flag": "L"
        },
        "mcv": {
          "value": "79",
          "flag": "L"
        },
        "wbc": {
          "value": "10.6",
          "flag": "H"
        },
        "platelets": {
          "value": "620",
          "flag": "H"
        },
        "crp": {
          "value": "38",
          "flag": "H"
        },
        "ferritin": {
          "value": "22",
          "flag": "L"
        },
        "iron": {
          "value": "42",
          "flag": "L"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "The platelet count is high, but other clues point to reactivity.",
        "Iron deficiency can drive thrombocytosis.",
        "CRP is elevated.",
        "The pattern lacks a broader myeloproliferative signature."
      ],
      "panels": [
        "cbc",
        "anemia",
        "inflammation"
      ]
    },
    {
      "id": "reactive-thrombocytosis-classic",
      "answer": "Reactive thrombocytosis",
      "explanation": "Marked thrombocytosis with inflammatory or iron-deficient companions supports a reactive platelet response. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "10.6",
          "flag": "L"
        },
        "mcv": {
          "value": "76",
          "flag": "L"
        },
        "wbc": {
          "value": "12.0",
          "flag": "H"
        },
        "platelets": {
          "value": "780",
          "flag": "H"
        },
        "crp": {
          "value": "72",
          "flag": "H"
        },
        "ferritin": {
          "value": "16",
          "flag": "L"
        },
        "iron": {
          "value": "30",
          "flag": "L"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "The platelet count is high, but other clues point to reactivity.",
        "Iron deficiency can drive thrombocytosis.",
        "CRP is elevated.",
        "The pattern lacks a broader myeloproliferative signature."
      ],
      "panels": [
        "cbc",
        "anemia",
        "inflammation"
      ]
    },
    {
      "id": "reactive-thrombocytosis-marked",
      "answer": "Reactive thrombocytosis",
      "explanation": "Marked thrombocytosis with inflammatory or iron-deficient companions supports a reactive platelet response. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "9.8",
          "flag": "L"
        },
        "mcv": {
          "value": "73",
          "flag": "L"
        },
        "wbc": {
          "value": "14.5",
          "flag": "H"
        },
        "platelets": {
          "value": "980",
          "flag": "H"
        },
        "crp": {
          "value": "118",
          "flag": "H"
        },
        "ferritin": {
          "value": "10",
          "flag": "L"
        },
        "iron": {
          "value": "22",
          "flag": "L"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "The platelet count is high, but other clues point to reactivity.",
        "Iron deficiency can drive thrombocytosis.",
        "CRP is elevated.",
        "The pattern lacks a broader myeloproliferative signature."
      ],
      "panels": [
        "cbc",
        "anemia",
        "inflammation"
      ]
    },
    {
      "id": "reactive-thrombocytosis-complicated",
      "answer": "Reactive thrombocytosis",
      "explanation": "Marked thrombocytosis with inflammatory or iron-deficient companions supports a reactive platelet response. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "10.2",
          "flag": "L"
        },
        "mcv": {
          "value": "75",
          "flag": "L"
        },
        "wbc": {
          "value": "13.2",
          "flag": "H"
        },
        "platelets": {
          "value": "860",
          "flag": "H"
        },
        "crp": {
          "value": "92",
          "flag": "H"
        },
        "ferritin": {
          "value": "14",
          "flag": "L"
        },
        "iron": {
          "value": "28",
          "flag": "L"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "The platelet count is high, but other clues point to reactivity.",
        "Iron deficiency can drive thrombocytosis.",
        "CRP is elevated.",
        "The pattern lacks a broader myeloproliferative signature."
      ],
      "panels": [
        "cbc",
        "anemia",
        "inflammation"
      ]
    },
    {
      "id": "reactive-thrombocytosis-follow-up",
      "answer": "Reactive thrombocytosis",
      "explanation": "Marked thrombocytosis with inflammatory or iron-deficient companions supports a reactive platelet response. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "11.0",
          "flag": "L"
        },
        "mcv": {
          "value": "80",
          "flag": "L"
        },
        "wbc": {
          "value": "10.2",
          "flag": "H"
        },
        "platelets": {
          "value": "560",
          "flag": "H"
        },
        "crp": {
          "value": "30",
          "flag": "H"
        },
        "ferritin": {
          "value": "26",
          "flag": "L"
        },
        "iron": {
          "value": "48",
          "flag": "L"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "The platelet count is high, but other clues point to reactivity.",
        "Iron deficiency can drive thrombocytosis.",
        "CRP is elevated.",
        "The pattern lacks a broader myeloproliferative signature."
      ],
      "panels": [
        "cbc",
        "anemia",
        "inflammation"
      ]
    },
    {
      "id": "prerenal-azotemia-early",
      "answer": "Prerenal azotemia",
      "explanation": "Disproportionate BUN elevation with concentrated urine and low urine sodium supports prerenal azotemia. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "sodium": {
          "value": "139"
        },
        "potassium": {
          "value": "4.4"
        },
        "chloride": {
          "value": "101"
        },
        "bicarbonate": {
          "value": "24"
        },
        "bun": {
          "value": "32",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.4",
          "flag": "H"
        },
        "egfr": {
          "value": "56",
          "flag": "L"
        },
        "urine_specific_gravity": {
          "value": "1.026",
          "flag": "H"
        },
        "urine_sodium": {
          "value": "12"
        },
        "urine_osmolality": {
          "value": "760"
        },
        "urine_urea": {
          "value": "520"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "The kidney is conserving sodium.",
        "Urine osmolality and specific gravity are high.",
        "BUN rises more than creatinine.",
        "The pattern points to low effective circulating volume."
      ],
      "panels": [
        "renal",
        "urine"
      ]
    },
    {
      "id": "prerenal-azotemia-classic",
      "answer": "Prerenal azotemia",
      "explanation": "Disproportionate BUN elevation with concentrated urine and low urine sodium supports prerenal azotemia. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "sodium": {
          "value": "138"
        },
        "potassium": {
          "value": "4.6"
        },
        "chloride": {
          "value": "100"
        },
        "bicarbonate": {
          "value": "23"
        },
        "bun": {
          "value": "46",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.8",
          "flag": "H"
        },
        "egfr": {
          "value": "42",
          "flag": "L"
        },
        "urine_specific_gravity": {
          "value": "1.030",
          "flag": "H"
        },
        "urine_sodium": {
          "value": "8"
        },
        "urine_osmolality": {
          "value": "890"
        },
        "urine_urea": {
          "value": "640"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "The kidney is conserving sodium.",
        "Urine osmolality and specific gravity are high.",
        "BUN rises more than creatinine.",
        "The pattern points to low effective circulating volume."
      ],
      "panels": [
        "renal",
        "urine"
      ]
    },
    {
      "id": "prerenal-azotemia-marked",
      "answer": "Prerenal azotemia",
      "explanation": "Disproportionate BUN elevation with concentrated urine and low urine sodium supports prerenal azotemia. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "sodium": {
          "value": "136"
        },
        "potassium": {
          "value": "4.8"
        },
        "chloride": {
          "value": "99"
        },
        "bicarbonate": {
          "value": "22"
        },
        "bun": {
          "value": "68",
          "flag": "H"
        },
        "creatinine": {
          "value": "2.4",
          "flag": "H"
        },
        "egfr": {
          "value": "28",
          "flag": "L"
        },
        "urine_specific_gravity": {
          "value": "1.034",
          "flag": "H"
        },
        "urine_sodium": {
          "value": "6"
        },
        "urine_osmolality": {
          "value": "1040"
        },
        "urine_urea": {
          "value": "780"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "The kidney is conserving sodium.",
        "Urine osmolality and specific gravity are high.",
        "BUN rises more than creatinine.",
        "The pattern points to low effective circulating volume."
      ],
      "panels": [
        "renal",
        "urine"
      ]
    },
    {
      "id": "prerenal-azotemia-complicated",
      "answer": "Prerenal azotemia",
      "explanation": "Disproportionate BUN elevation with concentrated urine and low urine sodium supports prerenal azotemia. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "sodium": {
          "value": "137"
        },
        "potassium": {
          "value": "4.5"
        },
        "chloride": {
          "value": "100"
        },
        "bicarbonate": {
          "value": "23"
        },
        "bun": {
          "value": "55",
          "flag": "H"
        },
        "creatinine": {
          "value": "2.0",
          "flag": "H"
        },
        "egfr": {
          "value": "36",
          "flag": "L"
        },
        "urine_specific_gravity": {
          "value": "1.032",
          "flag": "H"
        },
        "urine_sodium": {
          "value": "10"
        },
        "urine_osmolality": {
          "value": "930"
        },
        "urine_urea": {
          "value": "700"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "The kidney is conserving sodium.",
        "Urine osmolality and specific gravity are high.",
        "BUN rises more than creatinine.",
        "The pattern points to low effective circulating volume."
      ],
      "panels": [
        "renal",
        "urine"
      ]
    },
    {
      "id": "prerenal-azotemia-follow-up",
      "answer": "Prerenal azotemia",
      "explanation": "Disproportionate BUN elevation with concentrated urine and low urine sodium supports prerenal azotemia. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "sodium": {
          "value": "140"
        },
        "potassium": {
          "value": "4.3"
        },
        "chloride": {
          "value": "102"
        },
        "bicarbonate": {
          "value": "24"
        },
        "bun": {
          "value": "30",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.5",
          "flag": "H"
        },
        "egfr": {
          "value": "52",
          "flag": "L"
        },
        "urine_specific_gravity": {
          "value": "1.024",
          "flag": "H"
        },
        "urine_sodium": {
          "value": "14"
        },
        "urine_osmolality": {
          "value": "720"
        },
        "urine_urea": {
          "value": "500"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "The kidney is conserving sodium.",
        "Urine osmolality and specific gravity are high.",
        "BUN rises more than creatinine.",
        "The pattern points to low effective circulating volume."
      ],
      "panels": [
        "renal",
        "urine"
      ]
    },
    {
      "id": "acute-tubular-injury-early",
      "answer": "Acute tubular injury",
      "explanation": "Intrinsic kidney injury with impaired concentration, higher urine sodium, acidosis, and hyperkalemia supports acute tubular injury. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "potassium": {
          "value": "5.1",
          "flag": "H"
        },
        "bicarbonate": {
          "value": "20",
          "flag": "L"
        },
        "bun": {
          "value": "38",
          "flag": "H"
        },
        "creatinine": {
          "value": "2.0",
          "flag": "H"
        },
        "egfr": {
          "value": "36",
          "flag": "L"
        },
        "urine_specific_gravity": {
          "value": "1.010",
          "flag": "L"
        },
        "urine_sodium": {
          "value": "58"
        },
        "urine_osmolality": {
          "value": "310"
        },
        "urine_urea": {
          "value": "180"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "Urine sodium is not low.",
        "The urine is relatively dilute for the degree of azotemia.",
        "Potassium and bicarbonate show tubular dysfunction.",
        "Creatinine rises more substantially than in a mild prerenal pattern."
      ],
      "panels": [
        "renal",
        "urine"
      ]
    },
    {
      "id": "acute-tubular-injury-classic",
      "answer": "Acute tubular injury",
      "explanation": "Intrinsic kidney injury with impaired concentration, higher urine sodium, acidosis, and hyperkalemia supports acute tubular injury. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "potassium": {
          "value": "5.4",
          "flag": "H"
        },
        "bicarbonate": {
          "value": "18",
          "flag": "L"
        },
        "bun": {
          "value": "56",
          "flag": "H"
        },
        "creatinine": {
          "value": "3.2",
          "flag": "H"
        },
        "egfr": {
          "value": "22",
          "flag": "L"
        },
        "urine_specific_gravity": {
          "value": "1.008",
          "flag": "L"
        },
        "urine_sodium": {
          "value": "72"
        },
        "urine_osmolality": {
          "value": "280"
        },
        "urine_urea": {
          "value": "150"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "Urine sodium is not low.",
        "The urine is relatively dilute for the degree of azotemia.",
        "Potassium and bicarbonate show tubular dysfunction.",
        "Creatinine rises more substantially than in a mild prerenal pattern."
      ],
      "panels": [
        "renal",
        "urine"
      ]
    },
    {
      "id": "acute-tubular-injury-marked",
      "answer": "Acute tubular injury",
      "explanation": "Intrinsic kidney injury with impaired concentration, higher urine sodium, acidosis, and hyperkalemia supports acute tubular injury. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "potassium": {
          "value": "5.9",
          "flag": "H"
        },
        "bicarbonate": {
          "value": "15",
          "flag": "L"
        },
        "bun": {
          "value": "78",
          "flag": "H"
        },
        "creatinine": {
          "value": "5.1",
          "flag": "H"
        },
        "egfr": {
          "value": "10",
          "flag": "L"
        },
        "urine_specific_gravity": {
          "value": "1.006",
          "flag": "L"
        },
        "urine_sodium": {
          "value": "95"
        },
        "urine_osmolality": {
          "value": "250"
        },
        "urine_urea": {
          "value": "120"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "Urine sodium is not low.",
        "The urine is relatively dilute for the degree of azotemia.",
        "Potassium and bicarbonate show tubular dysfunction.",
        "Creatinine rises more substantially than in a mild prerenal pattern."
      ],
      "panels": [
        "renal",
        "urine"
      ]
    },
    {
      "id": "acute-tubular-injury-complicated",
      "answer": "Acute tubular injury",
      "explanation": "Intrinsic kidney injury with impaired concentration, higher urine sodium, acidosis, and hyperkalemia supports acute tubular injury. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "potassium": {
          "value": "5.6",
          "flag": "H"
        },
        "bicarbonate": {
          "value": "17",
          "flag": "L"
        },
        "bun": {
          "value": "64",
          "flag": "H"
        },
        "creatinine": {
          "value": "4.0",
          "flag": "H"
        },
        "egfr": {
          "value": "16",
          "flag": "L"
        },
        "urine_specific_gravity": {
          "value": "1.009",
          "flag": "L"
        },
        "urine_sodium": {
          "value": "80"
        },
        "urine_osmolality": {
          "value": "290"
        },
        "urine_urea": {
          "value": "160"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "Urine sodium is not low.",
        "The urine is relatively dilute for the degree of azotemia.",
        "Potassium and bicarbonate show tubular dysfunction.",
        "Creatinine rises more substantially than in a mild prerenal pattern."
      ],
      "panels": [
        "renal",
        "urine"
      ]
    },
    {
      "id": "acute-tubular-injury-follow-up",
      "answer": "Acute tubular injury",
      "explanation": "Intrinsic kidney injury with impaired concentration, higher urine sodium, acidosis, and hyperkalemia supports acute tubular injury. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "potassium": {
          "value": "5.2",
          "flag": "H"
        },
        "bicarbonate": {
          "value": "19",
          "flag": "L"
        },
        "bun": {
          "value": "42",
          "flag": "H"
        },
        "creatinine": {
          "value": "2.4",
          "flag": "H"
        },
        "egfr": {
          "value": "30",
          "flag": "L"
        },
        "urine_specific_gravity": {
          "value": "1.011",
          "flag": "L"
        },
        "urine_sodium": {
          "value": "52"
        },
        "urine_osmolality": {
          "value": "330"
        },
        "urine_urea": {
          "value": "200"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "Urine sodium is not low.",
        "The urine is relatively dilute for the degree of azotemia.",
        "Potassium and bicarbonate show tubular dysfunction.",
        "Creatinine rises more substantially than in a mild prerenal pattern."
      ],
      "panels": [
        "renal",
        "urine"
      ]
    },
    {
      "id": "ckd-with-albuminuria-early",
      "answer": "Chronic kidney disease with albuminuria",
      "explanation": "Reduced eGFR with albuminuria, mild anemia, metabolic acidosis, and hyperkalemia supports chronic kidney disease. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "11.0",
          "flag": "L"
        },
        "bun": {
          "value": "34",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.8",
          "flag": "H"
        },
        "egfr": {
          "value": "42",
          "flag": "L"
        },
        "potassium": {
          "value": "5.0",
          "flag": "H"
        },
        "bicarbonate": {
          "value": "21",
          "flag": "L"
        },
        "urine_protein": {
          "value": "1+",
          "flag": "H"
        },
        "urine_acr": {
          "value": "55",
          "flag": "H"
        },
        "urine_pcr": {
          "value": "100",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "Albuminuria is persistent and clinically meaningful.",
        "Creatinine and eGFR show reduced filtration.",
        "Anemia and bicarbonate decline suggest chronicity.",
        "The urine protein is not a transient trace finding."
      ],
      "panels": [
        "cbc",
        "renal",
        "urine"
      ]
    },
    {
      "id": "ckd-with-albuminuria-classic",
      "answer": "Chronic kidney disease with albuminuria",
      "explanation": "Reduced eGFR with albuminuria, mild anemia, metabolic acidosis, and hyperkalemia supports chronic kidney disease. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "10.2",
          "flag": "L"
        },
        "bun": {
          "value": "46",
          "flag": "H"
        },
        "creatinine": {
          "value": "2.6",
          "flag": "H"
        },
        "egfr": {
          "value": "28",
          "flag": "L"
        },
        "potassium": {
          "value": "5.2",
          "flag": "H"
        },
        "bicarbonate": {
          "value": "19",
          "flag": "L"
        },
        "urine_protein": {
          "value": "2+",
          "flag": "H"
        },
        "urine_acr": {
          "value": "140",
          "flag": "H"
        },
        "urine_pcr": {
          "value": "260",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "Albuminuria is persistent and clinically meaningful.",
        "Creatinine and eGFR show reduced filtration.",
        "Anemia and bicarbonate decline suggest chronicity.",
        "The urine protein is not a transient trace finding."
      ],
      "panels": [
        "cbc",
        "renal",
        "urine"
      ]
    },
    {
      "id": "ckd-with-albuminuria-marked",
      "answer": "Chronic kidney disease with albuminuria",
      "explanation": "Reduced eGFR with albuminuria, mild anemia, metabolic acidosis, and hyperkalemia supports chronic kidney disease. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "9.4",
          "flag": "L"
        },
        "bun": {
          "value": "60",
          "flag": "H"
        },
        "creatinine": {
          "value": "3.8",
          "flag": "H"
        },
        "egfr": {
          "value": "16",
          "flag": "L"
        },
        "potassium": {
          "value": "5.5",
          "flag": "H"
        },
        "bicarbonate": {
          "value": "17",
          "flag": "L"
        },
        "urine_protein": {
          "value": "3+",
          "flag": "H"
        },
        "urine_acr": {
          "value": "420",
          "flag": "H"
        },
        "urine_pcr": {
          "value": "720",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "Albuminuria is persistent and clinically meaningful.",
        "Creatinine and eGFR show reduced filtration.",
        "Anemia and bicarbonate decline suggest chronicity.",
        "The urine protein is not a transient trace finding."
      ],
      "panels": [
        "cbc",
        "renal",
        "urine"
      ]
    },
    {
      "id": "ckd-with-albuminuria-complicated",
      "answer": "Chronic kidney disease with albuminuria",
      "explanation": "Reduced eGFR with albuminuria, mild anemia, metabolic acidosis, and hyperkalemia supports chronic kidney disease. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "9.8",
          "flag": "L"
        },
        "bun": {
          "value": "52",
          "flag": "H"
        },
        "creatinine": {
          "value": "3.0",
          "flag": "H"
        },
        "egfr": {
          "value": "22",
          "flag": "L"
        },
        "potassium": {
          "value": "5.3",
          "flag": "H"
        },
        "bicarbonate": {
          "value": "18",
          "flag": "L"
        },
        "urine_protein": {
          "value": "2+",
          "flag": "H"
        },
        "urine_acr": {
          "value": "260",
          "flag": "H"
        },
        "urine_pcr": {
          "value": "480",
          "flag": "H"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "Albuminuria is persistent and clinically meaningful.",
        "Creatinine and eGFR show reduced filtration.",
        "Anemia and bicarbonate decline suggest chronicity.",
        "The urine protein is not a transient trace finding."
      ],
      "panels": [
        "cbc",
        "renal",
        "urine"
      ]
    },
    {
      "id": "ckd-with-albuminuria-follow-up",
      "answer": "Chronic kidney disease with albuminuria",
      "explanation": "Reduced eGFR with albuminuria, mild anemia, metabolic acidosis, and hyperkalemia supports chronic kidney disease. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "10.8",
          "flag": "L"
        },
        "bun": {
          "value": "38",
          "flag": "H"
        },
        "creatinine": {
          "value": "2.0",
          "flag": "H"
        },
        "egfr": {
          "value": "38",
          "flag": "L"
        },
        "potassium": {
          "value": "5.1",
          "flag": "H"
        },
        "bicarbonate": {
          "value": "20",
          "flag": "L"
        },
        "urine_protein": {
          "value": "1+",
          "flag": "H"
        },
        "urine_acr": {
          "value": "80",
          "flag": "H"
        },
        "urine_pcr": {
          "value": "150",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "Albuminuria is persistent and clinically meaningful.",
        "Creatinine and eGFR show reduced filtration.",
        "Anemia and bicarbonate decline suggest chronicity.",
        "The urine protein is not a transient trace finding."
      ],
      "panels": [
        "cbc",
        "renal",
        "urine"
      ]
    },
    {
      "id": "nephritic-syndrome-early",
      "answer": "Nephritic syndrome",
      "explanation": "Hematuria with proteinuria and impaired kidney function supports a nephritic pattern. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "11.6",
          "flag": "L"
        },
        "potassium": {
          "value": "5.1",
          "flag": "H"
        },
        "bicarbonate": {
          "value": "20",
          "flag": "L"
        },
        "bun": {
          "value": "36",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.7",
          "flag": "H"
        },
        "egfr": {
          "value": "48",
          "flag": "L"
        },
        "albumin": {
          "value": "3.4",
          "flag": "L"
        },
        "crp": {
          "value": "28",
          "flag": "H"
        },
        "urine_protein": {
          "value": "2+",
          "flag": "H"
        },
        "urine_blood": {
          "value": "3+",
          "flag": "H"
        },
        "urine_acr": {
          "value": "35",
          "flag": "H"
        },
        "urine_pcr": {
          "value": "120",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "Blood in the urine is a key clue.",
        "Proteinuria is present but not the only finding.",
        "Creatinine and potassium show renal involvement.",
        "The albumin is low but the pattern is not purely nephrotic."
      ],
      "panels": [
        "cbc",
        "renal",
        "urine",
        "inflammation",
        "liver"
      ]
    },
    {
      "id": "nephritic-syndrome-classic",
      "answer": "Nephritic syndrome",
      "explanation": "Hematuria with proteinuria and impaired kidney function supports a nephritic pattern. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "10.8",
          "flag": "L"
        },
        "potassium": {
          "value": "5.4",
          "flag": "H"
        },
        "bicarbonate": {
          "value": "18",
          "flag": "L"
        },
        "bun": {
          "value": "48",
          "flag": "H"
        },
        "creatinine": {
          "value": "2.2",
          "flag": "H"
        },
        "egfr": {
          "value": "34",
          "flag": "L"
        },
        "albumin": {
          "value": "3.1",
          "flag": "L"
        },
        "crp": {
          "value": "52",
          "flag": "H"
        },
        "urine_protein": {
          "value": "2+",
          "flag": "H"
        },
        "urine_blood": {
          "value": "3+",
          "flag": "H"
        },
        "urine_acr": {
          "value": "70",
          "flag": "H"
        },
        "urine_pcr": {
          "value": "240",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "Blood in the urine is a key clue.",
        "Proteinuria is present but not the only finding.",
        "Creatinine and potassium show renal involvement.",
        "The albumin is low but the pattern is not purely nephrotic."
      ],
      "panels": [
        "cbc",
        "renal",
        "urine",
        "inflammation",
        "liver"
      ]
    },
    {
      "id": "nephritic-syndrome-marked",
      "answer": "Nephritic syndrome",
      "explanation": "Hematuria with proteinuria and impaired kidney function supports a nephritic pattern. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "9.9",
          "flag": "L"
        },
        "potassium": {
          "value": "5.8",
          "flag": "H"
        },
        "bicarbonate": {
          "value": "16",
          "flag": "L"
        },
        "bun": {
          "value": "68",
          "flag": "H"
        },
        "creatinine": {
          "value": "3.4",
          "flag": "H"
        },
        "egfr": {
          "value": "20",
          "flag": "L"
        },
        "albumin": {
          "value": "2.8",
          "flag": "L"
        },
        "crp": {
          "value": "96",
          "flag": "H"
        },
        "urine_protein": {
          "value": "3+",
          "flag": "H"
        },
        "urine_blood": {
          "value": "3+",
          "flag": "H"
        },
        "urine_acr": {
          "value": "140",
          "flag": "H"
        },
        "urine_pcr": {
          "value": "420",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "Blood in the urine is a key clue.",
        "Proteinuria is present but not the only finding.",
        "Creatinine and potassium show renal involvement.",
        "The albumin is low but the pattern is not purely nephrotic."
      ],
      "panels": [
        "cbc",
        "renal",
        "urine",
        "inflammation",
        "liver"
      ]
    },
    {
      "id": "nephritic-syndrome-complicated",
      "answer": "Nephritic syndrome",
      "explanation": "Hematuria with proteinuria and impaired kidney function supports a nephritic pattern. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "10.4",
          "flag": "L"
        },
        "potassium": {
          "value": "5.5",
          "flag": "H"
        },
        "bicarbonate": {
          "value": "17",
          "flag": "L"
        },
        "bun": {
          "value": "55",
          "flag": "H"
        },
        "creatinine": {
          "value": "2.8",
          "flag": "H"
        },
        "egfr": {
          "value": "26",
          "flag": "L"
        },
        "albumin": {
          "value": "3.0",
          "flag": "L"
        },
        "crp": {
          "value": "70",
          "flag": "H"
        },
        "urine_protein": {
          "value": "3+",
          "flag": "H"
        },
        "urine_blood": {
          "value": "2+",
          "flag": "H"
        },
        "urine_acr": {
          "value": "95",
          "flag": "H"
        },
        "urine_pcr": {
          "value": "330",
          "flag": "H"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "Blood in the urine is a key clue.",
        "Proteinuria is present but not the only finding.",
        "Creatinine and potassium show renal involvement.",
        "The albumin is low but the pattern is not purely nephrotic."
      ],
      "panels": [
        "cbc",
        "renal",
        "urine",
        "inflammation",
        "liver"
      ]
    },
    {
      "id": "nephritic-syndrome-follow-up",
      "answer": "Nephritic syndrome",
      "explanation": "Hematuria with proteinuria and impaired kidney function supports a nephritic pattern. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "11.2",
          "flag": "L"
        },
        "potassium": {
          "value": "5.2",
          "flag": "H"
        },
        "bicarbonate": {
          "value": "19",
          "flag": "L"
        },
        "bun": {
          "value": "40",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.9",
          "flag": "H"
        },
        "egfr": {
          "value": "42",
          "flag": "L"
        },
        "albumin": {
          "value": "3.3",
          "flag": "L"
        },
        "crp": {
          "value": "24",
          "flag": "H"
        },
        "urine_protein": {
          "value": "1+",
          "flag": "H"
        },
        "urine_blood": {
          "value": "2+",
          "flag": "H"
        },
        "urine_acr": {
          "value": "42",
          "flag": "H"
        },
        "urine_pcr": {
          "value": "150",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "Blood in the urine is a key clue.",
        "Proteinuria is present but not the only finding.",
        "Creatinine and potassium show renal involvement.",
        "The albumin is low but the pattern is not purely nephrotic."
      ],
      "panels": [
        "cbc",
        "renal",
        "urine",
        "inflammation",
        "liver"
      ]
    },
    {
      "id": "nephrotic-syndrome-early",
      "answer": "Nephrotic syndrome",
      "explanation": "Heavy proteinuria with hypoalbuminemia and hyperlipidemia supports nephrotic syndrome. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "platelets": {
          "value": "455",
          "flag": "H"
        },
        "creatinine": {
          "value": "0.9"
        },
        "egfr": {
          "value": "90"
        },
        "albumin": {
          "value": "2.9",
          "flag": "L"
        },
        "cholesterol": {
          "value": "260",
          "flag": "H"
        },
        "triglycerides": {
          "value": "220",
          "flag": "H"
        },
        "urine_protein": {
          "value": "3+",
          "flag": "H"
        },
        "urine_blood": {
          "value": "Negative"
        },
        "urine_acr": {
          "value": "420",
          "flag": "H"
        },
        "urine_pcr": {
          "value": "700",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "Proteinuria is the dominant urine abnormality.",
        "Albumin is low enough to explain edema.",
        "Cholesterol and triglycerides rise.",
        "Hematuria is absent or only minimal."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "urine"
      ]
    },
    {
      "id": "nephrotic-syndrome-classic",
      "answer": "Nephrotic syndrome",
      "explanation": "Heavy proteinuria with hypoalbuminemia and hyperlipidemia supports nephrotic syndrome. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "platelets": {
          "value": "500",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.0"
        },
        "egfr": {
          "value": "82"
        },
        "albumin": {
          "value": "2.4",
          "flag": "L"
        },
        "cholesterol": {
          "value": "310",
          "flag": "H"
        },
        "triglycerides": {
          "value": "310",
          "flag": "H"
        },
        "urine_protein": {
          "value": "4+",
          "flag": "H"
        },
        "urine_blood": {
          "value": "Negative"
        },
        "urine_acr": {
          "value": "980",
          "flag": "H"
        },
        "urine_pcr": {
          "value": "1800",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "Proteinuria is the dominant urine abnormality.",
        "Albumin is low enough to explain edema.",
        "Cholesterol and triglycerides rise.",
        "Hematuria is absent or only minimal."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "urine"
      ]
    },
    {
      "id": "nephrotic-syndrome-marked",
      "answer": "Nephrotic syndrome",
      "explanation": "Heavy proteinuria with hypoalbuminemia and hyperlipidemia supports nephrotic syndrome. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "platelets": {
          "value": "585",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.2"
        },
        "egfr": {
          "value": "70"
        },
        "albumin": {
          "value": "1.8",
          "flag": "L"
        },
        "cholesterol": {
          "value": "410",
          "flag": "H"
        },
        "triglycerides": {
          "value": "460",
          "flag": "H"
        },
        "urine_protein": {
          "value": "4+",
          "flag": "H"
        },
        "urine_blood": {
          "value": "Trace"
        },
        "urine_acr": {
          "value": "2200",
          "flag": "H"
        },
        "urine_pcr": {
          "value": "4200",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "Proteinuria is the dominant urine abnormality.",
        "Albumin is low enough to explain edema.",
        "Cholesterol and triglycerides rise.",
        "Hematuria is absent or only minimal."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "urine"
      ]
    },
    {
      "id": "nephrotic-syndrome-complicated",
      "answer": "Nephrotic syndrome",
      "explanation": "Heavy proteinuria with hypoalbuminemia and hyperlipidemia supports nephrotic syndrome. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "platelets": {
          "value": "540",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.1"
        },
        "egfr": {
          "value": "76"
        },
        "albumin": {
          "value": "2.1",
          "flag": "L"
        },
        "cholesterol": {
          "value": "360",
          "flag": "H"
        },
        "triglycerides": {
          "value": "380",
          "flag": "H"
        },
        "urine_protein": {
          "value": "4+",
          "flag": "H"
        },
        "urine_blood": {
          "value": "Negative"
        },
        "urine_acr": {
          "value": "1450",
          "flag": "H"
        },
        "urine_pcr": {
          "value": "3000",
          "flag": "H"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "Proteinuria is the dominant urine abnormality.",
        "Albumin is low enough to explain edema.",
        "Cholesterol and triglycerides rise.",
        "Hematuria is absent or only minimal."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "urine"
      ]
    },
    {
      "id": "nephrotic-syndrome-follow-up",
      "answer": "Nephrotic syndrome",
      "explanation": "Heavy proteinuria with hypoalbuminemia and hyperlipidemia supports nephrotic syndrome. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "platelets": {
          "value": "440",
          "flag": "H"
        },
        "creatinine": {
          "value": "0.9"
        },
        "egfr": {
          "value": "92"
        },
        "albumin": {
          "value": "3.0",
          "flag": "L"
        },
        "cholesterol": {
          "value": "245",
          "flag": "H"
        },
        "triglycerides": {
          "value": "190",
          "flag": "H"
        },
        "urine_protein": {
          "value": "3+",
          "flag": "H"
        },
        "urine_blood": {
          "value": "Negative"
        },
        "urine_acr": {
          "value": "360",
          "flag": "H"
        },
        "urine_pcr": {
          "value": "620",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "Proteinuria is the dominant urine abnormality.",
        "Albumin is low enough to explain edema.",
        "Cholesterol and triglycerides rise.",
        "Hematuria is absent or only minimal."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "urine"
      ]
    },
    {
      "id": "lower-urinary-tract-infection-early",
      "answer": "Lower urinary tract infection",
      "explanation": "Leukocyte esterase and nitrite positivity with mild inflammatory markers supports a lower urinary tract infection pattern. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "wbc": {
          "value": "10.8",
          "flag": "H"
        },
        "neutrophils": {
          "value": "7.8",
          "flag": "H"
        },
        "crp": {
          "value": "18",
          "flag": "H"
        },
        "urine_leukocytes": {
          "value": "2+",
          "flag": "H"
        },
        "urine_nitrite": {
          "value": "Positive",
          "flag": "H"
        },
        "urine_blood": {
          "value": "1+",
          "flag": "H"
        },
        "urine_protein": {
          "value": "Trace",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "Urine leukocytes and nitrite are both positive.",
        "Kidney function is preserved.",
        "CRP is not as high as in an upper tract process.",
        "Hematuria may be mild."
      ],
      "panels": [
        "cbc",
        "renal",
        "urine",
        "inflammation"
      ]
    },
    {
      "id": "lower-urinary-tract-infection-classic",
      "answer": "Lower urinary tract infection",
      "explanation": "Leukocyte esterase and nitrite positivity with mild inflammatory markers supports a lower urinary tract infection pattern. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "wbc": {
          "value": "12.0",
          "flag": "H"
        },
        "neutrophils": {
          "value": "8.9",
          "flag": "H"
        },
        "crp": {
          "value": "34",
          "flag": "H"
        },
        "urine_leukocytes": {
          "value": "3+",
          "flag": "H"
        },
        "urine_nitrite": {
          "value": "Positive",
          "flag": "H"
        },
        "urine_blood": {
          "value": "1+",
          "flag": "H"
        },
        "urine_protein": {
          "value": "1+",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "Urine leukocytes and nitrite are both positive.",
        "Kidney function is preserved.",
        "CRP is not as high as in an upper tract process.",
        "Hematuria may be mild."
      ],
      "panels": [
        "cbc",
        "renal",
        "urine",
        "inflammation"
      ]
    },
    {
      "id": "lower-urinary-tract-infection-marked",
      "answer": "Lower urinary tract infection",
      "explanation": "Leukocyte esterase and nitrite positivity with mild inflammatory markers supports a lower urinary tract infection pattern. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "wbc": {
          "value": "13.6",
          "flag": "H"
        },
        "neutrophils": {
          "value": "10.2",
          "flag": "H"
        },
        "crp": {
          "value": "58",
          "flag": "H"
        },
        "urine_leukocytes": {
          "value": "3+",
          "flag": "H"
        },
        "urine_nitrite": {
          "value": "Positive",
          "flag": "H"
        },
        "urine_blood": {
          "value": "2+",
          "flag": "H"
        },
        "urine_protein": {
          "value": "1+",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "Urine leukocytes and nitrite are both positive.",
        "Kidney function is preserved.",
        "CRP is not as high as in an upper tract process.",
        "Hematuria may be mild."
      ],
      "panels": [
        "cbc",
        "renal",
        "urine",
        "inflammation"
      ]
    },
    {
      "id": "lower-urinary-tract-infection-complicated",
      "answer": "Lower urinary tract infection",
      "explanation": "Leukocyte esterase and nitrite positivity with mild inflammatory markers supports a lower urinary tract infection pattern. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "wbc": {
          "value": "12.8",
          "flag": "H"
        },
        "neutrophils": {
          "value": "9.6",
          "flag": "H"
        },
        "crp": {
          "value": "42",
          "flag": "H"
        },
        "urine_leukocytes": {
          "value": "3+",
          "flag": "H"
        },
        "urine_nitrite": {
          "value": "Positive",
          "flag": "H"
        },
        "urine_blood": {
          "value": "1+",
          "flag": "H"
        },
        "urine_protein": {
          "value": "Trace",
          "flag": "H"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "Urine leukocytes and nitrite are both positive.",
        "Kidney function is preserved.",
        "CRP is not as high as in an upper tract process.",
        "Hematuria may be mild."
      ],
      "panels": [
        "cbc",
        "renal",
        "urine",
        "inflammation"
      ]
    },
    {
      "id": "lower-urinary-tract-infection-follow-up",
      "answer": "Lower urinary tract infection",
      "explanation": "Leukocyte esterase and nitrite positivity with mild inflammatory markers supports a lower urinary tract infection pattern. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "wbc": {
          "value": "10.5",
          "flag": "H"
        },
        "neutrophils": {
          "value": "7.5",
          "flag": "H"
        },
        "crp": {
          "value": "14",
          "flag": "H"
        },
        "urine_leukocytes": {
          "value": "1+",
          "flag": "H"
        },
        "urine_nitrite": {
          "value": "Positive",
          "flag": "H"
        },
        "urine_blood": {
          "value": "Trace",
          "flag": "H"
        },
        "urine_protein": {
          "value": "Trace",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "Urine leukocytes and nitrite are both positive.",
        "Kidney function is preserved.",
        "CRP is not as high as in an upper tract process.",
        "Hematuria may be mild."
      ],
      "panels": [
        "cbc",
        "renal",
        "urine",
        "inflammation"
      ]
    },
    {
      "id": "pyelonephritis-kidney-stress-early",
      "answer": "Pyelonephritis with kidney stress",
      "explanation": "Urinary infection markers with systemic inflammation and kidney stress supports pyelonephritis. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "wbc": {
          "value": "14.8",
          "flag": "H"
        },
        "neutrophils": {
          "value": "12.0",
          "flag": "H"
        },
        "crp": {
          "value": "92",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.4",
          "flag": "H"
        },
        "egfr": {
          "value": "56",
          "flag": "L"
        },
        "bun": {
          "value": "26",
          "flag": "H"
        },
        "urine_leukocytes": {
          "value": "3+",
          "flag": "H"
        },
        "urine_nitrite": {
          "value": "Positive",
          "flag": "H"
        },
        "urine_blood": {
          "value": "2+",
          "flag": "H"
        },
        "urine_protein": {
          "value": "1+",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "The urine pattern suggests bacterial infection.",
        "CRP and neutrophils are high.",
        "Creatinine is elevated, unlike simple cystitis.",
        "Protein and blood can accompany upper tract inflammation."
      ],
      "panels": [
        "cbc",
        "renal",
        "urine",
        "inflammation"
      ]
    },
    {
      "id": "pyelonephritis-kidney-stress-classic",
      "answer": "Pyelonephritis with kidney stress",
      "explanation": "Urinary infection markers with systemic inflammation and kidney stress supports pyelonephritis. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "wbc": {
          "value": "18.2",
          "flag": "H"
        },
        "neutrophils": {
          "value": "15.5",
          "flag": "H"
        },
        "crp": {
          "value": "150",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.8",
          "flag": "H"
        },
        "egfr": {
          "value": "42",
          "flag": "L"
        },
        "bun": {
          "value": "36",
          "flag": "H"
        },
        "urine_leukocytes": {
          "value": "3+",
          "flag": "H"
        },
        "urine_nitrite": {
          "value": "Positive",
          "flag": "H"
        },
        "urine_blood": {
          "value": "2+",
          "flag": "H"
        },
        "urine_protein": {
          "value": "1+",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "The urine pattern suggests bacterial infection.",
        "CRP and neutrophils are high.",
        "Creatinine is elevated, unlike simple cystitis.",
        "Protein and blood can accompany upper tract inflammation."
      ],
      "panels": [
        "cbc",
        "renal",
        "urine",
        "inflammation"
      ]
    },
    {
      "id": "pyelonephritis-kidney-stress-marked",
      "answer": "Pyelonephritis with kidney stress",
      "explanation": "Urinary infection markers with systemic inflammation and kidney stress supports pyelonephritis. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "wbc": {
          "value": "24.0",
          "flag": "H"
        },
        "neutrophils": {
          "value": "21.0",
          "flag": "H"
        },
        "crp": {
          "value": "240",
          "flag": "H"
        },
        "creatinine": {
          "value": "2.6",
          "flag": "H"
        },
        "egfr": {
          "value": "25",
          "flag": "L"
        },
        "bun": {
          "value": "54",
          "flag": "H"
        },
        "urine_leukocytes": {
          "value": "3+",
          "flag": "H"
        },
        "urine_nitrite": {
          "value": "Positive",
          "flag": "H"
        },
        "urine_blood": {
          "value": "3+",
          "flag": "H"
        },
        "urine_protein": {
          "value": "2+",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "The urine pattern suggests bacterial infection.",
        "CRP and neutrophils are high.",
        "Creatinine is elevated, unlike simple cystitis.",
        "Protein and blood can accompany upper tract inflammation."
      ],
      "panels": [
        "cbc",
        "renal",
        "urine",
        "inflammation"
      ]
    },
    {
      "id": "pyelonephritis-kidney-stress-complicated",
      "answer": "Pyelonephritis with kidney stress",
      "explanation": "Urinary infection markers with systemic inflammation and kidney stress supports pyelonephritis. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "wbc": {
          "value": "20.5",
          "flag": "H"
        },
        "neutrophils": {
          "value": "17.2",
          "flag": "H"
        },
        "crp": {
          "value": "190",
          "flag": "H"
        },
        "creatinine": {
          "value": "2.1",
          "flag": "H"
        },
        "egfr": {
          "value": "34",
          "flag": "L"
        },
        "bun": {
          "value": "44",
          "flag": "H"
        },
        "urine_leukocytes": {
          "value": "3+",
          "flag": "H"
        },
        "urine_nitrite": {
          "value": "Positive",
          "flag": "H"
        },
        "urine_blood": {
          "value": "2+",
          "flag": "H"
        },
        "urine_protein": {
          "value": "1+",
          "flag": "H"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "The urine pattern suggests bacterial infection.",
        "CRP and neutrophils are high.",
        "Creatinine is elevated, unlike simple cystitis.",
        "Protein and blood can accompany upper tract inflammation."
      ],
      "panels": [
        "cbc",
        "renal",
        "urine",
        "inflammation"
      ]
    },
    {
      "id": "pyelonephritis-kidney-stress-follow-up",
      "answer": "Pyelonephritis with kidney stress",
      "explanation": "Urinary infection markers with systemic inflammation and kidney stress supports pyelonephritis. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "wbc": {
          "value": "13.6",
          "flag": "H"
        },
        "neutrophils": {
          "value": "10.8",
          "flag": "H"
        },
        "crp": {
          "value": "76",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.5",
          "flag": "H"
        },
        "egfr": {
          "value": "52",
          "flag": "L"
        },
        "bun": {
          "value": "28",
          "flag": "H"
        },
        "urine_leukocytes": {
          "value": "2+",
          "flag": "H"
        },
        "urine_nitrite": {
          "value": "Positive",
          "flag": "H"
        },
        "urine_blood": {
          "value": "1+",
          "flag": "H"
        },
        "urine_protein": {
          "value": "1+",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "The urine pattern suggests bacterial infection.",
        "CRP and neutrophils are high.",
        "Creatinine is elevated, unlike simple cystitis.",
        "Protein and blood can accompany upper tract inflammation."
      ],
      "panels": [
        "cbc",
        "renal",
        "urine",
        "inflammation"
      ]
    },
    {
      "id": "rhabdomyolysis-associated-aki-early",
      "answer": "Rhabdomyolysis-associated kidney injury",
      "explanation": "Very high CK with hyperkalemia, hypocalcemia, heme-positive urine, and AKI supports rhabdomyolysis-associated kidney injury. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "ck": {
          "value": "1800",
          "flag": "H"
        },
        "ast": {
          "value": "110",
          "flag": "H"
        },
        "alt": {
          "value": "72",
          "flag": "H"
        },
        "potassium": {
          "value": "5.3",
          "flag": "H"
        },
        "calcium": {
          "value": "8.2",
          "flag": "L"
        },
        "creatinine": {
          "value": "1.6",
          "flag": "H"
        },
        "egfr": {
          "value": "50",
          "flag": "L"
        },
        "bun": {
          "value": "28",
          "flag": "H"
        },
        "urine_blood": {
          "value": "3+",
          "flag": "H"
        },
        "urine_protein": {
          "value": "1+",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "CK is the dominant abnormality.",
        "AST can rise from muscle as well as liver.",
        "Urine blood is positive out of proportion to infection clues.",
        "Potassium and creatinine show dangerous kidney stress."
      ],
      "panels": [
        "cbc",
        "renal",
        "urine",
        "liver"
      ]
    },
    {
      "id": "rhabdomyolysis-associated-aki-classic",
      "answer": "Rhabdomyolysis-associated kidney injury",
      "explanation": "Very high CK with hyperkalemia, hypocalcemia, heme-positive urine, and AKI supports rhabdomyolysis-associated kidney injury. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "ck": {
          "value": "6400",
          "flag": "H"
        },
        "ast": {
          "value": "260",
          "flag": "H"
        },
        "alt": {
          "value": "140",
          "flag": "H"
        },
        "potassium": {
          "value": "5.8",
          "flag": "H"
        },
        "calcium": {
          "value": "7.8",
          "flag": "L"
        },
        "creatinine": {
          "value": "2.8",
          "flag": "H"
        },
        "egfr": {
          "value": "25",
          "flag": "L"
        },
        "bun": {
          "value": "45",
          "flag": "H"
        },
        "urine_blood": {
          "value": "3+",
          "flag": "H"
        },
        "urine_protein": {
          "value": "2+",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "CK is the dominant abnormality.",
        "AST can rise from muscle as well as liver.",
        "Urine blood is positive out of proportion to infection clues.",
        "Potassium and creatinine show dangerous kidney stress."
      ],
      "panels": [
        "cbc",
        "renal",
        "urine",
        "liver"
      ]
    },
    {
      "id": "rhabdomyolysis-associated-aki-marked",
      "answer": "Rhabdomyolysis-associated kidney injury",
      "explanation": "Very high CK with hyperkalemia, hypocalcemia, heme-positive urine, and AKI supports rhabdomyolysis-associated kidney injury. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "ck": {
          "value": "22000",
          "flag": "H"
        },
        "ast": {
          "value": "780",
          "flag": "H"
        },
        "alt": {
          "value": "310",
          "flag": "H"
        },
        "potassium": {
          "value": "6.4",
          "flag": "H"
        },
        "calcium": {
          "value": "7.1",
          "flag": "L"
        },
        "creatinine": {
          "value": "5.2",
          "flag": "H"
        },
        "egfr": {
          "value": "10",
          "flag": "L"
        },
        "bun": {
          "value": "76",
          "flag": "H"
        },
        "urine_blood": {
          "value": "3+",
          "flag": "H"
        },
        "urine_protein": {
          "value": "2+",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "CK is the dominant abnormality.",
        "AST can rise from muscle as well as liver.",
        "Urine blood is positive out of proportion to infection clues.",
        "Potassium and creatinine show dangerous kidney stress."
      ],
      "panels": [
        "cbc",
        "renal",
        "urine",
        "liver"
      ]
    },
    {
      "id": "rhabdomyolysis-associated-aki-complicated",
      "answer": "Rhabdomyolysis-associated kidney injury",
      "explanation": "Very high CK with hyperkalemia, hypocalcemia, heme-positive urine, and AKI supports rhabdomyolysis-associated kidney injury. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "ck": {
          "value": "12500",
          "flag": "H"
        },
        "ast": {
          "value": "420",
          "flag": "H"
        },
        "alt": {
          "value": "220",
          "flag": "H"
        },
        "potassium": {
          "value": "6.0",
          "flag": "H"
        },
        "calcium": {
          "value": "7.5",
          "flag": "L"
        },
        "creatinine": {
          "value": "3.9",
          "flag": "H"
        },
        "egfr": {
          "value": "16",
          "flag": "L"
        },
        "bun": {
          "value": "58",
          "flag": "H"
        },
        "urine_blood": {
          "value": "3+",
          "flag": "H"
        },
        "urine_protein": {
          "value": "2+",
          "flag": "H"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "CK is the dominant abnormality.",
        "AST can rise from muscle as well as liver.",
        "Urine blood is positive out of proportion to infection clues.",
        "Potassium and creatinine show dangerous kidney stress."
      ],
      "panels": [
        "cbc",
        "renal",
        "urine",
        "liver"
      ]
    },
    {
      "id": "rhabdomyolysis-associated-aki-follow-up",
      "answer": "Rhabdomyolysis-associated kidney injury",
      "explanation": "Very high CK with hyperkalemia, hypocalcemia, heme-positive urine, and AKI supports rhabdomyolysis-associated kidney injury. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "ck": {
          "value": "2600",
          "flag": "H"
        },
        "ast": {
          "value": "140",
          "flag": "H"
        },
        "alt": {
          "value": "86",
          "flag": "H"
        },
        "potassium": {
          "value": "5.2",
          "flag": "H"
        },
        "calcium": {
          "value": "8.3",
          "flag": "L"
        },
        "creatinine": {
          "value": "1.9",
          "flag": "H"
        },
        "egfr": {
          "value": "40",
          "flag": "L"
        },
        "bun": {
          "value": "34",
          "flag": "H"
        },
        "urine_blood": {
          "value": "2+",
          "flag": "H"
        },
        "urine_protein": {
          "value": "1+",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "CK is the dominant abnormality.",
        "AST can rise from muscle as well as liver.",
        "Urine blood is positive out of proportion to infection clues.",
        "Potassium and creatinine show dangerous kidney stress."
      ],
      "panels": [
        "cbc",
        "renal",
        "urine",
        "liver"
      ]
    },
    {
      "id": "siadh-type-hyponatremia-early",
      "answer": "SIADH-type hyponatremia",
      "explanation": "Hyponatremia with inappropriately concentrated urine and non-low urine sodium supports an SIADH-type pattern. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "sodium": {
          "value": "130",
          "flag": "L"
        },
        "chloride": {
          "value": "96",
          "flag": "L"
        },
        "potassium": {
          "value": "4.1"
        },
        "bun": {
          "value": "8"
        },
        "creatinine": {
          "value": "0.8"
        },
        "egfr": {
          "value": "98"
        },
        "urine_sodium": {
          "value": "54"
        },
        "urine_osmolality": {
          "value": "520"
        },
        "urine_specific_gravity": {
          "value": "1.018"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "The urine is not maximally dilute.",
        "Urine sodium is not suppressed.",
        "Kidney function is preserved.",
        "BUN can be low or low-normal."
      ],
      "panels": [
        "renal",
        "urine"
      ]
    },
    {
      "id": "siadh-type-hyponatremia-classic",
      "answer": "SIADH-type hyponatremia",
      "explanation": "Hyponatremia with inappropriately concentrated urine and non-low urine sodium supports an SIADH-type pattern. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "sodium": {
          "value": "126",
          "flag": "L"
        },
        "chloride": {
          "value": "92",
          "flag": "L"
        },
        "potassium": {
          "value": "4.0"
        },
        "bun": {
          "value": "7"
        },
        "creatinine": {
          "value": "0.7"
        },
        "egfr": {
          "value": "105"
        },
        "urine_sodium": {
          "value": "72"
        },
        "urine_osmolality": {
          "value": "680"
        },
        "urine_specific_gravity": {
          "value": "1.022"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "The urine is not maximally dilute.",
        "Urine sodium is not suppressed.",
        "Kidney function is preserved.",
        "BUN can be low or low-normal."
      ],
      "panels": [
        "renal",
        "urine"
      ]
    },
    {
      "id": "siadh-type-hyponatremia-marked",
      "answer": "SIADH-type hyponatremia",
      "explanation": "Hyponatremia with inappropriately concentrated urine and non-low urine sodium supports an SIADH-type pattern. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "sodium": {
          "value": "119",
          "flag": "L"
        },
        "chloride": {
          "value": "88",
          "flag": "L"
        },
        "potassium": {
          "value": "4.3"
        },
        "bun": {
          "value": "6"
        },
        "creatinine": {
          "value": "0.8"
        },
        "egfr": {
          "value": "100"
        },
        "urine_sodium": {
          "value": "95"
        },
        "urine_osmolality": {
          "value": "820"
        },
        "urine_specific_gravity": {
          "value": "1.026"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "The urine is not maximally dilute.",
        "Urine sodium is not suppressed.",
        "Kidney function is preserved.",
        "BUN can be low or low-normal."
      ],
      "panels": [
        "renal",
        "urine"
      ]
    },
    {
      "id": "siadh-type-hyponatremia-complicated",
      "answer": "SIADH-type hyponatremia",
      "explanation": "Hyponatremia with inappropriately concentrated urine and non-low urine sodium supports an SIADH-type pattern. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "sodium": {
          "value": "123",
          "flag": "L"
        },
        "chloride": {
          "value": "90",
          "flag": "L"
        },
        "potassium": {
          "value": "4.2"
        },
        "bun": {
          "value": "7"
        },
        "creatinine": {
          "value": "0.7"
        },
        "egfr": {
          "value": "108"
        },
        "urine_sodium": {
          "value": "80"
        },
        "urine_osmolality": {
          "value": "740"
        },
        "urine_specific_gravity": {
          "value": "1.024"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "The urine is not maximally dilute.",
        "Urine sodium is not suppressed.",
        "Kidney function is preserved.",
        "BUN can be low or low-normal."
      ],
      "panels": [
        "renal",
        "urine"
      ]
    },
    {
      "id": "siadh-type-hyponatremia-follow-up",
      "answer": "SIADH-type hyponatremia",
      "explanation": "Hyponatremia with inappropriately concentrated urine and non-low urine sodium supports an SIADH-type pattern. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "sodium": {
          "value": "132",
          "flag": "L"
        },
        "chloride": {
          "value": "97",
          "flag": "L"
        },
        "potassium": {
          "value": "4.1"
        },
        "bun": {
          "value": "9"
        },
        "creatinine": {
          "value": "0.9"
        },
        "egfr": {
          "value": "94"
        },
        "urine_sodium": {
          "value": "48"
        },
        "urine_osmolality": {
          "value": "480"
        },
        "urine_specific_gravity": {
          "value": "1.016"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "The urine is not maximally dilute.",
        "Urine sodium is not suppressed.",
        "Kidney function is preserved.",
        "BUN can be low or low-normal."
      ],
      "panels": [
        "renal",
        "urine"
      ]
    },
    {
      "id": "hypovolemic-hyponatremia-early",
      "answer": "Hypovolemic hyponatremia",
      "explanation": "Hyponatremia with azotemia, concentrated urine, and low urine sodium supports hypovolemic hyponatremia. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "sodium": {
          "value": "131",
          "flag": "L"
        },
        "chloride": {
          "value": "94",
          "flag": "L"
        },
        "potassium": {
          "value": "4.4"
        },
        "bun": {
          "value": "26",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.3",
          "flag": "H"
        },
        "egfr": {
          "value": "60",
          "flag": "L"
        },
        "urine_sodium": {
          "value": "10"
        },
        "urine_osmolality": {
          "value": "700"
        },
        "urine_specific_gravity": {
          "value": "1.026",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "The kidney is conserving sodium.",
        "The urine is concentrated.",
        "BUN and creatinine suggest volume depletion.",
        "This differs from SIADH by urine sodium behavior."
      ],
      "panels": [
        "renal",
        "urine"
      ]
    },
    {
      "id": "hypovolemic-hyponatremia-classic",
      "answer": "Hypovolemic hyponatremia",
      "explanation": "Hyponatremia with azotemia, concentrated urine, and low urine sodium supports hypovolemic hyponatremia. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "sodium": {
          "value": "128",
          "flag": "L"
        },
        "chloride": {
          "value": "90",
          "flag": "L"
        },
        "potassium": {
          "value": "4.7"
        },
        "bun": {
          "value": "38",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.7",
          "flag": "H"
        },
        "egfr": {
          "value": "45",
          "flag": "L"
        },
        "urine_sodium": {
          "value": "8"
        },
        "urine_osmolality": {
          "value": "840"
        },
        "urine_specific_gravity": {
          "value": "1.030",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "The kidney is conserving sodium.",
        "The urine is concentrated.",
        "BUN and creatinine suggest volume depletion.",
        "This differs from SIADH by urine sodium behavior."
      ],
      "panels": [
        "renal",
        "urine"
      ]
    },
    {
      "id": "hypovolemic-hyponatremia-marked",
      "answer": "Hypovolemic hyponatremia",
      "explanation": "Hyponatremia with azotemia, concentrated urine, and low urine sodium supports hypovolemic hyponatremia. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "sodium": {
          "value": "122",
          "flag": "L"
        },
        "chloride": {
          "value": "84",
          "flag": "L"
        },
        "potassium": {
          "value": "5.0"
        },
        "bun": {
          "value": "58",
          "flag": "H"
        },
        "creatinine": {
          "value": "2.4",
          "flag": "H"
        },
        "egfr": {
          "value": "28",
          "flag": "L"
        },
        "urine_sodium": {
          "value": "5"
        },
        "urine_osmolality": {
          "value": "1020"
        },
        "urine_specific_gravity": {
          "value": "1.034",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "The kidney is conserving sodium.",
        "The urine is concentrated.",
        "BUN and creatinine suggest volume depletion.",
        "This differs from SIADH by urine sodium behavior."
      ],
      "panels": [
        "renal",
        "urine"
      ]
    },
    {
      "id": "hypovolemic-hyponatremia-complicated",
      "answer": "Hypovolemic hyponatremia",
      "explanation": "Hyponatremia with azotemia, concentrated urine, and low urine sodium supports hypovolemic hyponatremia. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "sodium": {
          "value": "125",
          "flag": "L"
        },
        "chloride": {
          "value": "88",
          "flag": "L"
        },
        "potassium": {
          "value": "4.8"
        },
        "bun": {
          "value": "44",
          "flag": "H"
        },
        "creatinine": {
          "value": "2.0",
          "flag": "H"
        },
        "egfr": {
          "value": "36",
          "flag": "L"
        },
        "urine_sodium": {
          "value": "7"
        },
        "urine_osmolality": {
          "value": "920"
        },
        "urine_specific_gravity": {
          "value": "1.032",
          "flag": "H"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "The kidney is conserving sodium.",
        "The urine is concentrated.",
        "BUN and creatinine suggest volume depletion.",
        "This differs from SIADH by urine sodium behavior."
      ],
      "panels": [
        "renal",
        "urine"
      ]
    },
    {
      "id": "hypovolemic-hyponatremia-follow-up",
      "answer": "Hypovolemic hyponatremia",
      "explanation": "Hyponatremia with azotemia, concentrated urine, and low urine sodium supports hypovolemic hyponatremia. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "sodium": {
          "value": "133",
          "flag": "L"
        },
        "chloride": {
          "value": "96",
          "flag": "L"
        },
        "potassium": {
          "value": "4.3"
        },
        "bun": {
          "value": "24",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.4",
          "flag": "H"
        },
        "egfr": {
          "value": "56",
          "flag": "L"
        },
        "urine_sodium": {
          "value": "12"
        },
        "urine_osmolality": {
          "value": "650"
        },
        "urine_specific_gravity": {
          "value": "1.024",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "The kidney is conserving sodium.",
        "The urine is concentrated.",
        "BUN and creatinine suggest volume depletion.",
        "This differs from SIADH by urine sodium behavior."
      ],
      "panels": [
        "renal",
        "urine"
      ]
    },
    {
      "id": "hypernatremic-dehydration-early",
      "answer": "Hypernatremic dehydration",
      "explanation": "Hypernatremia with concentrated urine and prerenal azotemia supports water deficit from dehydration. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "sodium": {
          "value": "148",
          "flag": "H"
        },
        "chloride": {
          "value": "111",
          "flag": "H"
        },
        "potassium": {
          "value": "4.5"
        },
        "bun": {
          "value": "30",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.4",
          "flag": "H"
        },
        "egfr": {
          "value": "56",
          "flag": "L"
        },
        "urine_osmolality": {
          "value": "760"
        },
        "urine_specific_gravity": {
          "value": "1.027",
          "flag": "H"
        },
        "urine_sodium": {
          "value": "18"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "Sodium and chloride are high.",
        "The urine is appropriately concentrated.",
        "BUN and creatinine show volume-related kidney stress.",
        "The pattern is water deficit rather than excess free water."
      ],
      "panels": [
        "renal",
        "urine"
      ]
    },
    {
      "id": "hypernatremic-dehydration-classic",
      "answer": "Hypernatremic dehydration",
      "explanation": "Hypernatremia with concentrated urine and prerenal azotemia supports water deficit from dehydration. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "sodium": {
          "value": "152",
          "flag": "H"
        },
        "chloride": {
          "value": "116",
          "flag": "H"
        },
        "potassium": {
          "value": "4.8"
        },
        "bun": {
          "value": "46",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.9",
          "flag": "H"
        },
        "egfr": {
          "value": "40",
          "flag": "L"
        },
        "urine_osmolality": {
          "value": "920"
        },
        "urine_specific_gravity": {
          "value": "1.032",
          "flag": "H"
        },
        "urine_sodium": {
          "value": "14"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "Sodium and chloride are high.",
        "The urine is appropriately concentrated.",
        "BUN and creatinine show volume-related kidney stress.",
        "The pattern is water deficit rather than excess free water."
      ],
      "panels": [
        "renal",
        "urine"
      ]
    },
    {
      "id": "hypernatremic-dehydration-marked",
      "answer": "Hypernatremic dehydration",
      "explanation": "Hypernatremia with concentrated urine and prerenal azotemia supports water deficit from dehydration. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "sodium": {
          "value": "160",
          "flag": "H"
        },
        "chloride": {
          "value": "124",
          "flag": "H"
        },
        "potassium": {
          "value": "5.1"
        },
        "bun": {
          "value": "72",
          "flag": "H"
        },
        "creatinine": {
          "value": "3.0",
          "flag": "H"
        },
        "egfr": {
          "value": "22",
          "flag": "L"
        },
        "urine_osmolality": {
          "value": "1100"
        },
        "urine_specific_gravity": {
          "value": "1.036",
          "flag": "H"
        },
        "urine_sodium": {
          "value": "10"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "Sodium and chloride are high.",
        "The urine is appropriately concentrated.",
        "BUN and creatinine show volume-related kidney stress.",
        "The pattern is water deficit rather than excess free water."
      ],
      "panels": [
        "renal",
        "urine"
      ]
    },
    {
      "id": "hypernatremic-dehydration-complicated",
      "answer": "Hypernatremic dehydration",
      "explanation": "Hypernatremia with concentrated urine and prerenal azotemia supports water deficit from dehydration. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "sodium": {
          "value": "156",
          "flag": "H"
        },
        "chloride": {
          "value": "120",
          "flag": "H"
        },
        "potassium": {
          "value": "4.9"
        },
        "bun": {
          "value": "58",
          "flag": "H"
        },
        "creatinine": {
          "value": "2.3",
          "flag": "H"
        },
        "egfr": {
          "value": "32",
          "flag": "L"
        },
        "urine_osmolality": {
          "value": "980"
        },
        "urine_specific_gravity": {
          "value": "1.034",
          "flag": "H"
        },
        "urine_sodium": {
          "value": "12"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "Sodium and chloride are high.",
        "The urine is appropriately concentrated.",
        "BUN and creatinine show volume-related kidney stress.",
        "The pattern is water deficit rather than excess free water."
      ],
      "panels": [
        "renal",
        "urine"
      ]
    },
    {
      "id": "hypernatremic-dehydration-follow-up",
      "answer": "Hypernatremic dehydration",
      "explanation": "Hypernatremia with concentrated urine and prerenal azotemia supports water deficit from dehydration. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "sodium": {
          "value": "146",
          "flag": "H"
        },
        "chloride": {
          "value": "109",
          "flag": "H"
        },
        "potassium": {
          "value": "4.4"
        },
        "bun": {
          "value": "28",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.5",
          "flag": "H"
        },
        "egfr": {
          "value": "52",
          "flag": "L"
        },
        "urine_osmolality": {
          "value": "700"
        },
        "urine_specific_gravity": {
          "value": "1.025",
          "flag": "H"
        },
        "urine_sodium": {
          "value": "20"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "Sodium and chloride are high.",
        "The urine is appropriately concentrated.",
        "BUN and creatinine show volume-related kidney stress.",
        "The pattern is water deficit rather than excess free water."
      ],
      "panels": [
        "renal",
        "urine"
      ]
    },
    {
      "id": "type-4-rta-early",
      "answer": "Type 4 renal tubular acidosis",
      "explanation": "Hyperkalemic normal-gap metabolic acidosis with mild kidney impairment supports type 4 renal tubular acidosis. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "blood_gas_ph": {
          "value": "7.31",
          "flag": "L"
        },
        "blood_gas_pco2": {
          "value": "34",
          "flag": "L"
        },
        "bicarbonate": {
          "value": "18",
          "flag": "L"
        },
        "base_excess": {
          "value": "-7",
          "flag": "L"
        },
        "chloride": {
          "value": "110",
          "flag": "H"
        },
        "potassium": {
          "value": "5.4",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.4",
          "flag": "H"
        },
        "egfr": {
          "value": "56",
          "flag": "L"
        },
        "urine_ph": {
          "value": "5.0"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "Potassium is high.",
        "Bicarbonate is low and chloride is high.",
        "Urine pH can remain acidic.",
        "The pattern is tubular acid-base dysfunction rather than ketoacidosis."
      ],
      "panels": [
        "renal",
        "urine",
        "bloodGas"
      ]
    },
    {
      "id": "type-4-rta-classic",
      "answer": "Type 4 renal tubular acidosis",
      "explanation": "Hyperkalemic normal-gap metabolic acidosis with mild kidney impairment supports type 4 renal tubular acidosis. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "blood_gas_ph": {
          "value": "7.28",
          "flag": "L"
        },
        "blood_gas_pco2": {
          "value": "32",
          "flag": "L"
        },
        "bicarbonate": {
          "value": "16",
          "flag": "L"
        },
        "base_excess": {
          "value": "-9",
          "flag": "L"
        },
        "chloride": {
          "value": "113",
          "flag": "H"
        },
        "potassium": {
          "value": "5.8",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.8",
          "flag": "H"
        },
        "egfr": {
          "value": "42",
          "flag": "L"
        },
        "urine_ph": {
          "value": "5.2"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "Potassium is high.",
        "Bicarbonate is low and chloride is high.",
        "Urine pH can remain acidic.",
        "The pattern is tubular acid-base dysfunction rather than ketoacidosis."
      ],
      "panels": [
        "renal",
        "urine",
        "bloodGas"
      ]
    },
    {
      "id": "type-4-rta-marked",
      "answer": "Type 4 renal tubular acidosis",
      "explanation": "Hyperkalemic normal-gap metabolic acidosis with mild kidney impairment supports type 4 renal tubular acidosis. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "blood_gas_ph": {
          "value": "7.22",
          "flag": "L"
        },
        "blood_gas_pco2": {
          "value": "29",
          "flag": "L"
        },
        "bicarbonate": {
          "value": "13",
          "flag": "L"
        },
        "base_excess": {
          "value": "-13",
          "flag": "L"
        },
        "chloride": {
          "value": "118",
          "flag": "H"
        },
        "potassium": {
          "value": "6.3",
          "flag": "H"
        },
        "creatinine": {
          "value": "2.4",
          "flag": "H"
        },
        "egfr": {
          "value": "28",
          "flag": "L"
        },
        "urine_ph": {
          "value": "5.4"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "Potassium is high.",
        "Bicarbonate is low and chloride is high.",
        "Urine pH can remain acidic.",
        "The pattern is tubular acid-base dysfunction rather than ketoacidosis."
      ],
      "panels": [
        "renal",
        "urine",
        "bloodGas"
      ]
    },
    {
      "id": "type-4-rta-complicated",
      "answer": "Type 4 renal tubular acidosis",
      "explanation": "Hyperkalemic normal-gap metabolic acidosis with mild kidney impairment supports type 4 renal tubular acidosis. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "blood_gas_ph": {
          "value": "7.25",
          "flag": "L"
        },
        "blood_gas_pco2": {
          "value": "30",
          "flag": "L"
        },
        "bicarbonate": {
          "value": "15",
          "flag": "L"
        },
        "base_excess": {
          "value": "-11",
          "flag": "L"
        },
        "chloride": {
          "value": "116",
          "flag": "H"
        },
        "potassium": {
          "value": "6.0",
          "flag": "H"
        },
        "creatinine": {
          "value": "2.0",
          "flag": "H"
        },
        "egfr": {
          "value": "36",
          "flag": "L"
        },
        "urine_ph": {
          "value": "5.1"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "Potassium is high.",
        "Bicarbonate is low and chloride is high.",
        "Urine pH can remain acidic.",
        "The pattern is tubular acid-base dysfunction rather than ketoacidosis."
      ],
      "panels": [
        "renal",
        "urine",
        "bloodGas"
      ]
    },
    {
      "id": "type-4-rta-follow-up",
      "answer": "Type 4 renal tubular acidosis",
      "explanation": "Hyperkalemic normal-gap metabolic acidosis with mild kidney impairment supports type 4 renal tubular acidosis. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "blood_gas_ph": {
          "value": "7.33",
          "flag": "L"
        },
        "blood_gas_pco2": {
          "value": "35",
          "flag": "L"
        },
        "bicarbonate": {
          "value": "19",
          "flag": "L"
        },
        "base_excess": {
          "value": "-6",
          "flag": "L"
        },
        "chloride": {
          "value": "109",
          "flag": "H"
        },
        "potassium": {
          "value": "5.2",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.5",
          "flag": "H"
        },
        "egfr": {
          "value": "52",
          "flag": "L"
        },
        "urine_ph": {
          "value": "5.3"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "Potassium is high.",
        "Bicarbonate is low and chloride is high.",
        "Urine pH can remain acidic.",
        "The pattern is tubular acid-base dysfunction rather than ketoacidosis."
      ],
      "panels": [
        "renal",
        "urine",
        "bloodGas"
      ]
    },
    {
      "id": "distal-rta-early",
      "answer": "Distal renal tubular acidosis",
      "explanation": "Hypokalemic normal-gap metabolic acidosis with inappropriately alkaline urine supports distal renal tubular acidosis. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "blood_gas_ph": {
          "value": "7.32",
          "flag": "L"
        },
        "blood_gas_pco2": {
          "value": "33",
          "flag": "L"
        },
        "bicarbonate": {
          "value": "18",
          "flag": "L"
        },
        "base_excess": {
          "value": "-7",
          "flag": "L"
        },
        "chloride": {
          "value": "110",
          "flag": "H"
        },
        "potassium": {
          "value": "3.2",
          "flag": "L"
        },
        "creatinine": {
          "value": "0.9"
        },
        "egfr": {
          "value": "92"
        },
        "urine_ph": {
          "value": "6.2",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "Bicarbonate is low while chloride is high.",
        "Potassium is low rather than high.",
        "Urine pH is inappropriately high.",
        "Kidney filtration can be near normal."
      ],
      "panels": [
        "renal",
        "urine",
        "bloodGas"
      ]
    },
    {
      "id": "distal-rta-classic",
      "answer": "Distal renal tubular acidosis",
      "explanation": "Hypokalemic normal-gap metabolic acidosis with inappropriately alkaline urine supports distal renal tubular acidosis. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "blood_gas_ph": {
          "value": "7.29",
          "flag": "L"
        },
        "blood_gas_pco2": {
          "value": "31",
          "flag": "L"
        },
        "bicarbonate": {
          "value": "15",
          "flag": "L"
        },
        "base_excess": {
          "value": "-10",
          "flag": "L"
        },
        "chloride": {
          "value": "114",
          "flag": "H"
        },
        "potassium": {
          "value": "2.9",
          "flag": "L"
        },
        "creatinine": {
          "value": "1.0"
        },
        "egfr": {
          "value": "84"
        },
        "urine_ph": {
          "value": "6.6",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "Bicarbonate is low while chloride is high.",
        "Potassium is low rather than high.",
        "Urine pH is inappropriately high.",
        "Kidney filtration can be near normal."
      ],
      "panels": [
        "renal",
        "urine",
        "bloodGas"
      ]
    },
    {
      "id": "distal-rta-marked",
      "answer": "Distal renal tubular acidosis",
      "explanation": "Hypokalemic normal-gap metabolic acidosis with inappropriately alkaline urine supports distal renal tubular acidosis. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "blood_gas_ph": {
          "value": "7.24",
          "flag": "L"
        },
        "blood_gas_pco2": {
          "value": "28",
          "flag": "L"
        },
        "bicarbonate": {
          "value": "12",
          "flag": "L"
        },
        "base_excess": {
          "value": "-14",
          "flag": "L"
        },
        "chloride": {
          "value": "119",
          "flag": "H"
        },
        "potassium": {
          "value": "2.5",
          "flag": "L"
        },
        "creatinine": {
          "value": "1.1"
        },
        "egfr": {
          "value": "76"
        },
        "urine_ph": {
          "value": "7.0",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "Bicarbonate is low while chloride is high.",
        "Potassium is low rather than high.",
        "Urine pH is inappropriately high.",
        "Kidney filtration can be near normal."
      ],
      "panels": [
        "renal",
        "urine",
        "bloodGas"
      ]
    },
    {
      "id": "distal-rta-complicated",
      "answer": "Distal renal tubular acidosis",
      "explanation": "Hypokalemic normal-gap metabolic acidosis with inappropriately alkaline urine supports distal renal tubular acidosis. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "blood_gas_ph": {
          "value": "7.27",
          "flag": "L"
        },
        "blood_gas_pco2": {
          "value": "30",
          "flag": "L"
        },
        "bicarbonate": {
          "value": "14",
          "flag": "L"
        },
        "base_excess": {
          "value": "-12",
          "flag": "L"
        },
        "chloride": {
          "value": "116",
          "flag": "H"
        },
        "potassium": {
          "value": "2.7",
          "flag": "L"
        },
        "creatinine": {
          "value": "1.0"
        },
        "egfr": {
          "value": "82"
        },
        "urine_ph": {
          "value": "6.8",
          "flag": "H"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "Bicarbonate is low while chloride is high.",
        "Potassium is low rather than high.",
        "Urine pH is inappropriately high.",
        "Kidney filtration can be near normal."
      ],
      "panels": [
        "renal",
        "urine",
        "bloodGas"
      ]
    },
    {
      "id": "distal-rta-follow-up",
      "answer": "Distal renal tubular acidosis",
      "explanation": "Hypokalemic normal-gap metabolic acidosis with inappropriately alkaline urine supports distal renal tubular acidosis. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "blood_gas_ph": {
          "value": "7.33",
          "flag": "L"
        },
        "blood_gas_pco2": {
          "value": "34",
          "flag": "L"
        },
        "bicarbonate": {
          "value": "19",
          "flag": "L"
        },
        "base_excess": {
          "value": "-6",
          "flag": "L"
        },
        "chloride": {
          "value": "109",
          "flag": "H"
        },
        "potassium": {
          "value": "3.3",
          "flag": "L"
        },
        "creatinine": {
          "value": "0.9"
        },
        "egfr": {
          "value": "95"
        },
        "urine_ph": {
          "value": "6.1",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "Bicarbonate is low while chloride is high.",
        "Potassium is low rather than high.",
        "Urine pH is inappropriately high.",
        "Kidney filtration can be near normal."
      ],
      "panels": [
        "renal",
        "urine",
        "bloodGas"
      ]
    },
    {
      "id": "diabetic-ketoacidosis-early",
      "answer": "Diabetic ketoacidosis",
      "explanation": "Hyperglycemia with ketonuria and high-acuity metabolic acidosis supports diabetic ketoacidosis. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "glucose": {
          "value": "360",
          "flag": "H"
        },
        "sodium": {
          "value": "132",
          "flag": "L"
        },
        "potassium": {
          "value": "5.2",
          "flag": "H"
        },
        "bicarbonate": {
          "value": "16",
          "flag": "L"
        },
        "blood_gas_ph": {
          "value": "7.28",
          "flag": "L"
        },
        "blood_gas_pco2": {
          "value": "30",
          "flag": "L"
        },
        "base_excess": {
          "value": "-10",
          "flag": "L"
        },
        "bun": {
          "value": "26",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.4",
          "flag": "H"
        },
        "egfr": {
          "value": "56",
          "flag": "L"
        },
        "urine_glucose": {
          "value": "3+",
          "flag": "H"
        },
        "urine_ketones": {
          "value": "3+",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "Ketones are strongly positive.",
        "Bicarbonate and pH are low.",
        "Glucose is high but the acid-base pattern is the discriminator.",
        "Potassium may be high before treatment despite total-body deficit."
      ],
      "panels": [
        "cbc",
        "renal",
        "bloodGas",
        "urine"
      ]
    },
    {
      "id": "diabetic-ketoacidosis-classic",
      "answer": "Diabetic ketoacidosis",
      "explanation": "Hyperglycemia with ketonuria and high-acuity metabolic acidosis supports diabetic ketoacidosis. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "glucose": {
          "value": "520",
          "flag": "H"
        },
        "sodium": {
          "value": "129",
          "flag": "L"
        },
        "potassium": {
          "value": "5.8",
          "flag": "H"
        },
        "bicarbonate": {
          "value": "10",
          "flag": "L"
        },
        "blood_gas_ph": {
          "value": "7.18",
          "flag": "L"
        },
        "blood_gas_pco2": {
          "value": "24",
          "flag": "L"
        },
        "base_excess": {
          "value": "-17",
          "flag": "L"
        },
        "bun": {
          "value": "38",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.9",
          "flag": "H"
        },
        "egfr": {
          "value": "40",
          "flag": "L"
        },
        "urine_glucose": {
          "value": "4+",
          "flag": "H"
        },
        "urine_ketones": {
          "value": "4+",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "Ketones are strongly positive.",
        "Bicarbonate and pH are low.",
        "Glucose is high but the acid-base pattern is the discriminator.",
        "Potassium may be high before treatment despite total-body deficit."
      ],
      "panels": [
        "cbc",
        "renal",
        "bloodGas",
        "urine"
      ]
    },
    {
      "id": "diabetic-ketoacidosis-marked",
      "answer": "Diabetic ketoacidosis",
      "explanation": "Hyperglycemia with ketonuria and high-acuity metabolic acidosis supports diabetic ketoacidosis. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "glucose": {
          "value": "780",
          "flag": "H"
        },
        "sodium": {
          "value": "124",
          "flag": "L"
        },
        "potassium": {
          "value": "6.4",
          "flag": "H"
        },
        "bicarbonate": {
          "value": "5",
          "flag": "L"
        },
        "blood_gas_ph": {
          "value": "7.04",
          "flag": "L"
        },
        "blood_gas_pco2": {
          "value": "16",
          "flag": "L"
        },
        "base_excess": {
          "value": "-25",
          "flag": "L"
        },
        "bun": {
          "value": "58",
          "flag": "H"
        },
        "creatinine": {
          "value": "2.8",
          "flag": "H"
        },
        "egfr": {
          "value": "24",
          "flag": "L"
        },
        "urine_glucose": {
          "value": "4+",
          "flag": "H"
        },
        "urine_ketones": {
          "value": "4+",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "Ketones are strongly positive.",
        "Bicarbonate and pH are low.",
        "Glucose is high but the acid-base pattern is the discriminator.",
        "Potassium may be high before treatment despite total-body deficit."
      ],
      "panels": [
        "cbc",
        "renal",
        "bloodGas",
        "urine"
      ]
    },
    {
      "id": "diabetic-ketoacidosis-complicated",
      "answer": "Diabetic ketoacidosis",
      "explanation": "Hyperglycemia with ketonuria and high-acuity metabolic acidosis supports diabetic ketoacidosis. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "glucose": {
          "value": "640",
          "flag": "H"
        },
        "sodium": {
          "value": "127",
          "flag": "L"
        },
        "potassium": {
          "value": "6.0",
          "flag": "H"
        },
        "bicarbonate": {
          "value": "8",
          "flag": "L"
        },
        "blood_gas_ph": {
          "value": "7.10",
          "flag": "L"
        },
        "blood_gas_pco2": {
          "value": "20",
          "flag": "L"
        },
        "base_excess": {
          "value": "-21",
          "flag": "L"
        },
        "bun": {
          "value": "48",
          "flag": "H"
        },
        "creatinine": {
          "value": "2.3",
          "flag": "H"
        },
        "egfr": {
          "value": "32",
          "flag": "L"
        },
        "urine_glucose": {
          "value": "4+",
          "flag": "H"
        },
        "urine_ketones": {
          "value": "4+",
          "flag": "H"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "Ketones are strongly positive.",
        "Bicarbonate and pH are low.",
        "Glucose is high but the acid-base pattern is the discriminator.",
        "Potassium may be high before treatment despite total-body deficit."
      ],
      "panels": [
        "cbc",
        "renal",
        "bloodGas",
        "urine"
      ]
    },
    {
      "id": "diabetic-ketoacidosis-follow-up",
      "answer": "Diabetic ketoacidosis",
      "explanation": "Hyperglycemia with ketonuria and high-acuity metabolic acidosis supports diabetic ketoacidosis. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "glucose": {
          "value": "310",
          "flag": "H"
        },
        "sodium": {
          "value": "134",
          "flag": "L"
        },
        "potassium": {
          "value": "5.0",
          "flag": "H"
        },
        "bicarbonate": {
          "value": "18",
          "flag": "L"
        },
        "blood_gas_ph": {
          "value": "7.31",
          "flag": "L"
        },
        "blood_gas_pco2": {
          "value": "32",
          "flag": "L"
        },
        "base_excess": {
          "value": "-8",
          "flag": "L"
        },
        "bun": {
          "value": "24",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.3",
          "flag": "H"
        },
        "egfr": {
          "value": "60",
          "flag": "L"
        },
        "urine_glucose": {
          "value": "3+",
          "flag": "H"
        },
        "urine_ketones": {
          "value": "2+",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "Ketones are strongly positive.",
        "Bicarbonate and pH are low.",
        "Glucose is high but the acid-base pattern is the discriminator.",
        "Potassium may be high before treatment despite total-body deficit."
      ],
      "panels": [
        "cbc",
        "renal",
        "bloodGas",
        "urine"
      ]
    },
    {
      "id": "hyperosmolar-hyperglycemia-early",
      "answer": "Hyperosmolar hyperglycemia",
      "explanation": "Extreme hyperglycemia with dehydration and little or no ketosis supports hyperosmolar hyperglycemia. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "glucose": {
          "value": "620",
          "flag": "H"
        },
        "hba1c": {
          "value": "11.0",
          "flag": "H"
        },
        "sodium": {
          "value": "146",
          "flag": "H"
        },
        "bicarbonate": {
          "value": "24"
        },
        "blood_gas_ph": {
          "value": "7.37"
        },
        "blood_gas_pco2": {
          "value": "44"
        },
        "bun": {
          "value": "36",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.7",
          "flag": "H"
        },
        "egfr": {
          "value": "46",
          "flag": "L"
        },
        "urine_glucose": {
          "value": "4+",
          "flag": "H"
        },
        "urine_ketones": {
          "value": "Negative"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "Glucose is very high.",
        "Ketones are absent or only trace.",
        "pH and bicarbonate are not severely acidotic.",
        "Sodium, BUN, and creatinine suggest profound water loss."
      ],
      "panels": [
        "renal",
        "bloodGas",
        "urine"
      ]
    },
    {
      "id": "hyperosmolar-hyperglycemia-classic",
      "answer": "Hyperosmolar hyperglycemia",
      "explanation": "Extreme hyperglycemia with dehydration and little or no ketosis supports hyperosmolar hyperglycemia. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "glucose": {
          "value": "840",
          "flag": "H"
        },
        "hba1c": {
          "value": "13.4",
          "flag": "H"
        },
        "sodium": {
          "value": "150",
          "flag": "H"
        },
        "bicarbonate": {
          "value": "22"
        },
        "blood_gas_ph": {
          "value": "7.35"
        },
        "blood_gas_pco2": {
          "value": "42"
        },
        "bun": {
          "value": "54",
          "flag": "H"
        },
        "creatinine": {
          "value": "2.4",
          "flag": "H"
        },
        "egfr": {
          "value": "30",
          "flag": "L"
        },
        "urine_glucose": {
          "value": "4+",
          "flag": "H"
        },
        "urine_ketones": {
          "value": "Trace"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "Glucose is very high.",
        "Ketones are absent or only trace.",
        "pH and bicarbonate are not severely acidotic.",
        "Sodium, BUN, and creatinine suggest profound water loss."
      ],
      "panels": [
        "renal",
        "bloodGas",
        "urine"
      ]
    },
    {
      "id": "hyperosmolar-hyperglycemia-marked",
      "answer": "Hyperosmolar hyperglycemia",
      "explanation": "Extreme hyperglycemia with dehydration and little or no ketosis supports hyperosmolar hyperglycemia. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "glucose": {
          "value": "1120",
          "flag": "H"
        },
        "hba1c": {
          "value": "15.2",
          "flag": "H"
        },
        "sodium": {
          "value": "158",
          "flag": "H"
        },
        "bicarbonate": {
          "value": "21"
        },
        "blood_gas_ph": {
          "value": "7.33"
        },
        "blood_gas_pco2": {
          "value": "40"
        },
        "bun": {
          "value": "82",
          "flag": "H"
        },
        "creatinine": {
          "value": "3.6",
          "flag": "H"
        },
        "egfr": {
          "value": "18",
          "flag": "L"
        },
        "urine_glucose": {
          "value": "4+",
          "flag": "H"
        },
        "urine_ketones": {
          "value": "Trace"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "Glucose is very high.",
        "Ketones are absent or only trace.",
        "pH and bicarbonate are not severely acidotic.",
        "Sodium, BUN, and creatinine suggest profound water loss."
      ],
      "panels": [
        "renal",
        "bloodGas",
        "urine"
      ]
    },
    {
      "id": "hyperosmolar-hyperglycemia-complicated",
      "answer": "Hyperosmolar hyperglycemia",
      "explanation": "Extreme hyperglycemia with dehydration and little or no ketosis supports hyperosmolar hyperglycemia. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "glucose": {
          "value": "960",
          "flag": "H"
        },
        "hba1c": {
          "value": "14.1",
          "flag": "H"
        },
        "sodium": {
          "value": "154",
          "flag": "H"
        },
        "bicarbonate": {
          "value": "23"
        },
        "blood_gas_ph": {
          "value": "7.34"
        },
        "blood_gas_pco2": {
          "value": "41"
        },
        "bun": {
          "value": "66",
          "flag": "H"
        },
        "creatinine": {
          "value": "3.0",
          "flag": "H"
        },
        "egfr": {
          "value": "24",
          "flag": "L"
        },
        "urine_glucose": {
          "value": "4+",
          "flag": "H"
        },
        "urine_ketones": {
          "value": "Negative"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "Glucose is very high.",
        "Ketones are absent or only trace.",
        "pH and bicarbonate are not severely acidotic.",
        "Sodium, BUN, and creatinine suggest profound water loss."
      ],
      "panels": [
        "renal",
        "bloodGas",
        "urine"
      ]
    },
    {
      "id": "hyperosmolar-hyperglycemia-follow-up",
      "answer": "Hyperosmolar hyperglycemia",
      "explanation": "Extreme hyperglycemia with dehydration and little or no ketosis supports hyperosmolar hyperglycemia. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "glucose": {
          "value": "560",
          "flag": "H"
        },
        "hba1c": {
          "value": "10.2",
          "flag": "H"
        },
        "sodium": {
          "value": "144",
          "flag": "H"
        },
        "bicarbonate": {
          "value": "25"
        },
        "blood_gas_ph": {
          "value": "7.38"
        },
        "blood_gas_pco2": {
          "value": "45"
        },
        "bun": {
          "value": "32",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.5",
          "flag": "H"
        },
        "egfr": {
          "value": "52",
          "flag": "L"
        },
        "urine_glucose": {
          "value": "4+",
          "flag": "H"
        },
        "urine_ketones": {
          "value": "Negative"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "Glucose is very high.",
        "Ketones are absent or only trace.",
        "pH and bicarbonate are not severely acidotic.",
        "Sodium, BUN, and creatinine suggest profound water loss."
      ],
      "panels": [
        "renal",
        "bloodGas",
        "urine"
      ]
    },
    {
      "id": "poorly-controlled-diabetes-early",
      "answer": "Poorly controlled diabetes",
      "explanation": "High HbA1c with hyperglycemia, glucosuria, dyslipidemia, and early albuminuria supports poorly controlled diabetes. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "glucose": {
          "value": "186",
          "flag": "H"
        },
        "hba1c": {
          "value": "8.2",
          "flag": "H"
        },
        "triglycerides": {
          "value": "190",
          "flag": "H"
        },
        "hdl": {
          "value": "38",
          "flag": "L"
        },
        "urine_glucose": {
          "value": "1+",
          "flag": "H"
        },
        "urine_acr": {
          "value": "18",
          "flag": "H"
        },
        "creatinine": {
          "value": "0.9"
        },
        "egfr": {
          "value": "92"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "HbA1c shows chronic hyperglycemia.",
        "Urine glucose appears without ketoacidosis.",
        "Albumin/creatinine ratio can be elevated early.",
        "The lipid pattern often travels with insulin resistance."
      ],
      "panels": [
        "renal",
        "urine"
      ]
    },
    {
      "id": "poorly-controlled-diabetes-classic",
      "answer": "Poorly controlled diabetes",
      "explanation": "High HbA1c with hyperglycemia, glucosuria, dyslipidemia, and early albuminuria supports poorly controlled diabetes. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "glucose": {
          "value": "240",
          "flag": "H"
        },
        "hba1c": {
          "value": "10.0",
          "flag": "H"
        },
        "triglycerides": {
          "value": "260",
          "flag": "H"
        },
        "hdl": {
          "value": "34",
          "flag": "L"
        },
        "urine_glucose": {
          "value": "2+",
          "flag": "H"
        },
        "urine_acr": {
          "value": "42",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.0"
        },
        "egfr": {
          "value": "84"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "HbA1c shows chronic hyperglycemia.",
        "Urine glucose appears without ketoacidosis.",
        "Albumin/creatinine ratio can be elevated early.",
        "The lipid pattern often travels with insulin resistance."
      ],
      "panels": [
        "renal",
        "urine"
      ]
    },
    {
      "id": "poorly-controlled-diabetes-marked",
      "answer": "Poorly controlled diabetes",
      "explanation": "High HbA1c with hyperglycemia, glucosuria, dyslipidemia, and early albuminuria supports poorly controlled diabetes. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "glucose": {
          "value": "320",
          "flag": "H"
        },
        "hba1c": {
          "value": "12.4",
          "flag": "H"
        },
        "triglycerides": {
          "value": "380",
          "flag": "H"
        },
        "hdl": {
          "value": "28",
          "flag": "L"
        },
        "urine_glucose": {
          "value": "3+",
          "flag": "H"
        },
        "urine_acr": {
          "value": "110",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.2"
        },
        "egfr": {
          "value": "70"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "HbA1c shows chronic hyperglycemia.",
        "Urine glucose appears without ketoacidosis.",
        "Albumin/creatinine ratio can be elevated early.",
        "The lipid pattern often travels with insulin resistance."
      ],
      "panels": [
        "renal",
        "urine"
      ]
    },
    {
      "id": "poorly-controlled-diabetes-complicated",
      "answer": "Poorly controlled diabetes",
      "explanation": "High HbA1c with hyperglycemia, glucosuria, dyslipidemia, and early albuminuria supports poorly controlled diabetes. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "glucose": {
          "value": "280",
          "flag": "H"
        },
        "hba1c": {
          "value": "11.1",
          "flag": "H"
        },
        "triglycerides": {
          "value": "310",
          "flag": "H"
        },
        "hdl": {
          "value": "31",
          "flag": "L"
        },
        "urine_glucose": {
          "value": "3+",
          "flag": "H"
        },
        "urine_acr": {
          "value": "70",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.1"
        },
        "egfr": {
          "value": "76"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "HbA1c shows chronic hyperglycemia.",
        "Urine glucose appears without ketoacidosis.",
        "Albumin/creatinine ratio can be elevated early.",
        "The lipid pattern often travels with insulin resistance."
      ],
      "panels": [
        "renal",
        "urine"
      ]
    },
    {
      "id": "poorly-controlled-diabetes-follow-up",
      "answer": "Poorly controlled diabetes",
      "explanation": "High HbA1c with hyperglycemia, glucosuria, dyslipidemia, and early albuminuria supports poorly controlled diabetes. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "glucose": {
          "value": "170",
          "flag": "H"
        },
        "hba1c": {
          "value": "7.8",
          "flag": "H"
        },
        "triglycerides": {
          "value": "170",
          "flag": "H"
        },
        "hdl": {
          "value": "39",
          "flag": "L"
        },
        "urine_glucose": {
          "value": "1+",
          "flag": "H"
        },
        "urine_acr": {
          "value": "12",
          "flag": "H"
        },
        "creatinine": {
          "value": "0.9"
        },
        "egfr": {
          "value": "96"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "HbA1c shows chronic hyperglycemia.",
        "Urine glucose appears without ketoacidosis.",
        "Albumin/creatinine ratio can be elevated early.",
        "The lipid pattern often travels with insulin resistance."
      ],
      "panels": [
        "renal",
        "urine"
      ]
    },
    {
      "id": "prediabetes-early",
      "answer": "Prediabetes",
      "explanation": "Borderline HbA1c with mild metabolic dyslipidemia and no glucosuria supports prediabetes. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "glucose": {
          "value": "112"
        },
        "hba1c": {
          "value": "5.8",
          "flag": "H"
        },
        "triglycerides": {
          "value": "155",
          "flag": "H"
        },
        "hdl": {
          "value": "39",
          "flag": "L"
        },
        "urine_glucose": {
          "value": "Negative"
        },
        "urine_acr": {
          "value": "2"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "HbA1c is above normal but not in the marked diabetes range.",
        "Urine glucose remains negative.",
        "Triglycerides and HDL suggest metabolic risk.",
        "There is no ketosis or acute metabolic emergency."
      ],
      "panels": [
        "renal",
        "urine"
      ]
    },
    {
      "id": "prediabetes-classic",
      "answer": "Prediabetes",
      "explanation": "Borderline HbA1c with mild metabolic dyslipidemia and no glucosuria supports prediabetes. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "glucose": {
          "value": "118"
        },
        "hba1c": {
          "value": "6.0",
          "flag": "H"
        },
        "triglycerides": {
          "value": "170",
          "flag": "H"
        },
        "hdl": {
          "value": "37",
          "flag": "L"
        },
        "urine_glucose": {
          "value": "Negative"
        },
        "urine_acr": {
          "value": "3"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "HbA1c is above normal but not in the marked diabetes range.",
        "Urine glucose remains negative.",
        "Triglycerides and HDL suggest metabolic risk.",
        "There is no ketosis or acute metabolic emergency."
      ],
      "panels": [
        "renal",
        "urine"
      ]
    },
    {
      "id": "prediabetes-marked",
      "answer": "Prediabetes",
      "explanation": "Borderline HbA1c with mild metabolic dyslipidemia and no glucosuria supports prediabetes. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "glucose": {
          "value": "128"
        },
        "hba1c": {
          "value": "6.4",
          "flag": "H"
        },
        "triglycerides": {
          "value": "210",
          "flag": "H"
        },
        "hdl": {
          "value": "34",
          "flag": "L"
        },
        "urine_glucose": {
          "value": "Negative"
        },
        "urine_acr": {
          "value": "5"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "HbA1c is above normal but not in the marked diabetes range.",
        "Urine glucose remains negative.",
        "Triglycerides and HDL suggest metabolic risk.",
        "There is no ketosis or acute metabolic emergency."
      ],
      "panels": [
        "renal",
        "urine"
      ]
    },
    {
      "id": "prediabetes-complicated",
      "answer": "Prediabetes",
      "explanation": "Borderline HbA1c with mild metabolic dyslipidemia and no glucosuria supports prediabetes. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "glucose": {
          "value": "122"
        },
        "hba1c": {
          "value": "6.2",
          "flag": "H"
        },
        "triglycerides": {
          "value": "190",
          "flag": "H"
        },
        "hdl": {
          "value": "36",
          "flag": "L"
        },
        "urine_glucose": {
          "value": "Negative"
        },
        "urine_acr": {
          "value": "4"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "HbA1c is above normal but not in the marked diabetes range.",
        "Urine glucose remains negative.",
        "Triglycerides and HDL suggest metabolic risk.",
        "There is no ketosis or acute metabolic emergency."
      ],
      "panels": [
        "renal",
        "urine"
      ]
    },
    {
      "id": "prediabetes-follow-up",
      "answer": "Prediabetes",
      "explanation": "Borderline HbA1c with mild metabolic dyslipidemia and no glucosuria supports prediabetes. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "glucose": {
          "value": "108"
        },
        "hba1c": {
          "value": "5.9",
          "flag": "H"
        },
        "triglycerides": {
          "value": "160",
          "flag": "H"
        },
        "hdl": {
          "value": "38",
          "flag": "L"
        },
        "urine_glucose": {
          "value": "Negative"
        },
        "urine_acr": {
          "value": "2"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "HbA1c is above normal but not in the marked diabetes range.",
        "Urine glucose remains negative.",
        "Triglycerides and HDL suggest metabolic risk.",
        "There is no ketosis or acute metabolic emergency."
      ],
      "panels": [
        "renal",
        "urine"
      ]
    },
    {
      "id": "starvation-ketosis-early",
      "answer": "Starvation ketosis",
      "explanation": "Ketonuria with low or normal glucose and mild metabolic acidosis supports starvation ketosis. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "glucose": {
          "value": "68",
          "flag": "L"
        },
        "bicarbonate": {
          "value": "20",
          "flag": "L"
        },
        "blood_gas_ph": {
          "value": "7.34",
          "flag": "L"
        },
        "blood_gas_pco2": {
          "value": "36",
          "flag": "L"
        },
        "base_excess": {
          "value": "-5",
          "flag": "L"
        },
        "potassium": {
          "value": "4.0"
        },
        "bun": {
          "value": "12"
        },
        "urine_ketones": {
          "value": "2+",
          "flag": "H"
        },
        "urine_glucose": {
          "value": "Negative"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "Ketones are present without hyperglycemia.",
        "The acidosis is usually milder than DKA.",
        "Urine glucose is negative.",
        "BUN may rise only modestly from poor intake or dehydration."
      ],
      "panels": [
        "renal",
        "bloodGas",
        "urine"
      ]
    },
    {
      "id": "starvation-ketosis-classic",
      "answer": "Starvation ketosis",
      "explanation": "Ketonuria with low or normal glucose and mild metabolic acidosis supports starvation ketosis. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "glucose": {
          "value": "62",
          "flag": "L"
        },
        "bicarbonate": {
          "value": "18",
          "flag": "L"
        },
        "blood_gas_ph": {
          "value": "7.31",
          "flag": "L"
        },
        "blood_gas_pco2": {
          "value": "33",
          "flag": "L"
        },
        "base_excess": {
          "value": "-7",
          "flag": "L"
        },
        "potassium": {
          "value": "4.2"
        },
        "bun": {
          "value": "16"
        },
        "urine_ketones": {
          "value": "3+",
          "flag": "H"
        },
        "urine_glucose": {
          "value": "Negative"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "Ketones are present without hyperglycemia.",
        "The acidosis is usually milder than DKA.",
        "Urine glucose is negative.",
        "BUN may rise only modestly from poor intake or dehydration."
      ],
      "panels": [
        "renal",
        "bloodGas",
        "urine"
      ]
    },
    {
      "id": "starvation-ketosis-marked",
      "answer": "Starvation ketosis",
      "explanation": "Ketonuria with low or normal glucose and mild metabolic acidosis supports starvation ketosis. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "glucose": {
          "value": "54",
          "flag": "L"
        },
        "bicarbonate": {
          "value": "15",
          "flag": "L"
        },
        "blood_gas_ph": {
          "value": "7.25",
          "flag": "L"
        },
        "blood_gas_pco2": {
          "value": "29",
          "flag": "L"
        },
        "base_excess": {
          "value": "-11",
          "flag": "L"
        },
        "potassium": {
          "value": "4.5"
        },
        "bun": {
          "value": "22"
        },
        "urine_ketones": {
          "value": "4+",
          "flag": "H"
        },
        "urine_glucose": {
          "value": "Negative"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "Ketones are present without hyperglycemia.",
        "The acidosis is usually milder than DKA.",
        "Urine glucose is negative.",
        "BUN may rise only modestly from poor intake or dehydration."
      ],
      "panels": [
        "renal",
        "bloodGas",
        "urine"
      ]
    },
    {
      "id": "starvation-ketosis-complicated",
      "answer": "Starvation ketosis",
      "explanation": "Ketonuria with low or normal glucose and mild metabolic acidosis supports starvation ketosis. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "glucose": {
          "value": "58",
          "flag": "L"
        },
        "bicarbonate": {
          "value": "17",
          "flag": "L"
        },
        "blood_gas_ph": {
          "value": "7.29",
          "flag": "L"
        },
        "blood_gas_pco2": {
          "value": "31",
          "flag": "L"
        },
        "base_excess": {
          "value": "-9",
          "flag": "L"
        },
        "potassium": {
          "value": "4.3"
        },
        "bun": {
          "value": "18"
        },
        "urine_ketones": {
          "value": "3+",
          "flag": "H"
        },
        "urine_glucose": {
          "value": "Negative"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "Ketones are present without hyperglycemia.",
        "The acidosis is usually milder than DKA.",
        "Urine glucose is negative.",
        "BUN may rise only modestly from poor intake or dehydration."
      ],
      "panels": [
        "renal",
        "bloodGas",
        "urine"
      ]
    },
    {
      "id": "starvation-ketosis-follow-up",
      "answer": "Starvation ketosis",
      "explanation": "Ketonuria with low or normal glucose and mild metabolic acidosis supports starvation ketosis. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "glucose": {
          "value": "70",
          "flag": "L"
        },
        "bicarbonate": {
          "value": "21",
          "flag": "L"
        },
        "blood_gas_ph": {
          "value": "7.35",
          "flag": "L"
        },
        "blood_gas_pco2": {
          "value": "37",
          "flag": "L"
        },
        "base_excess": {
          "value": "-4",
          "flag": "L"
        },
        "potassium": {
          "value": "3.9"
        },
        "bun": {
          "value": "11"
        },
        "urine_ketones": {
          "value": "2+",
          "flag": "H"
        },
        "urine_glucose": {
          "value": "Negative"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "Ketones are present without hyperglycemia.",
        "The acidosis is usually milder than DKA.",
        "Urine glucose is negative.",
        "BUN may rise only modestly from poor intake or dehydration."
      ],
      "panels": [
        "renal",
        "bloodGas",
        "urine"
      ]
    },
    {
      "id": "alcoholic-ketoacidosis-early",
      "answer": "Alcoholic ketoacidosis",
      "explanation": "Ketoacidosis with low or normal glucose plus alcohol-associated liver enzyme pattern supports alcoholic ketoacidosis. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "glucose": {
          "value": "74",
          "flag": "L"
        },
        "bicarbonate": {
          "value": "17",
          "flag": "L"
        },
        "blood_gas_ph": {
          "value": "7.30",
          "flag": "L"
        },
        "blood_gas_pco2": {
          "value": "31",
          "flag": "L"
        },
        "base_excess": {
          "value": "-9",
          "flag": "L"
        },
        "urine_ketones": {
          "value": "3+",
          "flag": "H"
        },
        "urine_glucose": {
          "value": "Negative"
        },
        "ast": {
          "value": "82",
          "flag": "H"
        },
        "alt": {
          "value": "48",
          "flag": "H"
        },
        "ggt": {
          "value": "96",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "Glucose is not high enough for DKA.",
        "Ketones and metabolic acidosis are prominent.",
        "AST and GGT are elevated.",
        "The urine glucose stays negative."
      ],
      "panels": [
        "renal",
        "bloodGas",
        "urine",
        "liver"
      ]
    },
    {
      "id": "alcoholic-ketoacidosis-classic",
      "answer": "Alcoholic ketoacidosis",
      "explanation": "Ketoacidosis with low or normal glucose plus alcohol-associated liver enzyme pattern supports alcoholic ketoacidosis. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "glucose": {
          "value": "68",
          "flag": "L"
        },
        "bicarbonate": {
          "value": "13",
          "flag": "L"
        },
        "blood_gas_ph": {
          "value": "7.22",
          "flag": "L"
        },
        "blood_gas_pco2": {
          "value": "26",
          "flag": "L"
        },
        "base_excess": {
          "value": "-14",
          "flag": "L"
        },
        "urine_ketones": {
          "value": "4+",
          "flag": "H"
        },
        "urine_glucose": {
          "value": "Negative"
        },
        "ast": {
          "value": "120",
          "flag": "H"
        },
        "alt": {
          "value": "62",
          "flag": "H"
        },
        "ggt": {
          "value": "160",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "Glucose is not high enough for DKA.",
        "Ketones and metabolic acidosis are prominent.",
        "AST and GGT are elevated.",
        "The urine glucose stays negative."
      ],
      "panels": [
        "renal",
        "bloodGas",
        "urine",
        "liver"
      ]
    },
    {
      "id": "alcoholic-ketoacidosis-marked",
      "answer": "Alcoholic ketoacidosis",
      "explanation": "Ketoacidosis with low or normal glucose plus alcohol-associated liver enzyme pattern supports alcoholic ketoacidosis. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "glucose": {
          "value": "58",
          "flag": "L"
        },
        "bicarbonate": {
          "value": "8",
          "flag": "L"
        },
        "blood_gas_ph": {
          "value": "7.12",
          "flag": "L"
        },
        "blood_gas_pco2": {
          "value": "20",
          "flag": "L"
        },
        "base_excess": {
          "value": "-22",
          "flag": "L"
        },
        "urine_ketones": {
          "value": "4+",
          "flag": "H"
        },
        "urine_glucose": {
          "value": "Negative"
        },
        "ast": {
          "value": "190",
          "flag": "H"
        },
        "alt": {
          "value": "88",
          "flag": "H"
        },
        "ggt": {
          "value": "260",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "Glucose is not high enough for DKA.",
        "Ketones and metabolic acidosis are prominent.",
        "AST and GGT are elevated.",
        "The urine glucose stays negative."
      ],
      "panels": [
        "renal",
        "bloodGas",
        "urine",
        "liver"
      ]
    },
    {
      "id": "alcoholic-ketoacidosis-complicated",
      "answer": "Alcoholic ketoacidosis",
      "explanation": "Ketoacidosis with low or normal glucose plus alcohol-associated liver enzyme pattern supports alcoholic ketoacidosis. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "glucose": {
          "value": "62",
          "flag": "L"
        },
        "bicarbonate": {
          "value": "11",
          "flag": "L"
        },
        "blood_gas_ph": {
          "value": "7.18",
          "flag": "L"
        },
        "blood_gas_pco2": {
          "value": "23",
          "flag": "L"
        },
        "base_excess": {
          "value": "-18",
          "flag": "L"
        },
        "urine_ketones": {
          "value": "4+",
          "flag": "H"
        },
        "urine_glucose": {
          "value": "Negative"
        },
        "ast": {
          "value": "150",
          "flag": "H"
        },
        "alt": {
          "value": "74",
          "flag": "H"
        },
        "ggt": {
          "value": "210",
          "flag": "H"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "Glucose is not high enough for DKA.",
        "Ketones and metabolic acidosis are prominent.",
        "AST and GGT are elevated.",
        "The urine glucose stays negative."
      ],
      "panels": [
        "renal",
        "bloodGas",
        "urine",
        "liver"
      ]
    },
    {
      "id": "alcoholic-ketoacidosis-follow-up",
      "answer": "Alcoholic ketoacidosis",
      "explanation": "Ketoacidosis with low or normal glucose plus alcohol-associated liver enzyme pattern supports alcoholic ketoacidosis. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "glucose": {
          "value": "80",
          "flag": "L"
        },
        "bicarbonate": {
          "value": "18",
          "flag": "L"
        },
        "blood_gas_ph": {
          "value": "7.32",
          "flag": "L"
        },
        "blood_gas_pco2": {
          "value": "33",
          "flag": "L"
        },
        "base_excess": {
          "value": "-8",
          "flag": "L"
        },
        "urine_ketones": {
          "value": "2+",
          "flag": "H"
        },
        "urine_glucose": {
          "value": "Negative"
        },
        "ast": {
          "value": "76",
          "flag": "H"
        },
        "alt": {
          "value": "44",
          "flag": "H"
        },
        "ggt": {
          "value": "84",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "Glucose is not high enough for DKA.",
        "Ketones and metabolic acidosis are prominent.",
        "AST and GGT are elevated.",
        "The urine glucose stays negative."
      ],
      "panels": [
        "renal",
        "bloodGas",
        "urine",
        "liver"
      ]
    },
    {
      "id": "high-anion-gap-metabolic-acidosis-early",
      "answer": "High anion gap metabolic acidosis",
      "explanation": "Low pH and bicarbonate with respiratory compensation and no dominant ketosis pattern supports high anion gap metabolic acidosis. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "blood_gas_ph": {
          "value": "7.29",
          "flag": "L"
        },
        "blood_gas_pco2": {
          "value": "30",
          "flag": "L"
        },
        "bicarbonate": {
          "value": "15",
          "flag": "L"
        },
        "base_excess": {
          "value": "-11",
          "flag": "L"
        },
        "potassium": {
          "value": "5.2",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.5",
          "flag": "H"
        },
        "egfr": {
          "value": "52",
          "flag": "L"
        },
        "crp": {
          "value": "46",
          "flag": "H"
        },
        "glucose": {
          "value": "110"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "The pH and bicarbonate are both low.",
        "pCO2 is low from respiratory compensation.",
        "Glucose is not high enough to define DKA.",
        "Kidney or systemic illness markers provide context."
      ],
      "panels": [
        "renal",
        "bloodGas",
        "inflammation"
      ]
    },
    {
      "id": "high-anion-gap-metabolic-acidosis-classic",
      "answer": "High anion gap metabolic acidosis",
      "explanation": "Low pH and bicarbonate with respiratory compensation and no dominant ketosis pattern supports high anion gap metabolic acidosis. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "blood_gas_ph": {
          "value": "7.20",
          "flag": "L"
        },
        "blood_gas_pco2": {
          "value": "24",
          "flag": "L"
        },
        "bicarbonate": {
          "value": "10",
          "flag": "L"
        },
        "base_excess": {
          "value": "-17",
          "flag": "L"
        },
        "potassium": {
          "value": "5.6",
          "flag": "H"
        },
        "creatinine": {
          "value": "2.2",
          "flag": "H"
        },
        "egfr": {
          "value": "34",
          "flag": "L"
        },
        "crp": {
          "value": "90",
          "flag": "H"
        },
        "glucose": {
          "value": "125"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "The pH and bicarbonate are both low.",
        "pCO2 is low from respiratory compensation.",
        "Glucose is not high enough to define DKA.",
        "Kidney or systemic illness markers provide context."
      ],
      "panels": [
        "renal",
        "bloodGas",
        "inflammation"
      ]
    },
    {
      "id": "high-anion-gap-metabolic-acidosis-marked",
      "answer": "High anion gap metabolic acidosis",
      "explanation": "Low pH and bicarbonate with respiratory compensation and no dominant ketosis pattern supports high anion gap metabolic acidosis. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "blood_gas_ph": {
          "value": "7.08",
          "flag": "L"
        },
        "blood_gas_pco2": {
          "value": "16",
          "flag": "L"
        },
        "bicarbonate": {
          "value": "5",
          "flag": "L"
        },
        "base_excess": {
          "value": "-25",
          "flag": "L"
        },
        "potassium": {
          "value": "6.0",
          "flag": "H"
        },
        "creatinine": {
          "value": "3.4",
          "flag": "H"
        },
        "egfr": {
          "value": "20",
          "flag": "L"
        },
        "crp": {
          "value": "160",
          "flag": "H"
        },
        "glucose": {
          "value": "140"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "The pH and bicarbonate are both low.",
        "pCO2 is low from respiratory compensation.",
        "Glucose is not high enough to define DKA.",
        "Kidney or systemic illness markers provide context."
      ],
      "panels": [
        "renal",
        "bloodGas",
        "inflammation"
      ]
    },
    {
      "id": "high-anion-gap-metabolic-acidosis-complicated",
      "answer": "High anion gap metabolic acidosis",
      "explanation": "Low pH and bicarbonate with respiratory compensation and no dominant ketosis pattern supports high anion gap metabolic acidosis. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "blood_gas_ph": {
          "value": "7.15",
          "flag": "L"
        },
        "blood_gas_pco2": {
          "value": "20",
          "flag": "L"
        },
        "bicarbonate": {
          "value": "8",
          "flag": "L"
        },
        "base_excess": {
          "value": "-21",
          "flag": "L"
        },
        "potassium": {
          "value": "5.8",
          "flag": "H"
        },
        "creatinine": {
          "value": "2.8",
          "flag": "H"
        },
        "egfr": {
          "value": "26",
          "flag": "L"
        },
        "crp": {
          "value": "120",
          "flag": "H"
        },
        "glucose": {
          "value": "118"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "The pH and bicarbonate are both low.",
        "pCO2 is low from respiratory compensation.",
        "Glucose is not high enough to define DKA.",
        "Kidney or systemic illness markers provide context."
      ],
      "panels": [
        "renal",
        "bloodGas",
        "inflammation"
      ]
    },
    {
      "id": "high-anion-gap-metabolic-acidosis-follow-up",
      "answer": "High anion gap metabolic acidosis",
      "explanation": "Low pH and bicarbonate with respiratory compensation and no dominant ketosis pattern supports high anion gap metabolic acidosis. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "blood_gas_ph": {
          "value": "7.31",
          "flag": "L"
        },
        "blood_gas_pco2": {
          "value": "32",
          "flag": "L"
        },
        "bicarbonate": {
          "value": "17",
          "flag": "L"
        },
        "base_excess": {
          "value": "-9",
          "flag": "L"
        },
        "potassium": {
          "value": "5.0",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.4",
          "flag": "H"
        },
        "egfr": {
          "value": "56",
          "flag": "L"
        },
        "crp": {
          "value": "38",
          "flag": "H"
        },
        "glucose": {
          "value": "104"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "The pH and bicarbonate are both low.",
        "pCO2 is low from respiratory compensation.",
        "Glucose is not high enough to define DKA.",
        "Kidney or systemic illness markers provide context."
      ],
      "panels": [
        "renal",
        "bloodGas",
        "inflammation"
      ]
    },
    {
      "id": "normal-gap-metabolic-acidosis-early",
      "answer": "Normal anion gap metabolic acidosis",
      "explanation": "Hyperchloremic metabolic acidosis with low bicarbonate, low potassium, and absent ketones supports a normal-gap pattern. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "blood_gas_ph": {
          "value": "7.32",
          "flag": "L"
        },
        "blood_gas_pco2": {
          "value": "34",
          "flag": "L"
        },
        "bicarbonate": {
          "value": "18",
          "flag": "L"
        },
        "base_excess": {
          "value": "-7",
          "flag": "L"
        },
        "chloride": {
          "value": "111",
          "flag": "H"
        },
        "potassium": {
          "value": "3.3",
          "flag": "L"
        },
        "creatinine": {
          "value": "0.9"
        },
        "egfr": {
          "value": "92"
        },
        "urine_ketones": {
          "value": "Negative"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "Chloride is high as bicarbonate falls.",
        "Ketones are absent.",
        "Potassium tends to be low in gastrointestinal bicarbonate loss.",
        "Respiratory compensation lowers pCO2."
      ],
      "panels": [
        "renal",
        "bloodGas",
        "urine"
      ]
    },
    {
      "id": "normal-gap-metabolic-acidosis-classic",
      "answer": "Normal anion gap metabolic acidosis",
      "explanation": "Hyperchloremic metabolic acidosis with low bicarbonate, low potassium, and absent ketones supports a normal-gap pattern. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "blood_gas_ph": {
          "value": "7.28",
          "flag": "L"
        },
        "blood_gas_pco2": {
          "value": "31",
          "flag": "L"
        },
        "bicarbonate": {
          "value": "15",
          "flag": "L"
        },
        "base_excess": {
          "value": "-10",
          "flag": "L"
        },
        "chloride": {
          "value": "115",
          "flag": "H"
        },
        "potassium": {
          "value": "3.0",
          "flag": "L"
        },
        "creatinine": {
          "value": "1.0"
        },
        "egfr": {
          "value": "84"
        },
        "urine_ketones": {
          "value": "Negative"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "Chloride is high as bicarbonate falls.",
        "Ketones are absent.",
        "Potassium tends to be low in gastrointestinal bicarbonate loss.",
        "Respiratory compensation lowers pCO2."
      ],
      "panels": [
        "renal",
        "bloodGas",
        "urine"
      ]
    },
    {
      "id": "normal-gap-metabolic-acidosis-marked",
      "answer": "Normal anion gap metabolic acidosis",
      "explanation": "Hyperchloremic metabolic acidosis with low bicarbonate, low potassium, and absent ketones supports a normal-gap pattern. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "blood_gas_ph": {
          "value": "7.20",
          "flag": "L"
        },
        "blood_gas_pco2": {
          "value": "27",
          "flag": "L"
        },
        "bicarbonate": {
          "value": "11",
          "flag": "L"
        },
        "base_excess": {
          "value": "-16",
          "flag": "L"
        },
        "chloride": {
          "value": "121",
          "flag": "H"
        },
        "potassium": {
          "value": "2.6",
          "flag": "L"
        },
        "creatinine": {
          "value": "1.1"
        },
        "egfr": {
          "value": "76"
        },
        "urine_ketones": {
          "value": "Negative"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "Chloride is high as bicarbonate falls.",
        "Ketones are absent.",
        "Potassium tends to be low in gastrointestinal bicarbonate loss.",
        "Respiratory compensation lowers pCO2."
      ],
      "panels": [
        "renal",
        "bloodGas",
        "urine"
      ]
    },
    {
      "id": "normal-gap-metabolic-acidosis-complicated",
      "answer": "Normal anion gap metabolic acidosis",
      "explanation": "Hyperchloremic metabolic acidosis with low bicarbonate, low potassium, and absent ketones supports a normal-gap pattern. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "blood_gas_ph": {
          "value": "7.25",
          "flag": "L"
        },
        "blood_gas_pco2": {
          "value": "29",
          "flag": "L"
        },
        "bicarbonate": {
          "value": "13",
          "flag": "L"
        },
        "base_excess": {
          "value": "-13",
          "flag": "L"
        },
        "chloride": {
          "value": "118",
          "flag": "H"
        },
        "potassium": {
          "value": "2.8",
          "flag": "L"
        },
        "creatinine": {
          "value": "1.0"
        },
        "egfr": {
          "value": "82"
        },
        "urine_ketones": {
          "value": "Negative"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "Chloride is high as bicarbonate falls.",
        "Ketones are absent.",
        "Potassium tends to be low in gastrointestinal bicarbonate loss.",
        "Respiratory compensation lowers pCO2."
      ],
      "panels": [
        "renal",
        "bloodGas",
        "urine"
      ]
    },
    {
      "id": "normal-gap-metabolic-acidosis-follow-up",
      "answer": "Normal anion gap metabolic acidosis",
      "explanation": "Hyperchloremic metabolic acidosis with low bicarbonate, low potassium, and absent ketones supports a normal-gap pattern. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "blood_gas_ph": {
          "value": "7.34",
          "flag": "L"
        },
        "blood_gas_pco2": {
          "value": "35",
          "flag": "L"
        },
        "bicarbonate": {
          "value": "19",
          "flag": "L"
        },
        "base_excess": {
          "value": "-6",
          "flag": "L"
        },
        "chloride": {
          "value": "110",
          "flag": "H"
        },
        "potassium": {
          "value": "3.4",
          "flag": "L"
        },
        "creatinine": {
          "value": "0.9"
        },
        "egfr": {
          "value": "96"
        },
        "urine_ketones": {
          "value": "Negative"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "Chloride is high as bicarbonate falls.",
        "Ketones are absent.",
        "Potassium tends to be low in gastrointestinal bicarbonate loss.",
        "Respiratory compensation lowers pCO2."
      ],
      "panels": [
        "renal",
        "bloodGas",
        "urine"
      ]
    },
    {
      "id": "metabolic-alkalosis-early",
      "answer": "Metabolic alkalosis",
      "explanation": "High pH and bicarbonate with hypochloremia and hypokalemia supports metabolic alkalosis. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "blood_gas_ph": {
          "value": "7.47",
          "flag": "H"
        },
        "blood_gas_pco2": {
          "value": "50",
          "flag": "H"
        },
        "bicarbonate": {
          "value": "34",
          "flag": "H"
        },
        "base_excess": {
          "value": "9",
          "flag": "H"
        },
        "chloride": {
          "value": "94",
          "flag": "L"
        },
        "potassium": {
          "value": "3.2",
          "flag": "L"
        },
        "sodium": {
          "value": "140"
        },
        "urine_specific_gravity": {
          "value": "1.024",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "Bicarbonate is high rather than low.",
        "pCO2 rises as compensation.",
        "Chloride and potassium are low.",
        "The pattern fits vomiting, diuresis, or mineralocorticoid effect depending on context."
      ],
      "panels": [
        "renal",
        "bloodGas",
        "urine"
      ]
    },
    {
      "id": "metabolic-alkalosis-classic",
      "answer": "Metabolic alkalosis",
      "explanation": "High pH and bicarbonate with hypochloremia and hypokalemia supports metabolic alkalosis. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "blood_gas_ph": {
          "value": "7.52",
          "flag": "H"
        },
        "blood_gas_pco2": {
          "value": "55",
          "flag": "H"
        },
        "bicarbonate": {
          "value": "39",
          "flag": "H"
        },
        "base_excess": {
          "value": "14",
          "flag": "H"
        },
        "chloride": {
          "value": "88",
          "flag": "L"
        },
        "potassium": {
          "value": "2.9",
          "flag": "L"
        },
        "sodium": {
          "value": "139"
        },
        "urine_specific_gravity": {
          "value": "1.028",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "Bicarbonate is high rather than low.",
        "pCO2 rises as compensation.",
        "Chloride and potassium are low.",
        "The pattern fits vomiting, diuresis, or mineralocorticoid effect depending on context."
      ],
      "panels": [
        "renal",
        "bloodGas",
        "urine"
      ]
    },
    {
      "id": "metabolic-alkalosis-marked",
      "answer": "Metabolic alkalosis",
      "explanation": "High pH and bicarbonate with hypochloremia and hypokalemia supports metabolic alkalosis. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "blood_gas_ph": {
          "value": "7.58",
          "flag": "H"
        },
        "blood_gas_pco2": {
          "value": "62",
          "flag": "H"
        },
        "bicarbonate": {
          "value": "46",
          "flag": "H"
        },
        "base_excess": {
          "value": "21",
          "flag": "H"
        },
        "chloride": {
          "value": "78",
          "flag": "L"
        },
        "potassium": {
          "value": "2.4",
          "flag": "L"
        },
        "sodium": {
          "value": "136"
        },
        "urine_specific_gravity": {
          "value": "1.032",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "Bicarbonate is high rather than low.",
        "pCO2 rises as compensation.",
        "Chloride and potassium are low.",
        "The pattern fits vomiting, diuresis, or mineralocorticoid effect depending on context."
      ],
      "panels": [
        "renal",
        "bloodGas",
        "urine"
      ]
    },
    {
      "id": "metabolic-alkalosis-complicated",
      "answer": "Metabolic alkalosis",
      "explanation": "High pH and bicarbonate with hypochloremia and hypokalemia supports metabolic alkalosis. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "blood_gas_ph": {
          "value": "7.55",
          "flag": "H"
        },
        "blood_gas_pco2": {
          "value": "58",
          "flag": "H"
        },
        "bicarbonate": {
          "value": "42",
          "flag": "H"
        },
        "base_excess": {
          "value": "17",
          "flag": "H"
        },
        "chloride": {
          "value": "84",
          "flag": "L"
        },
        "potassium": {
          "value": "2.7",
          "flag": "L"
        },
        "sodium": {
          "value": "138"
        },
        "urine_specific_gravity": {
          "value": "1.030",
          "flag": "H"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "Bicarbonate is high rather than low.",
        "pCO2 rises as compensation.",
        "Chloride and potassium are low.",
        "The pattern fits vomiting, diuresis, or mineralocorticoid effect depending on context."
      ],
      "panels": [
        "renal",
        "bloodGas",
        "urine"
      ]
    },
    {
      "id": "metabolic-alkalosis-follow-up",
      "answer": "Metabolic alkalosis",
      "explanation": "High pH and bicarbonate with hypochloremia and hypokalemia supports metabolic alkalosis. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "blood_gas_ph": {
          "value": "7.45",
          "flag": "H"
        },
        "blood_gas_pco2": {
          "value": "48",
          "flag": "H"
        },
        "bicarbonate": {
          "value": "32",
          "flag": "H"
        },
        "base_excess": {
          "value": "7",
          "flag": "H"
        },
        "chloride": {
          "value": "96",
          "flag": "L"
        },
        "potassium": {
          "value": "3.3",
          "flag": "L"
        },
        "sodium": {
          "value": "141"
        },
        "urine_specific_gravity": {
          "value": "1.022",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "Bicarbonate is high rather than low.",
        "pCO2 rises as compensation.",
        "Chloride and potassium are low.",
        "The pattern fits vomiting, diuresis, or mineralocorticoid effect depending on context."
      ],
      "panels": [
        "renal",
        "bloodGas",
        "urine"
      ]
    },
    {
      "id": "respiratory-acidosis-early",
      "answer": "Respiratory acidosis",
      "explanation": "Acidemia with high pCO2 and renal bicarbonate retention supports respiratory acidosis. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "blood_gas_ph": {
          "value": "7.31",
          "flag": "L"
        },
        "blood_gas_pco2": {
          "value": "58",
          "flag": "H"
        },
        "bicarbonate": {
          "value": "29",
          "flag": "H"
        },
        "base_excess": {
          "value": "4",
          "flag": "H"
        },
        "chloride": {
          "value": "97",
          "flag": "L"
        },
        "potassium": {
          "value": "4.4"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "The primary abnormality is elevated pCO2.",
        "Bicarbonate is high when compensation is present.",
        "The pH remains low in decompensated cases.",
        "This differs from metabolic acidosis, where pCO2 falls."
      ],
      "panels": [
        "renal",
        "bloodGas"
      ]
    },
    {
      "id": "respiratory-acidosis-classic",
      "answer": "Respiratory acidosis",
      "explanation": "Acidemia with high pCO2 and renal bicarbonate retention supports respiratory acidosis. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "blood_gas_ph": {
          "value": "7.27",
          "flag": "L"
        },
        "blood_gas_pco2": {
          "value": "68",
          "flag": "H"
        },
        "bicarbonate": {
          "value": "32",
          "flag": "H"
        },
        "base_excess": {
          "value": "6",
          "flag": "H"
        },
        "chloride": {
          "value": "94",
          "flag": "L"
        },
        "potassium": {
          "value": "4.8"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "The primary abnormality is elevated pCO2.",
        "Bicarbonate is high when compensation is present.",
        "The pH remains low in decompensated cases.",
        "This differs from metabolic acidosis, where pCO2 falls."
      ],
      "panels": [
        "renal",
        "bloodGas"
      ]
    },
    {
      "id": "respiratory-acidosis-marked",
      "answer": "Respiratory acidosis",
      "explanation": "Acidemia with high pCO2 and renal bicarbonate retention supports respiratory acidosis. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "blood_gas_ph": {
          "value": "7.18",
          "flag": "L"
        },
        "blood_gas_pco2": {
          "value": "88",
          "flag": "H"
        },
        "bicarbonate": {
          "value": "36",
          "flag": "H"
        },
        "base_excess": {
          "value": "9",
          "flag": "H"
        },
        "chloride": {
          "value": "90",
          "flag": "L"
        },
        "potassium": {
          "value": "5.1"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "The primary abnormality is elevated pCO2.",
        "Bicarbonate is high when compensation is present.",
        "The pH remains low in decompensated cases.",
        "This differs from metabolic acidosis, where pCO2 falls."
      ],
      "panels": [
        "renal",
        "bloodGas"
      ]
    },
    {
      "id": "respiratory-acidosis-complicated",
      "answer": "Respiratory acidosis",
      "explanation": "Acidemia with high pCO2 and renal bicarbonate retention supports respiratory acidosis. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "blood_gas_ph": {
          "value": "7.22",
          "flag": "L"
        },
        "blood_gas_pco2": {
          "value": "76",
          "flag": "H"
        },
        "bicarbonate": {
          "value": "34",
          "flag": "H"
        },
        "base_excess": {
          "value": "8",
          "flag": "H"
        },
        "chloride": {
          "value": "92",
          "flag": "L"
        },
        "potassium": {
          "value": "4.9"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "The primary abnormality is elevated pCO2.",
        "Bicarbonate is high when compensation is present.",
        "The pH remains low in decompensated cases.",
        "This differs from metabolic acidosis, where pCO2 falls."
      ],
      "panels": [
        "renal",
        "bloodGas"
      ]
    },
    {
      "id": "respiratory-acidosis-follow-up",
      "answer": "Respiratory acidosis",
      "explanation": "Acidemia with high pCO2 and renal bicarbonate retention supports respiratory acidosis. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "blood_gas_ph": {
          "value": "7.33",
          "flag": "L"
        },
        "blood_gas_pco2": {
          "value": "55",
          "flag": "H"
        },
        "bicarbonate": {
          "value": "28",
          "flag": "H"
        },
        "base_excess": {
          "value": "3",
          "flag": "H"
        },
        "chloride": {
          "value": "98",
          "flag": "L"
        },
        "potassium": {
          "value": "4.3"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "The primary abnormality is elevated pCO2.",
        "Bicarbonate is high when compensation is present.",
        "The pH remains low in decompensated cases.",
        "This differs from metabolic acidosis, where pCO2 falls."
      ],
      "panels": [
        "renal",
        "bloodGas"
      ]
    },
    {
      "id": "respiratory-alkalosis-early",
      "answer": "Respiratory alkalosis",
      "explanation": "Alkalemia with low pCO2 and modest bicarbonate reduction supports respiratory alkalosis. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "blood_gas_ph": {
          "value": "7.46",
          "flag": "H"
        },
        "blood_gas_pco2": {
          "value": "31",
          "flag": "L"
        },
        "bicarbonate": {
          "value": "21",
          "flag": "L"
        },
        "base_excess": {
          "value": "-3",
          "flag": "L"
        },
        "potassium": {
          "value": "3.4",
          "flag": "L"
        },
        "chloride": {
          "value": "108",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "The pCO2 is the primary low value.",
        "The pH is high.",
        "Bicarbonate may fall as compensation develops.",
        "This differs from metabolic alkalosis, where bicarbonate is high."
      ],
      "panels": [
        "renal",
        "bloodGas"
      ]
    },
    {
      "id": "respiratory-alkalosis-classic",
      "answer": "Respiratory alkalosis",
      "explanation": "Alkalemia with low pCO2 and modest bicarbonate reduction supports respiratory alkalosis. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "blood_gas_ph": {
          "value": "7.51",
          "flag": "H"
        },
        "blood_gas_pco2": {
          "value": "26",
          "flag": "L"
        },
        "bicarbonate": {
          "value": "19",
          "flag": "L"
        },
        "base_excess": {
          "value": "-5",
          "flag": "L"
        },
        "potassium": {
          "value": "3.2",
          "flag": "L"
        },
        "chloride": {
          "value": "110",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "The pCO2 is the primary low value.",
        "The pH is high.",
        "Bicarbonate may fall as compensation develops.",
        "This differs from metabolic alkalosis, where bicarbonate is high."
      ],
      "panels": [
        "renal",
        "bloodGas"
      ]
    },
    {
      "id": "respiratory-alkalosis-marked",
      "answer": "Respiratory alkalosis",
      "explanation": "Alkalemia with low pCO2 and modest bicarbonate reduction supports respiratory alkalosis. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "blood_gas_ph": {
          "value": "7.58",
          "flag": "H"
        },
        "blood_gas_pco2": {
          "value": "19",
          "flag": "L"
        },
        "bicarbonate": {
          "value": "17",
          "flag": "L"
        },
        "base_excess": {
          "value": "-7",
          "flag": "L"
        },
        "potassium": {
          "value": "2.9",
          "flag": "L"
        },
        "chloride": {
          "value": "113",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "The pCO2 is the primary low value.",
        "The pH is high.",
        "Bicarbonate may fall as compensation develops.",
        "This differs from metabolic alkalosis, where bicarbonate is high."
      ],
      "panels": [
        "renal",
        "bloodGas"
      ]
    },
    {
      "id": "respiratory-alkalosis-complicated",
      "answer": "Respiratory alkalosis",
      "explanation": "Alkalemia with low pCO2 and modest bicarbonate reduction supports respiratory alkalosis. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "blood_gas_ph": {
          "value": "7.54",
          "flag": "H"
        },
        "blood_gas_pco2": {
          "value": "22",
          "flag": "L"
        },
        "bicarbonate": {
          "value": "18",
          "flag": "L"
        },
        "base_excess": {
          "value": "-6",
          "flag": "L"
        },
        "potassium": {
          "value": "3.0",
          "flag": "L"
        },
        "chloride": {
          "value": "111",
          "flag": "H"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "The pCO2 is the primary low value.",
        "The pH is high.",
        "Bicarbonate may fall as compensation develops.",
        "This differs from metabolic alkalosis, where bicarbonate is high."
      ],
      "panels": [
        "renal",
        "bloodGas"
      ]
    },
    {
      "id": "respiratory-alkalosis-follow-up",
      "answer": "Respiratory alkalosis",
      "explanation": "Alkalemia with low pCO2 and modest bicarbonate reduction supports respiratory alkalosis. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "blood_gas_ph": {
          "value": "7.45",
          "flag": "H"
        },
        "blood_gas_pco2": {
          "value": "33",
          "flag": "L"
        },
        "bicarbonate": {
          "value": "22",
          "flag": "L"
        },
        "base_excess": {
          "value": "-2",
          "flag": "L"
        },
        "potassium": {
          "value": "3.5",
          "flag": "L"
        },
        "chloride": {
          "value": "107",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "The pCO2 is the primary low value.",
        "The pH is high.",
        "Bicarbonate may fall as compensation develops.",
        "This differs from metabolic alkalosis, where bicarbonate is high."
      ],
      "panels": [
        "renal",
        "bloodGas"
      ]
    },
    {
      "id": "mixed-metabolic-acidosis-alkalosis-early",
      "answer": "Mixed metabolic acidosis and alkalosis",
      "explanation": "Near-normal pH with low bicarbonate, low chloride, hypokalemia, glucosuria, and ketonuria supports mixed metabolic acidosis and alkalosis. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "glucose": {
          "value": "290",
          "flag": "H"
        },
        "blood_gas_ph": {
          "value": "7.38"
        },
        "blood_gas_pco2": {
          "value": "32",
          "flag": "L"
        },
        "bicarbonate": {
          "value": "18",
          "flag": "L"
        },
        "base_excess": {
          "value": "-6",
          "flag": "L"
        },
        "chloride": {
          "value": "94",
          "flag": "L"
        },
        "potassium": {
          "value": "3.4",
          "flag": "L"
        },
        "urine_glucose": {
          "value": "2+",
          "flag": "H"
        },
        "urine_ketones": {
          "value": "2+",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "The pH looks deceptively near normal.",
        "Bicarbonate is low but chloride is also low.",
        "Ketones suggest an acidosis component.",
        "Hypochloremia and hypokalemia suggest a concurrent alkalosis component."
      ],
      "panels": [
        "renal",
        "bloodGas",
        "urine"
      ]
    },
    {
      "id": "mixed-metabolic-acidosis-alkalosis-classic",
      "answer": "Mixed metabolic acidosis and alkalosis",
      "explanation": "Near-normal pH with low bicarbonate, low chloride, hypokalemia, glucosuria, and ketonuria supports mixed metabolic acidosis and alkalosis. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "glucose": {
          "value": "420",
          "flag": "H"
        },
        "blood_gas_ph": {
          "value": "7.36"
        },
        "blood_gas_pco2": {
          "value": "29",
          "flag": "L"
        },
        "bicarbonate": {
          "value": "16",
          "flag": "L"
        },
        "base_excess": {
          "value": "-8",
          "flag": "L"
        },
        "chloride": {
          "value": "90",
          "flag": "L"
        },
        "potassium": {
          "value": "3.0",
          "flag": "L"
        },
        "urine_glucose": {
          "value": "3+",
          "flag": "H"
        },
        "urine_ketones": {
          "value": "3+",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "The pH looks deceptively near normal.",
        "Bicarbonate is low but chloride is also low.",
        "Ketones suggest an acidosis component.",
        "Hypochloremia and hypokalemia suggest a concurrent alkalosis component."
      ],
      "panels": [
        "renal",
        "bloodGas",
        "urine"
      ]
    },
    {
      "id": "mixed-metabolic-acidosis-alkalosis-marked",
      "answer": "Mixed metabolic acidosis and alkalosis",
      "explanation": "Near-normal pH with low bicarbonate, low chloride, hypokalemia, glucosuria, and ketonuria supports mixed metabolic acidosis and alkalosis. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "glucose": {
          "value": "610",
          "flag": "H"
        },
        "blood_gas_ph": {
          "value": "7.34"
        },
        "blood_gas_pco2": {
          "value": "25",
          "flag": "L"
        },
        "bicarbonate": {
          "value": "13",
          "flag": "L"
        },
        "base_excess": {
          "value": "-11",
          "flag": "L"
        },
        "chloride": {
          "value": "84",
          "flag": "L"
        },
        "potassium": {
          "value": "2.6",
          "flag": "L"
        },
        "urine_glucose": {
          "value": "4+",
          "flag": "H"
        },
        "urine_ketones": {
          "value": "4+",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "The pH looks deceptively near normal.",
        "Bicarbonate is low but chloride is also low.",
        "Ketones suggest an acidosis component.",
        "Hypochloremia and hypokalemia suggest a concurrent alkalosis component."
      ],
      "panels": [
        "renal",
        "bloodGas",
        "urine"
      ]
    },
    {
      "id": "mixed-metabolic-acidosis-alkalosis-complicated",
      "answer": "Mixed metabolic acidosis and alkalosis",
      "explanation": "Near-normal pH with low bicarbonate, low chloride, hypokalemia, glucosuria, and ketonuria supports mixed metabolic acidosis and alkalosis. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "glucose": {
          "value": "520",
          "flag": "H"
        },
        "blood_gas_ph": {
          "value": "7.35"
        },
        "blood_gas_pco2": {
          "value": "27",
          "flag": "L"
        },
        "bicarbonate": {
          "value": "15",
          "flag": "L"
        },
        "base_excess": {
          "value": "-9",
          "flag": "L"
        },
        "chloride": {
          "value": "88",
          "flag": "L"
        },
        "potassium": {
          "value": "2.8",
          "flag": "L"
        },
        "urine_glucose": {
          "value": "4+",
          "flag": "H"
        },
        "urine_ketones": {
          "value": "3+",
          "flag": "H"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "The pH looks deceptively near normal.",
        "Bicarbonate is low but chloride is also low.",
        "Ketones suggest an acidosis component.",
        "Hypochloremia and hypokalemia suggest a concurrent alkalosis component."
      ],
      "panels": [
        "renal",
        "bloodGas",
        "urine"
      ]
    },
    {
      "id": "mixed-metabolic-acidosis-alkalosis-follow-up",
      "answer": "Mixed metabolic acidosis and alkalosis",
      "explanation": "Near-normal pH with low bicarbonate, low chloride, hypokalemia, glucosuria, and ketonuria supports mixed metabolic acidosis and alkalosis. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "glucose": {
          "value": "260",
          "flag": "H"
        },
        "blood_gas_ph": {
          "value": "7.39"
        },
        "blood_gas_pco2": {
          "value": "33",
          "flag": "L"
        },
        "bicarbonate": {
          "value": "19",
          "flag": "L"
        },
        "base_excess": {
          "value": "-5",
          "flag": "L"
        },
        "chloride": {
          "value": "96",
          "flag": "L"
        },
        "potassium": {
          "value": "3.3",
          "flag": "L"
        },
        "urine_glucose": {
          "value": "2+",
          "flag": "H"
        },
        "urine_ketones": {
          "value": "1+",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "The pH looks deceptively near normal.",
        "Bicarbonate is low but chloride is also low.",
        "Ketones suggest an acidosis component.",
        "Hypochloremia and hypokalemia suggest a concurrent alkalosis component."
      ],
      "panels": [
        "renal",
        "bloodGas",
        "urine"
      ]
    },
    {
      "id": "acute-viral-hepatitis-pattern-early",
      "answer": "Acute viral hepatitis pattern",
      "explanation": "Marked hepatocellular enzyme elevation with ALT usually greater than AST supports an acute viral hepatitis pattern. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "ast": {
          "value": "420",
          "flag": "H"
        },
        "alt": {
          "value": "620",
          "flag": "H"
        },
        "bilirubin": {
          "value": "2.0",
          "flag": "H"
        },
        "bilirubin_direct": {
          "value": "1.2",
          "flag": "H"
        },
        "alp": {
          "value": "160",
          "flag": "H"
        },
        "ggt": {
          "value": "90",
          "flag": "H"
        },
        "inr": {
          "value": "1.3",
          "flag": "H"
        },
        "wbc": {
          "value": "3.8",
          "flag": "L"
        },
        "crp": {
          "value": "18",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "AST and ALT are much higher than alkaline phosphatase.",
        "ALT is at least as prominent as AST.",
        "Bilirubin and INR show severity.",
        "The CBC may show viral-type leukopenia."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "inflammation"
      ]
    },
    {
      "id": "acute-viral-hepatitis-pattern-classic",
      "answer": "Acute viral hepatitis pattern",
      "explanation": "Marked hepatocellular enzyme elevation with ALT usually greater than AST supports an acute viral hepatitis pattern. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "ast": {
          "value": "980",
          "flag": "H"
        },
        "alt": {
          "value": "1400",
          "flag": "H"
        },
        "bilirubin": {
          "value": "4.2",
          "flag": "H"
        },
        "bilirubin_direct": {
          "value": "2.8",
          "flag": "H"
        },
        "alp": {
          "value": "210",
          "flag": "H"
        },
        "ggt": {
          "value": "140",
          "flag": "H"
        },
        "inr": {
          "value": "1.6",
          "flag": "H"
        },
        "wbc": {
          "value": "3.2",
          "flag": "L"
        },
        "crp": {
          "value": "32",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "AST and ALT are much higher than alkaline phosphatase.",
        "ALT is at least as prominent as AST.",
        "Bilirubin and INR show severity.",
        "The CBC may show viral-type leukopenia."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "inflammation"
      ]
    },
    {
      "id": "acute-viral-hepatitis-pattern-marked",
      "answer": "Acute viral hepatitis pattern",
      "explanation": "Marked hepatocellular enzyme elevation with ALT usually greater than AST supports an acute viral hepatitis pattern. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "ast": {
          "value": "1850",
          "flag": "H"
        },
        "alt": {
          "value": "2400",
          "flag": "H"
        },
        "bilirubin": {
          "value": "8.6",
          "flag": "H"
        },
        "bilirubin_direct": {
          "value": "5.4",
          "flag": "H"
        },
        "alp": {
          "value": "280",
          "flag": "H"
        },
        "ggt": {
          "value": "220",
          "flag": "H"
        },
        "inr": {
          "value": "2.1",
          "flag": "H"
        },
        "wbc": {
          "value": "2.8",
          "flag": "L"
        },
        "crp": {
          "value": "58",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "AST and ALT are much higher than alkaline phosphatase.",
        "ALT is at least as prominent as AST.",
        "Bilirubin and INR show severity.",
        "The CBC may show viral-type leukopenia."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "inflammation"
      ]
    },
    {
      "id": "acute-viral-hepatitis-pattern-complicated",
      "answer": "Acute viral hepatitis pattern",
      "explanation": "Marked hepatocellular enzyme elevation with ALT usually greater than AST supports an acute viral hepatitis pattern. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "ast": {
          "value": "1320",
          "flag": "H"
        },
        "alt": {
          "value": "1800",
          "flag": "H"
        },
        "bilirubin": {
          "value": "6.0",
          "flag": "H"
        },
        "bilirubin_direct": {
          "value": "3.8",
          "flag": "H"
        },
        "alp": {
          "value": "240",
          "flag": "H"
        },
        "ggt": {
          "value": "180",
          "flag": "H"
        },
        "inr": {
          "value": "1.8",
          "flag": "H"
        },
        "wbc": {
          "value": "3.0",
          "flag": "L"
        },
        "crp": {
          "value": "42",
          "flag": "H"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "AST and ALT are much higher than alkaline phosphatase.",
        "ALT is at least as prominent as AST.",
        "Bilirubin and INR show severity.",
        "The CBC may show viral-type leukopenia."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "inflammation"
      ]
    },
    {
      "id": "acute-viral-hepatitis-pattern-follow-up",
      "answer": "Acute viral hepatitis pattern",
      "explanation": "Marked hepatocellular enzyme elevation with ALT usually greater than AST supports an acute viral hepatitis pattern. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "ast": {
          "value": "360",
          "flag": "H"
        },
        "alt": {
          "value": "480",
          "flag": "H"
        },
        "bilirubin": {
          "value": "1.8",
          "flag": "H"
        },
        "bilirubin_direct": {
          "value": "1.0",
          "flag": "H"
        },
        "alp": {
          "value": "150",
          "flag": "H"
        },
        "ggt": {
          "value": "80",
          "flag": "H"
        },
        "inr": {
          "value": "1.2",
          "flag": "H"
        },
        "wbc": {
          "value": "4.0",
          "flag": "L"
        },
        "crp": {
          "value": "14",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "AST and ALT are much higher than alkaline phosphatase.",
        "ALT is at least as prominent as AST.",
        "Bilirubin and INR show severity.",
        "The CBC may show viral-type leukopenia."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "inflammation"
      ]
    },
    {
      "id": "alcohol-associated-hepatitis-early",
      "answer": "Alcohol-associated hepatitis",
      "explanation": "AST-predominant transaminitis with high GGT, macrocytosis, thrombocytopenia, and jaundice supports alcohol-associated hepatitis. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "mcv": {
          "value": "101",
          "flag": "H"
        },
        "platelets": {
          "value": "145",
          "flag": "L"
        },
        "ast": {
          "value": "110",
          "flag": "H"
        },
        "alt": {
          "value": "58",
          "flag": "H"
        },
        "ggt": {
          "value": "180",
          "flag": "H"
        },
        "bilirubin": {
          "value": "2.4",
          "flag": "H"
        },
        "bilirubin_direct": {
          "value": "1.6",
          "flag": "H"
        },
        "inr": {
          "value": "1.3",
          "flag": "H"
        },
        "crp": {
          "value": "34",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "AST is higher than ALT but usually not in the thousands.",
        "GGT is strongly elevated.",
        "Macrocytosis and low platelets add chronic alcohol-related clues.",
        "Bilirubin and INR show hepatic dysfunction."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "inflammation"
      ]
    },
    {
      "id": "alcohol-associated-hepatitis-classic",
      "answer": "Alcohol-associated hepatitis",
      "explanation": "AST-predominant transaminitis with high GGT, macrocytosis, thrombocytopenia, and jaundice supports alcohol-associated hepatitis. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "mcv": {
          "value": "106",
          "flag": "H"
        },
        "platelets": {
          "value": "105",
          "flag": "L"
        },
        "ast": {
          "value": "185",
          "flag": "H"
        },
        "alt": {
          "value": "82",
          "flag": "H"
        },
        "ggt": {
          "value": "360",
          "flag": "H"
        },
        "bilirubin": {
          "value": "5.8",
          "flag": "H"
        },
        "bilirubin_direct": {
          "value": "4.2",
          "flag": "H"
        },
        "inr": {
          "value": "1.7",
          "flag": "H"
        },
        "crp": {
          "value": "70",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "AST is higher than ALT but usually not in the thousands.",
        "GGT is strongly elevated.",
        "Macrocytosis and low platelets add chronic alcohol-related clues.",
        "Bilirubin and INR show hepatic dysfunction."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "inflammation"
      ]
    },
    {
      "id": "alcohol-associated-hepatitis-marked",
      "answer": "Alcohol-associated hepatitis",
      "explanation": "AST-predominant transaminitis with high GGT, macrocytosis, thrombocytopenia, and jaundice supports alcohol-associated hepatitis. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "mcv": {
          "value": "112",
          "flag": "H"
        },
        "platelets": {
          "value": "72",
          "flag": "L"
        },
        "ast": {
          "value": "320",
          "flag": "H"
        },
        "alt": {
          "value": "130",
          "flag": "H"
        },
        "ggt": {
          "value": "720",
          "flag": "H"
        },
        "bilirubin": {
          "value": "14.0",
          "flag": "H"
        },
        "bilirubin_direct": {
          "value": "10.4",
          "flag": "H"
        },
        "inr": {
          "value": "2.4",
          "flag": "H"
        },
        "crp": {
          "value": "140",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "AST is higher than ALT but usually not in the thousands.",
        "GGT is strongly elevated.",
        "Macrocytosis and low platelets add chronic alcohol-related clues.",
        "Bilirubin and INR show hepatic dysfunction."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "inflammation"
      ]
    },
    {
      "id": "alcohol-associated-hepatitis-complicated",
      "answer": "Alcohol-associated hepatitis",
      "explanation": "AST-predominant transaminitis with high GGT, macrocytosis, thrombocytopenia, and jaundice supports alcohol-associated hepatitis. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "mcv": {
          "value": "109",
          "flag": "H"
        },
        "platelets": {
          "value": "92",
          "flag": "L"
        },
        "ast": {
          "value": "240",
          "flag": "H"
        },
        "alt": {
          "value": "105",
          "flag": "H"
        },
        "ggt": {
          "value": "520",
          "flag": "H"
        },
        "bilirubin": {
          "value": "9.6",
          "flag": "H"
        },
        "bilirubin_direct": {
          "value": "7.0",
          "flag": "H"
        },
        "inr": {
          "value": "2.0",
          "flag": "H"
        },
        "crp": {
          "value": "100",
          "flag": "H"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "AST is higher than ALT but usually not in the thousands.",
        "GGT is strongly elevated.",
        "Macrocytosis and low platelets add chronic alcohol-related clues.",
        "Bilirubin and INR show hepatic dysfunction."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "inflammation"
      ]
    },
    {
      "id": "alcohol-associated-hepatitis-follow-up",
      "answer": "Alcohol-associated hepatitis",
      "explanation": "AST-predominant transaminitis with high GGT, macrocytosis, thrombocytopenia, and jaundice supports alcohol-associated hepatitis. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "mcv": {
          "value": "100",
          "flag": "H"
        },
        "platelets": {
          "value": "150",
          "flag": "L"
        },
        "ast": {
          "value": "96",
          "flag": "H"
        },
        "alt": {
          "value": "50",
          "flag": "H"
        },
        "ggt": {
          "value": "140",
          "flag": "H"
        },
        "bilirubin": {
          "value": "1.8",
          "flag": "H"
        },
        "bilirubin_direct": {
          "value": "1.2",
          "flag": "H"
        },
        "inr": {
          "value": "1.2",
          "flag": "H"
        },
        "crp": {
          "value": "28",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "AST is higher than ALT but usually not in the thousands.",
        "GGT is strongly elevated.",
        "Macrocytosis and low platelets add chronic alcohol-related clues.",
        "Bilirubin and INR show hepatic dysfunction."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "inflammation"
      ]
    },
    {
      "id": "extrahepatic-cholestasis-early",
      "answer": "Extrahepatic cholestasis",
      "explanation": "Direct hyperbilirubinemia with alkaline phosphatase and GGT far above aminotransferases supports extrahepatic cholestasis. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "bilirubin": {
          "value": "2.8",
          "flag": "H"
        },
        "bilirubin_direct": {
          "value": "2.2",
          "flag": "H"
        },
        "alp": {
          "value": "360",
          "flag": "H"
        },
        "ggt": {
          "value": "420",
          "flag": "H"
        },
        "ast": {
          "value": "76",
          "flag": "H"
        },
        "alt": {
          "value": "92",
          "flag": "H"
        },
        "lipase": {
          "value": "70"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "The cholestatic enzymes dominate the pattern.",
        "Direct bilirubin is high.",
        "AST and ALT are only moderately elevated.",
        "GGT supports a hepatobiliary source for alkaline phosphatase."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver"
      ]
    },
    {
      "id": "extrahepatic-cholestasis-classic",
      "answer": "Extrahepatic cholestasis",
      "explanation": "Direct hyperbilirubinemia with alkaline phosphatase and GGT far above aminotransferases supports extrahepatic cholestasis. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "bilirubin": {
          "value": "6.4",
          "flag": "H"
        },
        "bilirubin_direct": {
          "value": "5.2",
          "flag": "H"
        },
        "alp": {
          "value": "620",
          "flag": "H"
        },
        "ggt": {
          "value": "780",
          "flag": "H"
        },
        "ast": {
          "value": "110",
          "flag": "H"
        },
        "alt": {
          "value": "130",
          "flag": "H"
        },
        "lipase": {
          "value": "90"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "The cholestatic enzymes dominate the pattern.",
        "Direct bilirubin is high.",
        "AST and ALT are only moderately elevated.",
        "GGT supports a hepatobiliary source for alkaline phosphatase."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver"
      ]
    },
    {
      "id": "extrahepatic-cholestasis-marked",
      "answer": "Extrahepatic cholestasis",
      "explanation": "Direct hyperbilirubinemia with alkaline phosphatase and GGT far above aminotransferases supports extrahepatic cholestasis. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "bilirubin": {
          "value": "12.0",
          "flag": "H"
        },
        "bilirubin_direct": {
          "value": "9.8",
          "flag": "H"
        },
        "alp": {
          "value": "980",
          "flag": "H"
        },
        "ggt": {
          "value": "1280",
          "flag": "H"
        },
        "ast": {
          "value": "180",
          "flag": "H"
        },
        "alt": {
          "value": "210",
          "flag": "H"
        },
        "lipase": {
          "value": "120"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "The cholestatic enzymes dominate the pattern.",
        "Direct bilirubin is high.",
        "AST and ALT are only moderately elevated.",
        "GGT supports a hepatobiliary source for alkaline phosphatase."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver"
      ]
    },
    {
      "id": "extrahepatic-cholestasis-complicated",
      "answer": "Extrahepatic cholestasis",
      "explanation": "Direct hyperbilirubinemia with alkaline phosphatase and GGT far above aminotransferases supports extrahepatic cholestasis. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "bilirubin": {
          "value": "8.6",
          "flag": "H"
        },
        "bilirubin_direct": {
          "value": "7.0",
          "flag": "H"
        },
        "alp": {
          "value": "780",
          "flag": "H"
        },
        "ggt": {
          "value": "980",
          "flag": "H"
        },
        "ast": {
          "value": "140",
          "flag": "H"
        },
        "alt": {
          "value": "160",
          "flag": "H"
        },
        "lipase": {
          "value": "100"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "The cholestatic enzymes dominate the pattern.",
        "Direct bilirubin is high.",
        "AST and ALT are only moderately elevated.",
        "GGT supports a hepatobiliary source for alkaline phosphatase."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver"
      ]
    },
    {
      "id": "extrahepatic-cholestasis-follow-up",
      "answer": "Extrahepatic cholestasis",
      "explanation": "Direct hyperbilirubinemia with alkaline phosphatase and GGT far above aminotransferases supports extrahepatic cholestasis. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "bilirubin": {
          "value": "2.2",
          "flag": "H"
        },
        "bilirubin_direct": {
          "value": "1.7",
          "flag": "H"
        },
        "alp": {
          "value": "300",
          "flag": "H"
        },
        "ggt": {
          "value": "360",
          "flag": "H"
        },
        "ast": {
          "value": "68",
          "flag": "H"
        },
        "alt": {
          "value": "80",
          "flag": "H"
        },
        "lipase": {
          "value": "60"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "The cholestatic enzymes dominate the pattern.",
        "Direct bilirubin is high.",
        "AST and ALT are only moderately elevated.",
        "GGT supports a hepatobiliary source for alkaline phosphatase."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver"
      ]
    },
    {
      "id": "advanced-chronic-liver-disease-early",
      "answer": "Advanced chronic liver disease",
      "explanation": "Low albumin, high INR, thrombocytopenia, hyponatremia, and hyperbilirubinemia support advanced chronic liver disease. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "11.2",
          "flag": "L"
        },
        "mcv": {
          "value": "99",
          "flag": "H"
        },
        "platelets": {
          "value": "120",
          "flag": "L"
        },
        "sodium": {
          "value": "134",
          "flag": "L"
        },
        "albumin": {
          "value": "3.0",
          "flag": "L"
        },
        "inr": {
          "value": "1.4",
          "flag": "H"
        },
        "bilirubin": {
          "value": "2.0",
          "flag": "H"
        },
        "bilirubin_direct": {
          "value": "1.1",
          "flag": "H"
        },
        "ast": {
          "value": "68",
          "flag": "H"
        },
        "alt": {
          "value": "48",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "Synthetic function is impaired.",
        "Platelets are low, often from portal hypertension physiology.",
        "Bilirubin is elevated.",
        "The transaminases may be only moderately abnormal despite severity."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver"
      ]
    },
    {
      "id": "advanced-chronic-liver-disease-classic",
      "answer": "Advanced chronic liver disease",
      "explanation": "Low albumin, high INR, thrombocytopenia, hyponatremia, and hyperbilirubinemia support advanced chronic liver disease. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "10.4",
          "flag": "L"
        },
        "mcv": {
          "value": "103",
          "flag": "H"
        },
        "platelets": {
          "value": "82",
          "flag": "L"
        },
        "sodium": {
          "value": "131",
          "flag": "L"
        },
        "albumin": {
          "value": "2.5",
          "flag": "L"
        },
        "inr": {
          "value": "1.8",
          "flag": "H"
        },
        "bilirubin": {
          "value": "4.8",
          "flag": "H"
        },
        "bilirubin_direct": {
          "value": "3.0",
          "flag": "H"
        },
        "ast": {
          "value": "95",
          "flag": "H"
        },
        "alt": {
          "value": "70",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "Synthetic function is impaired.",
        "Platelets are low, often from portal hypertension physiology.",
        "Bilirubin is elevated.",
        "The transaminases may be only moderately abnormal despite severity."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver"
      ]
    },
    {
      "id": "advanced-chronic-liver-disease-marked",
      "answer": "Advanced chronic liver disease",
      "explanation": "Low albumin, high INR, thrombocytopenia, hyponatremia, and hyperbilirubinemia support advanced chronic liver disease. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "9.2",
          "flag": "L"
        },
        "mcv": {
          "value": "108",
          "flag": "H"
        },
        "platelets": {
          "value": "48",
          "flag": "L"
        },
        "sodium": {
          "value": "126",
          "flag": "L"
        },
        "albumin": {
          "value": "1.9",
          "flag": "L"
        },
        "inr": {
          "value": "2.5",
          "flag": "H"
        },
        "bilirubin": {
          "value": "12.0",
          "flag": "H"
        },
        "bilirubin_direct": {
          "value": "8.2",
          "flag": "H"
        },
        "ast": {
          "value": "140",
          "flag": "H"
        },
        "alt": {
          "value": "96",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "Synthetic function is impaired.",
        "Platelets are low, often from portal hypertension physiology.",
        "Bilirubin is elevated.",
        "The transaminases may be only moderately abnormal despite severity."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver"
      ]
    },
    {
      "id": "advanced-chronic-liver-disease-complicated",
      "answer": "Advanced chronic liver disease",
      "explanation": "Low albumin, high INR, thrombocytopenia, hyponatremia, and hyperbilirubinemia support advanced chronic liver disease. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "9.8",
          "flag": "L"
        },
        "mcv": {
          "value": "105",
          "flag": "H"
        },
        "platelets": {
          "value": "65",
          "flag": "L"
        },
        "sodium": {
          "value": "128",
          "flag": "L"
        },
        "albumin": {
          "value": "2.2",
          "flag": "L"
        },
        "inr": {
          "value": "2.1",
          "flag": "H"
        },
        "bilirubin": {
          "value": "7.6",
          "flag": "H"
        },
        "bilirubin_direct": {
          "value": "5.0",
          "flag": "H"
        },
        "ast": {
          "value": "115",
          "flag": "H"
        },
        "alt": {
          "value": "82",
          "flag": "H"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "Synthetic function is impaired.",
        "Platelets are low, often from portal hypertension physiology.",
        "Bilirubin is elevated.",
        "The transaminases may be only moderately abnormal despite severity."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver"
      ]
    },
    {
      "id": "advanced-chronic-liver-disease-follow-up",
      "answer": "Advanced chronic liver disease",
      "explanation": "Low albumin, high INR, thrombocytopenia, hyponatremia, and hyperbilirubinemia support advanced chronic liver disease. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "11.0",
          "flag": "L"
        },
        "mcv": {
          "value": "98",
          "flag": "H"
        },
        "platelets": {
          "value": "135",
          "flag": "L"
        },
        "sodium": {
          "value": "135",
          "flag": "L"
        },
        "albumin": {
          "value": "3.2",
          "flag": "L"
        },
        "inr": {
          "value": "1.3",
          "flag": "H"
        },
        "bilirubin": {
          "value": "1.6",
          "flag": "H"
        },
        "bilirubin_direct": {
          "value": "0.8",
          "flag": "H"
        },
        "ast": {
          "value": "58",
          "flag": "H"
        },
        "alt": {
          "value": "42",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "Synthetic function is impaired.",
        "Platelets are low, often from portal hypertension physiology.",
        "Bilirubin is elevated.",
        "The transaminases may be only moderately abnormal despite severity."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver"
      ]
    },
    {
      "id": "steatotic-liver-disease-early",
      "answer": "Steatotic liver disease pattern",
      "explanation": "Mild to moderate ALT-predominant transaminitis with insulin-resistance lipids supports a steatotic liver disease pattern. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "alt": {
          "value": "72",
          "flag": "H"
        },
        "ast": {
          "value": "48",
          "flag": "H"
        },
        "ggt": {
          "value": "72",
          "flag": "H"
        },
        "bilirubin": {
          "value": "0.8"
        },
        "albumin": {
          "value": "4.2"
        },
        "triglycerides": {
          "value": "210",
          "flag": "H"
        },
        "hba1c": {
          "value": "6.2",
          "flag": "H"
        },
        "hdl": {
          "value": "38",
          "flag": "L"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "ALT is higher than AST.",
        "Synthetic function is preserved.",
        "Triglycerides and HbA1c point to metabolic risk.",
        "Bilirubin is not the main abnormality."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver"
      ]
    },
    {
      "id": "steatotic-liver-disease-classic",
      "answer": "Steatotic liver disease pattern",
      "explanation": "Mild to moderate ALT-predominant transaminitis with insulin-resistance lipids supports a steatotic liver disease pattern. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "alt": {
          "value": "110",
          "flag": "H"
        },
        "ast": {
          "value": "76",
          "flag": "H"
        },
        "ggt": {
          "value": "110",
          "flag": "H"
        },
        "bilirubin": {
          "value": "0.9"
        },
        "albumin": {
          "value": "4.0"
        },
        "triglycerides": {
          "value": "280",
          "flag": "H"
        },
        "hba1c": {
          "value": "7.4",
          "flag": "H"
        },
        "hdl": {
          "value": "35",
          "flag": "L"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "ALT is higher than AST.",
        "Synthetic function is preserved.",
        "Triglycerides and HbA1c point to metabolic risk.",
        "Bilirubin is not the main abnormality."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver"
      ]
    },
    {
      "id": "steatotic-liver-disease-marked",
      "answer": "Steatotic liver disease pattern",
      "explanation": "Mild to moderate ALT-predominant transaminitis with insulin-resistance lipids supports a steatotic liver disease pattern. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "alt": {
          "value": "180",
          "flag": "H"
        },
        "ast": {
          "value": "125",
          "flag": "H"
        },
        "ggt": {
          "value": "180",
          "flag": "H"
        },
        "bilirubin": {
          "value": "1.1"
        },
        "albumin": {
          "value": "3.8"
        },
        "triglycerides": {
          "value": "420",
          "flag": "H"
        },
        "hba1c": {
          "value": "9.2",
          "flag": "H"
        },
        "hdl": {
          "value": "30",
          "flag": "L"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "ALT is higher than AST.",
        "Synthetic function is preserved.",
        "Triglycerides and HbA1c point to metabolic risk.",
        "Bilirubin is not the main abnormality."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver"
      ]
    },
    {
      "id": "steatotic-liver-disease-complicated",
      "answer": "Steatotic liver disease pattern",
      "explanation": "Mild to moderate ALT-predominant transaminitis with insulin-resistance lipids supports a steatotic liver disease pattern. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "alt": {
          "value": "140",
          "flag": "H"
        },
        "ast": {
          "value": "96",
          "flag": "H"
        },
        "ggt": {
          "value": "150",
          "flag": "H"
        },
        "bilirubin": {
          "value": "1.0"
        },
        "albumin": {
          "value": "3.9"
        },
        "triglycerides": {
          "value": "340",
          "flag": "H"
        },
        "hba1c": {
          "value": "8.0",
          "flag": "H"
        },
        "hdl": {
          "value": "33",
          "flag": "L"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "ALT is higher than AST.",
        "Synthetic function is preserved.",
        "Triglycerides and HbA1c point to metabolic risk.",
        "Bilirubin is not the main abnormality."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver"
      ]
    },
    {
      "id": "steatotic-liver-disease-follow-up",
      "answer": "Steatotic liver disease pattern",
      "explanation": "Mild to moderate ALT-predominant transaminitis with insulin-resistance lipids supports a steatotic liver disease pattern. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "alt": {
          "value": "64",
          "flag": "H"
        },
        "ast": {
          "value": "44",
          "flag": "H"
        },
        "ggt": {
          "value": "60",
          "flag": "H"
        },
        "bilirubin": {
          "value": "0.7"
        },
        "albumin": {
          "value": "4.3"
        },
        "triglycerides": {
          "value": "190",
          "flag": "H"
        },
        "hba1c": {
          "value": "5.9",
          "flag": "H"
        },
        "hdl": {
          "value": "39",
          "flag": "L"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "ALT is higher than AST.",
        "Synthetic function is preserved.",
        "Triglycerides and HbA1c point to metabolic risk.",
        "Bilirubin is not the main abnormality."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver"
      ]
    },
    {
      "id": "ischemic-hepatitis-pattern-early",
      "answer": "Ischemic hepatitis pattern",
      "explanation": "Massive aminotransferase elevation with very high LDH and concurrent kidney stress supports ischemic hepatitis. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "ast": {
          "value": "1800",
          "flag": "H"
        },
        "alt": {
          "value": "1600",
          "flag": "H"
        },
        "ldh": {
          "value": "1200",
          "flag": "H"
        },
        "bilirubin": {
          "value": "1.6",
          "flag": "H"
        },
        "inr": {
          "value": "1.5",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.6",
          "flag": "H"
        },
        "egfr": {
          "value": "50",
          "flag": "L"
        },
        "crp": {
          "value": "40",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "AST and ALT are in the thousands.",
        "LDH is strikingly high.",
        "Bilirubin may lag behind enzyme severity.",
        "Kidney stress often accompanies systemic hypoperfusion."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "inflammation"
      ]
    },
    {
      "id": "ischemic-hepatitis-pattern-classic",
      "answer": "Ischemic hepatitis pattern",
      "explanation": "Massive aminotransferase elevation with very high LDH and concurrent kidney stress supports ischemic hepatitis. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "ast": {
          "value": "4200",
          "flag": "H"
        },
        "alt": {
          "value": "3600",
          "flag": "H"
        },
        "ldh": {
          "value": "3200",
          "flag": "H"
        },
        "bilirubin": {
          "value": "2.4",
          "flag": "H"
        },
        "inr": {
          "value": "2.0",
          "flag": "H"
        },
        "creatinine": {
          "value": "2.5",
          "flag": "H"
        },
        "egfr": {
          "value": "28",
          "flag": "L"
        },
        "crp": {
          "value": "80",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "AST and ALT are in the thousands.",
        "LDH is strikingly high.",
        "Bilirubin may lag behind enzyme severity.",
        "Kidney stress often accompanies systemic hypoperfusion."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "inflammation"
      ]
    },
    {
      "id": "ischemic-hepatitis-pattern-marked",
      "answer": "Ischemic hepatitis pattern",
      "explanation": "Massive aminotransferase elevation with very high LDH and concurrent kidney stress supports ischemic hepatitis. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "ast": {
          "value": "8200",
          "flag": "H"
        },
        "alt": {
          "value": "7200",
          "flag": "H"
        },
        "ldh": {
          "value": "7600",
          "flag": "H"
        },
        "bilirubin": {
          "value": "4.0",
          "flag": "H"
        },
        "inr": {
          "value": "3.2",
          "flag": "H"
        },
        "creatinine": {
          "value": "4.0",
          "flag": "H"
        },
        "egfr": {
          "value": "16",
          "flag": "L"
        },
        "crp": {
          "value": "150",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "AST and ALT are in the thousands.",
        "LDH is strikingly high.",
        "Bilirubin may lag behind enzyme severity.",
        "Kidney stress often accompanies systemic hypoperfusion."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "inflammation"
      ]
    },
    {
      "id": "ischemic-hepatitis-pattern-complicated",
      "answer": "Ischemic hepatitis pattern",
      "explanation": "Massive aminotransferase elevation with very high LDH and concurrent kidney stress supports ischemic hepatitis. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "ast": {
          "value": "6000",
          "flag": "H"
        },
        "alt": {
          "value": "5200",
          "flag": "H"
        },
        "ldh": {
          "value": "5000",
          "flag": "H"
        },
        "bilirubin": {
          "value": "3.2",
          "flag": "H"
        },
        "inr": {
          "value": "2.6",
          "flag": "H"
        },
        "creatinine": {
          "value": "3.2",
          "flag": "H"
        },
        "egfr": {
          "value": "22",
          "flag": "L"
        },
        "crp": {
          "value": "120",
          "flag": "H"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "AST and ALT are in the thousands.",
        "LDH is strikingly high.",
        "Bilirubin may lag behind enzyme severity.",
        "Kidney stress often accompanies systemic hypoperfusion."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "inflammation"
      ]
    },
    {
      "id": "ischemic-hepatitis-pattern-follow-up",
      "answer": "Ischemic hepatitis pattern",
      "explanation": "Massive aminotransferase elevation with very high LDH and concurrent kidney stress supports ischemic hepatitis. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "ast": {
          "value": "1300",
          "flag": "H"
        },
        "alt": {
          "value": "1100",
          "flag": "H"
        },
        "ldh": {
          "value": "980",
          "flag": "H"
        },
        "bilirubin": {
          "value": "1.4",
          "flag": "H"
        },
        "inr": {
          "value": "1.4",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.4",
          "flag": "H"
        },
        "egfr": {
          "value": "56",
          "flag": "L"
        },
        "crp": {
          "value": "34",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "AST and ALT are in the thousands.",
        "LDH is strikingly high.",
        "Bilirubin may lag behind enzyme severity.",
        "Kidney stress often accompanies systemic hypoperfusion."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "inflammation"
      ]
    },
    {
      "id": "drug-induced-hepatocellular-injury-early",
      "answer": "Drug-induced hepatocellular injury",
      "explanation": "ALT-predominant hepatocellular injury with bilirubin rise and eosinophilia supports a drug-induced liver injury pattern. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "ast": {
          "value": "260",
          "flag": "H"
        },
        "alt": {
          "value": "420",
          "flag": "H"
        },
        "alp": {
          "value": "150",
          "flag": "H"
        },
        "bilirubin": {
          "value": "1.4",
          "flag": "H"
        },
        "bilirubin_direct": {
          "value": "0.8",
          "flag": "H"
        },
        "inr": {
          "value": "1.2",
          "flag": "H"
        },
        "eosinophils": {
          "value": "0.6",
          "flag": "H"
        },
        "crp": {
          "value": "18",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "ALT is the dominant enzyme.",
        "Bilirubin and INR help judge severity.",
        "Eosinophilia can accompany hypersensitivity-type injury.",
        "The cholestatic enzymes are not the main signal."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "inflammation"
      ]
    },
    {
      "id": "drug-induced-hepatocellular-injury-classic",
      "answer": "Drug-induced hepatocellular injury",
      "explanation": "ALT-predominant hepatocellular injury with bilirubin rise and eosinophilia supports a drug-induced liver injury pattern. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "ast": {
          "value": "620",
          "flag": "H"
        },
        "alt": {
          "value": "980",
          "flag": "H"
        },
        "alp": {
          "value": "190",
          "flag": "H"
        },
        "bilirubin": {
          "value": "2.8",
          "flag": "H"
        },
        "bilirubin_direct": {
          "value": "1.8",
          "flag": "H"
        },
        "inr": {
          "value": "1.5",
          "flag": "H"
        },
        "eosinophils": {
          "value": "0.9",
          "flag": "H"
        },
        "crp": {
          "value": "32",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "ALT is the dominant enzyme.",
        "Bilirubin and INR help judge severity.",
        "Eosinophilia can accompany hypersensitivity-type injury.",
        "The cholestatic enzymes are not the main signal."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "inflammation"
      ]
    },
    {
      "id": "drug-induced-hepatocellular-injury-marked",
      "answer": "Drug-induced hepatocellular injury",
      "explanation": "ALT-predominant hepatocellular injury with bilirubin rise and eosinophilia supports a drug-induced liver injury pattern. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "ast": {
          "value": "1500",
          "flag": "H"
        },
        "alt": {
          "value": "2200",
          "flag": "H"
        },
        "alp": {
          "value": "260",
          "flag": "H"
        },
        "bilirubin": {
          "value": "6.2",
          "flag": "H"
        },
        "bilirubin_direct": {
          "value": "4.2",
          "flag": "H"
        },
        "inr": {
          "value": "2.2",
          "flag": "H"
        },
        "eosinophils": {
          "value": "1.4",
          "flag": "H"
        },
        "crp": {
          "value": "58",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "ALT is the dominant enzyme.",
        "Bilirubin and INR help judge severity.",
        "Eosinophilia can accompany hypersensitivity-type injury.",
        "The cholestatic enzymes are not the main signal."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "inflammation"
      ]
    },
    {
      "id": "drug-induced-hepatocellular-injury-complicated",
      "answer": "Drug-induced hepatocellular injury",
      "explanation": "ALT-predominant hepatocellular injury with bilirubin rise and eosinophilia supports a drug-induced liver injury pattern. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "ast": {
          "value": "980",
          "flag": "H"
        },
        "alt": {
          "value": "1500",
          "flag": "H"
        },
        "alp": {
          "value": "220",
          "flag": "H"
        },
        "bilirubin": {
          "value": "4.0",
          "flag": "H"
        },
        "bilirubin_direct": {
          "value": "2.6",
          "flag": "H"
        },
        "inr": {
          "value": "1.8",
          "flag": "H"
        },
        "eosinophils": {
          "value": "1.1",
          "flag": "H"
        },
        "crp": {
          "value": "44",
          "flag": "H"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "ALT is the dominant enzyme.",
        "Bilirubin and INR help judge severity.",
        "Eosinophilia can accompany hypersensitivity-type injury.",
        "The cholestatic enzymes are not the main signal."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "inflammation"
      ]
    },
    {
      "id": "drug-induced-hepatocellular-injury-follow-up",
      "answer": "Drug-induced hepatocellular injury",
      "explanation": "ALT-predominant hepatocellular injury with bilirubin rise and eosinophilia supports a drug-induced liver injury pattern. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "ast": {
          "value": "220",
          "flag": "H"
        },
        "alt": {
          "value": "360",
          "flag": "H"
        },
        "alp": {
          "value": "140",
          "flag": "H"
        },
        "bilirubin": {
          "value": "1.2",
          "flag": "H"
        },
        "bilirubin_direct": {
          "value": "0.6",
          "flag": "H"
        },
        "inr": {
          "value": "1.1",
          "flag": "H"
        },
        "eosinophils": {
          "value": "0.5",
          "flag": "H"
        },
        "crp": {
          "value": "14",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "ALT is the dominant enzyme.",
        "Bilirubin and INR help judge severity.",
        "Eosinophilia can accompany hypersensitivity-type injury.",
        "The cholestatic enzymes are not the main signal."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "inflammation"
      ]
    },
    {
      "id": "autoimmune-cholestatic-pattern-early",
      "answer": "Autoimmune cholestatic pattern",
      "explanation": "Cholestatic enzymes with high total protein, low albumin, and hypercholesterolemia supports an autoimmune cholestatic pattern. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "alp": {
          "value": "240",
          "flag": "H"
        },
        "ggt": {
          "value": "260",
          "flag": "H"
        },
        "bilirubin": {
          "value": "1.3",
          "flag": "H"
        },
        "bilirubin_direct": {
          "value": "0.7",
          "flag": "H"
        },
        "ast": {
          "value": "52",
          "flag": "H"
        },
        "alt": {
          "value": "58",
          "flag": "H"
        },
        "total_protein": {
          "value": "8.5",
          "flag": "H"
        },
        "albumin": {
          "value": "3.4",
          "flag": "L"
        },
        "cholesterol": {
          "value": "230",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "Alkaline phosphatase and GGT dominate.",
        "Total protein is high relative to albumin.",
        "Cholesterol can be elevated in chronic cholestasis.",
        "AST and ALT are only moderately elevated."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver"
      ]
    },
    {
      "id": "autoimmune-cholestatic-pattern-classic",
      "answer": "Autoimmune cholestatic pattern",
      "explanation": "Cholestatic enzymes with high total protein, low albumin, and hypercholesterolemia supports an autoimmune cholestatic pattern. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "alp": {
          "value": "380",
          "flag": "H"
        },
        "ggt": {
          "value": "460",
          "flag": "H"
        },
        "bilirubin": {
          "value": "2.2",
          "flag": "H"
        },
        "bilirubin_direct": {
          "value": "1.4",
          "flag": "H"
        },
        "ast": {
          "value": "70",
          "flag": "H"
        },
        "alt": {
          "value": "82",
          "flag": "H"
        },
        "total_protein": {
          "value": "9.2",
          "flag": "H"
        },
        "albumin": {
          "value": "3.2",
          "flag": "L"
        },
        "cholesterol": {
          "value": "280",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "Alkaline phosphatase and GGT dominate.",
        "Total protein is high relative to albumin.",
        "Cholesterol can be elevated in chronic cholestasis.",
        "AST and ALT are only moderately elevated."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver"
      ]
    },
    {
      "id": "autoimmune-cholestatic-pattern-marked",
      "answer": "Autoimmune cholestatic pattern",
      "explanation": "Cholestatic enzymes with high total protein, low albumin, and hypercholesterolemia supports an autoimmune cholestatic pattern. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "alp": {
          "value": "620",
          "flag": "H"
        },
        "ggt": {
          "value": "820",
          "flag": "H"
        },
        "bilirubin": {
          "value": "4.0",
          "flag": "H"
        },
        "bilirubin_direct": {
          "value": "2.8",
          "flag": "H"
        },
        "ast": {
          "value": "110",
          "flag": "H"
        },
        "alt": {
          "value": "125",
          "flag": "H"
        },
        "total_protein": {
          "value": "10.0",
          "flag": "H"
        },
        "albumin": {
          "value": "2.9",
          "flag": "L"
        },
        "cholesterol": {
          "value": "360",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "Alkaline phosphatase and GGT dominate.",
        "Total protein is high relative to albumin.",
        "Cholesterol can be elevated in chronic cholestasis.",
        "AST and ALT are only moderately elevated."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver"
      ]
    },
    {
      "id": "autoimmune-cholestatic-pattern-complicated",
      "answer": "Autoimmune cholestatic pattern",
      "explanation": "Cholestatic enzymes with high total protein, low albumin, and hypercholesterolemia supports an autoimmune cholestatic pattern. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "alp": {
          "value": "500",
          "flag": "H"
        },
        "ggt": {
          "value": "650",
          "flag": "H"
        },
        "bilirubin": {
          "value": "3.1",
          "flag": "H"
        },
        "bilirubin_direct": {
          "value": "2.1",
          "flag": "H"
        },
        "ast": {
          "value": "90",
          "flag": "H"
        },
        "alt": {
          "value": "100",
          "flag": "H"
        },
        "total_protein": {
          "value": "9.6",
          "flag": "H"
        },
        "albumin": {
          "value": "3.0",
          "flag": "L"
        },
        "cholesterol": {
          "value": "320",
          "flag": "H"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "Alkaline phosphatase and GGT dominate.",
        "Total protein is high relative to albumin.",
        "Cholesterol can be elevated in chronic cholestasis.",
        "AST and ALT are only moderately elevated."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver"
      ]
    },
    {
      "id": "autoimmune-cholestatic-pattern-follow-up",
      "answer": "Autoimmune cholestatic pattern",
      "explanation": "Cholestatic enzymes with high total protein, low albumin, and hypercholesterolemia supports an autoimmune cholestatic pattern. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "alp": {
          "value": "210",
          "flag": "H"
        },
        "ggt": {
          "value": "230",
          "flag": "H"
        },
        "bilirubin": {
          "value": "1.1",
          "flag": "H"
        },
        "bilirubin_direct": {
          "value": "0.5",
          "flag": "H"
        },
        "ast": {
          "value": "48",
          "flag": "H"
        },
        "alt": {
          "value": "52",
          "flag": "H"
        },
        "total_protein": {
          "value": "8.4",
          "flag": "H"
        },
        "albumin": {
          "value": "3.5",
          "flag": "L"
        },
        "cholesterol": {
          "value": "220",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "Alkaline phosphatase and GGT dominate.",
        "Total protein is high relative to albumin.",
        "Cholesterol can be elevated in chronic cholestasis.",
        "AST and ALT are only moderately elevated."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver"
      ]
    },
    {
      "id": "gilbert-type-bilirubin-early",
      "answer": "Gilbert-type unconjugated bilirubin pattern",
      "explanation": "Isolated mild total bilirubin elevation with normal direct bilirubin, enzymes, hemoglobin, and reticulocytes supports a Gilbert-type pattern. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "14.2"
        },
        "reticulocytes": {
          "value": "55"
        },
        "bilirubin": {
          "value": "1.6",
          "flag": "H"
        },
        "bilirubin_direct": {
          "value": "0.2"
        },
        "ast": {
          "value": "22"
        },
        "alt": {
          "value": "24"
        },
        "alp": {
          "value": "80"
        },
        "ggt": {
          "value": "22"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "Bilirubin is the only meaningful abnormality.",
        "The conjugated fraction is not elevated.",
        "Liver enzymes are normal.",
        "Hemolysis markers are not increased."
      ],
      "panels": [
        "cbc",
        "liver"
      ]
    },
    {
      "id": "gilbert-type-bilirubin-classic",
      "answer": "Gilbert-type unconjugated bilirubin pattern",
      "explanation": "Isolated mild total bilirubin elevation with normal direct bilirubin, enzymes, hemoglobin, and reticulocytes supports a Gilbert-type pattern. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "13.8"
        },
        "reticulocytes": {
          "value": "60"
        },
        "bilirubin": {
          "value": "2.4",
          "flag": "H"
        },
        "bilirubin_direct": {
          "value": "0.3"
        },
        "ast": {
          "value": "24"
        },
        "alt": {
          "value": "28"
        },
        "alp": {
          "value": "90"
        },
        "ggt": {
          "value": "28"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "Bilirubin is the only meaningful abnormality.",
        "The conjugated fraction is not elevated.",
        "Liver enzymes are normal.",
        "Hemolysis markers are not increased."
      ],
      "panels": [
        "cbc",
        "liver"
      ]
    },
    {
      "id": "gilbert-type-bilirubin-marked",
      "answer": "Gilbert-type unconjugated bilirubin pattern",
      "explanation": "Isolated mild total bilirubin elevation with normal direct bilirubin, enzymes, hemoglobin, and reticulocytes supports a Gilbert-type pattern. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "13.0"
        },
        "reticulocytes": {
          "value": "70"
        },
        "bilirubin": {
          "value": "3.2",
          "flag": "H"
        },
        "bilirubin_direct": {
          "value": "0.3"
        },
        "ast": {
          "value": "28"
        },
        "alt": {
          "value": "32"
        },
        "alp": {
          "value": "100"
        },
        "ggt": {
          "value": "34"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "Bilirubin is the only meaningful abnormality.",
        "The conjugated fraction is not elevated.",
        "Liver enzymes are normal.",
        "Hemolysis markers are not increased."
      ],
      "panels": [
        "cbc",
        "liver"
      ]
    },
    {
      "id": "gilbert-type-bilirubin-complicated",
      "answer": "Gilbert-type unconjugated bilirubin pattern",
      "explanation": "Isolated mild total bilirubin elevation with normal direct bilirubin, enzymes, hemoglobin, and reticulocytes supports a Gilbert-type pattern. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "13.4"
        },
        "reticulocytes": {
          "value": "64"
        },
        "bilirubin": {
          "value": "2.8",
          "flag": "H"
        },
        "bilirubin_direct": {
          "value": "0.2"
        },
        "ast": {
          "value": "26"
        },
        "alt": {
          "value": "30"
        },
        "alp": {
          "value": "95"
        },
        "ggt": {
          "value": "30"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "Bilirubin is the only meaningful abnormality.",
        "The conjugated fraction is not elevated.",
        "Liver enzymes are normal.",
        "Hemolysis markers are not increased."
      ],
      "panels": [
        "cbc",
        "liver"
      ]
    },
    {
      "id": "gilbert-type-bilirubin-follow-up",
      "answer": "Gilbert-type unconjugated bilirubin pattern",
      "explanation": "Isolated mild total bilirubin elevation with normal direct bilirubin, enzymes, hemoglobin, and reticulocytes supports a Gilbert-type pattern. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "14.6"
        },
        "reticulocytes": {
          "value": "52"
        },
        "bilirubin": {
          "value": "1.4",
          "flag": "H"
        },
        "bilirubin_direct": {
          "value": "0.2"
        },
        "ast": {
          "value": "20"
        },
        "alt": {
          "value": "22"
        },
        "alp": {
          "value": "75"
        },
        "ggt": {
          "value": "20"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "Bilirubin is the only meaningful abnormality.",
        "The conjugated fraction is not elevated.",
        "Liver enzymes are normal.",
        "Hemolysis markers are not increased."
      ],
      "panels": [
        "cbc",
        "liver"
      ]
    },
    {
      "id": "pancreatitis-early",
      "answer": "Pancreatitis",
      "explanation": "Marked lipase elevation with inflammatory markers supports pancreatitis. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "lipase": {
          "value": "520",
          "flag": "H"
        },
        "wbc": {
          "value": "13.2",
          "flag": "H"
        },
        "neutrophils": {
          "value": "10.5",
          "flag": "H"
        },
        "crp": {
          "value": "48",
          "flag": "H"
        },
        "glucose": {
          "value": "160",
          "flag": "H"
        },
        "calcium": {
          "value": "8.2",
          "flag": "L"
        },
        "ast": {
          "value": "58",
          "flag": "H"
        },
        "alt": {
          "value": "64",
          "flag": "H"
        },
        "bilirubin": {
          "value": "1.2",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "Lipase is far above the reference interval.",
        "CRP and neutrophils reflect inflammatory severity.",
        "Calcium can fall in severe cases.",
        "Mild liver enzyme or bilirubin elevation can suggest a biliary companion pattern."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "inflammation"
      ]
    },
    {
      "id": "pancreatitis-classic",
      "answer": "Pancreatitis",
      "explanation": "Marked lipase elevation with inflammatory markers supports pancreatitis. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "lipase": {
          "value": "1400",
          "flag": "H"
        },
        "wbc": {
          "value": "16.8",
          "flag": "H"
        },
        "neutrophils": {
          "value": "14.2",
          "flag": "H"
        },
        "crp": {
          "value": "110",
          "flag": "H"
        },
        "glucose": {
          "value": "210",
          "flag": "H"
        },
        "calcium": {
          "value": "7.8",
          "flag": "L"
        },
        "ast": {
          "value": "86",
          "flag": "H"
        },
        "alt": {
          "value": "96",
          "flag": "H"
        },
        "bilirubin": {
          "value": "1.8",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "Lipase is far above the reference interval.",
        "CRP and neutrophils reflect inflammatory severity.",
        "Calcium can fall in severe cases.",
        "Mild liver enzyme or bilirubin elevation can suggest a biliary companion pattern."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "inflammation"
      ]
    },
    {
      "id": "pancreatitis-marked",
      "answer": "Pancreatitis",
      "explanation": "Marked lipase elevation with inflammatory markers supports pancreatitis. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "lipase": {
          "value": "4200",
          "flag": "H"
        },
        "wbc": {
          "value": "24.0",
          "flag": "H"
        },
        "neutrophils": {
          "value": "21.0",
          "flag": "H"
        },
        "crp": {
          "value": "260",
          "flag": "H"
        },
        "glucose": {
          "value": "320",
          "flag": "H"
        },
        "calcium": {
          "value": "7.0",
          "flag": "L"
        },
        "ast": {
          "value": "160",
          "flag": "H"
        },
        "alt": {
          "value": "180",
          "flag": "H"
        },
        "bilirubin": {
          "value": "3.0",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "Lipase is far above the reference interval.",
        "CRP and neutrophils reflect inflammatory severity.",
        "Calcium can fall in severe cases.",
        "Mild liver enzyme or bilirubin elevation can suggest a biliary companion pattern."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "inflammation"
      ]
    },
    {
      "id": "pancreatitis-complicated",
      "answer": "Pancreatitis",
      "explanation": "Marked lipase elevation with inflammatory markers supports pancreatitis. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "lipase": {
          "value": "2600",
          "flag": "H"
        },
        "wbc": {
          "value": "20.0",
          "flag": "H"
        },
        "neutrophils": {
          "value": "17.0",
          "flag": "H"
        },
        "crp": {
          "value": "190",
          "flag": "H"
        },
        "glucose": {
          "value": "260",
          "flag": "H"
        },
        "calcium": {
          "value": "7.4",
          "flag": "L"
        },
        "ast": {
          "value": "120",
          "flag": "H"
        },
        "alt": {
          "value": "140",
          "flag": "H"
        },
        "bilirubin": {
          "value": "2.4",
          "flag": "H"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "Lipase is far above the reference interval.",
        "CRP and neutrophils reflect inflammatory severity.",
        "Calcium can fall in severe cases.",
        "Mild liver enzyme or bilirubin elevation can suggest a biliary companion pattern."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "inflammation"
      ]
    },
    {
      "id": "pancreatitis-follow-up",
      "answer": "Pancreatitis",
      "explanation": "Marked lipase elevation with inflammatory markers supports pancreatitis. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "lipase": {
          "value": "380",
          "flag": "H"
        },
        "wbc": {
          "value": "12.5",
          "flag": "H"
        },
        "neutrophils": {
          "value": "9.6",
          "flag": "H"
        },
        "crp": {
          "value": "34",
          "flag": "H"
        },
        "glucose": {
          "value": "145",
          "flag": "H"
        },
        "calcium": {
          "value": "8.4",
          "flag": "L"
        },
        "ast": {
          "value": "48",
          "flag": "H"
        },
        "alt": {
          "value": "52",
          "flag": "H"
        },
        "bilirubin": {
          "value": "1.1",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "Lipase is far above the reference interval.",
        "CRP and neutrophils reflect inflammatory severity.",
        "Calcium can fall in severe cases.",
        "Mild liver enzyme or bilirubin elevation can suggest a biliary companion pattern."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "inflammation"
      ]
    },
    {
      "id": "protein-losing-malnutrition-pattern-early",
      "answer": "Protein-losing or malnutrition pattern",
      "explanation": "Low albumin with low total protein, lymphopenia, low BUN, and absent heavy proteinuria supports malnutrition or non-renal protein loss. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "11.2",
          "flag": "L"
        },
        "lymphocytes": {
          "value": "0.9",
          "flag": "L"
        },
        "total_protein": {
          "value": "5.8",
          "flag": "L"
        },
        "albumin": {
          "value": "3.0",
          "flag": "L"
        },
        "cholesterol": {
          "value": "145",
          "flag": "L"
        },
        "bun": {
          "value": "6",
          "flag": "L"
        },
        "calcium": {
          "value": "8.2",
          "flag": "L"
        },
        "urine_protein": {
          "value": "Negative"
        },
        "urine_pcr": {
          "value": "8"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "Albumin is low without nephrotic-range urine protein.",
        "Total protein is also low.",
        "BUN and cholesterol are low rather than high.",
        "The CBC suggests poor reserve rather than acute infection."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "urine"
      ]
    },
    {
      "id": "protein-losing-malnutrition-pattern-classic",
      "answer": "Protein-losing or malnutrition pattern",
      "explanation": "Low albumin with low total protein, lymphopenia, low BUN, and absent heavy proteinuria supports malnutrition or non-renal protein loss. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "10.4",
          "flag": "L"
        },
        "lymphocytes": {
          "value": "0.7",
          "flag": "L"
        },
        "total_protein": {
          "value": "5.2",
          "flag": "L"
        },
        "albumin": {
          "value": "2.4",
          "flag": "L"
        },
        "cholesterol": {
          "value": "120",
          "flag": "L"
        },
        "bun": {
          "value": "5",
          "flag": "L"
        },
        "calcium": {
          "value": "7.8",
          "flag": "L"
        },
        "urine_protein": {
          "value": "Trace"
        },
        "urine_pcr": {
          "value": "12"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "Albumin is low without nephrotic-range urine protein.",
        "Total protein is also low.",
        "BUN and cholesterol are low rather than high.",
        "The CBC suggests poor reserve rather than acute infection."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "urine"
      ]
    },
    {
      "id": "protein-losing-malnutrition-pattern-marked",
      "answer": "Protein-losing or malnutrition pattern",
      "explanation": "Low albumin with low total protein, lymphopenia, low BUN, and absent heavy proteinuria supports malnutrition or non-renal protein loss. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "9.6",
          "flag": "L"
        },
        "lymphocytes": {
          "value": "0.5",
          "flag": "L"
        },
        "total_protein": {
          "value": "4.6",
          "flag": "L"
        },
        "albumin": {
          "value": "1.9",
          "flag": "L"
        },
        "cholesterol": {
          "value": "95",
          "flag": "L"
        },
        "bun": {
          "value": "4",
          "flag": "L"
        },
        "calcium": {
          "value": "7.3",
          "flag": "L"
        },
        "urine_protein": {
          "value": "Negative"
        },
        "urine_pcr": {
          "value": "10"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "Albumin is low without nephrotic-range urine protein.",
        "Total protein is also low.",
        "BUN and cholesterol are low rather than high.",
        "The CBC suggests poor reserve rather than acute infection."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "urine"
      ]
    },
    {
      "id": "protein-losing-malnutrition-pattern-complicated",
      "answer": "Protein-losing or malnutrition pattern",
      "explanation": "Low albumin with low total protein, lymphopenia, low BUN, and absent heavy proteinuria supports malnutrition or non-renal protein loss. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "10.0",
          "flag": "L"
        },
        "lymphocytes": {
          "value": "0.6",
          "flag": "L"
        },
        "total_protein": {
          "value": "4.9",
          "flag": "L"
        },
        "albumin": {
          "value": "2.2",
          "flag": "L"
        },
        "cholesterol": {
          "value": "110",
          "flag": "L"
        },
        "bun": {
          "value": "5",
          "flag": "L"
        },
        "calcium": {
          "value": "7.6",
          "flag": "L"
        },
        "urine_protein": {
          "value": "Negative"
        },
        "urine_pcr": {
          "value": "9"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "Albumin is low without nephrotic-range urine protein.",
        "Total protein is also low.",
        "BUN and cholesterol are low rather than high.",
        "The CBC suggests poor reserve rather than acute infection."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "urine"
      ]
    },
    {
      "id": "protein-losing-malnutrition-pattern-follow-up",
      "answer": "Protein-losing or malnutrition pattern",
      "explanation": "Low albumin with low total protein, lymphopenia, low BUN, and absent heavy proteinuria supports malnutrition or non-renal protein loss. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "11.0",
          "flag": "L"
        },
        "lymphocytes": {
          "value": "1.0",
          "flag": "L"
        },
        "total_protein": {
          "value": "5.9",
          "flag": "L"
        },
        "albumin": {
          "value": "3.1",
          "flag": "L"
        },
        "cholesterol": {
          "value": "150",
          "flag": "L"
        },
        "bun": {
          "value": "6",
          "flag": "L"
        },
        "calcium": {
          "value": "8.3",
          "flag": "L"
        },
        "urine_protein": {
          "value": "Trace"
        },
        "urine_pcr": {
          "value": "11"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "Albumin is low without nephrotic-range urine protein.",
        "Total protein is also low.",
        "BUN and cholesterol are low rather than high.",
        "The CBC suggests poor reserve rather than acute infection."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "urine"
      ]
    },
    {
      "id": "primary-hypothyroidism-early",
      "answer": "Primary hypothyroidism",
      "explanation": "High TSH with low free T4 supports primary hypothyroidism; hyperlipidemia, CK elevation, hyponatremia, and mild anemia can accompany it. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "tsh": {
          "value": "8.5",
          "flag": "H"
        },
        "free_t4": {
          "value": "0.7",
          "flag": "L"
        },
        "free_t3": {
          "value": "2.1",
          "flag": "L"
        },
        "sodium": {
          "value": "134",
          "flag": "L"
        },
        "cholesterol": {
          "value": "230",
          "flag": "H"
        },
        "ldl": {
          "value": "150",
          "flag": "H"
        },
        "ck": {
          "value": "260",
          "flag": "H"
        },
        "hemoglobin": {
          "value": "11.8",
          "flag": "L"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "TSH is high, so the gland is underperforming despite stimulation.",
        "Free T4 is low.",
        "LDL and CK can rise.",
        "Mild hyponatremia or anemia can be associated."
      ],
      "panels": [
        "cbc",
        "renal",
        "thyroid"
      ]
    },
    {
      "id": "primary-hypothyroidism-classic",
      "answer": "Primary hypothyroidism",
      "explanation": "High TSH with low free T4 supports primary hypothyroidism; hyperlipidemia, CK elevation, hyponatremia, and mild anemia can accompany it. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "tsh": {
          "value": "22",
          "flag": "H"
        },
        "free_t4": {
          "value": "0.5",
          "flag": "L"
        },
        "free_t3": {
          "value": "1.8",
          "flag": "L"
        },
        "sodium": {
          "value": "132",
          "flag": "L"
        },
        "cholesterol": {
          "value": "280",
          "flag": "H"
        },
        "ldl": {
          "value": "190",
          "flag": "H"
        },
        "ck": {
          "value": "520",
          "flag": "H"
        },
        "hemoglobin": {
          "value": "11.0",
          "flag": "L"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "TSH is high, so the gland is underperforming despite stimulation.",
        "Free T4 is low.",
        "LDL and CK can rise.",
        "Mild hyponatremia or anemia can be associated."
      ],
      "panels": [
        "cbc",
        "renal",
        "thyroid"
      ]
    },
    {
      "id": "primary-hypothyroidism-marked",
      "answer": "Primary hypothyroidism",
      "explanation": "High TSH with low free T4 supports primary hypothyroidism; hyperlipidemia, CK elevation, hyponatremia, and mild anemia can accompany it. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "tsh": {
          "value": "78",
          "flag": "H"
        },
        "free_t4": {
          "value": "0.2",
          "flag": "L"
        },
        "free_t3": {
          "value": "1.2",
          "flag": "L"
        },
        "sodium": {
          "value": "128",
          "flag": "L"
        },
        "cholesterol": {
          "value": "360",
          "flag": "H"
        },
        "ldl": {
          "value": "250",
          "flag": "H"
        },
        "ck": {
          "value": "1200",
          "flag": "H"
        },
        "hemoglobin": {
          "value": "10.2",
          "flag": "L"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "TSH is high, so the gland is underperforming despite stimulation.",
        "Free T4 is low.",
        "LDL and CK can rise.",
        "Mild hyponatremia or anemia can be associated."
      ],
      "panels": [
        "cbc",
        "renal",
        "thyroid"
      ]
    },
    {
      "id": "primary-hypothyroidism-complicated",
      "answer": "Primary hypothyroidism",
      "explanation": "High TSH with low free T4 supports primary hypothyroidism; hyperlipidemia, CK elevation, hyponatremia, and mild anemia can accompany it. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "tsh": {
          "value": "45",
          "flag": "H"
        },
        "free_t4": {
          "value": "0.4",
          "flag": "L"
        },
        "free_t3": {
          "value": "1.5",
          "flag": "L"
        },
        "sodium": {
          "value": "130",
          "flag": "L"
        },
        "cholesterol": {
          "value": "320",
          "flag": "H"
        },
        "ldl": {
          "value": "220",
          "flag": "H"
        },
        "ck": {
          "value": "800",
          "flag": "H"
        },
        "hemoglobin": {
          "value": "10.6",
          "flag": "L"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "TSH is high, so the gland is underperforming despite stimulation.",
        "Free T4 is low.",
        "LDL and CK can rise.",
        "Mild hyponatremia or anemia can be associated."
      ],
      "panels": [
        "cbc",
        "renal",
        "thyroid"
      ]
    },
    {
      "id": "primary-hypothyroidism-follow-up",
      "answer": "Primary hypothyroidism",
      "explanation": "High TSH with low free T4 supports primary hypothyroidism; hyperlipidemia, CK elevation, hyponatremia, and mild anemia can accompany it. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "tsh": {
          "value": "6.8",
          "flag": "H"
        },
        "free_t4": {
          "value": "0.7",
          "flag": "L"
        },
        "free_t3": {
          "value": "2.2",
          "flag": "L"
        },
        "sodium": {
          "value": "135",
          "flag": "L"
        },
        "cholesterol": {
          "value": "220",
          "flag": "H"
        },
        "ldl": {
          "value": "140",
          "flag": "H"
        },
        "ck": {
          "value": "230",
          "flag": "H"
        },
        "hemoglobin": {
          "value": "12.0",
          "flag": "L"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "TSH is high, so the gland is underperforming despite stimulation.",
        "Free T4 is low.",
        "LDL and CK can rise.",
        "Mild hyponatremia or anemia can be associated."
      ],
      "panels": [
        "cbc",
        "renal",
        "thyroid"
      ]
    },
    {
      "id": "primary-hyperthyroidism-early",
      "answer": "Primary hyperthyroidism",
      "explanation": "Suppressed TSH with high free T4 and free T3 supports primary hyperthyroidism. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "tsh": {
          "value": "0.05",
          "flag": "L"
        },
        "free_t4": {
          "value": "2.1",
          "flag": "H"
        },
        "free_t3": {
          "value": "5.0",
          "flag": "H"
        },
        "calcium": {
          "value": "10.5",
          "flag": "H"
        },
        "alp": {
          "value": "160",
          "flag": "H"
        },
        "alt": {
          "value": "58",
          "flag": "H"
        },
        "cholesterol": {
          "value": "145",
          "flag": "L"
        },
        "wbc": {
          "value": "3.8",
          "flag": "L"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "TSH is suppressed.",
        "Both thyroid hormones are elevated.",
        "Alkaline phosphatase and calcium can rise from bone turnover.",
        "Cholesterol may be low."
      ],
      "panels": [
        "cbc",
        "renal",
        "thyroid",
        "liver"
      ]
    },
    {
      "id": "primary-hyperthyroidism-classic",
      "answer": "Primary hyperthyroidism",
      "explanation": "Suppressed TSH with high free T4 and free T3 supports primary hyperthyroidism. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "tsh": {
          "value": "0.01",
          "flag": "L"
        },
        "free_t4": {
          "value": "3.0",
          "flag": "H"
        },
        "free_t3": {
          "value": "7.2",
          "flag": "H"
        },
        "calcium": {
          "value": "11.0",
          "flag": "H"
        },
        "alp": {
          "value": "210",
          "flag": "H"
        },
        "alt": {
          "value": "76",
          "flag": "H"
        },
        "cholesterol": {
          "value": "125",
          "flag": "L"
        },
        "wbc": {
          "value": "3.4",
          "flag": "L"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "TSH is suppressed.",
        "Both thyroid hormones are elevated.",
        "Alkaline phosphatase and calcium can rise from bone turnover.",
        "Cholesterol may be low."
      ],
      "panels": [
        "cbc",
        "renal",
        "thyroid",
        "liver"
      ]
    },
    {
      "id": "primary-hyperthyroidism-marked",
      "answer": "Primary hyperthyroidism",
      "explanation": "Suppressed TSH with high free T4 and free T3 supports primary hyperthyroidism. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "tsh": {
          "value": "0.00",
          "flag": "L"
        },
        "free_t4": {
          "value": "5.2",
          "flag": "H"
        },
        "free_t3": {
          "value": "12.0",
          "flag": "H"
        },
        "calcium": {
          "value": "12.0",
          "flag": "H"
        },
        "alp": {
          "value": "320",
          "flag": "H"
        },
        "alt": {
          "value": "110",
          "flag": "H"
        },
        "cholesterol": {
          "value": "100",
          "flag": "L"
        },
        "wbc": {
          "value": "3.0",
          "flag": "L"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "TSH is suppressed.",
        "Both thyroid hormones are elevated.",
        "Alkaline phosphatase and calcium can rise from bone turnover.",
        "Cholesterol may be low."
      ],
      "panels": [
        "cbc",
        "renal",
        "thyroid",
        "liver"
      ]
    },
    {
      "id": "primary-hyperthyroidism-complicated",
      "answer": "Primary hyperthyroidism",
      "explanation": "Suppressed TSH with high free T4 and free T3 supports primary hyperthyroidism. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "tsh": {
          "value": "0.01",
          "flag": "L"
        },
        "free_t4": {
          "value": "4.0",
          "flag": "H"
        },
        "free_t3": {
          "value": "9.4",
          "flag": "H"
        },
        "calcium": {
          "value": "11.5",
          "flag": "H"
        },
        "alp": {
          "value": "260",
          "flag": "H"
        },
        "alt": {
          "value": "90",
          "flag": "H"
        },
        "cholesterol": {
          "value": "115",
          "flag": "L"
        },
        "wbc": {
          "value": "3.2",
          "flag": "L"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "TSH is suppressed.",
        "Both thyroid hormones are elevated.",
        "Alkaline phosphatase and calcium can rise from bone turnover.",
        "Cholesterol may be low."
      ],
      "panels": [
        "cbc",
        "renal",
        "thyroid",
        "liver"
      ]
    },
    {
      "id": "primary-hyperthyroidism-follow-up",
      "answer": "Primary hyperthyroidism",
      "explanation": "Suppressed TSH with high free T4 and free T3 supports primary hyperthyroidism. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "tsh": {
          "value": "0.08",
          "flag": "L"
        },
        "free_t4": {
          "value": "2.0",
          "flag": "H"
        },
        "free_t3": {
          "value": "4.8",
          "flag": "H"
        },
        "calcium": {
          "value": "10.4",
          "flag": "H"
        },
        "alp": {
          "value": "150",
          "flag": "H"
        },
        "alt": {
          "value": "52",
          "flag": "H"
        },
        "cholesterol": {
          "value": "150",
          "flag": "L"
        },
        "wbc": {
          "value": "4.0",
          "flag": "L"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "TSH is suppressed.",
        "Both thyroid hormones are elevated.",
        "Alkaline phosphatase and calcium can rise from bone turnover.",
        "Cholesterol may be low."
      ],
      "panels": [
        "cbc",
        "renal",
        "thyroid",
        "liver"
      ]
    },
    {
      "id": "subclinical-hypothyroidism-early",
      "answer": "Subclinical hypothyroidism",
      "explanation": "Mildly elevated TSH with normal free T4 supports subclinical hypothyroidism. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "tsh": {
          "value": "5.1",
          "flag": "H"
        },
        "free_t4": {
          "value": "1.1"
        },
        "free_t3": {
          "value": "3.1"
        },
        "cholesterol": {
          "value": "215",
          "flag": "H"
        },
        "ldl": {
          "value": "135",
          "flag": "H"
        },
        "sodium": {
          "value": "140"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "TSH is above range.",
        "Free T4 remains in range.",
        "Lipids may be mildly abnormal.",
        "There is no overt low-thyroxine pattern."
      ],
      "panels": [
        "renal",
        "thyroid"
      ]
    },
    {
      "id": "subclinical-hypothyroidism-classic",
      "answer": "Subclinical hypothyroidism",
      "explanation": "Mildly elevated TSH with normal free T4 supports subclinical hypothyroidism. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "tsh": {
          "value": "6.8",
          "flag": "H"
        },
        "free_t4": {
          "value": "1.0"
        },
        "free_t3": {
          "value": "3.0"
        },
        "cholesterol": {
          "value": "240",
          "flag": "H"
        },
        "ldl": {
          "value": "155",
          "flag": "H"
        },
        "sodium": {
          "value": "139"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "TSH is above range.",
        "Free T4 remains in range.",
        "Lipids may be mildly abnormal.",
        "There is no overt low-thyroxine pattern."
      ],
      "panels": [
        "renal",
        "thyroid"
      ]
    },
    {
      "id": "subclinical-hypothyroidism-marked",
      "answer": "Subclinical hypothyroidism",
      "explanation": "Mildly elevated TSH with normal free T4 supports subclinical hypothyroidism. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "tsh": {
          "value": "9.5",
          "flag": "H"
        },
        "free_t4": {
          "value": "0.9"
        },
        "free_t3": {
          "value": "2.8"
        },
        "cholesterol": {
          "value": "285",
          "flag": "H"
        },
        "ldl": {
          "value": "190",
          "flag": "H"
        },
        "sodium": {
          "value": "138"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "TSH is above range.",
        "Free T4 remains in range.",
        "Lipids may be mildly abnormal.",
        "There is no overt low-thyroxine pattern."
      ],
      "panels": [
        "renal",
        "thyroid"
      ]
    },
    {
      "id": "subclinical-hypothyroidism-complicated",
      "answer": "Subclinical hypothyroidism",
      "explanation": "Mildly elevated TSH with normal free T4 supports subclinical hypothyroidism. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "tsh": {
          "value": "7.6",
          "flag": "H"
        },
        "free_t4": {
          "value": "1.0"
        },
        "free_t3": {
          "value": "2.9"
        },
        "cholesterol": {
          "value": "260",
          "flag": "H"
        },
        "ldl": {
          "value": "170",
          "flag": "H"
        },
        "sodium": {
          "value": "139"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "TSH is above range.",
        "Free T4 remains in range.",
        "Lipids may be mildly abnormal.",
        "There is no overt low-thyroxine pattern."
      ],
      "panels": [
        "renal",
        "thyroid"
      ]
    },
    {
      "id": "subclinical-hypothyroidism-follow-up",
      "answer": "Subclinical hypothyroidism",
      "explanation": "Mildly elevated TSH with normal free T4 supports subclinical hypothyroidism. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "tsh": {
          "value": "4.8",
          "flag": "H"
        },
        "free_t4": {
          "value": "1.2"
        },
        "free_t3": {
          "value": "3.2"
        },
        "cholesterol": {
          "value": "205",
          "flag": "H"
        },
        "ldl": {
          "value": "125",
          "flag": "H"
        },
        "sodium": {
          "value": "141"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "TSH is above range.",
        "Free T4 remains in range.",
        "Lipids may be mildly abnormal.",
        "There is no overt low-thyroxine pattern."
      ],
      "panels": [
        "renal",
        "thyroid"
      ]
    },
    {
      "id": "subclinical-hyperthyroidism-early",
      "answer": "Subclinical hyperthyroidism",
      "explanation": "Low TSH with normal free T4 and free T3 supports subclinical hyperthyroidism. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "tsh": {
          "value": "0.20",
          "flag": "L"
        },
        "free_t4": {
          "value": "1.4"
        },
        "free_t3": {
          "value": "3.5"
        },
        "calcium": {
          "value": "9.8"
        },
        "cholesterol": {
          "value": "175"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "TSH is suppressed or low.",
        "Free thyroid hormones are still in range.",
        "The pattern is biochemical rather than overt thyrotoxicosis.",
        "Calcium and liver markers are not strongly abnormal."
      ],
      "panels": [
        "renal",
        "thyroid"
      ]
    },
    {
      "id": "subclinical-hyperthyroidism-classic",
      "answer": "Subclinical hyperthyroidism",
      "explanation": "Low TSH with normal free T4 and free T3 supports subclinical hyperthyroidism. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "tsh": {
          "value": "0.10",
          "flag": "L"
        },
        "free_t4": {
          "value": "1.5"
        },
        "free_t3": {
          "value": "3.8"
        },
        "calcium": {
          "value": "10.0"
        },
        "cholesterol": {
          "value": "165"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "TSH is suppressed or low.",
        "Free thyroid hormones are still in range.",
        "The pattern is biochemical rather than overt thyrotoxicosis.",
        "Calcium and liver markers are not strongly abnormal."
      ],
      "panels": [
        "renal",
        "thyroid"
      ]
    },
    {
      "id": "subclinical-hyperthyroidism-marked",
      "answer": "Subclinical hyperthyroidism",
      "explanation": "Low TSH with normal free T4 and free T3 supports subclinical hyperthyroidism. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "tsh": {
          "value": "0.03",
          "flag": "L"
        },
        "free_t4": {
          "value": "1.7"
        },
        "free_t3": {
          "value": "4.0"
        },
        "calcium": {
          "value": "10.2"
        },
        "cholesterol": {
          "value": "150"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "TSH is suppressed or low.",
        "Free thyroid hormones are still in range.",
        "The pattern is biochemical rather than overt thyrotoxicosis.",
        "Calcium and liver markers are not strongly abnormal."
      ],
      "panels": [
        "renal",
        "thyroid"
      ]
    },
    {
      "id": "subclinical-hyperthyroidism-complicated",
      "answer": "Subclinical hyperthyroidism",
      "explanation": "Low TSH with normal free T4 and free T3 supports subclinical hyperthyroidism. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "tsh": {
          "value": "0.06",
          "flag": "L"
        },
        "free_t4": {
          "value": "1.6"
        },
        "free_t3": {
          "value": "3.9"
        },
        "calcium": {
          "value": "10.1"
        },
        "cholesterol": {
          "value": "160"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "TSH is suppressed or low.",
        "Free thyroid hormones are still in range.",
        "The pattern is biochemical rather than overt thyrotoxicosis.",
        "Calcium and liver markers are not strongly abnormal."
      ],
      "panels": [
        "renal",
        "thyroid"
      ]
    },
    {
      "id": "subclinical-hyperthyroidism-follow-up",
      "answer": "Subclinical hyperthyroidism",
      "explanation": "Low TSH with normal free T4 and free T3 supports subclinical hyperthyroidism. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "tsh": {
          "value": "0.25",
          "flag": "L"
        },
        "free_t4": {
          "value": "1.3"
        },
        "free_t3": {
          "value": "3.4"
        },
        "calcium": {
          "value": "9.7"
        },
        "cholesterol": {
          "value": "180"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "TSH is suppressed or low.",
        "Free thyroid hormones are still in range.",
        "The pattern is biochemical rather than overt thyrotoxicosis.",
        "Calcium and liver markers are not strongly abnormal."
      ],
      "panels": [
        "renal",
        "thyroid"
      ]
    },
    {
      "id": "t3-toxicosis-early",
      "answer": "T3 toxicosis",
      "explanation": "Suppressed TSH with isolated free T3 elevation and normal free T4 supports T3 toxicosis. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "tsh": {
          "value": "0.08",
          "flag": "L"
        },
        "free_t4": {
          "value": "1.4"
        },
        "free_t3": {
          "value": "4.8",
          "flag": "H"
        },
        "alp": {
          "value": "150",
          "flag": "H"
        },
        "calcium": {
          "value": "10.4",
          "flag": "H"
        },
        "cholesterol": {
          "value": "150",
          "flag": "L"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "TSH is suppressed.",
        "Free T3 is high.",
        "Free T4 has not risen above range.",
        "Bone-turnover markers such as calcium or alkaline phosphatase may increase."
      ],
      "panels": [
        "renal",
        "thyroid",
        "liver"
      ]
    },
    {
      "id": "t3-toxicosis-classic",
      "answer": "T3 toxicosis",
      "explanation": "Suppressed TSH with isolated free T3 elevation and normal free T4 supports T3 toxicosis. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "tsh": {
          "value": "0.03",
          "flag": "L"
        },
        "free_t4": {
          "value": "1.5"
        },
        "free_t3": {
          "value": "6.2",
          "flag": "H"
        },
        "alp": {
          "value": "190",
          "flag": "H"
        },
        "calcium": {
          "value": "10.8",
          "flag": "H"
        },
        "cholesterol": {
          "value": "135",
          "flag": "L"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "TSH is suppressed.",
        "Free T3 is high.",
        "Free T4 has not risen above range.",
        "Bone-turnover markers such as calcium or alkaline phosphatase may increase."
      ],
      "panels": [
        "renal",
        "thyroid",
        "liver"
      ]
    },
    {
      "id": "t3-toxicosis-marked",
      "answer": "T3 toxicosis",
      "explanation": "Suppressed TSH with isolated free T3 elevation and normal free T4 supports T3 toxicosis. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "tsh": {
          "value": "0.00",
          "flag": "L"
        },
        "free_t4": {
          "value": "1.6"
        },
        "free_t3": {
          "value": "9.0",
          "flag": "H"
        },
        "alp": {
          "value": "270",
          "flag": "H"
        },
        "calcium": {
          "value": "11.4",
          "flag": "H"
        },
        "cholesterol": {
          "value": "115",
          "flag": "L"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "TSH is suppressed.",
        "Free T3 is high.",
        "Free T4 has not risen above range.",
        "Bone-turnover markers such as calcium or alkaline phosphatase may increase."
      ],
      "panels": [
        "renal",
        "thyroid",
        "liver"
      ]
    },
    {
      "id": "t3-toxicosis-complicated",
      "answer": "T3 toxicosis",
      "explanation": "Suppressed TSH with isolated free T3 elevation and normal free T4 supports T3 toxicosis. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "tsh": {
          "value": "0.01",
          "flag": "L"
        },
        "free_t4": {
          "value": "1.5"
        },
        "free_t3": {
          "value": "7.4",
          "flag": "H"
        },
        "alp": {
          "value": "230",
          "flag": "H"
        },
        "calcium": {
          "value": "11.0",
          "flag": "H"
        },
        "cholesterol": {
          "value": "125",
          "flag": "L"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "TSH is suppressed.",
        "Free T3 is high.",
        "Free T4 has not risen above range.",
        "Bone-turnover markers such as calcium or alkaline phosphatase may increase."
      ],
      "panels": [
        "renal",
        "thyroid",
        "liver"
      ]
    },
    {
      "id": "t3-toxicosis-follow-up",
      "answer": "T3 toxicosis",
      "explanation": "Suppressed TSH with isolated free T3 elevation and normal free T4 supports T3 toxicosis. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "tsh": {
          "value": "0.10",
          "flag": "L"
        },
        "free_t4": {
          "value": "1.3"
        },
        "free_t3": {
          "value": "4.5",
          "flag": "H"
        },
        "alp": {
          "value": "145",
          "flag": "H"
        },
        "calcium": {
          "value": "10.3",
          "flag": "H"
        },
        "cholesterol": {
          "value": "155",
          "flag": "L"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "TSH is suppressed.",
        "Free T3 is high.",
        "Free T4 has not risen above range.",
        "Bone-turnover markers such as calcium or alkaline phosphatase may increase."
      ],
      "panels": [
        "renal",
        "thyroid",
        "liver"
      ]
    },
    {
      "id": "hypertriglyceridemia-pattern-early",
      "answer": "Hypertriglyceridemia pattern",
      "explanation": "Severe triglyceride elevation with low HDL and insulin-resistance markers supports a hypertriglyceridemia pattern. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "triglycerides": {
          "value": "360",
          "flag": "H"
        },
        "cholesterol": {
          "value": "230",
          "flag": "H"
        },
        "hdl": {
          "value": "34",
          "flag": "L"
        },
        "glucose": {
          "value": "150",
          "flag": "H"
        },
        "hba1c": {
          "value": "6.8",
          "flag": "H"
        },
        "alt": {
          "value": "58",
          "flag": "H"
        },
        "lipase": {
          "value": "80"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "Triglycerides are the dominant lipid abnormality.",
        "HDL is low.",
        "Glucose and HbA1c may reveal metabolic risk.",
        "Lipase is not necessarily elevated unless pancreatitis is present."
      ],
      "panels": [
        "renal",
        "liver"
      ]
    },
    {
      "id": "hypertriglyceridemia-pattern-classic",
      "answer": "Hypertriglyceridemia pattern",
      "explanation": "Severe triglyceride elevation with low HDL and insulin-resistance markers supports a hypertriglyceridemia pattern. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "triglycerides": {
          "value": "620",
          "flag": "H"
        },
        "cholesterol": {
          "value": "280",
          "flag": "H"
        },
        "hdl": {
          "value": "30",
          "flag": "L"
        },
        "glucose": {
          "value": "210",
          "flag": "H"
        },
        "hba1c": {
          "value": "8.4",
          "flag": "H"
        },
        "alt": {
          "value": "78",
          "flag": "H"
        },
        "lipase": {
          "value": "120"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "Triglycerides are the dominant lipid abnormality.",
        "HDL is low.",
        "Glucose and HbA1c may reveal metabolic risk.",
        "Lipase is not necessarily elevated unless pancreatitis is present."
      ],
      "panels": [
        "renal",
        "liver"
      ]
    },
    {
      "id": "hypertriglyceridemia-pattern-marked",
      "answer": "Hypertriglyceridemia pattern",
      "explanation": "Severe triglyceride elevation with low HDL and insulin-resistance markers supports a hypertriglyceridemia pattern. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "triglycerides": {
          "value": "1450",
          "flag": "H"
        },
        "cholesterol": {
          "value": "420",
          "flag": "H"
        },
        "hdl": {
          "value": "24",
          "flag": "L"
        },
        "glucose": {
          "value": "320",
          "flag": "H"
        },
        "hba1c": {
          "value": "11.2",
          "flag": "H"
        },
        "alt": {
          "value": "120",
          "flag": "H"
        },
        "lipase": {
          "value": "150"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "Triglycerides are the dominant lipid abnormality.",
        "HDL is low.",
        "Glucose and HbA1c may reveal metabolic risk.",
        "Lipase is not necessarily elevated unless pancreatitis is present."
      ],
      "panels": [
        "renal",
        "liver"
      ]
    },
    {
      "id": "hypertriglyceridemia-pattern-complicated",
      "answer": "Hypertriglyceridemia pattern",
      "explanation": "Severe triglyceride elevation with low HDL and insulin-resistance markers supports a hypertriglyceridemia pattern. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "triglycerides": {
          "value": "980",
          "flag": "H"
        },
        "cholesterol": {
          "value": "360",
          "flag": "H"
        },
        "hdl": {
          "value": "27",
          "flag": "L"
        },
        "glucose": {
          "value": "260",
          "flag": "H"
        },
        "hba1c": {
          "value": "9.6",
          "flag": "H"
        },
        "alt": {
          "value": "96",
          "flag": "H"
        },
        "lipase": {
          "value": "130"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "Triglycerides are the dominant lipid abnormality.",
        "HDL is low.",
        "Glucose and HbA1c may reveal metabolic risk.",
        "Lipase is not necessarily elevated unless pancreatitis is present."
      ],
      "panels": [
        "renal",
        "liver"
      ]
    },
    {
      "id": "hypertriglyceridemia-pattern-follow-up",
      "answer": "Hypertriglyceridemia pattern",
      "explanation": "Severe triglyceride elevation with low HDL and insulin-resistance markers supports a hypertriglyceridemia pattern. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "triglycerides": {
          "value": "280",
          "flag": "H"
        },
        "cholesterol": {
          "value": "220",
          "flag": "H"
        },
        "hdl": {
          "value": "36",
          "flag": "L"
        },
        "glucose": {
          "value": "140",
          "flag": "H"
        },
        "hba1c": {
          "value": "6.4",
          "flag": "H"
        },
        "alt": {
          "value": "50",
          "flag": "H"
        },
        "lipase": {
          "value": "70"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "Triglycerides are the dominant lipid abnormality.",
        "HDL is low.",
        "Glucose and HbA1c may reveal metabolic risk.",
        "Lipase is not necessarily elevated unless pancreatitis is present."
      ],
      "panels": [
        "renal",
        "liver"
      ]
    },
    {
      "id": "familial-hypercholesterolemia-pattern-early",
      "answer": "Familial hypercholesterolemia pattern",
      "explanation": "Very high LDL with relatively normal triglycerides and no hypothyroid or diabetes pattern supports familial hypercholesterolemia. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "cholesterol": {
          "value": "290",
          "flag": "H"
        },
        "ldl": {
          "value": "210",
          "flag": "H"
        },
        "triglycerides": {
          "value": "110"
        },
        "hdl": {
          "value": "48"
        },
        "glucose": {
          "value": "92"
        },
        "hba1c": {
          "value": "5.2"
        },
        "tsh": {
          "value": "1.8"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "LDL is the standout abnormality.",
        "Triglycerides are not proportionally high.",
        "Thyroid and glycemic markers do not explain the lipid level.",
        "The pattern is isolated atherogenic cholesterol excess."
      ],
      "panels": [
        "renal",
        "liver",
        "thyroid"
      ]
    },
    {
      "id": "familial-hypercholesterolemia-pattern-classic",
      "answer": "Familial hypercholesterolemia pattern",
      "explanation": "Very high LDL with relatively normal triglycerides and no hypothyroid or diabetes pattern supports familial hypercholesterolemia. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "cholesterol": {
          "value": "340",
          "flag": "H"
        },
        "ldl": {
          "value": "260",
          "flag": "H"
        },
        "triglycerides": {
          "value": "125"
        },
        "hdl": {
          "value": "52"
        },
        "glucose": {
          "value": "96"
        },
        "hba1c": {
          "value": "5.4"
        },
        "tsh": {
          "value": "2.0"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "LDL is the standout abnormality.",
        "Triglycerides are not proportionally high.",
        "Thyroid and glycemic markers do not explain the lipid level.",
        "The pattern is isolated atherogenic cholesterol excess."
      ],
      "panels": [
        "renal",
        "liver",
        "thyroid"
      ]
    },
    {
      "id": "familial-hypercholesterolemia-pattern-marked",
      "answer": "Familial hypercholesterolemia pattern",
      "explanation": "Very high LDL with relatively normal triglycerides and no hypothyroid or diabetes pattern supports familial hypercholesterolemia. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "cholesterol": {
          "value": "430",
          "flag": "H"
        },
        "ldl": {
          "value": "340",
          "flag": "H"
        },
        "triglycerides": {
          "value": "140"
        },
        "hdl": {
          "value": "46"
        },
        "glucose": {
          "value": "104"
        },
        "hba1c": {
          "value": "5.5"
        },
        "tsh": {
          "value": "2.4"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "LDL is the standout abnormality.",
        "Triglycerides are not proportionally high.",
        "Thyroid and glycemic markers do not explain the lipid level.",
        "The pattern is isolated atherogenic cholesterol excess."
      ],
      "panels": [
        "renal",
        "liver",
        "thyroid"
      ]
    },
    {
      "id": "familial-hypercholesterolemia-pattern-complicated",
      "answer": "Familial hypercholesterolemia pattern",
      "explanation": "Very high LDL with relatively normal triglycerides and no hypothyroid or diabetes pattern supports familial hypercholesterolemia. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "cholesterol": {
          "value": "390",
          "flag": "H"
        },
        "ldl": {
          "value": "300",
          "flag": "H"
        },
        "triglycerides": {
          "value": "130"
        },
        "hdl": {
          "value": "50"
        },
        "glucose": {
          "value": "100"
        },
        "hba1c": {
          "value": "5.3"
        },
        "tsh": {
          "value": "2.2"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "LDL is the standout abnormality.",
        "Triglycerides are not proportionally high.",
        "Thyroid and glycemic markers do not explain the lipid level.",
        "The pattern is isolated atherogenic cholesterol excess."
      ],
      "panels": [
        "renal",
        "liver",
        "thyroid"
      ]
    },
    {
      "id": "familial-hypercholesterolemia-pattern-follow-up",
      "answer": "Familial hypercholesterolemia pattern",
      "explanation": "Very high LDL with relatively normal triglycerides and no hypothyroid or diabetes pattern supports familial hypercholesterolemia. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "cholesterol": {
          "value": "270",
          "flag": "H"
        },
        "ldl": {
          "value": "190",
          "flag": "H"
        },
        "triglycerides": {
          "value": "105"
        },
        "hdl": {
          "value": "55"
        },
        "glucose": {
          "value": "90"
        },
        "hba1c": {
          "value": "5.1"
        },
        "tsh": {
          "value": "1.6"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "LDL is the standout abnormality.",
        "Triglycerides are not proportionally high.",
        "Thyroid and glycemic markers do not explain the lipid level.",
        "The pattern is isolated atherogenic cholesterol excess."
      ],
      "panels": [
        "renal",
        "liver",
        "thyroid"
      ]
    },
    {
      "id": "hypercalcemia-kidney-stress-early",
      "answer": "Hypercalcemia with kidney stress",
      "explanation": "Hypercalcemia with azotemia, dilute urine, and metabolic alkalosis tendency supports calcium-related kidney stress. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "calcium": {
          "value": "11.0",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.4",
          "flag": "H"
        },
        "egfr": {
          "value": "56",
          "flag": "L"
        },
        "bun": {
          "value": "26",
          "flag": "H"
        },
        "potassium": {
          "value": "4.1"
        },
        "bicarbonate": {
          "value": "29",
          "flag": "H"
        },
        "urine_specific_gravity": {
          "value": "1.010",
          "flag": "L"
        },
        "hemoglobin": {
          "value": "13.5"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "Calcium is clearly elevated.",
        "Creatinine rises with impaired concentrating ability.",
        "Bicarbonate can be high in alkali-associated patterns.",
        "The urine is relatively dilute."
      ],
      "panels": [
        "cbc",
        "renal",
        "urine"
      ]
    },
    {
      "id": "hypercalcemia-kidney-stress-classic",
      "answer": "Hypercalcemia with kidney stress",
      "explanation": "Hypercalcemia with azotemia, dilute urine, and metabolic alkalosis tendency supports calcium-related kidney stress. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "calcium": {
          "value": "12.2",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.9",
          "flag": "H"
        },
        "egfr": {
          "value": "40",
          "flag": "L"
        },
        "bun": {
          "value": "38",
          "flag": "H"
        },
        "potassium": {
          "value": "4.2"
        },
        "bicarbonate": {
          "value": "31",
          "flag": "H"
        },
        "urine_specific_gravity": {
          "value": "1.008",
          "flag": "L"
        },
        "hemoglobin": {
          "value": "13.0"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "Calcium is clearly elevated.",
        "Creatinine rises with impaired concentrating ability.",
        "Bicarbonate can be high in alkali-associated patterns.",
        "The urine is relatively dilute."
      ],
      "panels": [
        "cbc",
        "renal",
        "urine"
      ]
    },
    {
      "id": "hypercalcemia-kidney-stress-marked",
      "answer": "Hypercalcemia with kidney stress",
      "explanation": "Hypercalcemia with azotemia, dilute urine, and metabolic alkalosis tendency supports calcium-related kidney stress. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "calcium": {
          "value": "14.0",
          "flag": "H"
        },
        "creatinine": {
          "value": "3.0",
          "flag": "H"
        },
        "egfr": {
          "value": "22",
          "flag": "L"
        },
        "bun": {
          "value": "58",
          "flag": "H"
        },
        "potassium": {
          "value": "4.6"
        },
        "bicarbonate": {
          "value": "34",
          "flag": "H"
        },
        "urine_specific_gravity": {
          "value": "1.006",
          "flag": "L"
        },
        "hemoglobin": {
          "value": "12.4"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "Calcium is clearly elevated.",
        "Creatinine rises with impaired concentrating ability.",
        "Bicarbonate can be high in alkali-associated patterns.",
        "The urine is relatively dilute."
      ],
      "panels": [
        "cbc",
        "renal",
        "urine"
      ]
    },
    {
      "id": "hypercalcemia-kidney-stress-complicated",
      "answer": "Hypercalcemia with kidney stress",
      "explanation": "Hypercalcemia with azotemia, dilute urine, and metabolic alkalosis tendency supports calcium-related kidney stress. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "calcium": {
          "value": "13.0",
          "flag": "H"
        },
        "creatinine": {
          "value": "2.4",
          "flag": "H"
        },
        "egfr": {
          "value": "30",
          "flag": "L"
        },
        "bun": {
          "value": "46",
          "flag": "H"
        },
        "potassium": {
          "value": "4.4"
        },
        "bicarbonate": {
          "value": "32",
          "flag": "H"
        },
        "urine_specific_gravity": {
          "value": "1.007",
          "flag": "L"
        },
        "hemoglobin": {
          "value": "12.8"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "Calcium is clearly elevated.",
        "Creatinine rises with impaired concentrating ability.",
        "Bicarbonate can be high in alkali-associated patterns.",
        "The urine is relatively dilute."
      ],
      "panels": [
        "cbc",
        "renal",
        "urine"
      ]
    },
    {
      "id": "hypercalcemia-kidney-stress-follow-up",
      "answer": "Hypercalcemia with kidney stress",
      "explanation": "Hypercalcemia with azotemia, dilute urine, and metabolic alkalosis tendency supports calcium-related kidney stress. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "calcium": {
          "value": "10.8",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.5",
          "flag": "H"
        },
        "egfr": {
          "value": "52",
          "flag": "L"
        },
        "bun": {
          "value": "24",
          "flag": "H"
        },
        "potassium": {
          "value": "4.0"
        },
        "bicarbonate": {
          "value": "28",
          "flag": "H"
        },
        "urine_specific_gravity": {
          "value": "1.011",
          "flag": "L"
        },
        "hemoglobin": {
          "value": "13.8"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "Calcium is clearly elevated.",
        "Creatinine rises with impaired concentrating ability.",
        "Bicarbonate can be high in alkali-associated patterns.",
        "The urine is relatively dilute."
      ],
      "panels": [
        "cbc",
        "renal",
        "urine"
      ]
    },
    {
      "id": "acute-leukemia-early",
      "answer": "Acute leukemia",
      "explanation": "Cytopenias with circulating blasts, high LDH, and high uric acid supports acute leukemia. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "9.2",
          "flag": "L"
        },
        "wbc": {
          "value": "28",
          "flag": "H"
        },
        "neutrophils": {
          "value": "1.2",
          "flag": "L"
        },
        "platelets": {
          "value": "58",
          "flag": "L"
        },
        "blasts": {
          "value": "32",
          "flag": "H"
        },
        "ldh": {
          "value": "620",
          "flag": "H"
        },
        "uric_acid": {
          "value": "8.6",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.3",
          "flag": "H"
        },
        "egfr": {
          "value": "60",
          "flag": "L"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "Blasts are the decisive abnormality.",
        "Anemia and thrombocytopenia reflect marrow replacement.",
        "LDH and uric acid rise with high cell turnover.",
        "Neutrophils may be low despite a high total white count."
      ],
      "panels": [
        "cbc",
        "hemeMalignancy",
        "renal"
      ]
    },
    {
      "id": "acute-leukemia-classic",
      "answer": "Acute leukemia",
      "explanation": "Cytopenias with circulating blasts, high LDH, and high uric acid supports acute leukemia. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "7.8",
          "flag": "L"
        },
        "wbc": {
          "value": "64",
          "flag": "H"
        },
        "neutrophils": {
          "value": "0.8",
          "flag": "L"
        },
        "platelets": {
          "value": "28",
          "flag": "L"
        },
        "blasts": {
          "value": "58",
          "flag": "H"
        },
        "ldh": {
          "value": "1200",
          "flag": "H"
        },
        "uric_acid": {
          "value": "11.2",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.7",
          "flag": "H"
        },
        "egfr": {
          "value": "46",
          "flag": "L"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "Blasts are the decisive abnormality.",
        "Anemia and thrombocytopenia reflect marrow replacement.",
        "LDH and uric acid rise with high cell turnover.",
        "Neutrophils may be low despite a high total white count."
      ],
      "panels": [
        "cbc",
        "hemeMalignancy",
        "renal"
      ]
    },
    {
      "id": "acute-leukemia-marked",
      "answer": "Acute leukemia",
      "explanation": "Cytopenias with circulating blasts, high LDH, and high uric acid supports acute leukemia. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "6.5",
          "flag": "L"
        },
        "wbc": {
          "value": "140",
          "flag": "H"
        },
        "neutrophils": {
          "value": "0.4",
          "flag": "L"
        },
        "platelets": {
          "value": "10",
          "flag": "L"
        },
        "blasts": {
          "value": "86",
          "flag": "H"
        },
        "ldh": {
          "value": "2600",
          "flag": "H"
        },
        "uric_acid": {
          "value": "15.8",
          "flag": "H"
        },
        "creatinine": {
          "value": "2.5",
          "flag": "H"
        },
        "egfr": {
          "value": "28",
          "flag": "L"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "Blasts are the decisive abnormality.",
        "Anemia and thrombocytopenia reflect marrow replacement.",
        "LDH and uric acid rise with high cell turnover.",
        "Neutrophils may be low despite a high total white count."
      ],
      "panels": [
        "cbc",
        "hemeMalignancy",
        "renal"
      ]
    },
    {
      "id": "acute-leukemia-complicated",
      "answer": "Acute leukemia",
      "explanation": "Cytopenias with circulating blasts, high LDH, and high uric acid supports acute leukemia. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "7.2",
          "flag": "L"
        },
        "wbc": {
          "value": "92",
          "flag": "H"
        },
        "neutrophils": {
          "value": "0.6",
          "flag": "L"
        },
        "platelets": {
          "value": "18",
          "flag": "L"
        },
        "blasts": {
          "value": "72",
          "flag": "H"
        },
        "ldh": {
          "value": "1800",
          "flag": "H"
        },
        "uric_acid": {
          "value": "13.0",
          "flag": "H"
        },
        "creatinine": {
          "value": "2.0",
          "flag": "H"
        },
        "egfr": {
          "value": "36",
          "flag": "L"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "Blasts are the decisive abnormality.",
        "Anemia and thrombocytopenia reflect marrow replacement.",
        "LDH and uric acid rise with high cell turnover.",
        "Neutrophils may be low despite a high total white count."
      ],
      "panels": [
        "cbc",
        "hemeMalignancy",
        "renal"
      ]
    },
    {
      "id": "acute-leukemia-follow-up",
      "answer": "Acute leukemia",
      "explanation": "Cytopenias with circulating blasts, high LDH, and high uric acid supports acute leukemia. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "9.8",
          "flag": "L"
        },
        "wbc": {
          "value": "18",
          "flag": "H"
        },
        "neutrophils": {
          "value": "1.5",
          "flag": "L"
        },
        "platelets": {
          "value": "72",
          "flag": "L"
        },
        "blasts": {
          "value": "24",
          "flag": "H"
        },
        "ldh": {
          "value": "520",
          "flag": "H"
        },
        "uric_acid": {
          "value": "7.8",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.4",
          "flag": "H"
        },
        "egfr": {
          "value": "56",
          "flag": "L"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "Blasts are the decisive abnormality.",
        "Anemia and thrombocytopenia reflect marrow replacement.",
        "LDH and uric acid rise with high cell turnover.",
        "Neutrophils may be low despite a high total white count."
      ],
      "panels": [
        "cbc",
        "hemeMalignancy",
        "renal"
      ]
    },
    {
      "id": "chronic-myeloid-leukemia-early",
      "answer": "Chronic myeloid leukemia",
      "explanation": "Marked granulocytic leukocytosis with basophilia, thrombocytosis, low blasts, and high turnover markers supports chronic myeloid leukemia. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "12.0",
          "flag": "L"
        },
        "wbc": {
          "value": "42",
          "flag": "H"
        },
        "neutrophils": {
          "value": "30",
          "flag": "H"
        },
        "basophils": {
          "value": "0.6",
          "flag": "H"
        },
        "platelets": {
          "value": "520",
          "flag": "H"
        },
        "blasts": {
          "value": "2",
          "flag": "H"
        },
        "ldh": {
          "value": "360",
          "flag": "H"
        },
        "uric_acid": {
          "value": "7.8",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "Basophils are elevated.",
        "The white count is very high with neutrophil-lineage predominance.",
        "Blasts are present but not dominant.",
        "Platelets and uric acid can be high."
      ],
      "panels": [
        "cbc",
        "hemeMalignancy"
      ]
    },
    {
      "id": "chronic-myeloid-leukemia-classic",
      "answer": "Chronic myeloid leukemia",
      "explanation": "Marked granulocytic leukocytosis with basophilia, thrombocytosis, low blasts, and high turnover markers supports chronic myeloid leukemia. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "10.8",
          "flag": "L"
        },
        "wbc": {
          "value": "92",
          "flag": "H"
        },
        "neutrophils": {
          "value": "68",
          "flag": "H"
        },
        "basophils": {
          "value": "1.2",
          "flag": "H"
        },
        "platelets": {
          "value": "760",
          "flag": "H"
        },
        "blasts": {
          "value": "4",
          "flag": "H"
        },
        "ldh": {
          "value": "620",
          "flag": "H"
        },
        "uric_acid": {
          "value": "9.8",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "Basophils are elevated.",
        "The white count is very high with neutrophil-lineage predominance.",
        "Blasts are present but not dominant.",
        "Platelets and uric acid can be high."
      ],
      "panels": [
        "cbc",
        "hemeMalignancy"
      ]
    },
    {
      "id": "chronic-myeloid-leukemia-marked",
      "answer": "Chronic myeloid leukemia",
      "explanation": "Marked granulocytic leukocytosis with basophilia, thrombocytosis, low blasts, and high turnover markers supports chronic myeloid leukemia. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "9.6",
          "flag": "L"
        },
        "wbc": {
          "value": "180",
          "flag": "H"
        },
        "neutrophils": {
          "value": "130",
          "flag": "H"
        },
        "basophils": {
          "value": "3.0",
          "flag": "H"
        },
        "platelets": {
          "value": "1100",
          "flag": "H"
        },
        "blasts": {
          "value": "8",
          "flag": "H"
        },
        "ldh": {
          "value": "1100",
          "flag": "H"
        },
        "uric_acid": {
          "value": "13.0",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "Basophils are elevated.",
        "The white count is very high with neutrophil-lineage predominance.",
        "Blasts are present but not dominant.",
        "Platelets and uric acid can be high."
      ],
      "panels": [
        "cbc",
        "hemeMalignancy"
      ]
    },
    {
      "id": "chronic-myeloid-leukemia-complicated",
      "answer": "Chronic myeloid leukemia",
      "explanation": "Marked granulocytic leukocytosis with basophilia, thrombocytosis, low blasts, and high turnover markers supports chronic myeloid leukemia. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "10.2",
          "flag": "L"
        },
        "wbc": {
          "value": "130",
          "flag": "H"
        },
        "neutrophils": {
          "value": "94",
          "flag": "H"
        },
        "basophils": {
          "value": "2.0",
          "flag": "H"
        },
        "platelets": {
          "value": "900",
          "flag": "H"
        },
        "blasts": {
          "value": "6",
          "flag": "H"
        },
        "ldh": {
          "value": "820",
          "flag": "H"
        },
        "uric_acid": {
          "value": "11.0",
          "flag": "H"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "Basophils are elevated.",
        "The white count is very high with neutrophil-lineage predominance.",
        "Blasts are present but not dominant.",
        "Platelets and uric acid can be high."
      ],
      "panels": [
        "cbc",
        "hemeMalignancy"
      ]
    },
    {
      "id": "chronic-myeloid-leukemia-follow-up",
      "answer": "Chronic myeloid leukemia",
      "explanation": "Marked granulocytic leukocytosis with basophilia, thrombocytosis, low blasts, and high turnover markers supports chronic myeloid leukemia. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "12.2",
          "flag": "L"
        },
        "wbc": {
          "value": "36",
          "flag": "H"
        },
        "neutrophils": {
          "value": "26",
          "flag": "H"
        },
        "basophils": {
          "value": "0.5",
          "flag": "H"
        },
        "platelets": {
          "value": "480",
          "flag": "H"
        },
        "blasts": {
          "value": "1",
          "flag": "H"
        },
        "ldh": {
          "value": "320",
          "flag": "H"
        },
        "uric_acid": {
          "value": "7.4",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "Basophils are elevated.",
        "The white count is very high with neutrophil-lineage predominance.",
        "Blasts are present but not dominant.",
        "Platelets and uric acid can be high."
      ],
      "panels": [
        "cbc",
        "hemeMalignancy"
      ]
    },
    {
      "id": "chronic-lymphocytic-leukemia-early",
      "answer": "Chronic lymphocytic leukemia",
      "explanation": "Sustained absolute lymphocytosis without blasts supports chronic lymphocytic leukemia. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "13.0"
        },
        "wbc": {
          "value": "18",
          "flag": "H"
        },
        "lymphocytes": {
          "value": "12",
          "flag": "H"
        },
        "neutrophils": {
          "value": "3.5"
        },
        "platelets": {
          "value": "180"
        },
        "blasts": {
          "value": "0"
        },
        "ldh": {
          "value": "260",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "Lymphocytes dominate the white count.",
        "Blasts are absent.",
        "Anemia or thrombocytopenia may emerge with marrow involvement.",
        "The neutrophil lineage is not the main driver."
      ],
      "panels": [
        "cbc",
        "hemeMalignancy"
      ]
    },
    {
      "id": "chronic-lymphocytic-leukemia-classic",
      "answer": "Chronic lymphocytic leukemia",
      "explanation": "Sustained absolute lymphocytosis without blasts supports chronic lymphocytic leukemia. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "12.4"
        },
        "wbc": {
          "value": "42",
          "flag": "H"
        },
        "lymphocytes": {
          "value": "34",
          "flag": "H"
        },
        "neutrophils": {
          "value": "3.2"
        },
        "platelets": {
          "value": "150"
        },
        "blasts": {
          "value": "0"
        },
        "ldh": {
          "value": "340",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "Lymphocytes dominate the white count.",
        "Blasts are absent.",
        "Anemia or thrombocytopenia may emerge with marrow involvement.",
        "The neutrophil lineage is not the main driver."
      ],
      "panels": [
        "cbc",
        "hemeMalignancy"
      ]
    },
    {
      "id": "chronic-lymphocytic-leukemia-marked",
      "answer": "Chronic lymphocytic leukemia",
      "explanation": "Sustained absolute lymphocytosis without blasts supports chronic lymphocytic leukemia. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "10.8"
        },
        "wbc": {
          "value": "95",
          "flag": "H"
        },
        "lymphocytes": {
          "value": "84",
          "flag": "H"
        },
        "neutrophils": {
          "value": "2.8"
        },
        "platelets": {
          "value": "105"
        },
        "blasts": {
          "value": "0"
        },
        "ldh": {
          "value": "520",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "Lymphocytes dominate the white count.",
        "Blasts are absent.",
        "Anemia or thrombocytopenia may emerge with marrow involvement.",
        "The neutrophil lineage is not the main driver."
      ],
      "panels": [
        "cbc",
        "hemeMalignancy"
      ]
    },
    {
      "id": "chronic-lymphocytic-leukemia-complicated",
      "answer": "Chronic lymphocytic leukemia",
      "explanation": "Sustained absolute lymphocytosis without blasts supports chronic lymphocytic leukemia. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "11.4"
        },
        "wbc": {
          "value": "68",
          "flag": "H"
        },
        "lymphocytes": {
          "value": "56",
          "flag": "H"
        },
        "neutrophils": {
          "value": "3.0"
        },
        "platelets": {
          "value": "125"
        },
        "blasts": {
          "value": "0"
        },
        "ldh": {
          "value": "420",
          "flag": "H"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "Lymphocytes dominate the white count.",
        "Blasts are absent.",
        "Anemia or thrombocytopenia may emerge with marrow involvement.",
        "The neutrophil lineage is not the main driver."
      ],
      "panels": [
        "cbc",
        "hemeMalignancy"
      ]
    },
    {
      "id": "chronic-lymphocytic-leukemia-follow-up",
      "answer": "Chronic lymphocytic leukemia",
      "explanation": "Sustained absolute lymphocytosis without blasts supports chronic lymphocytic leukemia. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "13.2"
        },
        "wbc": {
          "value": "15",
          "flag": "H"
        },
        "lymphocytes": {
          "value": "10",
          "flag": "H"
        },
        "neutrophils": {
          "value": "3.8"
        },
        "platelets": {
          "value": "200"
        },
        "blasts": {
          "value": "0"
        },
        "ldh": {
          "value": "240",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "Lymphocytes dominate the white count.",
        "Blasts are absent.",
        "Anemia or thrombocytopenia may emerge with marrow involvement.",
        "The neutrophil lineage is not the main driver."
      ],
      "panels": [
        "cbc",
        "hemeMalignancy"
      ]
    },
    {
      "id": "plasma-cell-myeloma-early",
      "answer": "Plasma cell myeloma",
      "explanation": "Anemia with M-protein, high total protein, renal impairment, and hypercalcemia supports plasma cell myeloma. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "10.5",
          "flag": "L"
        },
        "calcium": {
          "value": "10.8",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.5",
          "flag": "H"
        },
        "egfr": {
          "value": "52",
          "flag": "L"
        },
        "total_protein": {
          "value": "8.8",
          "flag": "H"
        },
        "albumin": {
          "value": "3.3",
          "flag": "L"
        },
        "m_protein": {
          "value": "1.2",
          "flag": "H"
        },
        "ldh": {
          "value": "260",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "M-protein is present.",
        "Total protein is high while albumin is low.",
        "Calcium and creatinine may both rise.",
        "Anemia is common in the pattern."
      ],
      "panels": [
        "cbc",
        "renal",
        "hemeMalignancy"
      ]
    },
    {
      "id": "plasma-cell-myeloma-classic",
      "answer": "Plasma cell myeloma",
      "explanation": "Anemia with M-protein, high total protein, renal impairment, and hypercalcemia supports plasma cell myeloma. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "9.2",
          "flag": "L"
        },
        "calcium": {
          "value": "11.6",
          "flag": "H"
        },
        "creatinine": {
          "value": "2.4",
          "flag": "H"
        },
        "egfr": {
          "value": "30",
          "flag": "L"
        },
        "total_protein": {
          "value": "10.2",
          "flag": "H"
        },
        "albumin": {
          "value": "2.9",
          "flag": "L"
        },
        "m_protein": {
          "value": "2.8",
          "flag": "H"
        },
        "ldh": {
          "value": "340",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "M-protein is present.",
        "Total protein is high while albumin is low.",
        "Calcium and creatinine may both rise.",
        "Anemia is common in the pattern."
      ],
      "panels": [
        "cbc",
        "renal",
        "hemeMalignancy"
      ]
    },
    {
      "id": "plasma-cell-myeloma-marked",
      "answer": "Plasma cell myeloma",
      "explanation": "Anemia with M-protein, high total protein, renal impairment, and hypercalcemia supports plasma cell myeloma. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "7.8",
          "flag": "L"
        },
        "calcium": {
          "value": "13.2",
          "flag": "H"
        },
        "creatinine": {
          "value": "4.2",
          "flag": "H"
        },
        "egfr": {
          "value": "14",
          "flag": "L"
        },
        "total_protein": {
          "value": "12.4",
          "flag": "H"
        },
        "albumin": {
          "value": "2.4",
          "flag": "L"
        },
        "m_protein": {
          "value": "5.4",
          "flag": "H"
        },
        "ldh": {
          "value": "480",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "M-protein is present.",
        "Total protein is high while albumin is low.",
        "Calcium and creatinine may both rise.",
        "Anemia is common in the pattern."
      ],
      "panels": [
        "cbc",
        "renal",
        "hemeMalignancy"
      ]
    },
    {
      "id": "plasma-cell-myeloma-complicated",
      "answer": "Plasma cell myeloma",
      "explanation": "Anemia with M-protein, high total protein, renal impairment, and hypercalcemia supports plasma cell myeloma. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "8.6",
          "flag": "L"
        },
        "calcium": {
          "value": "12.4",
          "flag": "H"
        },
        "creatinine": {
          "value": "3.1",
          "flag": "H"
        },
        "egfr": {
          "value": "22",
          "flag": "L"
        },
        "total_protein": {
          "value": "11.0",
          "flag": "H"
        },
        "albumin": {
          "value": "2.6",
          "flag": "L"
        },
        "m_protein": {
          "value": "4.0",
          "flag": "H"
        },
        "ldh": {
          "value": "400",
          "flag": "H"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "M-protein is present.",
        "Total protein is high while albumin is low.",
        "Calcium and creatinine may both rise.",
        "Anemia is common in the pattern."
      ],
      "panels": [
        "cbc",
        "renal",
        "hemeMalignancy"
      ]
    },
    {
      "id": "plasma-cell-myeloma-follow-up",
      "answer": "Plasma cell myeloma",
      "explanation": "Anemia with M-protein, high total protein, renal impairment, and hypercalcemia supports plasma cell myeloma. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "11.0",
          "flag": "L"
        },
        "calcium": {
          "value": "10.6",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.7",
          "flag": "H"
        },
        "egfr": {
          "value": "46",
          "flag": "L"
        },
        "total_protein": {
          "value": "8.5",
          "flag": "H"
        },
        "albumin": {
          "value": "3.4",
          "flag": "L"
        },
        "m_protein": {
          "value": "0.8",
          "flag": "H"
        },
        "ldh": {
          "value": "240",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "M-protein is present.",
        "Total protein is high while albumin is low.",
        "Calcium and creatinine may both rise.",
        "Anemia is common in the pattern."
      ],
      "panels": [
        "cbc",
        "renal",
        "hemeMalignancy"
      ]
    },
    {
      "id": "myelodysplastic-syndrome-early",
      "answer": "Myelodysplastic syndrome",
      "explanation": "Macrocytic cytopenias with low reticulocytes, normal vitamin levels, and low-level blasts supports myelodysplastic syndrome. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "10.2",
          "flag": "L"
        },
        "mcv": {
          "value": "101",
          "flag": "H"
        },
        "wbc": {
          "value": "3.2",
          "flag": "L"
        },
        "neutrophils": {
          "value": "1.3",
          "flag": "L"
        },
        "platelets": {
          "value": "120",
          "flag": "L"
        },
        "reticulocytes": {
          "value": "24",
          "flag": "L"
        },
        "blasts": {
          "value": "2",
          "flag": "H"
        },
        "b12": {
          "value": "430"
        },
        "folate": {
          "value": "7.5"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "More than one cell line is low.",
        "The MCV is high but B12 and folate are preserved.",
        "Reticulocytes are low.",
        "Blasts are increased but below an acute leukemia pattern."
      ],
      "panels": [
        "cbc",
        "anemia",
        "hemeMalignancy"
      ]
    },
    {
      "id": "myelodysplastic-syndrome-classic",
      "answer": "Myelodysplastic syndrome",
      "explanation": "Macrocytic cytopenias with low reticulocytes, normal vitamin levels, and low-level blasts supports myelodysplastic syndrome. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "9.0",
          "flag": "L"
        },
        "mcv": {
          "value": "106",
          "flag": "H"
        },
        "wbc": {
          "value": "2.4",
          "flag": "L"
        },
        "neutrophils": {
          "value": "0.8",
          "flag": "L"
        },
        "platelets": {
          "value": "82",
          "flag": "L"
        },
        "reticulocytes": {
          "value": "18",
          "flag": "L"
        },
        "blasts": {
          "value": "4",
          "flag": "H"
        },
        "b12": {
          "value": "520"
        },
        "folate": {
          "value": "9.0"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "More than one cell line is low.",
        "The MCV is high but B12 and folate are preserved.",
        "Reticulocytes are low.",
        "Blasts are increased but below an acute leukemia pattern."
      ],
      "panels": [
        "cbc",
        "anemia",
        "hemeMalignancy"
      ]
    },
    {
      "id": "myelodysplastic-syndrome-marked",
      "answer": "Myelodysplastic syndrome",
      "explanation": "Macrocytic cytopenias with low reticulocytes, normal vitamin levels, and low-level blasts supports myelodysplastic syndrome. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "7.8",
          "flag": "L"
        },
        "mcv": {
          "value": "112",
          "flag": "H"
        },
        "wbc": {
          "value": "1.6",
          "flag": "L"
        },
        "neutrophils": {
          "value": "0.4",
          "flag": "L"
        },
        "platelets": {
          "value": "42",
          "flag": "L"
        },
        "reticulocytes": {
          "value": "10",
          "flag": "L"
        },
        "blasts": {
          "value": "8",
          "flag": "H"
        },
        "b12": {
          "value": "610"
        },
        "folate": {
          "value": "11.0"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "More than one cell line is low.",
        "The MCV is high but B12 and folate are preserved.",
        "Reticulocytes are low.",
        "Blasts are increased but below an acute leukemia pattern."
      ],
      "panels": [
        "cbc",
        "anemia",
        "hemeMalignancy"
      ]
    },
    {
      "id": "myelodysplastic-syndrome-complicated",
      "answer": "Myelodysplastic syndrome",
      "explanation": "Macrocytic cytopenias with low reticulocytes, normal vitamin levels, and low-level blasts supports myelodysplastic syndrome. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "8.4",
          "flag": "L"
        },
        "mcv": {
          "value": "109",
          "flag": "H"
        },
        "wbc": {
          "value": "2.0",
          "flag": "L"
        },
        "neutrophils": {
          "value": "0.6",
          "flag": "L"
        },
        "platelets": {
          "value": "60",
          "flag": "L"
        },
        "reticulocytes": {
          "value": "14",
          "flag": "L"
        },
        "blasts": {
          "value": "6",
          "flag": "H"
        },
        "b12": {
          "value": "480"
        },
        "folate": {
          "value": "8.5"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "More than one cell line is low.",
        "The MCV is high but B12 and folate are preserved.",
        "Reticulocytes are low.",
        "Blasts are increased but below an acute leukemia pattern."
      ],
      "panels": [
        "cbc",
        "anemia",
        "hemeMalignancy"
      ]
    },
    {
      "id": "myelodysplastic-syndrome-follow-up",
      "answer": "Myelodysplastic syndrome",
      "explanation": "Macrocytic cytopenias with low reticulocytes, normal vitamin levels, and low-level blasts supports myelodysplastic syndrome. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "10.6",
          "flag": "L"
        },
        "mcv": {
          "value": "100",
          "flag": "H"
        },
        "wbc": {
          "value": "3.5",
          "flag": "L"
        },
        "neutrophils": {
          "value": "1.5",
          "flag": "L"
        },
        "platelets": {
          "value": "135",
          "flag": "L"
        },
        "reticulocytes": {
          "value": "28",
          "flag": "L"
        },
        "blasts": {
          "value": "1",
          "flag": "H"
        },
        "b12": {
          "value": "400"
        },
        "folate": {
          "value": "6.8"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "More than one cell line is low.",
        "The MCV is high but B12 and folate are preserved.",
        "Reticulocytes are low.",
        "Blasts are increased but below an acute leukemia pattern."
      ],
      "panels": [
        "cbc",
        "anemia",
        "hemeMalignancy"
      ]
    },
    {
      "id": "polycythemia-vera-early",
      "answer": "Polycythemia vera",
      "explanation": "Elevated hemoglobin with panmyelosis, thrombocytosis, leukocytosis, and high uric acid supports polycythemia vera. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "18.0",
          "flag": "H"
        },
        "wbc": {
          "value": "12.0",
          "flag": "H"
        },
        "neutrophils": {
          "value": "8.6",
          "flag": "H"
        },
        "platelets": {
          "value": "520",
          "flag": "H"
        },
        "uric_acid": {
          "value": "7.6",
          "flag": "H"
        },
        "ldh": {
          "value": "260",
          "flag": "H"
        },
        "basophils": {
          "value": "0.3",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "Hemoglobin is high.",
        "Platelets and white cells are also often elevated.",
        "Uric acid can rise from increased cell turnover.",
        "This is broader than isolated dehydration-related hemoconcentration."
      ],
      "panels": [
        "cbc",
        "hemeMalignancy"
      ]
    },
    {
      "id": "polycythemia-vera-classic",
      "answer": "Polycythemia vera",
      "explanation": "Elevated hemoglobin with panmyelosis, thrombocytosis, leukocytosis, and high uric acid supports polycythemia vera. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "19.2",
          "flag": "H"
        },
        "wbc": {
          "value": "15.4",
          "flag": "H"
        },
        "neutrophils": {
          "value": "11.2",
          "flag": "H"
        },
        "platelets": {
          "value": "680",
          "flag": "H"
        },
        "uric_acid": {
          "value": "9.2",
          "flag": "H"
        },
        "ldh": {
          "value": "340",
          "flag": "H"
        },
        "basophils": {
          "value": "0.4",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "Hemoglobin is high.",
        "Platelets and white cells are also often elevated.",
        "Uric acid can rise from increased cell turnover.",
        "This is broader than isolated dehydration-related hemoconcentration."
      ],
      "panels": [
        "cbc",
        "hemeMalignancy"
      ]
    },
    {
      "id": "polycythemia-vera-marked",
      "answer": "Polycythemia vera",
      "explanation": "Elevated hemoglobin with panmyelosis, thrombocytosis, leukocytosis, and high uric acid supports polycythemia vera. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "21.0",
          "flag": "H"
        },
        "wbc": {
          "value": "22.0",
          "flag": "H"
        },
        "neutrophils": {
          "value": "16.5",
          "flag": "H"
        },
        "platelets": {
          "value": "920",
          "flag": "H"
        },
        "uric_acid": {
          "value": "12.0",
          "flag": "H"
        },
        "ldh": {
          "value": "520",
          "flag": "H"
        },
        "basophils": {
          "value": "0.7",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "Hemoglobin is high.",
        "Platelets and white cells are also often elevated.",
        "Uric acid can rise from increased cell turnover.",
        "This is broader than isolated dehydration-related hemoconcentration."
      ],
      "panels": [
        "cbc",
        "hemeMalignancy"
      ]
    },
    {
      "id": "polycythemia-vera-complicated",
      "answer": "Polycythemia vera",
      "explanation": "Elevated hemoglobin with panmyelosis, thrombocytosis, leukocytosis, and high uric acid supports polycythemia vera. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "20.0",
          "flag": "H"
        },
        "wbc": {
          "value": "18.0",
          "flag": "H"
        },
        "neutrophils": {
          "value": "13.0",
          "flag": "H"
        },
        "platelets": {
          "value": "800",
          "flag": "H"
        },
        "uric_acid": {
          "value": "10.5",
          "flag": "H"
        },
        "ldh": {
          "value": "430",
          "flag": "H"
        },
        "basophils": {
          "value": "0.5",
          "flag": "H"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "Hemoglobin is high.",
        "Platelets and white cells are also often elevated.",
        "Uric acid can rise from increased cell turnover.",
        "This is broader than isolated dehydration-related hemoconcentration."
      ],
      "panels": [
        "cbc",
        "hemeMalignancy"
      ]
    },
    {
      "id": "polycythemia-vera-follow-up",
      "answer": "Polycythemia vera",
      "explanation": "Elevated hemoglobin with panmyelosis, thrombocytosis, leukocytosis, and high uric acid supports polycythemia vera. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "17.8",
          "flag": "H"
        },
        "wbc": {
          "value": "11.4",
          "flag": "H"
        },
        "neutrophils": {
          "value": "8.0",
          "flag": "H"
        },
        "platelets": {
          "value": "480",
          "flag": "H"
        },
        "uric_acid": {
          "value": "7.4",
          "flag": "H"
        },
        "ldh": {
          "value": "240",
          "flag": "H"
        },
        "basophils": {
          "value": "0.3",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "Hemoglobin is high.",
        "Platelets and white cells are also often elevated.",
        "Uric acid can rise from increased cell turnover.",
        "This is broader than isolated dehydration-related hemoconcentration."
      ],
      "panels": [
        "cbc",
        "hemeMalignancy"
      ]
    },
    {
      "id": "essential-thrombocythemia-early",
      "answer": "Essential thrombocythemia",
      "explanation": "Sustained marked thrombocytosis without iron deficiency or inflammation supports essential thrombocythemia. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "13.6"
        },
        "wbc": {
          "value": "8.8"
        },
        "platelets": {
          "value": "720",
          "flag": "H"
        },
        "ferritin": {
          "value": "90"
        },
        "crp": {
          "value": "3"
        },
        "ldh": {
          "value": "260",
          "flag": "H"
        },
        "basophils": {
          "value": "0.1"
        },
        "blasts": {
          "value": "0"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "Platelets are the dominant abnormality.",
        "Ferritin is not low.",
        "CRP is not high enough to explain a reactive count.",
        "Other myeloid lines are not dramatically increased."
      ],
      "panels": [
        "cbc",
        "anemia",
        "hemeMalignancy",
        "inflammation"
      ]
    },
    {
      "id": "essential-thrombocythemia-classic",
      "answer": "Essential thrombocythemia",
      "explanation": "Sustained marked thrombocytosis without iron deficiency or inflammation supports essential thrombocythemia. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "13.0"
        },
        "wbc": {
          "value": "9.5"
        },
        "platelets": {
          "value": "980",
          "flag": "H"
        },
        "ferritin": {
          "value": "110"
        },
        "crp": {
          "value": "4"
        },
        "ldh": {
          "value": "320",
          "flag": "H"
        },
        "basophils": {
          "value": "0.1"
        },
        "blasts": {
          "value": "0"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "Platelets are the dominant abnormality.",
        "Ferritin is not low.",
        "CRP is not high enough to explain a reactive count.",
        "Other myeloid lines are not dramatically increased."
      ],
      "panels": [
        "cbc",
        "anemia",
        "hemeMalignancy",
        "inflammation"
      ]
    },
    {
      "id": "essential-thrombocythemia-marked",
      "answer": "Essential thrombocythemia",
      "explanation": "Sustained marked thrombocytosis without iron deficiency or inflammation supports essential thrombocythemia. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "12.4"
        },
        "wbc": {
          "value": "10.5"
        },
        "platelets": {
          "value": "1450",
          "flag": "H"
        },
        "ferritin": {
          "value": "140"
        },
        "crp": {
          "value": "6"
        },
        "ldh": {
          "value": "460",
          "flag": "H"
        },
        "basophils": {
          "value": "0.2"
        },
        "blasts": {
          "value": "0"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "Platelets are the dominant abnormality.",
        "Ferritin is not low.",
        "CRP is not high enough to explain a reactive count.",
        "Other myeloid lines are not dramatically increased."
      ],
      "panels": [
        "cbc",
        "anemia",
        "hemeMalignancy",
        "inflammation"
      ]
    },
    {
      "id": "essential-thrombocythemia-complicated",
      "answer": "Essential thrombocythemia",
      "explanation": "Sustained marked thrombocytosis without iron deficiency or inflammation supports essential thrombocythemia. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "12.8"
        },
        "wbc": {
          "value": "9.8"
        },
        "platelets": {
          "value": "1200",
          "flag": "H"
        },
        "ferritin": {
          "value": "120"
        },
        "crp": {
          "value": "5"
        },
        "ldh": {
          "value": "380",
          "flag": "H"
        },
        "basophils": {
          "value": "0.1"
        },
        "blasts": {
          "value": "0"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "Platelets are the dominant abnormality.",
        "Ferritin is not low.",
        "CRP is not high enough to explain a reactive count.",
        "Other myeloid lines are not dramatically increased."
      ],
      "panels": [
        "cbc",
        "anemia",
        "hemeMalignancy",
        "inflammation"
      ]
    },
    {
      "id": "essential-thrombocythemia-follow-up",
      "answer": "Essential thrombocythemia",
      "explanation": "Sustained marked thrombocytosis without iron deficiency or inflammation supports essential thrombocythemia. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "14.0"
        },
        "wbc": {
          "value": "8.2"
        },
        "platelets": {
          "value": "650",
          "flag": "H"
        },
        "ferritin": {
          "value": "85"
        },
        "crp": {
          "value": "3"
        },
        "ldh": {
          "value": "240",
          "flag": "H"
        },
        "basophils": {
          "value": "0.1"
        },
        "blasts": {
          "value": "0"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "Platelets are the dominant abnormality.",
        "Ferritin is not low.",
        "CRP is not high enough to explain a reactive count.",
        "Other myeloid lines are not dramatically increased."
      ],
      "panels": [
        "cbc",
        "anemia",
        "hemeMalignancy",
        "inflammation"
      ]
    },
    {
      "id": "primary-myelofibrosis-early",
      "answer": "Primary myelofibrosis",
      "explanation": "Anemia with leukoerythroblastic-style stress markers, high LDH, variable platelets, and low-level blasts supports primary myelofibrosis. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "11.0",
          "flag": "L"
        },
        "wbc": {
          "value": "12.5",
          "flag": "H"
        },
        "neutrophils": {
          "value": "8.8",
          "flag": "H"
        },
        "platelets": {
          "value": "520",
          "flag": "H"
        },
        "reticulocytes": {
          "value": "120",
          "flag": "H"
        },
        "blasts": {
          "value": "1",
          "flag": "H"
        },
        "ldh": {
          "value": "420",
          "flag": "H"
        },
        "uric_acid": {
          "value": "7.8",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "LDH is high.",
        "Anemia is prominent.",
        "Platelets can be high early and low later.",
        "Low-level blasts and myeloid proliferation distinguish it from simple inflammation."
      ],
      "panels": [
        "cbc",
        "anemia",
        "hemeMalignancy"
      ]
    },
    {
      "id": "primary-myelofibrosis-classic",
      "answer": "Primary myelofibrosis",
      "explanation": "Anemia with leukoerythroblastic-style stress markers, high LDH, variable platelets, and low-level blasts supports primary myelofibrosis. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "9.4",
          "flag": "L"
        },
        "wbc": {
          "value": "18.0",
          "flag": "H"
        },
        "neutrophils": {
          "value": "12.6",
          "flag": "H"
        },
        "platelets": {
          "value": "680",
          "flag": "H"
        },
        "reticulocytes": {
          "value": "160",
          "flag": "H"
        },
        "blasts": {
          "value": "3",
          "flag": "H"
        },
        "ldh": {
          "value": "720",
          "flag": "H"
        },
        "uric_acid": {
          "value": "9.4",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "LDH is high.",
        "Anemia is prominent.",
        "Platelets can be high early and low later.",
        "Low-level blasts and myeloid proliferation distinguish it from simple inflammation."
      ],
      "panels": [
        "cbc",
        "anemia",
        "hemeMalignancy"
      ]
    },
    {
      "id": "primary-myelofibrosis-marked",
      "answer": "Primary myelofibrosis",
      "explanation": "Anemia with leukoerythroblastic-style stress markers, high LDH, variable platelets, and low-level blasts supports primary myelofibrosis. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "7.8",
          "flag": "L"
        },
        "wbc": {
          "value": "32.0",
          "flag": "H"
        },
        "neutrophils": {
          "value": "22.0",
          "flag": "H"
        },
        "platelets": {
          "value": "900",
          "flag": "H"
        },
        "reticulocytes": {
          "value": "220",
          "flag": "H"
        },
        "blasts": {
          "value": "6",
          "flag": "H"
        },
        "ldh": {
          "value": "1400",
          "flag": "H"
        },
        "uric_acid": {
          "value": "12.6",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "LDH is high.",
        "Anemia is prominent.",
        "Platelets can be high early and low later.",
        "Low-level blasts and myeloid proliferation distinguish it from simple inflammation."
      ],
      "panels": [
        "cbc",
        "anemia",
        "hemeMalignancy"
      ]
    },
    {
      "id": "primary-myelofibrosis-complicated",
      "answer": "Primary myelofibrosis",
      "explanation": "Anemia with leukoerythroblastic-style stress markers, high LDH, variable platelets, and low-level blasts supports primary myelofibrosis. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "8.6",
          "flag": "L"
        },
        "wbc": {
          "value": "24.0",
          "flag": "H"
        },
        "neutrophils": {
          "value": "16.0",
          "flag": "H"
        },
        "platelets": {
          "value": "120",
          "flag": "H"
        },
        "reticulocytes": {
          "value": "140",
          "flag": "H"
        },
        "blasts": {
          "value": "4",
          "flag": "H"
        },
        "ldh": {
          "value": "980",
          "flag": "H"
        },
        "uric_acid": {
          "value": "10.8",
          "flag": "H"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "LDH is high.",
        "Anemia is prominent.",
        "Platelets can be high early and low later.",
        "Low-level blasts and myeloid proliferation distinguish it from simple inflammation."
      ],
      "panels": [
        "cbc",
        "anemia",
        "hemeMalignancy"
      ]
    },
    {
      "id": "primary-myelofibrosis-follow-up",
      "answer": "Primary myelofibrosis",
      "explanation": "Anemia with leukoerythroblastic-style stress markers, high LDH, variable platelets, and low-level blasts supports primary myelofibrosis. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "10.8",
          "flag": "L"
        },
        "wbc": {
          "value": "11.8",
          "flag": "H"
        },
        "neutrophils": {
          "value": "8.2",
          "flag": "H"
        },
        "platelets": {
          "value": "460",
          "flag": "H"
        },
        "reticulocytes": {
          "value": "110",
          "flag": "H"
        },
        "blasts": {
          "value": "1",
          "flag": "H"
        },
        "ldh": {
          "value": "360",
          "flag": "H"
        },
        "uric_acid": {
          "value": "7.4",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "LDH is high.",
        "Anemia is prominent.",
        "Platelets can be high early and low later.",
        "Low-level blasts and myeloid proliferation distinguish it from simple inflammation."
      ],
      "panels": [
        "cbc",
        "anemia",
        "hemeMalignancy"
      ]
    },
    {
      "id": "disseminated-intravascular-coagulation-early",
      "answer": "Disseminated intravascular coagulation",
      "explanation": "Thrombocytopenia with high INR, very high D-dimer, hemolysis-style markers, and organ stress supports disseminated intravascular coagulation. This early outpatient presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "10.5",
          "flag": "L"
        },
        "platelets": {
          "value": "92",
          "flag": "L"
        },
        "inr": {
          "value": "1.6",
          "flag": "H"
        },
        "d_dimer": {
          "value": "1800",
          "flag": "H"
        },
        "bilirubin": {
          "value": "1.4",
          "flag": "H"
        },
        "ldh": {
          "value": "360",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.3",
          "flag": "H"
        },
        "egfr": {
          "value": "60",
          "flag": "L"
        },
        "crp": {
          "value": "80",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal pattern is present but still relatively early.",
        "Platelets are consumed.",
        "INR is prolonged.",
        "D-dimer is markedly elevated.",
        "Kidney and hemolysis markers can worsen during systemic coagulation activation."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "inflammation"
      ]
    },
    {
      "id": "disseminated-intravascular-coagulation-classic",
      "answer": "Disseminated intravascular coagulation",
      "explanation": "Thrombocytopenia with high INR, very high D-dimer, hemolysis-style markers, and organ stress supports disseminated intravascular coagulation. This classic presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "9.0",
          "flag": "L"
        },
        "platelets": {
          "value": "54",
          "flag": "L"
        },
        "inr": {
          "value": "2.2",
          "flag": "H"
        },
        "d_dimer": {
          "value": "5400",
          "flag": "H"
        },
        "bilirubin": {
          "value": "2.0",
          "flag": "H"
        },
        "ldh": {
          "value": "620",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.8",
          "flag": "H"
        },
        "egfr": {
          "value": "42",
          "flag": "L"
        },
        "crp": {
          "value": "160",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is a typical teaching example.",
        "Platelets are consumed.",
        "INR is prolonged.",
        "D-dimer is markedly elevated.",
        "Kidney and hemolysis markers can worsen during systemic coagulation activation."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "inflammation"
      ]
    },
    {
      "id": "disseminated-intravascular-coagulation-marked",
      "answer": "Disseminated intravascular coagulation",
      "explanation": "Thrombocytopenia with high INR, very high D-dimer, hemolysis-style markers, and organ stress supports disseminated intravascular coagulation. This marked presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "7.6",
          "flag": "L"
        },
        "platelets": {
          "value": "18",
          "flag": "L"
        },
        "inr": {
          "value": "4.0",
          "flag": "H"
        },
        "d_dimer": {
          "value": "18000",
          "flag": "H"
        },
        "bilirubin": {
          "value": "3.5",
          "flag": "H"
        },
        "ldh": {
          "value": "1200",
          "flag": "H"
        },
        "creatinine": {
          "value": "3.0",
          "flag": "H"
        },
        "egfr": {
          "value": "22",
          "flag": "L"
        },
        "crp": {
          "value": "300",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormal values are more pronounced than in a screening case.",
        "Platelets are consumed.",
        "INR is prolonged.",
        "D-dimer is markedly elevated.",
        "Kidney and hemolysis markers can worsen during systemic coagulation activation."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "inflammation"
      ]
    },
    {
      "id": "disseminated-intravascular-coagulation-complicated",
      "answer": "Disseminated intravascular coagulation",
      "explanation": "Thrombocytopenia with high INR, very high D-dimer, hemolysis-style markers, and organ stress supports disseminated intravascular coagulation. This complicated presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "8.2",
          "flag": "L"
        },
        "platelets": {
          "value": "32",
          "flag": "L"
        },
        "inr": {
          "value": "3.0",
          "flag": "H"
        },
        "d_dimer": {
          "value": "9500",
          "flag": "H"
        },
        "bilirubin": {
          "value": "2.6",
          "flag": "H"
        },
        "ldh": {
          "value": "880",
          "flag": "H"
        },
        "creatinine": {
          "value": "2.2",
          "flag": "H"
        },
        "egfr": {
          "value": "34",
          "flag": "L"
        },
        "crp": {
          "value": "220",
          "flag": "H"
        }
      },
      "hints": [
        "A second organ system is beginning to show stress.",
        "Platelets are consumed.",
        "INR is prolonged.",
        "D-dimer is markedly elevated.",
        "Kidney and hemolysis markers can worsen during systemic coagulation activation."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "inflammation"
      ]
    },
    {
      "id": "disseminated-intravascular-coagulation-follow-up",
      "answer": "Disseminated intravascular coagulation",
      "explanation": "Thrombocytopenia with high INR, very high D-dimer, hemolysis-style markers, and organ stress supports disseminated intravascular coagulation. This follow-up presentation varies the severity and companion markers while keeping the same broad lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "11.0",
          "flag": "L"
        },
        "platelets": {
          "value": "110",
          "flag": "L"
        },
        "inr": {
          "value": "1.4",
          "flag": "H"
        },
        "d_dimer": {
          "value": "1200",
          "flag": "H"
        },
        "bilirubin": {
          "value": "1.2",
          "flag": "H"
        },
        "ldh": {
          "value": "300",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.4",
          "flag": "H"
        },
        "egfr": {
          "value": "56",
          "flag": "L"
        },
        "crp": {
          "value": "60",
          "flag": "H"
        }
      },
      "hints": [
        "The pattern is still recognizable on a follow-up set of labs.",
        "Platelets are consumed.",
        "INR is prolonged.",
        "D-dimer is markedly elevated.",
        "Kidney and hemolysis markers can worsen during systemic coagulation activation."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "inflammation"
      ]
    }
  ]
}
```
