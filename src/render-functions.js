export function renderUsersList(users) {
  return `<ul>
  ${
    users
      .map(user => (
        `<li class="user-item">
          <img alt="${user.login}" src="${user.avatar_url}" />
          <span>${user.login}</span>
        </li>`
      ))
      .join('')
  }
  </ul>`;
}