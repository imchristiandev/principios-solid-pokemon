class Pokemon {
  #nombre = "";
  #tipo = "";
  #evoluciones = [];

  constructor(nombre, tipo, evoluciones) {
    this.#nombre = nombre;
    this.#tipo = tipo;
    this.#evoluciones = evoluciones;
  }

  get nombre() {
    return this.#nombre;
  }

  get tipo() {
    return this.#tipo;
  }

  get evoluciones() {
    return this.#evoluciones;
  }

  get ataque() {
    const { nombre } = this;
    return `${nombre}, Ataque base`;
  }
}

export default Pokemon;
