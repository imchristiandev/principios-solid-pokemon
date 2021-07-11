import Pokemon from "./Pokemon.js";

export class PokemonVolador extends Pokemon {
  constructor(nombre, tipo) {
    super(nombre, tipo);
  }
}

export const puedeVolar = (ClasePadre) =>
  class extends ClasePadre {
    get puedeVolar() {
      return `Soy ${this.nombre} y puedo volar`;
    }
  };

export const puedeNadar = (ClasePadre) =>
  class extends ClasePadre {
    get puedeNadar() {
      return `Soy ${this.nombre} y puedo nadar`;
    }
  };

export class Charmander extends Pokemon {
  // Creamos el metodo principal
  constructor() {
    // Invocamos al constructor de la clase pokémon
    super("Charmander", "Fuego");
  }
}

export class Charizar extends puedeVolar(Pokemon) {
  // Creamos el metodo principal
  constructor() {
    // Invocamos al constructor de la clase pokémon
    super("Charizar", "Fuego");
  }
}

export class Blaistoise extends puedeNadar(Pokemon) {
  // Creamos el metodo principal
  constructor() {
    // Invocamos al constructor de la clase pokémon
    super("Blaistoise", "Agua");
  }
}
