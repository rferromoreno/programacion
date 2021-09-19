const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

let currentLine = 0;
function readline() {
  return input[currentLine++];
}

let T = readline();
for (let i = 1; i <= T; i++) {
  let [D, N, K] = readline().split(' ');
  let mat = Array.from({ length: D + 1 }, () => Array.from({ length: N + 1 }, () => 0));
  for (let j = 1; j <= N; j++) {
    let [h, s, e] = readline().split(' ');
    for (let k = parseInt(s, 10); k <= parseInt(e, 10); k++) {
      mat[k][j] = parseInt(h, 10);
    }
  }
  let max = 0;
  for (let i = 1; i < D + 1; i++) {
    let arr = mat[i];
    let subtotal = 0;
    arr.sort((a, b) => b - a);
    for (let j = 0; j < K; j++) {
      subtotal += arr[j];
    }
    if (subtotal > max) {
      max = subtotal;
    }
  }
  console.log(`Case #${i}: ${max}`);
}
