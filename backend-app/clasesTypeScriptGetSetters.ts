class Universo616 {
    private _nombre:string;

    constructor ( nombre?:string ){
        this._nombre = nombre;
    }

    get nombre() : string {

        if (this._nombre) {
           return this._nombre 
        } else {
            return 'No pertenece al universo 616'
        }
        
    }
}

let spiderman : Universo616 = new Universo616()
console.log(" El nombre del personaje " + spiderman.nombre);