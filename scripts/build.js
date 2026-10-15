const { spawnSync } = require("node:child_process");

const hasClientId = Boolean(process.env.NEXT_PUBLIC_TINA_CLIENT_ID);
const hasToken = Boolean(process.env.TINA_TOKEN);

function run(command, args) {
  const result = spawnSync(command, args, { stdio: "inherit" });
  if (result.error) {
    console.error(result.error.message);
    process.exit(1);
  }
  if (result.status !== 0) process.exit(result.status || 1);
}

if (hasClientId !== hasToken) {
  console.error("TinaCloud configuration is incomplete: set both NEXT_PUBLIC_TINA_CLIENT_ID and TINA_TOKEN, or unset both for a site-only build.");
  process.exit(1);
}

if (hasClientId && hasToken) {
  run("tinacms", ["build"]);
} else {
  console.log("TinaCloud credentials are not configured. Building the Jekyll site only (CMS admin is not rebuilt). Use npm run tina-build for a strict TinaCloud build.");
}

run("bundle", ["exec", "jekyll", "build", ...process.argv.slice(2)]);
