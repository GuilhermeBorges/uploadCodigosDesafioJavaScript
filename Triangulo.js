var input = require('fs').readFileSync('/dev/stdin', 'utf8');

lines = lines.split(' ');

var A = parseFloat(lines[0]);
var B = parseFloat(lines[1]);
var C = parseFloat(lines[2]);

if (B - C < A && A < B + C){
	var perimetro = A + B + C;
	console.log('Perimetro = ' + perimetro.toFixed(1));
}
else{
	var area = ((A + B)*C)/2;
	console.log('Area = ' + area.toFixed(1));
}
