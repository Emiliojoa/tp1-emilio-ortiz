export class Jugador {
    id: string;
    nombre: string;
    edad: number;
    posicion?: string;

    constructor(id: string, nombre: string, edad: number, posicion?: string) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.posicion = posicion;
    }

    toString(): string {
        return `Jugador: ${this.nombre}, Edad: ${this.edad}, Posición: ${this.posicion ?? "No definida"}`;
    }
}