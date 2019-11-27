// Se crea clases a partir de JavaScript con ES5 y ES6

class JusticeLeaugue {
  constructor (nombre, poder) {
    this.nombre = nombre
    this.poder = poder
  }
}

class MiembroLiga extends JusticeLeaugue {
  constructor (nombre, poder) {
    super(nombre, poder)
    this.vuela = true
  }
}

const batman = new JusticeLeaugue('Bruce Wayne', 'Detective')
const blueBeattle = new MiembroLiga('Josefth', 'Fuerza')

console.log(blueBeattle)
console.log(batman)