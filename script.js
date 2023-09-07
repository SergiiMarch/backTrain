const formEl = document.querySelector(".box");

formEl.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  console.log(formEl.elements.login.value);

  const login = formEl.elements.login.value;

  fstchUser(login)
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}

function fstchUser(login) {
  return fetch(`https://api.github.com/users/${login}`).then((res) =>
    res.json()
  );
}
