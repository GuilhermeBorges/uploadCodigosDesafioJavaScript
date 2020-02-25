var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = 0
lines.shift()

lines.forEach(element => {
    element = element.trim()
    element = element.split(' ')
    var X = parseInt(element[0])
    var Y = parseInt(element[1])
    var soma = 0
    var i = 0
        
    if (X > Y){
        var Z = Y
        Y = X
        X = Z
    }
    
    for (i = X+1; i < Y; i++) {
        if ((i%2) === 1){
            soma = soma + i
        }
    }
    
    console.log(soma);   
});
