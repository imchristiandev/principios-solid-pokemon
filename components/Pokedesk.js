class Pokedesk {
  constructor() {}

  introducirEnPokeDesk(pokemon) {
    console.log(
      `Salvando pokémon en la pokedesk
      
      ********************************************
      *           ENTRADA DE POKEDESK            *
      ******************************************** 
      *
      *   Nombre: ${pokemon.nombre}.
      *   Tipo: ${pokemon.tipo}.
      *   Evoluciones: ${pokemon.evoluciones}.
      *
      ********************************************
      `
    );
  }
}

export default Pokedesk;
