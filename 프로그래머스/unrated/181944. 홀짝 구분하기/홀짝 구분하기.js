const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    n = Number(input[0]);
    let a ;
    n % 2=== 0 ? a = "even" :  a = "odd"
    console.log(`${n} is ${a}`)
});