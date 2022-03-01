// const { readFile, writeFile } = require("fs");

// readFile("./content/first.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(result);
// });

const { readFile, writeFile } = require("fs");
console.log("start");
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/subfolder/sub.txt", "utf-8", (err, result) => {
    if (err) console.log(err);
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with the task");
      },
    );
  });
});
console.log("starting next task");
