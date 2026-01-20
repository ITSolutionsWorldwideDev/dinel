// packages/extension/scripts/build.js
const fs = require("fs");
const path = require("path");
const archiver = require("archiver");
require("dotenv").config({ path: "../../apps/admin/.env" });

const ADMIN_URL = process.env.NEXT_PUBLIC_APP_URL;
if (!ADMIN_URL) {
  throw new Error("NEXT_PUBLIC_APP_URL is missing");
}

(async () => {
  // ---------------------------
  // Update manifest.json
  // ---------------------------
  const manifestPath = path.join(__dirname, "..", "manifest.json");
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));

  manifest.externally_connectable = {
    matches: [`${ADMIN_URL}/*`]
  };

  fs.writeFileSync(
    manifestPath,
    JSON.stringify(manifest, null, 2)
  );

  // ---------------------------
  // Update background.js
  // ---------------------------
  const bgPath = path.join(__dirname, "..", "background.js");
  let bg = fs.readFileSync(bgPath, "utf-8");

  bg = bg.replace(
    /const API_URL = .+;/,
    `const API_URL = "${ADMIN_URL}/api/linkedin/import";`
  );

  fs.writeFileSync(bgPath, bg);

  // ---------------------------
  // Create zip
  // ---------------------------
  const zipPath = path.join(__dirname, "..", "dinel-linkedin-import-extension.zip");
  const output = fs.createWriteStream(zipPath);
  const archive = archiver("zip", { zlib: { level: 9 } });

  archive.pipe(output);
  archive.directory(path.join(__dirname, ".."), false);
  await archive.finalize();

  // ---------------------------
  // Move zip to admin public
  // ---------------------------
  const target = path.resolve(
    __dirname,
    "../../../apps/admin/public/extension/dinel-linkedin-import-extension.zip"
  );

  fs.renameSync(zipPath, target);

  console.log("✅ Extension built and deployed successfully");
})();



/* const fs = require('fs');
const path = require('path');

const manifestPath = path.join(__dirname, '..', 'manifest.json');
const manifest = require(manifestPath);

manifest.externally_connectable.matches = [
  `${process.env.NEXT_PUBLIC_APP_URL}/*`
];

fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
console.log('Manifest updated with dynamic admin URL.'); */
