var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var soma = 0
var x = parseInt(lines[0]);
var y = parseInt(lines[1]);
var z = 0
var n = 0

if (x > y) {
	z = y;
	y = x;
    x = z;
}

if ((x%2) === 0) {
    n = x + 1;
} else {
    n = x + 2;
}

for (var i = n; i < y; i += 2) {
	soma = soma + i;
}

console.log(soma);
