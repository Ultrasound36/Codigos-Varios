let origen = '74,32'
let destino = '133,210'
let pasos = 6

console.log('Datos de salida de la funcion :: '+ calculateSteps(origen, destino, pasos))

function calculateSteps(startXY, endXY, steps) {
   let corEspecifica = ''
   startXY = parseFloat(startXY)
   endXY = parseFloat(endXY)

    corEspecifica = (startXY * (1.0 - steps)) + (steps * endXY)
    return corEspecifica
}