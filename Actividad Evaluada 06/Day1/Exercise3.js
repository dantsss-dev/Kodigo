"use strict";

const fs = require("fs");

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  // Write your code here
  let hour = s.substring(0, 2);
  let time = s.substring(8, 10);
  let middle = s.substring(2, 8);
  let militar = "";

  if (time == "AM") {
    if (Number(hour) === 12) {
      militar = "00" + middle;
    } else {
      militar = hour + middle;
    }
  } else {
    if (Number(hour) === 12) {
      militar = hour + middle;
    } else {
      militar = Number(hour) + 12 + middle;
    }
  }
  return militar;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = timeConversion(s);

  ws.write(result + "\n");

  ws.end();
}
