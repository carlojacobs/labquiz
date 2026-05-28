import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadCaseBank } from "../src/caseBank.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const casePath = path.join(__dirname, "..", "data", "cases.md");

const bank = await loadCaseBank(casePath);

console.log(
  `Validated ${bank.cases.length} cases, ${bank.labRows.length} lab rows, and ${bank.results.length} result options.`,
);
