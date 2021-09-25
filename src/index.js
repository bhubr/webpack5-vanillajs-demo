import { fetchUserList } from './api';
import { renderUsersList } from './render-functions';

async function app() {
  // Fetch a list of pokemon objects from PokeAPI
  const users = await fetchUserList();
  // Generate an HTML ul/li list of users from fetched objects
  const usersList = renderUsersList(users);

  // The element where we will insert the generated HTML
  const viewport = document.getElementById('app');
  // Insert the list in the target div
  viewport.innerHTML = usersList;
}

app();
