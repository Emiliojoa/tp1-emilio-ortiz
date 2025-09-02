
import { Deporte } from "./Deporte";
import type { Equipo } from "./Equipo";

export class Futbol extends Deporte {
	constructor() {
		super("Futbol", 11);
	}
	validar(equipo: Equipo): boolean {
		return equipo.cantidad <= this.maxPorEquipo;
	}
}


