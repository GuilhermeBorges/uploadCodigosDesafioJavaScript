var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var sum = 0
var positivo = []
var x = 0
lines.forEach(element => {
    element = element.trim()
    x = parseFloat(element)
    if (x >= 0){
        sum += x
        positivo.push(x)
    }    
});
var media = sum/(positivo.length)
console.log((positivo.length) + ' valores positivos')
console.log(media.toFixed(1))
