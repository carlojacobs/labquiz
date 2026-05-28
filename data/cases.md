# LabQuiz Case Bank

This note is the single source of truth for the quiz. Edit the JSON block below to add lab rows, cases, answer options, or hints. The app reads this file on each `/api/cases` request.

Content rule of thumb: cases should be solvable primarily from the lab pattern. Clinical hints can add context, but the answer should not depend on imaging, cultures, specialist tests, or history that is absent from the fixed table. Avoid copy-paste severity: abnormal values in the same category should vary between cases unless a repeated value is intentional.

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
      "id": "iron-deficiency-anemia",
      "answer": "Iron deficiency",
      "explanation": "Microcytosis with a low ferritin and reactive thrombocytosis supports iron deficiency as the lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "7.9",
          "flag": "L"
        },
        "mcv": {
          "value": "68",
          "flag": "L"
        },
        "wbc": {
          "value": "6.2"
        },
        "neutrophils": {
          "value": "3.8"
        },
        "lymphocytes": {
          "value": "1.9"
        },
        "platelets": {
          "value": "535",
          "flag": "H"
        },
        "crp": {
          "value": "3"
        },
        "ferritin": {
          "value": "8",
          "flag": "L"
        },
        "iron": {
          "value": "22",
          "flag": "L"
        },
        "transferrin": {
          "value": "410",
          "flag": "H"
        },
        "transferrin_saturation": {
          "value": "5",
          "flag": "L"
        },
        "reticulocytes": {
          "value": "35"
        }
      },
      "hints": [
        "Progressive fatigue and exertional dyspnea.",
        "Craves ice and reports brittle nails.",
        "History suggests chronic blood loss.",
        "No jaundice or neurologic symptoms.",
        "Oral iron is being considered after source evaluation."
      ],
      "panels": [
        "cbc",
        "anemia",
        "inflammation"
      ]
    },
    {
      "id": "vitamin-b12-deficiency-pattern",
      "answer": "Cobalamin deficiency",
      "explanation": "Macrocytosis with low cobalamin, cytopenias, and mild bilirubin elevation supports B12-related ineffective erythropoiesis.",
      "labs": {
        "hemoglobin": {
          "value": "8.9",
          "flag": "L"
        },
        "mcv": {
          "value": "121",
          "flag": "H"
        },
        "wbc": {
          "value": "2.9",
          "flag": "L"
        },
        "neutrophils": {
          "value": "1.2",
          "flag": "L"
        },
        "lymphocytes": {
          "value": "1.4"
        },
        "platelets": {
          "value": "92",
          "flag": "L"
        },
        "bilirubin": {
          "value": "1.6",
          "flag": "H"
        },
        "b12": {
          "value": "92",
          "flag": "L"
        },
        "folate": {
          "value": "8.8"
        },
        "methylmalonic_acid": {
          "value": "1.20",
          "flag": "H"
        },
        "reticulocytes": {
          "value": "28"
        }
      },
      "hints": [
        "Fatigue is accompanied by numbness in the feet.",
        "Tongue is sore and smooth.",
        "Gait feels unsteady in the dark.",
        "Diet history or autoimmune gastritis is relevant.",
        "Neurologic symptoms separate this from simple folate deficiency."
      ],
      "panels": [
        "cbc",
        "anemia",
        "liver"
      ]
    },
    {
      "id": "folate-deficiency-pattern",
      "answer": "Folate deficiency",
      "explanation": "Macrocytosis with low folate and preserved cobalamin supports folate deficiency as the main lab conclusion.",
      "labs": {
        "hemoglobin": {
          "value": "10.8",
          "flag": "L"
        },
        "mcv": {
          "value": "106",
          "flag": "H"
        },
        "wbc": {
          "value": "3.5",
          "flag": "L"
        },
        "neutrophils": {
          "value": "1.9"
        },
        "platelets": {
          "value": "148",
          "flag": "L"
        },
        "albumin": {
          "value": "3.3",
          "flag": "L"
        },
        "b12": {
          "value": "420"
        },
        "folate": {
          "value": "2.1",
          "flag": "L"
        },
        "reticulocytes": {
          "value": "32"
        }
      },
      "hints": [
        "Fatigue and mouth ulcers are prominent.",
        "No paresthesias or gait disturbance.",
        "Recent diet has been poor.",
        "Alcohol use or increased nutritional demand may be present.",
        "The macrocytosis is not driven by low B12."
      ],
      "panels": [
        "cbc",
        "anemia",
        "liver"
      ]
    },
    {
      "id": "anemia-of-chronic-inflammation",
      "answer": "Inflammatory anemia",
      "explanation": "Normocytic anemia with high CRP, high ferritin, thrombocytosis, and low albumin fits inflammation-driven anemia.",
      "labs": {
        "hemoglobin": {
          "value": "9.5",
          "flag": "L"
        },
        "mcv": {
          "value": "82"
        },
        "wbc": {
          "value": "12.6",
          "flag": "H"
        },
        "neutrophils": {
          "value": "9.7",
          "flag": "H"
        },
        "platelets": {
          "value": "505",
          "flag": "H"
        },
        "albumin": {
          "value": "3.4",
          "flag": "L"
        },
        "crp": {
          "value": "84",
          "flag": "H"
        },
        "ferritin": {
          "value": "620",
          "flag": "H"
        },
        "iron": {
          "value": "35",
          "flag": "L"
        },
        "transferrin": {
          "value": "165",
          "flag": "L"
        },
        "transferrin_saturation": {
          "value": "12",
          "flag": "L"
        },
        "reticulocytes": {
          "value": "42"
        }
      },
      "hints": [
        "Fatigue occurs alongside long-standing inflammatory symptoms.",
        "Morning stiffness has been worsening.",
        "Iron stores are not depleted.",
        "Recent flares bring low-grade fever and weight loss.",
        "The anemia tracks with the inflammatory burden."
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
      "id": "anemia-of-chronic-kidney-disease",
      "answer": "CKD-related anemia",
      "explanation": "Normocytic anemia alongside reduced eGFR, high creatinine, acidosis, and mild hyperkalemia supports kidney disease as the driver.",
      "labs": {
        "hemoglobin": {
          "value": "8.8",
          "flag": "L"
        },
        "mcv": {
          "value": "89"
        },
        "wbc": {
          "value": "6.0"
        },
        "platelets": {
          "value": "210"
        },
        "potassium": {
          "value": "5.2",
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
          "value": "3.6",
          "flag": "H"
        },
        "egfr": {
          "value": "18",
          "flag": "L"
        },
        "ferritin": {
          "value": "180"
        },
        "urine_protein": {
          "value": "1+",
          "flag": "H"
        },
        "sodium": {
          "value": "138"
        },
        "urine_acr": {
          "value": "45",
          "flag": "H"
        },
        "urine_pcr": {
          "value": "80",
          "flag": "H"
        }
      },
      "hints": [
        "Fatigue is chronic rather than abrupt.",
        "Itching and restless legs are reported.",
        "Long-standing hypertension is in the history.",
        "No bleeding symptoms are volunteered.",
        "Reduced erythropoietin production fits the pattern."
      ],
      "panels": [
        "cbc",
        "anemia",
        "renal",
        "urine"
      ]
    },
    {
      "id": "acute-bacterial-infection-pattern",
      "answer": "Bacterial-type inflammation",
      "explanation": "A high white count with neutrophil predominance and markedly elevated CRP supports a bacterial-type inflammatory response.",
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
          "value": "430"
        },
        "sodium": {
          "value": "132",
          "flag": "L"
        },
        "crp": {
          "value": "168",
          "flag": "H"
        }
      },
      "hints": [
        "Fever is abrupt and high.",
        "Symptoms localize to one organ system.",
        "The white count is driven mainly by neutrophils.",
        "CRP is markedly elevated rather than mildly reactive.",
        "The lab conclusion is inflammation with neutrophilic predominance."
      ],
      "panels": [
        "cbc",
        "renal",
        "inflammation"
      ]
    },
    {
      "id": "acute-viral-infection-pattern",
      "answer": "Viral-type inflammation",
      "explanation": "Leukopenia, mild neutropenia, thrombocytopenia, modest CRP, and mild transaminitis support a viral-type inflammatory pattern.",
      "labs": {
        "hemoglobin": {
          "value": "13.6"
        },
        "wbc": {
          "value": "3.2",
          "flag": "L"
        },
        "neutrophils": {
          "value": "1.4",
          "flag": "L"
        },
        "lymphocytes": {
          "value": "1.5"
        },
        "platelets": {
          "value": "142",
          "flag": "L"
        },
        "ast": {
          "value": "55",
          "flag": "H"
        },
        "alt": {
          "value": "62",
          "flag": "H"
        },
        "crp": {
          "value": "18",
          "flag": "H"
        }
      },
      "hints": [
        "Myalgias and malaise dominate the presentation.",
        "Several close contacts have similar symptoms.",
        "Leukopenia is more prominent than neutrophilia.",
        "Mild thrombocytopenia and transaminitis travel with the illness.",
        "The lab conclusion is a cytopenic viral-type inflammatory pattern."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "inflammation"
      ]
    },
    {
      "id": "acute-glomerulonephritis-pattern",
      "answer": "Nephritic syndrome",
      "explanation": "Reduced kidney function with hematuria, proteinuria, hyperkalemia, and low bicarbonate supports a nephritic renal pattern.",
      "labs": {
        "hemoglobin": {
          "value": "11.6",
          "flag": "L"
        },
        "wbc": {
          "value": "8.4"
        },
        "platelets": {
          "value": "250"
        },
        "potassium": {
          "value": "5.4",
          "flag": "H"
        },
        "bicarbonate": {
          "value": "19",
          "flag": "L"
        },
        "bun": {
          "value": "46",
          "flag": "H"
        },
        "creatinine": {
          "value": "2.0",
          "flag": "H"
        },
        "egfr": {
          "value": "37",
          "flag": "L"
        },
        "albumin": {
          "value": "3.0",
          "flag": "L"
        },
        "crp": {
          "value": "38",
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
        "urine_pcr": {
          "value": "120",
          "flag": "H"
        },
        "urine_acr": {
          "value": "35",
          "flag": "H"
        }
      },
      "hints": [
        "Urine has become tea-colored.",
        "Periorbital swelling is noticed in the morning.",
        "Blood pressure is newly elevated.",
        "A sore throat occurred weeks ago.",
        "The pattern is nephritic rather than purely nephrotic."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "urine",
        "inflammation"
      ]
    },
    {
      "id": "nephrotic-syndrome-pattern",
      "answer": "Nephrotic syndrome",
      "explanation": "Marked proteinuria with low albumin, preserved creatinine, and absent hematuria supports a nephrotic lab pattern.",
      "labs": {
        "hemoglobin": {
          "value": "13.4"
        },
        "platelets": {
          "value": "480",
          "flag": "H"
        },
        "bun": {
          "value": "18"
        },
        "creatinine": {
          "value": "1.1"
        },
        "egfr": {
          "value": "78"
        },
        "albumin": {
          "value": "2.1",
          "flag": "L"
        },
        "crp": {
          "value": "8"
        },
        "urine_protein": {
          "value": "4+",
          "flag": "H"
        },
        "urine_blood": {
          "value": "Negative"
        },
        "urine_pcr": {
          "value": "520",
          "flag": "H"
        },
        "urine_acr": {
          "value": "380",
          "flag": "H"
        }
      },
      "hints": [
        "Leg swelling is the first complaint.",
        "Urine looks foamy.",
        "Eyelid puffiness is present.",
        "Breathing is harder when lying flat from edema.",
        "Heavy protein loss is the central clue."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "urine",
        "inflammation"
      ]
    },
    {
      "id": "diabetic-ketoacidosis-pattern",
      "answer": "Diabetic ketoacidosis",
      "explanation": "Severe hyperglycemia with very low bicarbonate, hyperkalemia, and dehydration-related renal changes supports DKA.",
      "labs": {
        "wbc": {
          "value": "15.0",
          "flag": "H"
        },
        "sodium": {
          "value": "126",
          "flag": "L"
        },
        "potassium": {
          "value": "5.8",
          "flag": "H"
        },
        "bicarbonate": {
          "value": "8",
          "flag": "L"
        },
        "bun": {
          "value": "34",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.6",
          "flag": "H"
        },
        "egfr": {
          "value": "52",
          "flag": "L"
        },
        "glucose": {
          "value": "486",
          "flag": "H"
        },
        "crp": {
          "value": "12",
          "flag": "H"
        },
        "urine_glucose": {
          "value": "4+",
          "flag": "H"
        },
        "urine_ketones": {
          "value": "4+",
          "flag": "H"
        },
        "blood_gas_ph": {
          "value": "7.12",
          "flag": "L"
        },
        "blood_gas_pco2": {
          "value": "24",
          "flag": "L"
        },
        "base_excess": {
          "value": "-18",
          "flag": "L"
        },
        "chloride": {
          "value": "94",
          "flag": "L"
        },
        "hba1c": {
          "value": "12.4",
          "flag": "H"
        }
      },
      "hints": [
        "Polyuria and polydipsia preceded presentation.",
        "Nausea and abdominal pain are prominent.",
        "Breathing is deep and rapid.",
        "Breath has a fruity odor.",
        "Insulin deficiency with acidosis is the pattern."
      ],
      "panels": [
        "cbc",
        "renal",
        "urine",
        "inflammation",
        "bloodGas"
      ]
    },
    {
      "id": "hyperosmolar-hyperglycemic-state",
      "answer": "Hyperosmolar hyperglycemia",
      "explanation": "Extreme hyperglycemia with dehydration-related renal changes and no marked bicarbonate depression supports HHS physiology.",
      "labs": {
        "wbc": {
          "value": "13.0",
          "flag": "H"
        },
        "sodium": {
          "value": "151",
          "flag": "H"
        },
        "potassium": {
          "value": "4.4"
        },
        "bicarbonate": {
          "value": "23"
        },
        "bun": {
          "value": "52",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.9",
          "flag": "H"
        },
        "egfr": {
          "value": "39",
          "flag": "L"
        },
        "glucose": {
          "value": "820",
          "flag": "H"
        },
        "urine_glucose": {
          "value": "4+",
          "flag": "H"
        },
        "urine_ketones": {
          "value": "Negative"
        },
        "blood_gas_ph": {
          "value": "7.36"
        },
        "blood_gas_pco2": {
          "value": "41"
        },
        "base_excess": {
          "value": "-1"
        },
        "chloride": {
          "value": "112",
          "flag": "H"
        },
        "hba1c": {
          "value": "13.8",
          "flag": "H"
        }
      },
      "hints": [
        "Older patient with days of worsening thirst.",
        "Confusion is more striking than abdominal pain.",
        "Signs of severe dehydration are present.",
        "Deep acidotic breathing is absent.",
        "Extreme hyperglycemia without marked acidosis is the clue."
      ],
      "panels": [
        "cbc",
        "renal",
        "urine",
        "bloodGas"
      ]
    },
    {
      "id": "alcoholic-hepatitis-pattern",
      "answer": "Alcohol-associated hepatitis",
      "explanation": "AST predominance, macrocytosis, thrombocytopenia, high bilirubin, low albumin, and elevated INR support alcohol-associated hepatitis.",
      "labs": {
        "hemoglobin": {
          "value": "10.7",
          "flag": "L"
        },
        "mcv": {
          "value": "104",
          "flag": "H"
        },
        "wbc": {
          "value": "14.8",
          "flag": "H"
        },
        "platelets": {
          "value": "96",
          "flag": "L"
        },
        "sodium": {
          "value": "129",
          "flag": "L"
        },
        "ast": {
          "value": "236",
          "flag": "H"
        },
        "alt": {
          "value": "82",
          "flag": "H"
        },
        "alp": {
          "value": "190",
          "flag": "H"
        },
        "bilirubin": {
          "value": "8.4",
          "flag": "H"
        },
        "albumin": {
          "value": "2.9",
          "flag": "L"
        },
        "inr": {
          "value": "1.8",
          "flag": "H"
        },
        "ferritin": {
          "value": "700",
          "flag": "H"
        },
        "bilirubin_direct": {
          "value": "5.6",
          "flag": "H"
        },
        "ggt": {
          "value": "640",
          "flag": "H"
        }
      },
      "hints": [
        "Jaundice follows a period of heavy drinking.",
        "Tender hepatomegaly is present.",
        "Low-grade fever occurs without a clear infection source.",
        "Ascites has recently worsened.",
        "AST is higher than ALT but neither is in the thousands."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "anemia"
      ]
    },
    {
      "id": "acute-viral-hepatitis-pattern",
      "answer": "Acute hepatitis",
      "explanation": "Transaminases in the thousands with bilirubin elevation and only secondary ALP elevation support acute hepatocellular injury.",
      "labs": {
        "wbc": {
          "value": "5.1"
        },
        "lymphocytes": {
          "value": "2.9"
        },
        "ast": {
          "value": "1320",
          "flag": "H"
        },
        "alt": {
          "value": "1640",
          "flag": "H"
        },
        "alp": {
          "value": "180",
          "flag": "H"
        },
        "bilirubin": {
          "value": "6.2",
          "flag": "H"
        },
        "albumin": {
          "value": "3.8"
        },
        "inr": {
          "value": "1.3",
          "flag": "H"
        },
        "crp": {
          "value": "22",
          "flag": "H"
        },
        "bilirubin_direct": {
          "value": "3.8",
          "flag": "H"
        },
        "ggt": {
          "value": "120",
          "flag": "H"
        }
      },
      "hints": [
        "Malaise and anorexia started before jaundice.",
        "Urine became dark.",
        "AST and ALT are the dominant abnormalities.",
        "Cholestatic enzymes are elevated but not the main signal.",
        "Transaminases in the thousands define the lab pattern."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "inflammation"
      ]
    },
    {
      "id": "extrahepatic-cholestasis-pattern",
      "answer": "Cholestasis",
      "explanation": "Dominant ALP and bilirubin elevation with less prominent transaminase rise supports a cholestatic liver pattern.",
      "labs": {
        "wbc": {
          "value": "11.0"
        },
        "neutrophils": {
          "value": "8.6",
          "flag": "H"
        },
        "ast": {
          "value": "210",
          "flag": "H"
        },
        "alt": {
          "value": "260",
          "flag": "H"
        },
        "alp": {
          "value": "780",
          "flag": "H"
        },
        "bilirubin": {
          "value": "7.8",
          "flag": "H"
        },
        "albumin": {
          "value": "3.9"
        },
        "inr": {
          "value": "1.1"
        },
        "crp": {
          "value": "45",
          "flag": "H"
        },
        "bilirubin_direct": {
          "value": "6.5",
          "flag": "H"
        },
        "ggt": {
          "value": "980",
          "flag": "H"
        }
      },
      "hints": [
        "Pruritus is intense.",
        "Stool is pale and urine is dark.",
        "Bilirubin is elevated alongside a dominant ALP rise.",
        "Transaminases are abnormal but not the leading signal.",
        "The lab conclusion is cholestatic rather than hepatocellular injury."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "inflammation"
      ]
    },
    {
      "id": "decompensated-cirrhosis-pattern",
      "answer": "Advanced chronic liver disease",
      "explanation": "Low platelets, low albumin, high INR, high bilirubin, and hyponatremia support impaired hepatic synthetic function.",
      "labs": {
        "hemoglobin": {
          "value": "9.9",
          "flag": "L"
        },
        "mcv": {
          "value": "99"
        },
        "wbc": {
          "value": "2.8",
          "flag": "L"
        },
        "platelets": {
          "value": "44",
          "flag": "L"
        },
        "sodium": {
          "value": "125",
          "flag": "L"
        },
        "creatinine": {
          "value": "1.4",
          "flag": "H"
        },
        "egfr": {
          "value": "54",
          "flag": "L"
        },
        "ast": {
          "value": "88",
          "flag": "H"
        },
        "alt": {
          "value": "46"
        },
        "alp": {
          "value": "155",
          "flag": "H"
        },
        "bilirubin": {
          "value": "4.1",
          "flag": "H"
        },
        "albumin": {
          "value": "2.4",
          "flag": "L"
        },
        "inr": {
          "value": "2.0",
          "flag": "H"
        },
        "bilirubin_direct": {
          "value": "2.1",
          "flag": "H"
        },
        "ggt": {
          "value": "210",
          "flag": "H"
        }
      },
      "hints": [
        "Ascites is tense.",
        "Easy bruising has increased.",
        "Platelets and white cells are low together.",
        "Albumin is low while INR and bilirubin are elevated.",
        "The lab conclusion is impaired hepatic synthetic function."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver"
      ]
    },
    {
      "id": "hypothyroid-pattern",
      "answer": "Hypothyroidism",
      "explanation": "Markedly elevated TSH with mild macrocytic anemia, hyponatremia, and mild AST elevation supports hypothyroidism.",
      "labs": {
        "hemoglobin": {
          "value": "11.7",
          "flag": "L"
        },
        "mcv": {
          "value": "101",
          "flag": "H"
        },
        "sodium": {
          "value": "133",
          "flag": "L"
        },
        "glucose": {
          "value": "88"
        },
        "ast": {
          "value": "42",
          "flag": "H"
        },
        "alt": {
          "value": "38"
        },
        "crp": {
          "value": "4"
        },
        "tsh": {
          "value": "32",
          "flag": "H"
        },
        "free_t4": {
          "value": "0.4",
          "flag": "L"
        },
        "free_t3": {
          "value": "2.4"
        }
      },
      "hints": [
        "Cold intolerance is prominent.",
        "Constipation and dry skin are reported.",
        "Weight gain occurred despite reduced appetite.",
        "Reflex relaxation is delayed.",
        "TSH is the anchor clue."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "thyroid",
        "inflammation"
      ]
    },
    {
      "id": "hyperthyroid-pattern",
      "answer": "Hyperthyroidism",
      "explanation": "Suppressed TSH with mild hypercalcemia, hyperglycemia, and mild transaminitis supports hyperthyroidism.",
      "labs": {
        "hemoglobin": {
          "value": "12.7"
        },
        "mcv": {
          "value": "86"
        },
        "wbc": {
          "value": "5.5"
        },
        "glucose": {
          "value": "146",
          "flag": "H"
        },
        "calcium": {
          "value": "10.6",
          "flag": "H"
        },
        "ast": {
          "value": "45",
          "flag": "H"
        },
        "alt": {
          "value": "58",
          "flag": "H"
        },
        "tsh": {
          "value": "<0.01",
          "flag": "L"
        },
        "free_t4": {
          "value": "3.1",
          "flag": "H"
        },
        "free_t3": {
          "value": "9.2",
          "flag": "H"
        }
      },
      "hints": [
        "Palpitations and tremor are present.",
        "Heat intolerance is new.",
        "Weight loss continues despite appetite.",
        "Exam shows brisk reflexes.",
        "Suppressed TSH is the anchor clue."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "thyroid"
      ]
    },
    {
      "id": "acute-leukemia-pattern",
      "answer": "Acute leukemia",
      "explanation": "Severe cytopenias with many peripheral blasts, high LDH, and high uric acid support an acute leukemia pattern.",
      "labs": {
        "hemoglobin": {
          "value": "7.4",
          "flag": "L"
        },
        "mcv": {
          "value": "90"
        },
        "wbc": {
          "value": "68.0",
          "flag": "H"
        },
        "neutrophils": {
          "value": "0.5",
          "flag": "L"
        },
        "lymphocytes": {
          "value": "3.0"
        },
        "platelets": {
          "value": "24",
          "flag": "L"
        },
        "blasts": {
          "value": "72",
          "flag": "H"
        },
        "ldh": {
          "value": "1180",
          "flag": "H"
        },
        "uric_acid": {
          "value": "9.4",
          "flag": "H"
        },
        "creatinine": {
          "value": "1.2"
        }
      },
      "hints": [
        "Symptoms developed over weeks rather than years.",
        "Bruising and infections are both part of the presentation.",
        "The platelet count is dangerously low.",
        "The decisive lab is a high circulating blast percentage.",
        "This is an acute marrow replacement pattern."
      ],
      "panels": [
        "cbc",
        "renal",
        "hemeMalignancy"
      ]
    },
    {
      "id": "chronic-myeloid-leukemia-pattern",
      "answer": "Chronic myeloid leukemia",
      "explanation": "Very high WBC with neutrophilia, basophilia, thrombocytosis, high LDH, and high uric acid supports a myeloid proliferative pattern.",
      "labs": {
        "hemoglobin": {
          "value": "11.1",
          "flag": "L"
        },
        "mcv": {
          "value": "88"
        },
        "wbc": {
          "value": "132.0",
          "flag": "H"
        },
        "neutrophils": {
          "value": "92.0",
          "flag": "H"
        },
        "lymphocytes": {
          "value": "5.5",
          "flag": "H"
        },
        "basophils": {
          "value": "4.8",
          "flag": "H"
        },
        "platelets": {
          "value": "720",
          "flag": "H"
        },
        "blasts": {
          "value": "2",
          "flag": "H"
        },
        "ldh": {
          "value": "760",
          "flag": "H"
        },
        "uric_acid": {
          "value": "8.8",
          "flag": "H"
        }
      },
      "hints": [
        "The abnormality is dominated by granulocytic proliferation.",
        "Basophils are disproportionately increased.",
        "Platelets are high rather than low.",
        "Blasts are present but not at an acute leukemia level.",
        "The lab pattern is chronic myeloid proliferation."
      ],
      "panels": [
        "cbc",
        "renal",
        "hemeMalignancy"
      ]
    },
    {
      "id": "chronic-lymphocytic-leukemia-pattern",
      "answer": "Chronic lymphocytic leukemia",
      "explanation": "Marked absolute lymphocytosis with relatively preserved neutrophils and mild cytopenias supports a chronic lymphoid leukemia pattern.",
      "labs": {
        "hemoglobin": {
          "value": "12.1"
        },
        "mcv": {
          "value": "91"
        },
        "wbc": {
          "value": "58.0",
          "flag": "H"
        },
        "neutrophils": {
          "value": "3.9"
        },
        "lymphocytes": {
          "value": "51.0",
          "flag": "H"
        },
        "platelets": {
          "value": "138",
          "flag": "L"
        },
        "blasts": {
          "value": "0"
        },
        "ldh": {
          "value": "310",
          "flag": "H"
        }
      },
      "hints": [
        "The white count is high because of lymphocytes.",
        "Neutrophils are not the dominant abnormal population.",
        "The process looks chronic rather than blast-driven.",
        "Mild thrombocytopenia suggests marrow or immune involvement.",
        "The lab conclusion is a chronic lymphoid leukemia pattern."
      ],
      "panels": [
        "cbc",
        "renal",
        "hemeMalignancy"
      ]
    },
    {
      "id": "plasma-cell-myeloma-pattern",
      "answer": "Plasma cell myeloma",
      "explanation": "Normocytic anemia with renal impairment, hypercalcemia, high total protein, and a detectable M-protein supports plasma cell myeloma.",
      "labs": {
        "hemoglobin": {
          "value": "8.6",
          "flag": "L"
        },
        "mcv": {
          "value": "92"
        },
        "wbc": {
          "value": "4.8"
        },
        "platelets": {
          "value": "165"
        },
        "creatinine": {
          "value": "2.2",
          "flag": "H"
        },
        "egfr": {
          "value": "32",
          "flag": "L"
        },
        "calcium": {
          "value": "12.4",
          "flag": "H"
        },
        "albumin": {
          "value": "3.0",
          "flag": "L"
        },
        "total_protein": {
          "value": "10.4",
          "flag": "H"
        },
        "m_protein": {
          "value": "3.6",
          "flag": "H"
        },
        "urine_protein": {
          "value": "2+",
          "flag": "H"
        },
        "urine_pcr": {
          "value": "95",
          "flag": "H"
        },
        "urine_acr": {
          "value": "28",
          "flag": "H"
        }
      },
      "hints": [
        "The anemia is normocytic.",
        "Renal impairment and hypercalcemia accompany the blood count change.",
        "Total protein is high while albumin is low.",
        "A monoclonal protein is detected.",
        "The pattern points to a plasma cell malignancy."
      ],
      "panels": [
        "cbc",
        "renal",
        "liver",
        "urine",
        "hemeMalignancy"
      ]
    },
    {
      "id": "myelodysplastic-syndrome-pattern",
      "answer": "Myelodysplastic syndrome",
      "explanation": "Macrocytosis with multilineage cytopenias, normal B12/folate, and low-level blasts supports a myelodysplastic pattern.",
      "labs": {
        "hemoglobin": {
          "value": "8.2",
          "flag": "L"
        },
        "mcv": {
          "value": "109",
          "flag": "H"
        },
        "wbc": {
          "value": "2.6",
          "flag": "L"
        },
        "neutrophils": {
          "value": "0.9",
          "flag": "L"
        },
        "lymphocytes": {
          "value": "1.2"
        },
        "platelets": {
          "value": "74",
          "flag": "L"
        },
        "blasts": {
          "value": "4",
          "flag": "H"
        },
        "ldh": {
          "value": "360",
          "flag": "H"
        },
        "b12": {
          "value": "510"
        },
        "folate": {
          "value": "9.6"
        }
      },
      "hints": [
        "The abnormality is chronic and marrow-centered.",
        "Macrocytosis is present without low B12 or folate.",
        "More than one cell line is reduced.",
        "Blasts are increased but below acute leukemia range.",
        "The lab pattern suggests ineffective clonal hematopoiesis."
      ],
      "panels": [
        "cbc",
        "anemia",
        "renal",
        "hemeMalignancy"
      ]
    },
    {
      "id": "polycythemia-vera-pattern",
      "answer": "Polycythemia vera",
      "explanation": "High hemoglobin with leukocytosis, thrombocytosis, and high uric acid supports a panmyelosis pattern compatible with polycythemia vera.",
      "labs": {
        "hemoglobin": {
          "value": "19.2",
          "flag": "H"
        },
        "mcv": {
          "value": "81"
        },
        "wbc": {
          "value": "14.2",
          "flag": "H"
        },
        "neutrophils": {
          "value": "10.4",
          "flag": "H"
        },
        "platelets": {
          "value": "640",
          "flag": "H"
        },
        "ldh": {
          "value": "340",
          "flag": "H"
        },
        "uric_acid": {
          "value": "8.1",
          "flag": "H"
        }
      },
      "hints": [
        "The red cell mass signal dominates the table.",
        "White cells and platelets are also elevated.",
        "This is not isolated secondary erythrocytosis.",
        "Uric acid is increased from high cell turnover.",
        "The lab conclusion is a myeloproliferative panmyelosis pattern."
      ],
      "panels": [
        "cbc",
        "renal",
        "hemeMalignancy"
      ]
    },
    {
      "id": "essential-thrombocythemia-pattern",
      "answer": "Essential thrombocythemia",
      "explanation": "Marked isolated thrombocytosis with otherwise near-normal CBC and low inflammatory markers supports an essential thrombocythemia pattern.",
      "labs": {
        "hemoglobin": {
          "value": "13.8"
        },
        "mcv": {
          "value": "87"
        },
        "wbc": {
          "value": "8.1"
        },
        "neutrophils": {
          "value": "5.0"
        },
        "lymphocytes": {
          "value": "2.1"
        },
        "platelets": {
          "value": "1040",
          "flag": "H"
        },
        "crp": {
          "value": "3"
        },
        "ferritin": {
          "value": "95"
        },
        "ldh": {
          "value": "230"
        }
      },
      "hints": [
        "The platelet count is the outlier.",
        "Hemoglobin and white cells are not the main abnormality.",
        "Iron deficiency and inflammation are not driving the count.",
        "LDH is not strongly elevated.",
        "The lab pattern is isolated clonal thrombocytosis."
      ],
      "panels": [
        "cbc",
        "anemia",
        "inflammation",
        "renal",
        "hemeMalignancy"
      ]
    },
    {
      "id": "primary-myelofibrosis-pattern",
      "answer": "Primary myelofibrosis",
      "explanation": "Anemia with abnormal white count, thrombocytopenia, circulating blasts, and high LDH supports a marrow fibrosis/myeloproliferative pattern.",
      "labs": {
        "hemoglobin": {
          "value": "9.1",
          "flag": "L"
        },
        "mcv": {
          "value": "88"
        },
        "wbc": {
          "value": "24.0",
          "flag": "H"
        },
        "neutrophils": {
          "value": "16.5",
          "flag": "H"
        },
        "lymphocytes": {
          "value": "2.8"
        },
        "platelets": {
          "value": "82",
          "flag": "L"
        },
        "blasts": {
          "value": "5",
          "flag": "H"
        },
        "ldh": {
          "value": "890",
          "flag": "H"
        },
        "uric_acid": {
          "value": "8.5",
          "flag": "H"
        }
      },
      "hints": [
        "The table shows both cytopenia and proliferation.",
        "Platelets are low despite a myeloid proliferative picture.",
        "LDH is markedly elevated.",
        "Blasts are present but not dominant.",
        "The lab conclusion is an advanced myeloproliferative marrow process."
      ],
      "panels": [
        "cbc",
        "renal",
        "hemeMalignancy"
      ]
    },
    {
      "id": "high-grade-lymphoid-malignancy-pattern",
      "answer": "High-grade lymphoid malignancy",
      "explanation": "Very high LDH and uric acid with cytopenias and renal stress supports a high-turnover lymphoid malignancy pattern.",
      "labs": {
        "hemoglobin": {
          "value": "10.2",
          "flag": "L"
        },
        "mcv": {
          "value": "84"
        },
        "wbc": {
          "value": "6.7"
        },
        "neutrophils": {
          "value": "4.9"
        },
        "lymphocytes": {
          "value": "0.7",
          "flag": "L"
        },
        "platelets": {
          "value": "118",
          "flag": "L"
        },
        "creatinine": {
          "value": "1.5",
          "flag": "H"
        },
        "egfr": {
          "value": "55",
          "flag": "L"
        },
        "ldh": {
          "value": "1680",
          "flag": "H"
        },
        "uric_acid": {
          "value": "10.6",
          "flag": "H"
        },
        "calcium": {
          "value": "9.2"
        }
      },
      "hints": [
        "The CBC is abnormal but not leukemia-defining.",
        "LDH is the most striking value.",
        "Uric acid is high, suggesting rapid cell turnover.",
        "Renal stress is beginning to appear.",
        "This is a high-turnover lymphoid malignancy pattern rather than a specific lymphoma subtype."
      ],
      "panels": [
        "cbc",
        "renal",
        "hemeMalignancy"
      ]
    }
  ]
}
```
