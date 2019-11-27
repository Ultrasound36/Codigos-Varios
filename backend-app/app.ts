let esSuperman:boolean = true;
let esBatman:boolean;
let esAcuaman = false;
let arrNumeros:number [] = [ 1,2,3,4,5,6,7 ];
let arrCadena:string [] = ['Quis', 'irure', 'aliqua', 'et', 'dolor', 'ad', 'occaecat', 'est'];


arrCadena.push('algo');


if (esSuperman) {
    console.log('Estamos salvados !! de verdad? ' + arrCadena);
} else {
    console.log('Ooop ! ERROR ');
}

esSuperman = convertirClark();

function convertirClark() {
    return false;
}

