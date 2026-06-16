import fs from "node:fs";
const required = [
  "public/index.html",
  "public/articles/index.html",
  "public/skill/index.html",
  "skills/drip-campaign/SKILL.md",
  "skills/drip-campaign/agents/openai.yaml",
  "skills/drip-campaign/references/operating-checklist.md"
];
for (const file of required) {
  if (!fs.existsSync(file)) throw new Error(`Missing ${file}`);
}
const skill = fs.readFileSync("skills/drip-campaign/SKILL.md", "utf8");
if (!skill.startsWith("---\nname: drip-campaign\n")) throw new Error("Invalid skill frontmatter");
const html = fs.readFileSync("public/index.html", "utf8");
if (!html.includes("npx skills add drip-campaign")) throw new Error("Missing install shortcut");
console.log("dripcampaignskill.com ok");
