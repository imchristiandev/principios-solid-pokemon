import Pokemon from "./components/Pokemon.js";
import Pokedesk from "./components/Pokedesk.js";
import ProcessAttack, { TypeWater } from "./components/ProcessAttack.js";
import {
  Blaistoise,
  Charizar,
  Charmander,
} from "./components/PokemonAction.js";
import { DexterAPI, ApiPokemon1 } from "./components/DexterAPI.js";

/* Single Responsibility Principle.
 *
 * Se crea una clase PokeDesk, ya que necesitamos manejar la responsabilidad
 * de base de datos ya que estamos guardando un nuevo especímen en nuestra
 * PokeDesk.
 */

const Squirtle = new Pokemon("Squirtle", "Agua", ["Warturtle", "Blastoise"]);
const pokeDesk = new Pokedesk();

pokeDesk.introducirEnPokeDesk(Squirtle);

/* Open / Closed Principle
 *
 * ProcessAttack ya tendrá el trabajo de llamar todos los ataques, pero cada
 * ataque de elemento estará dividido en una clase nueva que hereda de pokemon
 * y polimorfa en su versión de ataque según la necesidad, disminuyendo la
 * posibilidad de errores.
 */

const Ataque = new ProcessAttack();

// invocamos al método todosLosAtaquesPokemon y enviamos las
// instancia te cada tipo de pokemon
const Mensaje = Ataque.todosLosAtaquesPokemon([new TypeWater("Squirtle")]);
console.log(Mensaje);

// Creamos la instancia de la clase Charizar
const CHARIZAR = new Charizar();
/*
  Como se comento con anterioridad charizar puede 
  utilizar todos los métodos de la clase Pokemon.    
*/
console.log(`Hola soy ${CHARIZAR.nombre}`);
console.log(`Soy de tipo ${CHARIZAR.tipo}`);
console.log(`Ademas ${CHARIZAR.puedeVolar}`);

// Creamos la instancia de la clase Charmander
const CHARMANDER = new Charmander();
/*
 * Como se comento con anterioridad charmander no puede
 * utilizar todos los métodos de la clase Pokemon.
 */
console.log(`Hola soy ${CHARMANDER.nombre}`);
console.log(`Soy de tipo ${CHARMANDER.tipo}`);
console.log(`Ademas ${CHARMANDER.puedeVolar}`);
// En esta caso la salida nos mostrara undedined
// ya que el método no exite en la clase Charmander

// Creamos la instancia de la clase Blaistoise
const BLAISTOISE = new Blaistoise();
/*
 * Como se comento con anterioridad charmander no puede
 * utilizar todos los métodos de la clase Pokemon.
 */
console.log(`Hola soy ${BLAISTOISE.nombre}`);
console.log(`Soy de tipo ${BLAISTOISE.tipo}`);
console.log(`Ademas ${BLAISTOISE.puedeNadar}`);

// creo mi listado de pokemons
const LIST = ["pikachu"];

const API = new ApiPokemon1(); // o puede ser ApiPokemon1();
// creamos al instancia del pokedex
const POKEDEX = new DexterAPI(LIST, API);
// genero la impreción de la data.
POKEDEX.getInfo();
