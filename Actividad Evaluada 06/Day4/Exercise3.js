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
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

function minimumBribes(q) {
  // Write your code here
  let bribes = 0;
  for (let i = q.length - 1; i >= 0; i--) {
    const originalPosition = q[i];
    const currentPosition = i + 1;

    if (originalPosition - currentPosition > 2) {
      console.log("Too chaotic");
      return;
    }

    for (let j = Math.max(0, originalPosition - 2); j < i; j++) {
      if (q[j] > originalPosition) {
        bribes++;
      }
    }
  }

  console.log(bribes);
}

function main() {
  const t = parseInt(readLine().trim(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const n = parseInt(readLine().trim(), 10);

    const q = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((qTemp) => parseInt(qTemp, 10));

    minimumBribes(q);
  }
}
