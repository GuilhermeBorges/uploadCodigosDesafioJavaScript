var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var raio = parseFloat(lines)
console.log("A=" + (3.14159 * Math.pow(raio,2)).toFixed(4))