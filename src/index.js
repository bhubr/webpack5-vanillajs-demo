import { fetchPokemonList } from './api';
import { renderPokemonList } from './render-functions';

async function app() {
  // Fetch a list of pokemon objects from PokeAPI
  const pokemons = await fetchPokemonList();
  // Generate an HTML ul/li list of pokemons from fetched objects
  const pokemonsList = renderPokemonList(pokemons);
  
  // The element where we will insert the generated HTML
  const viewport = document.getElementById('app');
  // Insert the list in the target div
  viewport.innerHTML = pokemonsList;
}

app();
