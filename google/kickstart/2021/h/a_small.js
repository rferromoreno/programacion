const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

let currentLine = 0;
function readline() {
  return input[currentLine++];
}

let T = readline();
for (let i = 1; i <= T; i++) {
  let S = readline();
  let N = readline();
  console.log(`Case #${i}: ${solve(S, N)}`);
}

function solve(s, n) {
}