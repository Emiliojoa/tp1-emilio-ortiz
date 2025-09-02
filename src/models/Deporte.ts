import type { Equipo } from "./Equipo";

export abstract class Deporte {
    public nombre: string;
    public maxPorEquipo: number;

    constructor(nombre: string, maxPorEquipo: number) {
        this.nombre = nombre;
        this.maxPorEquipo = maxPorEquipo;
    }

    abstract validar(equipo: Equipo): boolean;
}

export class Futbol extends Deporte {
    constructor() {
        super("Futbol", 11);
    }
    validar(equipo: Equipo): boolean {
        return equipo.cantidad <= this.maxPorEquipo;
    }
}

export class Basquet extends Deporte {
    constructor() {
        super("Basquet", 5);
    }
    validar(equipo: Equipo): boolean {
        return equipo.cantidad <= this.maxPorEquipo;
    }
}