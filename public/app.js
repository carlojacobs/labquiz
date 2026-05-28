const MAX_ATTEMPTS = 5;
const SUGGESTION_MIN_CHARS = 2;
const UNIT_SET_STORAGE_KEY = "labquiz-unit-set";

const UNIT_SETS = {
  nl: {
    label: "Netherlands / SI",
    locale: "nl-NL",
    rows: {
      hemoglobin: {
        unit: "mmol/L",
        reference: "7,4-10,9",
        factor: 0.6206,
        decimals: 1,
      },
      bun: {
        label: "Urea",
        unit: "mmol/L",
        reference: "2,5-7,1",
        factor: 0.357,
        decimals: 1,
      },
      creatinine: {
        unit: "umol/L",
        reference: "53-115",
        factor: 88.4,
        decimals: 0,
      },
      glucose: {
        unit: "mmol/L",
        reference: "3,9-7,8 random",
        factor: 0.0555,
        decimals: 1,
      },
      calcium: {
        unit: "mmol/L",
        reference: "2,15-2,55",
        factor: 0.2495,
        decimals: 2,
      },
      bilirubin: {
        unit: "umol/L",
        reference: "2-21",
        factor: 17.104,
        decimals: 0,
      },
      bilirubin_direct: {
        unit: "umol/L",
        reference: "0-5",
        factor: 17.104,
        decimals: 0,
      },
      albumin: {
        unit: "g/L",
        reference: "35-50",
        factor: 10,
        decimals: 0,
      },
      ferritin: {
        unit: "ug/L",
        reference: "30-400",
        factor: 1,
        decimals: 0,
      },
      b12: {
        unit: "pmol/L",
        reference: "148-664",
        factor: 0.738,
        decimals: 0,
      },
      folate: {
        unit: "nmol/L",
        reference: ">9,1",
        factor: 2.266,
        decimals: 1,
      },
      iron: {
        unit: "umol/L",
        reference: "11-30",
        factor: 0.179,
        decimals: 1,
      },
      transferrin: {
        unit: "g/L",
        reference: "2,0-3,6",
        factor: 0.01,
        decimals: 1,
      },
      cholesterol: {
        unit: "mmol/L",
        reference: "<5,2",
        factor: 0.02586,
        decimals: 1,
      },
      triglycerides: {
        unit: "mmol/L",
        reference: "<1,7",
        factor: 0.01129,
        decimals: 1,
      },
      hdl: {
        unit: "mmol/L",
        reference: ">1,0",
        factor: 0.02586,
        decimals: 1,
      },
      ldl: {
        unit: "mmol/L",
        reference: "<2,6",
        factor: 0.02586,
        decimals: 1,
      },
      hba1c: {
        unit: "mmol/mol",
        reference: "<39",
        convert: (value) => (value - 2.15) * 10.929,
        decimals: 0,
      },
      free_t4: {
        unit: "pmol/L",
        reference: "10-23",
        factor: 12.87,
        decimals: 1,
      },
      free_t3: {
        unit: "pmol/L",
        reference: "3,5-6,5",
        factor: 1.536,
        decimals: 1,
      },
      uric_acid: {
        unit: "umol/L",
        reference: "208-428",
        factor: 59.48,
        decimals: 0,
      },
      total_protein: {
        unit: "g/L",
        reference: "60-83",
        factor: 10,
        decimals: 0,
      },
      m_protein: {
        unit: "g/L",
        reference: "Not detected",
        factor: 10,
        decimals: 0,
      },
    },
  },
  us: {
    label: "United States",
    locale: "en-US",
    rows: {},
  },
};

const elements = {
  attemptsLeft: document.querySelector("#attemptsLeft"),
  caseChip: document.querySelector("#caseChip"),
  caseCounter: document.querySelector("#caseCounter"),
  guessButton: document.querySelector("#guessButton"),
  guessForm: document.querySelector("#guessForm"),
  guessInput: document.querySelector("#guessInput"),
  guessList: document.querySelector("#guessList"),
  hintList: document.querySelector("#hintList"),
  labsBody: document.querySelector("#labsBody"),
  newCaseButton: document.querySelector("#newCaseButton"),
  resultOptions: document.querySelector("#resultOptions"),
  statusMessage: document.querySelector("#statusMessage"),
  unitSetSelect: document.querySelector("#unitSetSelect"),
};

let bank = null;
let state = null;
let selectedUnitSet = loadInitialUnitSet();

elements.guessForm.addEventListener("submit", submitGuess);
elements.guessInput.addEventListener("input", renderResultOptions);
elements.newCaseButton.addEventListener("click", () => {
  startCase(randomCaseIndex(state?.caseIndex));
});
elements.unitSetSelect.addEventListener("change", () => {
  selectedUnitSet = elements.unitSetSelect.value;
  saveUnitSet(selectedUnitSet);

  if (bank && state) {
    render();
  }
});

init();

async function init() {
  try {
    const response = await fetch("/api/cases");

    if (!response.ok) {
      throw new Error("Case API failed.");
    }

    bank = await response.json();
    elements.unitSetSelect.value = selectedUnitSet;
    renderResultOptions();
    startCase(initialCaseIndex());
  } catch (error) {
    console.error(error);
    setStatus("Case bank could not be loaded.", "error");
  }
}

function initialCaseIndex() {
  const params = new URLSearchParams(window.location.search);
  const requestedId = params.get("case");

  if (requestedId) {
    const index = bank.cases.findIndex((item) => item.id === requestedId);

    if (index !== -1) {
      return index;
    }
  }

  return randomCaseIndex();
}

function randomCaseIndex(excludeIndex = null) {
  if (!bank || bank.cases.length === 1) {
    return 0;
  }

  let nextIndex = Math.floor(Math.random() * bank.cases.length);

  while (nextIndex === excludeIndex) {
    nextIndex = Math.floor(Math.random() * bank.cases.length);
  }

  return nextIndex;
}

function startCase(caseIndex) {
  state = {
    caseIndex,
    guesses: [],
    revealedHints: 0,
    solved: false,
    gameOver: false,
  };

  elements.guessInput.value = "";
  elements.guessInput.disabled = false;
  elements.guessButton.disabled = false;
  renderResultOptions();

  render();
  setStatus("Ready.", "neutral");
  elements.guessInput.focus();
}

function submitGuess(event) {
  event.preventDefault();

  if (state.solved || state.gameOver) {
    return;
  }

  const matchedResult = findResult(elements.guessInput.value);

  if (!matchedResult) {
    setStatus("Choose a conclusion from the fixed result list.", "error");
    return;
  }

  if (state.guesses.some((guess) => sameText(guess.answer, matchedResult))) {
    setStatus("Already tried.", "neutral");
    elements.guessInput.select();
    return;
  }

  const currentCase = bank.cases[state.caseIndex];
  const isCorrect = sameText(matchedResult, currentCase.answer);

  state.guesses.push({ answer: matchedResult, correct: isCorrect });
  elements.guessInput.value = "";
  renderResultOptions();

  if (isCorrect) {
    state.solved = true;
    setStatus(`Correct: ${currentCase.answer}. ${currentCase.explanation}`, "success");
  } else {
    state.revealedHints = Math.min(
      state.revealedHints + 1,
      currentCase.hints.length,
    );

    if (state.guesses.length >= MAX_ATTEMPTS) {
      state.gameOver = true;
      setStatus(`Case closed: ${currentCase.answer}. ${currentCase.explanation}`, "error");
    } else {
      setStatus(`Not ${matchedResult}. Hint ${state.revealedHints} revealed.`, "neutral");
    }
  }

  render();
}

function render() {
  const currentCase = bank.cases[state.caseIndex];

  renderLabTable(currentCase);
  renderHints(currentCase);
  renderGuesses();
  renderHeaderState();
  refreshIcons();

  const finished = state.solved || state.gameOver;
  elements.guessInput.disabled = finished;
  elements.guessButton.disabled = finished;
}

function renderHeaderState() {
  const attemptsRemaining = Math.max(0, MAX_ATTEMPTS - state.guesses.length);
  elements.attemptsLeft.textContent = String(attemptsRemaining);
  elements.caseCounter.textContent = `${state.caseIndex + 1}/${bank.cases.length}`;
  elements.caseChip.textContent = `Case ${String(state.caseIndex + 1).padStart(2, "0")}`;
}

function renderLabTable(currentCase) {
  elements.labsBody.replaceChildren();

  let currentGroup = "";

  for (const row of bank.labRows) {
    if (row.group !== currentGroup) {
      currentGroup = row.group;
      const groupRow = document.createElement("tr");
      groupRow.className = "group-row";

      const groupCell = document.createElement("th");
      groupCell.colSpan = 3;
      groupCell.scope = "rowgroup";
      groupCell.textContent = currentGroup;

      groupRow.append(groupCell);
      elements.labsBody.append(groupRow);
    }

    const lab = currentCase.labs[row.key];
    const displayRow = getDisplayLabRow(row);
    const tr = document.createElement("tr");

    if (lab?.flag) {
      tr.classList.add(`row-${lab.flag.toLowerCase()}`);
    }

    const testCell = document.createElement("th");
    testCell.scope = "row";

    const label = document.createElement("span");
    label.className = "test-label";
    label.textContent = displayRow.label;
    testCell.append(label);

    if (displayRow.unit) {
      const unit = document.createElement("span");
      unit.className = "test-unit";
      unit.textContent = displayRow.unit;
      testCell.append(unit);
    }

    const valueCell = document.createElement("td");
    valueCell.className = "value-cell";
    const displayValue = lab ? formatLabValue(row.key, lab.value) : "";
    valueCell.textContent = displayValue;

    if (!lab?.value) {
      valueCell.classList.add("is-empty");
    }

    if (lab?.flag) {
      valueCell.setAttribute("aria-label", `${displayValue}, ${flagTitle(lab.flag)}`);
    }

    const referenceCell = document.createElement("td");
    referenceCell.className = "reference-cell";
    referenceCell.textContent = displayRow.reference;

    tr.append(testCell, valueCell, referenceCell);
    elements.labsBody.append(tr);
  }
}

function renderHints(currentCase) {
  elements.hintList.replaceChildren();

  for (let index = 0; index < currentCase.hints.length; index += 1) {
    const item = document.createElement("li");
    const isRevealed = index < state.revealedHints;
    item.className = isRevealed ? "hint is-revealed" : "hint is-locked";

    const badge = document.createElement("span");
    badge.className = "hint-number";
    badge.textContent = String(index + 1);

    const text = document.createElement("span");
    text.className = "hint-text";
    text.textContent = isRevealed ? currentCase.hints[index] : "Locked";

    item.append(badge, text);
    elements.hintList.append(item);
  }
}

function renderGuesses() {
  elements.guessList.replaceChildren();

  for (const guess of state.guesses) {
    const item = document.createElement("li");
    item.className = guess.correct ? "guess is-correct" : "guess is-wrong";

    const icon = document.createElement("i");
    icon.setAttribute("data-lucide", guess.correct ? "check" : "x");
    icon.setAttribute("aria-hidden", "true");

    const text = document.createElement("span");
    text.textContent = guess.answer;

    item.append(icon, text);
    elements.guessList.append(item);
  }
}

function renderResultOptions() {
  elements.resultOptions.replaceChildren();
  const query = normalize(elements.guessInput.value);

  if (query.length < SUGGESTION_MIN_CHARS) {
    return;
  }

  const matchingResults = bank.results.filter((answer) =>
    normalize(answer).includes(query),
  );

  for (const answer of matchingResults) {
    const option = document.createElement("option");
    option.value = answer;
    elements.resultOptions.append(option);
  }
}

function findResult(value) {
  const normalizedValue = normalize(value);
  return bank.results.find((answer) => normalize(answer) === normalizedValue);
}

function sameText(left, right) {
  return normalize(left) === normalize(right);
}

function normalize(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function loadInitialUnitSet() {
  let savedUnitSet = null;

  try {
    savedUnitSet = localStorage.getItem(UNIT_SET_STORAGE_KEY);
  } catch (_error) {
    savedUnitSet = null;
  }

  if (savedUnitSet && UNIT_SETS[savedUnitSet]) {
    return savedUnitSet;
  }

  return "nl";
}

function saveUnitSet(unitSet) {
  try {
    localStorage.setItem(UNIT_SET_STORAGE_KEY, unitSet);
  } catch (_error) {
    // The selector should still work for the current session if storage is blocked.
  }
}

function getDisplayLabRow(row) {
  const override = UNIT_SETS[selectedUnitSet].rows[row.key] ?? {};

  return {
    ...row,
    ...override,
  };
}

function formatLabValue(key, value) {
  const override = UNIT_SETS[selectedUnitSet].rows[key];

  if (
    (!override?.factor && !override?.convert) ||
    value === undefined ||
    value === null ||
    value === ""
  ) {
    return value ?? "";
  }

  const match = String(value).match(/^([<>]=?)?\s*(-?\d+(?:\.\d+)?)$/);

  if (!match) {
    return value;
  }

  const [, comparator = "", numericValue] = match;
  const parsedValue = Number(numericValue);
  const convertedValue = override.convert
    ? override.convert(parsedValue)
    : parsedValue * override.factor;

  return `${comparator}${formatNumber(convertedValue, override.decimals)}`;
}

function formatNumber(value, decimals) {
  return new Intl.NumberFormat(UNIT_SETS[selectedUnitSet].locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

function flagTitle(flag) {
  const labels = {
    H: "above reference interval",
    L: "below reference interval",
  };

  return labels[flag] ?? "outside reference interval";
}

function setStatus(message, tone) {
  elements.statusMessage.textContent = message;
  elements.statusMessage.dataset.tone = tone;
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}
