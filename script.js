import { fetchUser } from "./api.js";

const formEl = document.querySelector(".box");
const profileConteiner = document.querySelector(".profile");

formEl.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  console.log(formEl.elements.login.value);

  const login = formEl.elements.login.value;

  fetchUser(login).then(showProfile).catch(showError);
  formEl.reset();
}

function showError(error) {
  console.log(error);
  profileConteiner.innerHTML = "Упс!Щось пішло не так";
}

function showProfile({
  name,
  repos_url,
  followers,
  login,
  public_repos,
  avatar_url,
}) {
  const template = ` <div class="profile">
  <div class="content">
  <img
  src="${avatar_url}"
  class="avatar"
  alt="avatar"
  width="180px"
  height="180px"
/>
${name ? `<h1 class="name">${name}</h1>` : ""}
    <p class="repurl">${repos_url}</p>
    <ul class="stats">
      <li>Folowers:<span>${followers}</span></li>
      <li>login:<span>${login}</span></li>
      <li>Repos:<span>${public_repos}</span></li>
    </ul>
  </div>
</div>`;
  profileConteiner.innerHTML = template;
}
