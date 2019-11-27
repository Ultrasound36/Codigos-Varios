class Avengers {

    nombre:string;
    equipo:string;
    nombreReal:string;

    puedePelear:boolean = true;
    peleasGanadas:number = 3;
    
    constructor( nombre:string, equipo:string, nombreReal:string ){
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }

    public bio():void {
        let mensaje:string = ` ${this.nombre} ${this.equipo} ${this.nombreReal} `
        console.log(mensaje);
    }

    private cambiarEquipo(nuevoEquipo:string):boolean {
        if (nuevoEquipo === this.equipo) {
            return false;
        } else {
            return true;
        }
    }
}

    
let antMan:Avengers = new Avengers('Ant-Man', 'Equipo-Cap', 'Scott Lang');
antMan.bio();