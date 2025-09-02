
import { crearJugadores, crearEquipos, validarCupos, pruebasValidaciones } from "./sider";
import { Futbol } from "./models/Futbol";
import { Basquet } from "./models/Basquet";
import { Partido } from "./models/Partido";


const jugadores = crearJugadores();
const equipos = crearEquipos(jugadores);
const deportes = [new Futbol(), new Basquet()];

validarCupos(equipos, deportes);
pruebasValidaciones(equipos[0], jugadores, equipos[1]);


const tantos1 = Math.floor(Math.random()* 11);
const tantos2 = Math.floor(Math.random()* 11);
const tantos3 = Math.floor(Math.random()* 100);
const tantos4 = Math.floor(Math.random()* 100);


// Jugar y mostrar resultados de un partido de fútbol y uno de básquet
const partidoFutbol = new Partido("P1", equipos[0], equipos[1], deportes[0]);
partidoFutbol.jugar(tantos1, tantos2);
console.log(partidoFutbol.toString());

const partidoBasquet = new Partido("P2", equipos[2], equipos[3], deportes[1]);
partidoBasquet.jugar(tantos3, tantos4);
console.log(partidoBasquet.toString());
