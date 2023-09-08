const formEl = document.querySelector(".box");
const profileConteiner = document.querySelector(".profile");

formEl.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  console.log(formEl.elements.login.value);

  const login = formEl.elements.login.value;

  fitchUser(login)
    .then(showProfile)
    .catch((error) => console.error(error));
  formEl.reset();
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
  width="120px"
  height="120px"
/>
    <h1 class="name">${name}</h1>
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

function fitchUser(login) {
  return fetch(`https://api.github.com/users/${login}`).then((response) =>
    response.json()
  );
}
// avatar_url;
// company;
// email;
// followers;
// name;
// url;
// bio;

// avatar_url
// :
// "https://avatars.githubusercontent.com/u/111069200?v=4"
// bio
// :
// null
// blog
// :
// ""
// company
// :
// null
// created_at
// :
// "2022-08-11T14:21:50Z"
// email
// :
// null
// events_url
// :
// "https://api.github.com/users/SergiiMarch/events{/privacy}"
// followers
// :
// 0
// followers_url
// :
// "https://api.github.com/users/SergiiMarch/followers"
// following
// :
// 6
// following_url
// :
// "https://api.github.com/users/SergiiMarch/following{/other_user}"
// gists_url
// :
// "https://api.github.com/users/SergiiMarch/gists{/gist_id}"
// gravatar_id
// :
// ""
// hireable
// :
// null
// html_url
// :
// "https://github.com/SergiiMarch"
// id
// :
// 111069200
// location
// :
// null
// login
// :
// "SergiiMarch"
// name
// :
// "Sergii Marchenko"
// node_id
// :
// "U_kgDOBp7IEA"
// organizations_url
// :
// "https://api.github.com/users/SergiiMarch/orgs"
// public_gists
// :
// 0
// public_repos
// :
// 28
// received_events_url
// :
// "https://api.github.com/users/SergiiMarch/received_events"
// repos_url
// :
// "https://api.github.com/users/SergiiMarch/repos"
// site_admin
// :
// false
// starred_url
// :
// "https://api.github.com/users/SergiiMarch/starred{/owner}{/repo}"
// subscriptions_url
// :
// "https://api.github.com/users/SergiiMarch/subscriptions"
// twitter_username
// :
// null
// type
// :
// "User"
// updated_at
// :
// "2023-08-14T14:22:46Z"
// url
// :
// "https://api.gith
