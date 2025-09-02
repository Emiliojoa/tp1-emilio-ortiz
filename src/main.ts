
import { Jugador } from "./models/Jugador";
import { Equipo } from "./models/Equipo";
import { Futbol } from "./models/Futbol";
import { Basquet } from "./models/Basquet";
import { Partido } from "./models/Partido";

// aca ponemos cada uno de los jugadores para futbol
const j1 = new Jugador("1", "Messi", 36, "Delantero");
const j2 = new Jugador("2", "Di María", 35, "Extremo");
const j3 = new Jugador("3", "Dibu Martínez", 32, "Arquero");
const j4 = new Jugador("4", "Otamendi", 35, "Defensor");
const j5 = new Jugador("5", "De Paul", 30, "Mediocampista");
const j6 = new Jugador("6", "Enzo", 23, "Mediocampista");
const j7 = new Jugador("7", "Julián", 24, "Delantero");
const j8 = new Jugador("8", "Tagliafico", 31, "Defensor");
const j9 = new Jugador("9", "Cuti Romero", 26, "Defensor");
const j10 = new Jugador("10", "Molina", 26, "Defensor");
const j11 = new Jugador("11", "Mac Allister", 25, "Mediocampista");

//lo mismo pero para basket
const b1 = new Jugador("21", "Campazzo", 33, "Base");
const b2 = new Jugador("22", "Deck", 29, "Alero");
const b3 = new Jugador("23", "Laprovittola", 34, "Escolta");
const b4 = new Jugador("24", "Delía", 32, "Pivot");
const b5 = new Jugador("25", "Vildoza", 28, "Base");

//mandamos todos a un array 
const equipoFutbol = new Equipo("Argentina FC");
[j1,j2,j3,j4,j5,j6,j7,j8,j9,j10,j11].forEach(j => equipoFutbol.agregarJugador(j));

const equipoFutbol2 = new Equipo("Brasil FC");
for(let i=1;i<=11;i++) {
	equipoFutbol2.agregarJugador(new Jugador(`b${i}`,'Jugador'+i,25+Math.floor(Math.random()*10),"Pos"+i));
}

const equipoBasquet = new Equipo("Argentina Basket");
[b1,b2,b3,b4,b5].forEach(j => equipoBasquet.agregarJugador(j));

const equipoBasquet2 = new Equipo("Brasil Basket");
for(let i=1;i<=5;i++) {
	equipoBasquet2.agregarJugador(new Jugador(`bb${i}`,'Bask'+i,22+Math.floor(Math.random()*10),"Pos"+i));
}



const deportes = [new Futbol(), new Basquet()];
const equipos = [equipoFutbol, equipoFutbol2, equipoBasquet, equipoBasquet2];

console.log("\n--- Validación de cupos por deporte (polimorfismo) ---");
for(const d of deportes) {
	for(const e of equipos) {
		console.log(`${e.nombre} en ${d.nombre}: ${d.validar(e) ? 'Válido' : 'No válido'}`);
	}
}



try {
	equipoFutbol.agregarJugador(j1); 
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


const partidoFutbol = new Partido("P1", equipoFutbol, equipoFutbol2, new Futbol());
partidoFutbol.jugar(3, 1);
console.log(partidoFutbol.toString());

const partidoBasquet = new Partido("P2", equipoBasquet, equipoBasquet2, new Basquet());
partidoBasquet.jugar(80, 75);
console.log(partidoBasquet.toString());
