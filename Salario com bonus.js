var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var nome = lines[0]
var vendas = parseFloat(lines[2])*0.15
var salario = parseFloat(lines[1])
var final = salario + vendas
console.log("TOTAL = R$ " + final.toFixed(2))