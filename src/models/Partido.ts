import { Equipo } from "./Equipo";
import { Deporte } from "./Deporte";
import { Resultado } from "./Resultado";

export class Partido {
    id: string;
    local: Equipo;
    visitante: Equipo;
    deporte: Deporte;
    resultado?: Resultado;

    constructor(id: string, local: Equipo, visitante: Equipo, deporte: Deporte) {
        this.id = id;
        this.local = local;
        this.visitante = visitante;
        this.deporte = deporte;


        if (this.local === this.visitante || this.local.nombre === this.visitante.nombre) {
            throw new Error("El equipo visitante no puede ser el mismo que el local.");
        }
    }

    jugar(golesLocal: number, golesVisitante: number): void {
        
        if (!this.deporte.validar(this.local)) {
            throw new Error(`El equipo local (${this.local.nombre}) no cumple con los requisitos del deporte (${this.deporte.nombre}).`);
        }
        if (!this.deporte.validar(this.visitante)) {
            throw new Error(`El equipo visitante (${this.visitante.nombre}) no cumple con los requisitos del deporte (${this.deporte.nombre}).`);
        }
        this.resultado = new Resultado(golesVisitante, golesLocal);
    }

    toString(): string {
        const res = this.resultado ? ` | Resultado: ${this.resultado.toString()}` : " | Sin resultado";
        return `Partido ${this.id}: ${this.local.nombre} vs ${this.visitante.nombre} (${this.deporte.nombre})${res}`;
    }
}