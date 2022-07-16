const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split();
const N = Number(input);
const fs = require('fs');

const input = fs
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(' ')
    .map(item => Number(item));