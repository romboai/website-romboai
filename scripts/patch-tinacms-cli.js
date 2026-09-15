/**
 * Compatibility patches for Tina CLI's bundled Vite configuration.
 *
 * Keep these patches local to Tina's generated admin application. They do not
 * change the browser target or build settings of the public site.
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

let src = fs.readFileSync(target, "utf8");
let changed = false;

// Older Tina releases emitted an expression that newer esbuild versions reject
// in `define`. Keep this patch for lockfiles that still resolve that bundle.
const defineNeedle = '"process.env": `new Object(${JSON.stringify(publicEnv)})`,';
const defineReplacement = [
  `"process.env": "[]",`,
  `      ...Object.fromEntries(Object.entries(publicEnv).map(([k, v]) => ([\`process.env.\${k}\`, JSON.stringify(v)]))),`,
].join("\n");

if (src.includes(defineNeedle)) {
  src = src.replace(defineNeedle, defineReplacement);
  changed = true;
}

// esbuild 0.28 no longer lowers some syntax to Vite 6's legacy default target.
// Tina's admin app is already modern-browser software, so avoid that unnecessary
// lowering by setting the target on Tina's own internal Vite build.
const buildNeedle = [
  "    build: {",
  "      sourcemap: false,",
  "      outDir: configManager.outputFolderPath,",
].join("\n");
const buildReplacement = [
  "    build: {",
  '      target: "esnext",',
  "      sourcemap: false,",
  "      outDir: configManager.outputFolderPath,",
].join("\n");

if (src.includes(buildNeedle)) {
  src = src.replace(buildNeedle, buildReplacement);
  changed = true;
} else if (!src.includes('      target: "esnext",\n      sourcemap: false,')) {
  console.error(
    "[postinstall] Tina CLI Vite config changed; unable to apply the esnext target patch."
  );
  process.exit(1);
}

if (changed) {
  fs.writeFileSync(target, src, "utf8");
  console.log(
    `[postinstall] Patched @tinacms/cli compatibility in ${path.relative(process.cwd(), target)}`
  );
}

