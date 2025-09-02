import { Jugador } from "./models/Jugador";
import { Equipo } from "./models/Equipo";
import { Futbol } from "./models/Futbol";
import { Basquet } from "./models/Basquet";
import { Partido } from "./models/Partido";

export function crearOtroEquipo(jugadores: Jugador[]): Equipo {
	const equipo = new Equipo("Otro Equipo");
	jugadores.forEach(j => equipo.agregarJugador(j));
	return equipo;
}

export function crearJugadores(): Jugador[] {
	return [
		new Jugador("1", "Messi", 36, "Delantero"),
		new Jugador("2", "Di María", 35, "Extremo"),
		new Jugador("3", "Dibu Martínez", 32, "Arquero"),
		new Jugador("4", "Otamendi", 35, "Defensor"),
		new Jugador("5", "De Paul", 30, "Mediocampista"),
		new Jugador("6", "Enzo", 23, "Mediocampista"),
		new Jugador("7", "Julián", 24, "Delantero"),
		new Jugador("8", "Tagliafico", 31, "Defensor"),
		new Jugador("9", "Cuti Romero", 26, "Defensor"),
		new Jugador("10", "Molina", 26, "Defensor"),
		new Jugador("11", "Mac Allister", 25, "Mediocampista"),
		new Jugador("21", "Campazzo", 33, "Base"),
		new Jugador("22", "Deck", 29, "Alero"),
		new Jugador("23", "Laprovittola", 34, "Escolta"),
		new Jugador("24", "Delía", 32, "Pivot"),
		new Jugador("25", "Vildoza", 28, "Base")
	];
}

export function crearEquipos(jugadores: Jugador[]): Equipo[] {
	const equipoFutbol = new Equipo("Argentina FC");
	jugadores.slice(0, 11).forEach(j => equipoFutbol.agregarJugador(j));

	const equipoBasquet = new Equipo("Argentina Basket");
	jugadores.slice(11).forEach(j => equipoBasquet.agregarJugador(j));
    

	const equipoFutbol2 = new Equipo("Brasil FC");
	for(let i=1;i<=11;i++) {
		equipoFutbol2.agregarJugador(new Jugador(`b${i}`,'Jugador'+i,25+Math.floor(Math.random()*10),"Pos"+i));
	}

	const equipoBasquet2 = new Equipo("Brasil Basket");
	for(let i=1;i<=5;i++) {
		equipoBasquet2.agregarJugador(new Jugador(`bb${i}`,'Bask'+i,22+Math.floor(Math.random()*10),"Pos"+i));
	}

	return [equipoFutbol, equipoFutbol2, equipoBasquet, equipoBasquet2];
}

export function validarCupos(equipos: Equipo[], deportes: (Futbol | Basquet)[]): void {
	console.log("\n--- Validación de cupos por deporte (polimorfismo) ---");
	deportes.forEach(d => {
		equipos.forEach(e => {
			console.log(`${e.nombre} en ${d.nombre}: ${d.validar(e) ? 'Válido' : 'No válido'}`);
		});
	});
}

export function pruebasValidaciones(equipoFutbol: Equipo, jugadores: Jugador[], equipoFutbol2: Equipo): void {
	try {
		equipoFutbol.agregarJugador(jugadores[0]); 
	} catch (e) {
		console.log("[ERROR]", (e as Error).message);
	}

	try {
		new Partido("P-INV", equipoFutbol, equipoFutbol, new Futbol());
	} catch (e) {
		console.log("[ERROR]", (e as Error).message);
	}

	const equipoFutbolGrande = new Equipo("Super FC");
	for(let i=1;i<=12;i++) {
		equipoFutbolGrande.agregarJugador(new Jugador(`x${i}`,'Extra'+i,20+Math.floor(Math.random()*10),"Pos"+i));
	}
	try {
		const partidoCupo = new Partido("P2", equipoFutbolGrande, equipoFutbol2, new Futbol());
		partidoCupo.jugar(2,2);
	} catch (e) {
		console.log("[ERROR]", (e as Error).message);
	}
}