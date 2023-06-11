const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, "/public/misc");
const imageNames = fs.readdirSync(dirPath);

fs.writeFileSync(
  path.join(__dirname, "/public/misc/misc.json"),
  JSON.stringify(imageNames),
  "utf-8"
);
