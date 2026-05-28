import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadCaseBank } from "./src/caseBank.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/cases", async (_req, res) => {
  try {
    const bank = await loadCaseBank(path.join(__dirname, "data", "cases.md"));
    res.json(bank);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to load case bank." });
  }
});

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.listen(port, () => {
  console.log(`LabQuiz running at http://localhost:${port}`);
});
