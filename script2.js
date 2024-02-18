const userListElement = document.getElementById("userList");

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

    userListElement.appendChild(userCard);
  });
}

function createUserCard(user) {
  const userCard = document.createElement("div");
  userCard.classList.add("user-card");

  const avatarImage = document.createElement("img");
  avatarImage.setAttribute("src", user.avatar);
  avatarImage.setAttribute("alt", Avatar);

  const fullName = document.createElement("h2");
  fullName.innerText = `${user.name.first} ${user.name.last}`;

  const email = document.createElement("p");
  //   email.innerText = `Email: ${user.email}`;
  email.innerText = email.user;

  const username = document.createElement("p");
  username.innerText = `Username: ${user.username}`;

  const country = document.createElement("p");
  country.innerText = `Country: ${user.location.country || "N/A"}`;

  const city = document.createElement("p");
  city.innerText = `City: ${user.location.city || "N/A"}`;

  const employmentTitle = document.createElement("p");
  employmentTitle.innerText = `Employment Title: ${user.employment.title}`;

  userCard.appendChild(avatarImage);
  userCard.appendChild(fullName);
  userCard.appendChild(email);
  userCard.appendChild(username);
  userCard.appendChild(country);
  userCard.appendChild(city);
  userCard.appendChild(employmentTitle);

  return userCard;
}
