import fetch from "node-fetch";

export class DexterAPI {
  #pokemons = [];
  #dependencie = null;

  constructor(pokemons, dependencie) {
    this.#pokemons = pokemons;
    this.#dependencie = dependencie;
  }

  getInfo() {
    this.#pokemons.forEach((pokemon) => {
      /*
        Al inyectar la dependenccia solo bastara con utilizar
        el método que requerimos utilizar.
      */
      this.#dependencie.getInfo(pokemon);
    });
  }
}

// Creamos el client para la solicitud del api. utilizando fetch
export class ApiPokemon1 {
  getInfo(nombre) {
    let requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    let promise = Promise.race([
      fetch(
        `https://workshop-mongo.herokuapp.com/pokemon/name/${nombre}`,
        requestOptions
      ).then((response) => response.text()),
      new Promise((resolve, reject) =>
        setTimeout(() => reject(new Error("Timeout")), 1000)
      ),
    ]);

    promise.then((result) => console.log(result)),
      promise.catch((error) => console.log(error));
  }
}
