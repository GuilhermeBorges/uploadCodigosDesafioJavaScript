var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var maior = 0
var posicao = 0
var x = 0
var i = 0
lines.forEach(element => {
    element.trim()
    x = parseInt(element)
    if (maior < x){
        maior = element
        posicao = i+1
    }
    i++    
});

console.log(maior)
console.log(posicao)