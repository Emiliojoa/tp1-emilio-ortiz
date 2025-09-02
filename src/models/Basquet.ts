
import { Deporte } from "./Deporte";
import type { Equipo } from "./Equipo";

export class Basquet extends Deporte {
	constructor() {
		super("Basquet", 5);
	}
	validar(equipo: Equipo): boolean {
		return equipo.cantidad <= this.maxPorEquipo;
	}
}
