
export class Resultado{
    golesVisitante: number;
    golesLocal: number;

    constructor(golesVisitante: number, golesLocal: number) {
        this.golesVisitante = golesVisitante;
        this.golesLocal = golesLocal;
    }

    toString(): string {
        return `${this.golesLocal} - ${this.golesVisitante}`;
    }

}