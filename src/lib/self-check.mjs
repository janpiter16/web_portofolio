import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const idMessages = JSON.parse(
  fs.readFileSync(path.join(root, "src/messages/id.json"), "utf8")
);
const enMessages = JSON.parse(
  fs.readFileSync(path.join(root, "src/messages/en.json"), "utf8")
);

// 1. Ensure id.json and en.json have identical nested keys
function getKeys(obj, prefix = "") {
  return Object.entries(obj).flatMap(([key, val]) => {
    const full = prefix ? `${prefix}.${key}` : key;
    return val && typeof val === "object" && !Array.isArray(val)
      ? getKeys(val, full)
      : [full];
  });
}

assert.deepEqual(
  getKeys(idMessages),
  getKeys(enMessages),
  "Locale dictionaries id.json and en.json keys must match"
);

// 2. Ensure required public CV and project assets exist
const requiredAssets = [
  "public/cv/resume-id.pdf",
  "public/cv/resume-en.pdf",
  "public/images/projects/portfolio-preview.svg",
  "public/images/projects/project-two-preview.svg",
  "public/images/projects/project-three-preview.svg",
];

for (const relPath of requiredAssets) {
  assert.equal(
    fs.existsSync(path.join(root, relPath)),
    true,
    `Missing required asset: ${relPath}`
  );
}

console.log("✅ All portfolio self-checks passed.");
