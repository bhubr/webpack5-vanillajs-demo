export const fetchUserList = async () => fetch(
  'https://api.github.com/users'
)
  .then(res => res.json());