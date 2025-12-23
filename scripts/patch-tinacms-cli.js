/**
 * Patch Tina CLI to be compatible with esbuild's `define` rules.
 *
 * Tina CLI (as of @tinacms/cli@2.0.5) sets:
 *   define: { "process.env": `new Object(${JSON.stringify(publicEnv)})` }
 *
 * But esbuild only accepts an entity name or a JS literal for define values,
 * so `new Object(...)` fails CI with:
 *   Invalid define value ... new Object({...})
 *
 * Fix:
 * - Replace `process.env` with an array literal `[]` (safe at statement start: `[].FOO` parses)
 * - Add per-key defines for `process.env.<KEY>` so actual values are still inlined.
 */

const fs = require("fs");
const path = require("path");

const target = path.join(
  __dirname,
  "..",
  "node_modules",
  "@tinacms",
  "cli",
  "dist",
  "index.js"
);

if (!fs.existsSync(target)) {
  // Nothing to patch (e.g. during tooling-only installs)
  process.exit(0);
}

const src = fs.readFileSync(target, "utf8");

// Exact snippet in @tinacms/cli@2.0.5 (keep as a plain string; no template interpolation).
const needle = '"process.env": `new Object(${JSON.stringify(publicEnv)})`,';

if (!src.includes(needle)) {
  // Already patched or upstream changed.
  process.exit(0);
}

const replacement = [
  `"process.env": "[]",`,
  `      ...Object.fromEntries(Object.entries(publicEnv).map(([k, v]) => ([\`process.env.\${k}\`, JSON.stringify(v)]))),`,
].join("\n");

const out = src.replace(needle, replacement);

fs.writeFileSync(target, out, "utf8");
console.log(`[postinstall] Patched @tinacms/cli define(process.env) in ${path.relative(process.cwd(), target)}`);


