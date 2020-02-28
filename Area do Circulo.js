var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const raio = parseFloat(lines)
const area = (3.14159 * Math.pow(raio,2)).toFixed(4)
console.log(`A=${area}`)
