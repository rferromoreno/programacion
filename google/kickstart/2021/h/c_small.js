const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const r01 = str => str.replace(/01/gi, '2');
const r12 = str => str.replace(/12/gi, '3');
const r23 = str => str.replace(/23/gi, '4');
const r34 = str => str.replace(/34/gi, '5');
const r45 = str => str.replace(/45/gi, '6');
const r56 = str => str.replace(/56/gi, '7');
const r67 = str => str.replace(/67/gi, '8');
const r78 = str => str.replace(/78/gi, '9');
const r89 = str => str.replace(/89/gi, '0');
const r90 = str => str.replace(/90/gi, '1');

const operations = [r01, r12, r23, r34, r45, r56, r67, r78, r89, r90];

let currentLine = 0;
function readline() {
  return input[currentLine++];
}

let T = readline();
for (let i = 1; i <= T; i++) {
  let N = parseInt(readline());
  let S = readline();
  console.log(`Case #${i}: ${solve(S, N)}`);
}

function solve(s, n) {
  let hasReplacements = hasRep(s);
  while (hasReplacements) {
    let i = 0;
    while (i < operations.length) {
      s = operations[i](s);
      i++;
    }
    hasReplacements = hasRep(s);
  }
  return s;
}

function hasRep(str) {
  let strLen = str.length;
  for (let i = 1; i < strLen; i++) {
    if ((str[i] - str[i - 1] === 1) || (str[i] == 0 && str[i - 1] == 9)) return true;
  }
  return false;
}
