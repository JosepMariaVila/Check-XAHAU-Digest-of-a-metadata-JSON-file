const crypto = require("crypto");
const metadata = require("./JSONexample.json");
const metadataShort = JSON.stringify(metadata);
const digest = crypto
  .createHash("sha512")
  .update(metadataShort)
  .digest("hex")
  .slice(0, 64);
console.log("Digest:", digest);
