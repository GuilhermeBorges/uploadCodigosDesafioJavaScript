var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var exame = parseFloat(lines[1])
var notas = lines[0]
notas = notas.split(' ')
var nota1 = parseFloat(notas[0] * 2)
var nota2 = parseFloat(notas[1] * 3)
var nota3 = parseFloat(notas[2] * 4)
var nota4 = parseFloat(notas[3])
var media = (nota1 + nota2 + nota3 + nota4) / 10

console.log('Media: ' + media.toFixed(1))
if (exame >= 0) {
  console.log('Aluno em exame.')
  console.log('Nota do exame: ' + exame.toFixed(1))
  var mediaF = (media + exame) / 2
  if (mediaF >= 5) {
    console.log('Aluno aprovado.')
  }
  else {
    console.log('Aluno reprovado.')
  }
  console.log('Media final: ' + mediaF.toFixed(1))
}
else {
  if (media < 7) {
    console.log('Aluno reprovado.')
  }
  else {
    console.log('Aluno aprovado.')
  }
}
