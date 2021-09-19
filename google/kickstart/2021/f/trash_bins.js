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
  let distances = [];
  let arr = n.split('');
  for (let i=0; i<s; i++) {
    distances.push(calcDistances(arr, i));
  }
  let result = 0;
  distances.forEach(distance => result += distance);
  return result;
}

function hasBin(array, index) {
  return array[index] == "1";
}

function calcDistances(array, index) {
  if (hasBin(array, index)) return 0;
  let minDist = 0;
  let leftIndex = index - 1;
  let rightIndex = index + 1;
  while (true) {
    if (leftIndex >= 0) {
      if (hasBin(array, leftIndex)) {
        minDist = Math.abs(index - leftIndex);
        return minDist;
      } else {
        leftIndex--;
      }
    }
    if (rightIndex < array.length) {
      if (hasBin(array, rightIndex)) {
        minDist = Math.abs(rightIndex - index);
        return minDist;
      } else {
        rightIndex++;
      }
    }
  }
}