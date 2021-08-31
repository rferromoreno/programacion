const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

let currentLine = 0;
function readline() {
  return input[currentLine++];
}

let T = readline();
for (let i = 1; i <= T; i++) {
  let n = readline();
  let matrix = [];
  for (let j = 0; j < n; j++) {
    let line = readline().split('');
    matrix.push(line);
  }
  let res = solve(matrix);
  console.log(`Case #${i}: ${res}`);
}

function solve(matrix) {
  let n = matrix.length;
  let rows = [];
  let cols = [];
  for (let i = 0; i < n; i++) {
    rows[i] = new Map();
    cols[i] = new Map();
  }
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      let cell = matrix[r][c];
      rows[r].set(cell, (rows[r].get(cell) ?? 0) + 1);
      cols[c].set(cell, (cols[c].get(cell) ?? 0) + 1);
    }
  }
  let minAdditionalXs = Infinity;
  let min;
  for (let i = 0; i < n; i++) {
    if (!rows[i].has("O")) {
      min = rows[i].get(".");
      if (min <= minAdditionalXs) {
        minAdditionalXs = min;
      }
    }
    if (!cols[i].has("O")) {
      min = cols[i].get(".");
      if (min <= minAdditionalXs) {
        minAdditionalXs = min;
      }
    }
  }
  let s = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let play;
      let isWinRow = !rows[i].has("O") && rows[i].get(".") === minAdditionalXs;
      let isWinCol = !cols[j].has("O") && cols[j].get(".") === minAdditionalXs;
      if (isWinRow) {
        play = "";
        for (let k = 0; k < n; k++) {
          if (matrix[i][k] === ".") play += `${i},${k}/`;
        }
        if (!s.has(play)) s.add(play);
      }
      if (isWinCol) {
        play = "";
        for (let k = 0; k < n; k++) {
          if (matrix[k][j] === ".") play += `${k},${j}/`;
        }
        if (!s.has(play)) s.add(play);
      }
    }
  }
  if (minAdditionalXs === Infinity) return "Impossible";
  return `${minAdditionalXs} ${s.size}`;
}