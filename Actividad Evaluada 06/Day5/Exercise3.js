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
 * Complete the 'isBalanced' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function isBalanced(s) {
  // Write your code here
  let i = 0;
  let c = 0;
  let close = "";
  let subo = 0,
    subc = 0;
  if (s.length % 2 !== 0 || s[0] === "}" || s[0] === "]" || s[0] === ")") {
    return "NO";
  } else {
    while (c < s.length) {
      if (s[c] === "{") {
        close = "}";
      }
      if (s[c] === "[") {
        close = "]";
      }
      if (s[c] === "(") {
        close = ")";
      }

      if (close != "") {
        let sub = s.substring(c);
        if (!sub.includes(close)) {
          return "NO";
        }
        for (i = c + 1; i < s.length; i++) {
          if (s[i] === s[c]) {
            subo++;
          }
          if (s[i] === close && subo === subc) {
            let result = i - c - 1;
            if (result % 2 !== 0) {
              return "NO";
            } else {
              break;
            }
          }
          if (s[i] === close && subo !== subc) {
            subc++;
          }
        }
      }
      close = "";
      subo = 0;
      subc = 0;
      c++;
    }
    return "YES";
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const t = parseInt(readLine().trim(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const s = readLine();

    const result = isBalanced(s);

    ws.write(result + "\n");
  }

  ws.end();
}
