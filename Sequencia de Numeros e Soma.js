var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


var linhas = lines.length
var quebra = false

lines.forEach(element => {
  var sum = 0
  var display = []
  if (!quebra) {
    element = element.trim()
    element = element.split(' ')
    var M = element[0]
    var N = element[1]
    if (M <= 0 || N <= 0) {
      quebra = true
    }
    else {
      if (M < N) {
        var z = N
        N = M
        M = z
      }
      for (var i = N; i <= M; i++) {
        sum = sum + parseInt(i);
        display.push(i)
      }
      console.log(display.join(' ') + ' Sum=' + sum);
    }
  }
});
