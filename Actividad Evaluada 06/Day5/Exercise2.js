function processData(input) {
  //Enter your code here
  let query = input.split("\n");
  let petition = [];
  let queue = [];
  for (let item of query) {
    petition.push(item.split(" "));
  }
  for (let item of petition) {
    if (Number(item[0]) === 1) queue.push(item[1]);
    if (Number(item[0]) === 2) queue.shift();
    if (Number(item[0]) === 3) console.log(queue[0]);
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
