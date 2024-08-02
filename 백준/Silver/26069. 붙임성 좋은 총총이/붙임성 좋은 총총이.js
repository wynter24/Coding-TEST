const [_, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let arr = input.map((v) => v.split(" "));
let dance = new Set();
dance.add("ChongChong");
arr.forEach((v) => {
  if (dance.has(v[0]) || dance.has(v[1])) {
    dance.add(v[0]);
    dance.add(v[1]);
  }
});
console.log(dance.size);