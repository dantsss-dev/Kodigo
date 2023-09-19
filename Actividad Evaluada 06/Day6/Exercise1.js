function processData(input) {
  //Enter your code here
  const textEditor = new TextEditor();
  const operations = input.split("\n").filter((op) => op.trim() !== "");

  for (const operation of operations) {
    const [op, arg] = operation.split(" ");
    if (op === "1") {
      textEditor.append(arg);
    } else if (op === "2") {
      textEditor.delete(parseInt(arg));
    } else if (op === "3") {
      textEditor.print(parseInt(arg));
    } else if (op === "4") {
      textEditor.undo();
    }
  }
}

class TextEditor {
  constructor() {
    this.text = "";
    this.operations = [];
  }

  append(s) {
    this.text += s;
    this.operations.push(["append", s]);
  }

  delete(k) {
    const deletedText = this.text.slice(-k);
    this.text = this.text.slice(0, -k);
    this.operations.push(["delete", deletedText]);
  }

  print(k) {
    console.log(this.text[k - 1]);
  }

  undo() {
    if (this.operations.length === 0) return;

    const [op, data] = this.operations.pop();

    if (op === "append") {
      this.text = this.text.slice(0, -data.length);
    } else if (op === "delete") {
      this.text += data;
    }
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
