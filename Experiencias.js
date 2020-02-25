var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

lines.shift()
var Coelho = 0
var Rato = 0
var Sapo = 0
var sum = 0

lines.forEach(element => {
    element = element.trim()
    element = element.split(' ')
    var quantia = parseInt(element[0])
    var tipo = element[1]
    if (tipo === 'C'){
        Coelho += quantia
    }
    else if (tipo === 'R'){
        Rato += quantia
    }
    else if (tipo === 'S'){
        Sapo += quantia
    }    
});

sum = Coelho + Rato + Sapo
    var Qco = (Coelho*100)/sum
    var Qra = (Rato*100)/sum
    var Qsa = (Sapo*100)/sum

console.log('Total: ' + sum + " cobaias");
console.log('Total de coelhos: ' + Coelho);
console.log('Total de ratos: ' + Rato);
console.log('Total de sapos: ' + Sapo);
console.log('Percentual de coelhos: ' + Qco.toFixed(2) + " %");
console.log('Percentual de ratos: ' + Qra.toFixed(2) + " %");
console.log('Percentual de sapos: ' + Qsa.toFixed(2) + " %");