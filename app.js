const regionSelect = document.querySelector("#regionSelect");
let isUpdatingDisplay = false;


const getPokemon = async (dexNum) => {
    const response =  await fetch(`https://pokeapi.co/api/v2/pokemon/${dexNum}`);
    const pokemon = await response.json();
    return pokemon;
 
 };

 const displayPokemonBox = (pokemon) => {
    const pokemonDisplay = document.querySelector("#pokemonDisplay");
    const pokeBox =  document.createElement("div");
    const contentWrapper = document.createElement("div");
    let pokeImg = document.createElement("Img");
    let pokeNum = document.createElement("p");
    let pokeName = document.createElement("h3");

    pokeImg.src = pokemon.sprites.front_default;
    pokeNum.innerText = `#${pokemon.id}`;
    pokeName.innerText = pokemon.name;
    pokeBox.appendChild(pokeImg);
    pokeBox.appendChild(contentWrapper);
    contentWrapper.appendChild(pokeNum);
    contentWrapper.appendChild(pokeName);
    pokemonDisplay.appendChild(pokeBox);
    pokeBox.classList.add("border")
    contentWrapper.classList.add("cardText")
 };


 const displayPokemon = async (firstMon, lastMon) => {
    isUpdatingDisplay = true;
    regionSelect.disabled = true;
    for (let dexNum = firstMon; dexNum <= lastMon; dexNum++) {
        const pokemon = await getPokemon(dexNum);

        displayPokemonBox(pokemon);

    }
    isUpdatingDisplay = false;
    regionSelect.disabled = false;

};

const resetDisplay = () => {
    pokemonDisplay.innerHTML = "";
};


regionSelect.addEventListener("change", async () => {

    if (isUpdatingDisplay) {
        return;
    }

    let regionVal = parseInt(regionSelect.value);
    let lastMon = 1;
    let firstMon = 1;
 
     if (regionVal === 1) {
        firstMon = 1;
         lastMon = 151;
     } else if (regionVal === 2){
        firstMon = 152;
        lastMon = 251;
     } else if (regionVal === 3){
        firstMon = 252;
        lastMon = 386;
     } else if (regionVal === 4){
        firstMon = 387;
        lastMon = 493;
     } else if (regionVal === 5){
        firstMon = 494;
        lastMon = 649;
     } else if (regionVal === 6){
        firstMon = 650;
        lastMon = 721;
     } else if (regionVal === 7){
        firstMon = 722;
        lastMon = 809;
     } else if (regionVal === 8){
        firstMon = 810;
        lastMon = 899;
     } else if (regionVal === 9){
        firstMon = 900;
        lastMon = 1010;
     }
     resetDisplay();
    await displayPokemon(firstMon, lastMon);
 });



    









