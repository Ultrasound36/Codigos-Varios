var Avengers = /** @class */ (function () {
    function Avengers(nombre, equipo, nombreReal) {
        this.puedePelear = true;
        this.peleasGanadas = 3;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    Avengers.prototype.bio = function () {
        var mensaje = " " + this.nombre + " " + this.equipo + " " + this.nombreReal + " ";
        console.log(mensaje);
    };
    Avengers.prototype.cambiarEquipo = function (nuevoEquipo) {
        if (nuevoEquipo === this.equipo) {
            return false;
        }
        else {
            return true;
        }
    };
    return Avengers;
}());
var antMan = new Avengers('Ant-Man', 'Equipo-Cap', 'Scott Lang');
antMan.bio();
