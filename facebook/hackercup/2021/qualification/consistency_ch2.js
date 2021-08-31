const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

let currentLine = 0;
function readline() {
  return input[currentLine++];
}

let letterSize = 'Z'.charCodeAt(0) - 'A'.charCodeAt(0) + 1;

function initializeMatrix() {
  return Array(letterSize).fill().map(() => Array(letterSize).fill())
}

function getIndex(letter) {
  return letter.charCodeAt(0) - 'A'.charCodeAt(0);
}

let T = readline();
for (let i = 1; i <= T; i++) {
  let S = readline();
  let K = parseInt(readline());
  let graph = new Map();
  for (let j = 0; j < K; j++) {
    let line = readline().split('');
    let [origin, source] = line;
    if (!graph.has(origin)) {
      graph.set(origin, [source])
    } else {
      graph.get(origin).push(source);
    }
  }
  let n = solve(S, graph);
  console.log(`Case #${i}: ${n === Infinity ? -1 : n}`);
}

function solve(str, graph) {
  let distances = [];
  for (let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
    let index = i - 'A'.charCodeAt(0);
    distances[index] = bfs(graph, String.fromCharCode(i));
  }
  let min = Infinity;
  for (let target = 'A'.charCodeAt(0); target <= 'Z'.charCodeAt(0); target++) {
    let result = 0;
    for (let i = 0; i < str.length && result != Infinity; i++) {
      let c = str[i];
      let indexTarget = target - 'A'.charCodeAt(0);
      result += distances[getIndex(c)][indexTarget];
    }
    if (result <= min) {
      min = result;
    }
  }
  return min;
}

function bfs(graph, startNode) {
  const dist = Array(letterSize).fill(Infinity);
  dist[getIndex(startNode)] = 0;
  if (!graph.has(startNode)) return dist;
  const q = [startNode];

  while (q.length > 0) {
    const head = q.shift();
    const edges = graph.get(head) ?? [];
    const candidate = dist[getIndex(head)] + 1;

    for (const target of edges) {
      if (dist[getIndex(target)] == Infinity) {
        dist[getIndex(target)] = candidate;
        q.push(target);
      }
    }
  }
  return dist;
}