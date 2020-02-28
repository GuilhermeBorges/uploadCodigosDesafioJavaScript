var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var maior = 0
var posicao = 0
lines.forEach((element, index) => {
  element.trim()
  if (maior < parseInt(element)) {
    maior = element
    posicao = index + 1
  }
})
console.log(maior)
console.log(posicao)



// Uma outra maneira de fazer é utilizando o reduce e o deconstructor, acreditamos que esta seria a melhor
/**
 const {maior, posicao} = lines.reduce((acomulado, element, index) => {
   if (acomulado.maior < parseInt(element)) {
     acomulado.maior = element
     acomulado.posicao = index + 1
    }
    return acomulado
  }, { maior: 0, posicao: 0 })
  console.log(maior)
  console.log(posicao)
*/

