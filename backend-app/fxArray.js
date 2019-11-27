 let productos = [
     { id: 1, nombre: 'mauricio'},
     { id: 2, nombre: 'gabriel'},
     { id: 3, nombre: 'Karo'} ]

let salida = [{ id: 3, nombre: 'Karo'}]
let entrada = [{ id: 3, nombre: 'Karo'}, { id: 5, nombre: 'Francisca'}]
    

console.log('Quitar datos del array ' + JSON.stringify(quitaDatos(salida)));
console.log('Entrada de datos al array' + JSON.stringify(agregaDatos(entrada)));


function quitaDatos(arrExt){
    let datos = [arrExt]
    
    for (let i = 0; i < datos.length; i++) {
        if (datos) {
            productos.pop(arrExt[i])
        }
    }   
    return productos
}

function agregaDatos(arrExt){
    let datos = [arrExt]

    for (let i = 0; i <= datos.length; i++) {
        if (datos) {
            productos.push(arrExt[i])
        }             
    }    
    return productos   
}