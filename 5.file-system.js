const { readFileSync, writeFileSync } = require("fs");
console.log("start");
// reading data from file
const contentFile = readFileSync("./content/first.txt", "utf8");
const subFolderFile = readFileSync("./content/subfolder/sub.txt", "utf-8");

writeFileSync("./content/result.txt", ` def ${contentFile},${subFolderFile}`, {
  flag: "a",
});
console.log("done with this task");
console.log("startgin the next one");
