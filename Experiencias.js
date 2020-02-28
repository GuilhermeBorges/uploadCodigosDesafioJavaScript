var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

lines.shift()
var coelho = 0
var rato = 0
var sapo = 0
var sum = 0

lines.forEach(element => {
  element = element.trim()
  element = element.split(' ')
  const quantia = parseInt(element[0])
  const tipo = element[1]
  switch (tipo) {
    case 'C': 
      coelho += quantia
      break
    case 'E': 
      rato += quantia
      break
    case 'S': 
      sapo += quantia
      break
  }
})

sum = coelho + rato + sapo
const porcentagemCoelhos = (coelho * 100) / sum
const porcentagemRatos = (rato * 100) / sum
const porcentagemSapos = (sapo * 100) / sum

console.log('Total: ' + sum + " cobaias")
console.log('Total de coelhos: ' + coelho)
console.log('Total de ratos: ' + rato)
console.log('Total de sapos: ' + sapo)
console.log('Percentual de coelhos: ' + porcentagemCoelhos.toFixed(2) + " %")
console.log('Percentual de ratos: ' + porcentagemRatos.toFixed(2) + " %")
console.log('Percentual de sapos: ' + porcentagemSapos.toFixed(2) + " %")
