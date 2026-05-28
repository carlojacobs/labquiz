# LabQuiz

LabQuiz is a small Node/HTML webapp for practicing clinical lab pattern recognition. It presents a fixed EHR-style lab table and asks the player to choose the best lab conclusion from a searchable fixed answer list.

It is designed as an educational lab-conclusion game, not a clinical decision tool or official diagnosis generator.
The included reference intervals are broad teaching ranges and should be reviewed against local laboratory reporting standards before clinical or exam-specific use.

## Features

- 5 attempts per case
- Searchable, fixed result list
- Progressive clinical hints after incorrect guesses
- Two-column layout with labs on the left and hints/game controls on the right
- Unit-set selector for Netherlands/SI and United States conventional display
- Hospital-style lab ordering: Chemistry, Hematology, Blood gases, Immunology, Coagulation, and Urine sample
- Single editable case-bank note at `data/cases.md`
- 26 starter cases covering anemia, kidney injury, infection-like lab patterns, liver patterns, endocrine patterns, metabolic emergencies, broader urinalysis patterns, and hematologic malignancies

## Run locally

```bash
npm install
npm start
```

Open `http://localhost:3000`.

For auto-restart during development:

```bash
npm run dev
```

## Validate cases

```bash
npm test
```

The validator checks that every case has a unique answer, at least five hints, and only uses lab keys defined in the fixed lab table.
It also hydrates common screening panels so cases do not show isolated chemistry values that would normally be ordered together.

## Editing the case bank

All quiz content lives in `data/cases.md`. The app reads the fenced JSON block inside that note. To add a new case:

1. Add one object to the `cases` array.
2. Use an existing lab key from `labRows`.
3. Add `panels` for the screening workup that would realistically be ordered, such as `cbc`, `renal`, `liver`, `bloodGas`, `anemia`, `inflammation`, `thyroid`, `urine`, or `hemeMalignancy`.
4. Override only the values that should differ from the panel defaults.
5. Keep `answer` concise so it does not simply repeat the visible lab abnormalities.
6. Add an `explanation` that teaches the full lab pattern after the case is solved or missed.
7. Leave irrelevant panels out; the UI will show blank cells for labs outside the ordered workup.
8. Add at least five clinical hints.
9. Run `npm test`.

Lab values use this shape:

```json
"hemoglobin": {
  "value": "8.6",
  "flag": "L"
}
```

Supported flags are `H` and `L`. The app uses those only for color: high values are red, and low values are blue.

## Unit Sets

Cases are stored in US/conventional units, then converted in the browser for the selected unit set.

- `Netherlands / SI`: Hb in mmol/L, urea in mmol/L, creatinine in umol/L, glucose in mmol/L, calcium in mmol/L, bilirubin in umol/L, albumin in g/L, ferritin in ug/L, B12 in pmol/L, and folate in nmol/L.
- `United States`: conventional display such as Hb g/dL, BUN mg/dL, creatinine mg/dL, glucose mg/dL, bilirubin mg/dL, and albumin g/dL.
