fetch("https://api.ipify.org?format=json")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
