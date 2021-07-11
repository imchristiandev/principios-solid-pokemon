import Pokemon from "./Pokemon.js";

export class TypeElectric extends Pokemon {
  constructor(nombre) {
    /*
      Invocamos el constructor de la clase pokemon
      y pasamos por defecto el tipo Electric
    */
    super(nombre, "Electrico");
  }

  get ataque() {
    const { nombre } = this;
    return `${nombre}, Impact Trueno ⚡️`;
  }
}

export class TypeWater extends Pokemon {
  constructor(nombre) {
    super(nombre, "Agua");
  }

  get ataque() {
    const { nombre } = this;
    return `${nombre}, Chorro de agua 🔫`;
  }
}

export class TypeFire extends Pokemon {
  constructor(nombre) {
    super(nombre, "Fuego");
  }

  get ataque() {
    const { nombre } = this;
    return `${nombre}, Lanzallamas 🔥`;
  }
}

export class TypeEarth extends Pokemon {
  constructor(nombre) {
    super(nombre, "Tierra");
  }

  get ataque() {
    const { nombre } = this;
    return `${nombre}, Ataque de rocas `;
  }
}

export default class ProcessAttack {
  /*
    Se crea método que permite procesar los ataques 
    de un listado de pokemons.
  */
  todosLosAtaquesPokemon(pokemonList) {
    /*
      En este caso solo basta con recibir el listado de pokemons
      para porder ejecutar un ataque, ya que cada elemento del listado
      cuenta con su propio ataque.
    */
    const ATAQUES = pokemonList.reduce((output, pokemon) => {
      let msg = "";
      const { ataque } = pokemon;
      return `${output}${ataque}\n`;
    }, "");
    return ATAQUES;
  }
}
