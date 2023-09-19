"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  // Write your code here
  let index = 0;
  let subindex = 0;
  let max = 0;
  let min = arr.reduce((acc, current) => acc + current);

  arr.forEach((element) => {
    const initial = 0;
    subindex = 0;
    let temp = arr.reduce((acc, current) => {
      if (index !== subindex) {
        subindex++;
        return acc + current;
      }
      subindex++;
      return acc + 0;
    }, initial);
    if (temp > max) {
      max = temp;
    }
    if (temp < min) {
      min = temp;
    }
    index++;
  });
  console.log(min + " " + max);
}

function main() {
  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
