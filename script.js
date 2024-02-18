// https://random-data-api.com/api/v2/users

fetchUsers();

async function fetchUsers() {
  const response = await fetch(
    "https://random-data-api.com/api/v2/users?size=10"
  );
  const users = await response.json();
  console.log(users);

  displayUsers(users);
}

function displayUsers(users) {
  const userListElement = document.getElementById("userList");

  users.forEach((user) => {
    const userCard = document.createElement("div");
    userCard.classList.add("user-card");

    userCard.innerHTML = `
        <img src="${user.avatar}" alt="Avatar">
        <h2>${user.first_name}</h2>
        <h2>${user.last_name}</h2>
        <p>Email: ${user.email}</p>
        <p>Username: ${user.username}</p>
        <p>Employment Title: ${user.employment.title}</p>
        <p>Key Skill: ${user.employment.key_skill}</p>
        <p>Country: ${user.address.country}</p>
        <p>City: ${user.address.city}</p>
    `;

    userListElement.appendChild(userCard);
  });
}
