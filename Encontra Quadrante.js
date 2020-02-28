var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
function toNumber(entry) {
  return (entry instanceof Array)
    ? entry.map(Number)
    : Number(entry)
}

function formatEntry(entry) {
  return lines
    .map(l => l.split(' '))
    .map(toNumber)
}

entrada = formatEntry(lines)[0]

function encontraQuadrante(x, y) {
  let ponto = {x,y}
    if (ponto.x == 0 && ponto.y == 0) return 'Origem'
    if (ponto.x == 0) return 'Eixo Y'
    if (ponto.y == 0) return 'Eixo X'
    if (ponto.x > 0 && ponto.y > 0) return 'Q1'
    if (ponto.x > 0 && ponto.y < 0) return 'Q4'
    if (ponto.x < 0 && ponto.y > 0) return 'Q2'
    if (ponto.x < 0 && ponto.y < 0) return 'Q3'
}

console.log(encontraQuadrante(entrada[0],entrada[1]))
