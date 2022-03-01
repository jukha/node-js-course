// console.log(__dirname);
// console.log(__filename);
// console.log(require);
// console.log(process);

// const msg = "Hello world";

// setTimeout(() => {
//   console.log(msg);
// }, 1000);

// let count = 1;
// setInterval(() => {
//   console.log(`${count} sec passed`);
//   count++;
// }, 1000);

// const names = require("./1.first-module");
// const { second, third } = require("./1.first-module");
// const sayHi = require("./utils");

// const data = require("./2.alternative-syntax");
// console.log(data);

// sayHi(names.second);
// sayHi(third);
// sayHi();

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
