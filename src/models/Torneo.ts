import type { Partido } from "./Partido";

export class Torneo{
   private partidos: Partido[];
    id:string;
    nombre:string;
    
    constructor(id:string,nombre:string){
        this.id = id;
        this.nombre = nombre;
        this.partidos = [];
    }

    programarPartido(partido:Partido):void{
        this.partidos.push(partido);
    }

    listaDePartidos(): Partido[]{
        return this.partidos;
    }

    buscarPartido(id:string): Partido | undefined {
        return this.partidos.find(partido => partido.id === id);
    }
}