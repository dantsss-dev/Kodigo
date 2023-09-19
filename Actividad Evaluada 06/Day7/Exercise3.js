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
 * Complete the 'noPrefix' function below.
 *
 * The function accepts STRING_ARRAY words as parameter.
 */

function noPrefix(words) {
  // Write your code here
  const result = isGoodSet(words);
  if (result.isGood) {
    console.log("GOOD SET");
  } else {
    console.log("BAD SET");
    console.log(result.prefixString);
  }
}

function isGoodSet(words2) {
  for (let i = 0; i < words2.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (i !== j && isPrefix(words2[i], words2[j])) {
        return { isGood: false, prefixString: words2[i] };
      }
    }
  }
  return { isGood: true };
}

function isPrefix(str1, str2) {
  if (str1.startsWith(str2) || str2.startsWith(str1)) {
    return true;
  }
  return false;
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  let words = [];

  for (let i = 0; i < n; i++) {
    const wordsItem = readLine();
    words.push(wordsItem);
  }

  noPrefix(words);
}
