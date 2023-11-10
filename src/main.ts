import "./style.css";

const characterBtn: HTMLElement = document.querySelector("#characterBtn")!;
const starshipBtn: HTMLElement = document.querySelector("#starshipBtn")!;

characterBtn.addEventListener("click", handleCharacterButtonClick);
starshipBtn.addEventListener("click", handleStarshipButtonClick);

function handleCharacterButtonClick() {
  const result = getApi("people/");
  console.log(result);
}

function handleStarshipButtonClick() {
  console.log("ship selected");
}

// function getApi(type: string): void {
  fetch(`https://swapi.dev/api/${type}`)
    .then((response) => response.json())
    .then((result) => {
      return result;
      console.log(result);
    });
}
