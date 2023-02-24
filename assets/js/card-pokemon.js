const cardOpenButton = document.querySelector("#pokemonList");
const card = document.querySelector("#card");
const fade = document.querySelector("#fade");

const toggleCard = () => {
  [card, fade].forEach((el) => el.classList.toggle("hide"));
}


[cardOpenButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleCard())
});