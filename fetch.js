async function getResponse() {
  const span = document.createElement("span");
  span.className = "spinner-border";
  span.style = "width: 1rem; height: 1rem; border-width: .2em;";
  document.getElementById("loader").appendChild(span);
  const response = await fetch("https://randomuser.me/api/");
  if (response) {
    span.parentNode.removeChild(span);
  }
  const content = await response.json();

  document.getElementById("Female").innerHTML =
    "Пол: " + content["results"][0]["gender"];
  document.getElementById("Surname").innerHTML =
    "Фамилия имя: " +
    content["results"][0]["name"]["first"] +
    " " +
    content["results"][0]["name"]["last"];
  document.getElementById("Address").innerHTML =
    "Город: " + content["results"][0]["location"]["city"];
  document.getElementById("Email").innerHTML =
    "Email: " + content["results"][0]["email"];
  document.getElementById("DataAge").innerHTML =
    "Дата рождения, возраст: " +
    content["results"][0]["dob"]["date"].slice(0, 10) +
    "," +
    content["results"][0]["dob"]["age"];
  document.getElementById("Phone").innerHTML =
    "Телефон: " + content["results"][0]["phone"];
  document.getElementById("Phone").innerHTML =
    "Телефон: " + content["results"][0]["phone"];
  document.getElementById("Avatar").src =
    content["results"][0]["picture"]["large"];
}
