import { type ICompetidor } from "../interface/ICompetidor";
import { Jugador } from "./Jugador";

export class Equipo implements ICompetidor {
    private jugadores: Jugador[] = [];
    public nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    getJugadores(): Jugador[] {
        return this.jugadores;
    }

    agregarJugador(jugador: Jugador): void {
       
        if (this.jugadores.some(j => j.id === jugador.id)) {
            throw new Error(`El jugador con id ${jugador.id} ya está en el equipo.`);
        }
        this.jugadores.push(jugador);
    }

    listarIntegrantes(): string[] {
        return this.jugadores.map(j => j.nombre);
    }

    get cantidad(): number {
        return this.jugadores.length;
    }

    toString(): string {
        return `Equipo: ${this.nombre} | Jugadores: ${this.jugadores.map(j => j.toString()).join(", ")}`;
    }
}