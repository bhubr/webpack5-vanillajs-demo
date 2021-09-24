export function renderPokemonList(pokemons) {
  return `<ul>
  ${
    pokemons
      .map(p => (
        `<li>${p.name}</li>`
      ))
      .join('')
  }
  </ul>`;
}