class NewAvengers {

    constructor( public nombre:string, public equipo:string, private nombreReal:string ){
       /*  this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal; */
    }

    public bio():void {
        let mensaje:string = `El nombre del Vengador es:  ${this.nombre} ${this.equipo} ${this.nombreReal} `
        console.log(mensaje)
    }

    protected getNombre():string {
        return this.nombre
    }
}

class YoungAvengers extends NewAvengers{

    constructor(a:string, b:string, c:string){
        super(a, b, c)
    }

    public getNombre():string {
        return super.getNombre();
    }
    
}

let stature:YoungAvengers = new YoungAvengers('Stature', 'New-Avengers', 'Cassie Lang');
stature.bio();