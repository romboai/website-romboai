const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const patch = fs.readFileSync(path.join(__dirname, "../scripts/patch-tinacms-cli.js"), "utf8");
const original = [
  "const config = {",
  "    optimizeDeps: {",
  "      force: true,",
  "    },",
  "    build: {",
  "      sourcemap: false,",
  "      outDir: configManager.outputFolderPath,",
  "    },",
  "};",
].join("\n");

function applyPatch(source) {
  let result = source;
  const mockFs = {
    existsSync: () => true,
    readFileSync: () => result,
    writeFileSync: (_file, contents) => { result = contents; },
  };
  vm.runInNewContext(patch, {
    __dirname: path.join(__dirname, "../scripts"),
    require: (name) => name === "fs" ? mockFs : require(name),
    console: { log() {}, error() {} },
    process: {
      cwd: () => __dirname,
      exit: (code) => { throw new Error(`Patch exited with code ${code}`); },
    },
  });
  return result;
}

test("Tina patch sets modern targets for both build and dev dependency optimization", () => {
  const patched = applyPatch(original);
  assert.match(patched, /optimizeDeps: \{\n      esbuildOptions: \{ target: "esnext" \}/);
  assert.match(patched, /build: \{\n      target: "esnext"/);
  assert.doesNotThrow(() => new vm.Script(patched));
});

test("Tina patch is safe to rerun before every dev startup", () => {
  const patched = applyPatch(original);
  assert.equal(applyPatch(patched), patched);
});

test("Tina patch reports an unsupported dev optimizer configuration", () => {
  const changedConfig = original.replace("      force: true,", "      force: false,");
  assert.throws(() => applyPatch(changedConfig), /Patch exited with code 1/);
});
