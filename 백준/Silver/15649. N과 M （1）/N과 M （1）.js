let input = require('fs').readFileSync('/dev/stdin').toString().split(" ").map(nm=> parseInt(nm))
const n = input.shift()
const m = input.shift()

const visited = new Array(n)
let output = [];
let result = "";

function dfs(cnt) {
  if (cnt === m) {
    result += `${output.join(" ")}\n`;
    return;
  }
  for (let i = 0; i < n; i++) {
    if (visited[i] === true) continue
    visited[i] = true
    output.push(i + 1)
    dfs(cnt + 1);
    output.pop()
    visited[i] = false;
  }
}

dfs(0)
console.log(result)