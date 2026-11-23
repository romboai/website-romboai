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
// Use es2022 so Tina's admin bundle stays compatible with Safari 16+, Chrome 107+,
// Firefox 104+ and Edge 107+ (avoiding un-transpiled esnext syntax on older browsers).
const buildNeedle = [
  "    build: {",
  "      sourcemap: false,",
  "      outDir: configManager.outputFolderPath,",
].join("\n");
const buildReplacement = [
  "    build: {",
  '      target: "es2022",',
  "      sourcemap: false,",
  "      outDir: configManager.outputFolderPath,",
].join("\n");

if (src.includes(buildNeedle)) {
  src = src.replace(buildNeedle, buildReplacement);
  changed = true;
} else if (!src.includes('      target: "es2022",\n      sourcemap: false,')) {
  if (src.includes('      target: "esnext",\n      sourcemap: false,')) {
    src = src.replace(
      '      target: "esnext",\n      sourcemap: false,',
      '      target: "es2022",\n      sourcemap: false,'
    );
    changed = true;
  } else {
    console.error(
      "[postinstall] Tina CLI Vite config changed; unable to apply the es2022 target patch."
    );
    process.exit(1);
  }
}

// Vite's dev dependency optimizer has a separate esbuild target. The build
// target above does not apply to this pre-bundling step.
const optimizeNeedle = [
  "    optimizeDeps: {",
  "      force: true,",
].join("\n");
const optimizeReplacement = [
  "    optimizeDeps: {",
  '      esbuildOptions: { target: "es2022" },',
  "      force: true,",
].join("\n");

if (src.includes(optimizeNeedle)) {
  src = src.replace(optimizeNeedle, optimizeReplacement);
  changed = true;
} else if (!src.includes(optimizeReplacement)) {
  if (src.includes('      esbuildOptions: { target: "esnext" },')) {
    src = src.replace(
      '      esbuildOptions: { target: "esnext" },',
      '      esbuildOptions: { target: "es2022" },'
    );
    changed = true;
  } else {
    console.error(
      "[postinstall] Tina CLI Vite config changed; unable to apply the dev optimizer target patch."
    );
    process.exit(1);
  }
}

if (changed) {
  fs.writeFileSync(target, src, "utf8");
  console.log(
    `[postinstall] Patched @tinacms/cli compatibility in ${path.relative(process.cwd(), target)}`
  );
}

// TinaCMS packages depend on Zod v3 APIs (e.g. `z.function().args()`), while
// security overrides pin `zod` to patched 4.6.x (which still ships `./v3/*`).
// Re-point the root entrypoints of `zod` v4 to its bundled `./v3/external` module.
for (const rel of ["index.js", "index.cjs"]) {
  const zodEntry = path.join(__dirname, "..", "node_modules", "zod", rel);
  if (fs.existsSync(zodEntry)) {
    const zodSrc = fs.readFileSync(zodEntry, "utf8");
    const patchedZod = zodSrc.replace(/\.\/v4\/classic\/external/g, "./v3/external");
    if (patchedZod !== zodSrc) {
      fs.writeFileSync(zodEntry, patchedZod, "utf8");
    }
  }
}

