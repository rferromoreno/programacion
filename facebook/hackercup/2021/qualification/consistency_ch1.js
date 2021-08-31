const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

let currentLine = 0;
function readline() {
  return input[currentLine++];
}

let T = readline();
for (let i=1; i<= T; i++) {
  let S = readline()
  let n = solve(S)
  console.log(`Case #${i}: ${n}`);
}

function isVocal(letter) {
  return letter === 'A' || letter === 'E' || letter === 'I' || letter === 'O' || letter === 'U';
}

function getMax(hashMap) {
  let max;
  let count = 0;
  for (let [k,v] of hashMap.entries()) {
    if (v >= count) {
      max = k;
      count = v;
    }
  }
  return max;
}

function solve(str) {
  let m = new Map();
  let v = new Map();
  let c = new Map();
  for (let i = 0 ; i<str.length; i++) {
    let letra = str[i];
    if (isVocal(letra)) {
      v.set(letra, (v.get(letra) ?? 0) + 1);
    } else {
      c.set(letra, (c.get(letra) ?? 0) + 1);
    }
    m.set(letra, (m.get(letra) ?? 0) + 1);
  }
  if (m.size === 1) return 0;
  let maxConsonante = getMax(c);
  let maxVocal = getMax(v);
  let totalConsonantes = 0;
  let totalVocales = 0;
  for (let i=0; i<str.length; i++) {
    if (str[i] !== maxConsonante) {
      if (isVocal(str[i])) {
        totalConsonantes++;
      } else {
        totalConsonantes += 2;
      }
    }
    if (str[i] !== maxVocal) {
      if (!isVocal(str[i])) {
        totalVocales++;
      } else {
        totalVocales += 2;
      }
    }
  }
  return Math.min(totalConsonantes, totalVocales);
}