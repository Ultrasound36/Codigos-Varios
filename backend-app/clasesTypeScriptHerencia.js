var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var NewAvengers = /** @class */ (function () {
    function NewAvengers(nombre, equipo, nombreReal) {
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
        /*  this.nombre = nombre;
         this.equipo = equipo;
         this.nombreReal = nombreReal; */
    }
    NewAvengers.prototype.bio = function () {
        var mensaje = "El nombre del Vengador es:  " + this.nombre + " " + this.equipo + " " + this.nombreReal + " ";
        console.log(mensaje);
    };
    NewAvengers.prototype.getNombre = function () {
        return this.nombre;
    };
    return NewAvengers;
}());
var YoungAvengers = /** @class */ (function (_super) {
    __extends(YoungAvengers, _super);
    function YoungAvengers(a, b, c) {
        return _super.call(this, a, b, c) || this;
    }
    YoungAvengers.prototype.getNombre = function () {
        return _super.prototype.getNombre.call(this);
    };
    return YoungAvengers;
}(NewAvengers));
var stature = new YoungAvengers('Stature', 'New-Avengers', 'Cassie Lang');
stature.bio();
