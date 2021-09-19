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
  let leftDistances = Array.from({ length: s });
  let rightDistances = Array.from({ length: s });
  let dist;
  let arr = n.split('');
  let lastBinIndex = Infinity;
  for (let i=0; i<s; i++) {
    if (hasBin(arr, i)) {
      dist = 0;
      lastBinIndex = i;
    } else {
      dist = Math.abs(i - lastBinIndex);
    }
    leftDistances[i] = dist;
  }
  lastBinIndex = Infinity;
  for (let i=s-1; i>=0; i--) {
    if (hasBin(arr, i)) {
      dist = 0;
      lastBinIndex = i;
    } else {
      dist = Math.abs(lastBinIndex - i)
    }
    rightDistances[i] = dist;
  }
  let result = 0;
  for (let i=0; i<s; i++) {
    result += Math.min(leftDistances[i], rightDistances[i]);
  }
  return result;
}

function hasBin(array, index) {
  return array[index] == "1";
}
