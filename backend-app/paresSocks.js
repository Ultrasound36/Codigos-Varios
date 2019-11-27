let numero = 10
let datos = [ 10, 10, 43, 20, 20, 34, 55, 55, 34, 22 ]

console.log('Ordenamiento de datos: ' + sockMerchant(numero, datos));

function sockMerchant (n, ar) {
  let posBack = ar
  let posForward = ar
  let cantMatch = 0

  for (let i = 0; i <= n; i++) {
    if (posBack[i - 1] === posForward[i]) {
       cantMatch ++
    }    
  }
  console.log(cantMatch)
  return cantMatch
}
