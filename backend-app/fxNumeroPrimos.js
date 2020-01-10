var c = 50;
var j = 1;

console.log('La cantidad de numeros semiPrimos son :: ' + findSemiprimes(j, c));

function primo (numero) {
  for (var i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return numero !== 1;
}

function findSemiprimes (rangeStart, rangeEnd) {
  var numerosPrimos = [];
  var numerosSemiPrimos = [];
    
  for (var index = rangeStart; index < rangeEnd; index++) {
    if (primo(index)) {
      numerosPrimos.push(index);
    }
  }

  for (var x = 0; x < numerosPrimos.length; x++) {
    var posY = numerosPrimos[x];
    var posX = numerosPrimos[x];
    var multi = posY * posX;

    if (Number.isNaN(multi)) {
      numerosSemiPrimos.pop(multi);
    } else {
      numerosSemiPrimos.push(multi);
    }
  }
  return numerosSemiPrimos;
}
