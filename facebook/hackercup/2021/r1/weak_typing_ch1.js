const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

let currentLine = 0;
function readline() {
  return input[currentLine++];
}

let T = readline();
for (let i = 1; i <= T; i++) {
  let N = parseInt(readline());
  let W = readline();
  console.log(`Case #${i}: ${f(W)}`);
}

function f(str) {
  let last = "";
  let count = 0;
  for (let i=0; i<str.length; i++) {
    let current = str[i];
    if (last === "" && (current === "O" || current === "X")) {
      last = current;
    } else if ((last === "X" && current === "O") || (last === "O" && current === "X")) {
      count++;
      last = current;
    } 
  }
  return count;
}