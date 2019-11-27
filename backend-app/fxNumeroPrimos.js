var c = 9
var j = 1

console.log('La cantidad de numeros semiPrimos son :: ' + semiPrimos(j, c))

function semiPrimos (rangeStart, rangeEnd) {
  var numerosPrimos = []
  var numerosSemiPrimos = []
  var noPrimo = []
  for (var index = rangeStart; index < rangeEnd; index++) {
    for (var i = 2; i < index; i++) {
      if (index % i === 0) {
        noPrimo.pop(index)
      }      
    }
    numerosPrimos.push(index)
  }

  for (var x = 0; x < numerosPrimos.length; x++) {
    var posY = numerosPrimos[x]
    var posX = numerosPrimos[x - 1]
    var multi = posY * posX

    if (Number.isNaN(multi)) {
      numerosSemiPrimos.pop(multi)
    } else {
      numerosSemiPrimos.push(multi)
    }
  }
  return numerosSemiPrimos
}
