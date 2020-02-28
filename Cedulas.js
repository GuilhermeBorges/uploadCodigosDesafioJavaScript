var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valortotal = parseInt(lines)
var resto = valortotal

var valor100 = parseInt(valortotal/100)
resto = resto%100

var valor50 = parseInt(resto/50)
resto = resto%50

var valor20 = parseInt(resto/20)
resto = resto%20

var valor10 = parseInt(resto/10)
resto = resto%10

var valor5 = parseInt(resto/5)
resto = resto%5

var valor2 = parseInt(resto/2)
resto = resto%2

var valor1 = parseInt(resto)

console.log(valortotal)
console.log(valor100 + " nota(s) de R$ 100,00" )
console.log(valor50 + " nota(s) de R$ 50,00" )
console.log(valor20 + " nota(s) de R$ 20,00" )
console.log(valor10 + " nota(s) de R$ 10,00" )
console.log(valor5 + " nota(s) de R$ 5,00" )
console.log(valor2 + " nota(s) de R$ 2,00" )
console.log(valor1 + " nota(s) de R$ 1,00" )
