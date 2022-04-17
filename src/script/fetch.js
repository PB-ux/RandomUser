async function getResponse() {
  const btnText = document.querySelector(".card-button__text");
  btnText.style = "display: none";

  const spinner = document.createElement("span");
  spinner.className = "spinner-border";
  spinner.style = "width: 1rem; height: 1rem; border-width: .2em;";
  document.getElementById("Loader").appendChild(spinner);

  const response = await fetch("https://randomuser.me/api/");

  if (response) {
    spinner.parentNode.removeChild(spinner);
    btnText.style = "display: inline";
  }

  const content = await response.json();

  document.getElementById("Surname").innerHTML =
    "ФИО: " +
    content["results"][0]["name"]["first"] +
    " " +
    content["results"][0]["name"]["last"];
  document.getElementById("Female").innerHTML =
    "Пол: " + content["results"][0]["gender"];
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
