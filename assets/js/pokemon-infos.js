function renderPokemonInfos() {

    let pokemonInfosString = localStorage.getItem("pokeInfos")

    let pokemonInfos = JSON.parse(pokemonInfosString)

    let pokemonSection = document.createElement("section");
    pokemonSection.classList = `content ${pokemonInfos.type} pokemonContent`;

    let title = document.createElement("h1");
    title.className = "titlePokemon"

    let homeLink = document.createElement("a");
    homeLink.href = "/index.html";
    homeLink.textContent = "Pokedex";
    
    title.appendChild(homeLink);

    let pokemonInfosDiv = document.createElement("div");
    pokemonInfosDiv.className = "pokemon-infos";

    let pokemonNameP = document.createElement("p");
    pokemonNameP.textContent = pokemonInfos.name

    let pokemonNumberP = document.createElement("p");
    pokemonNumberP.textContent = "Nº " + pokemonInfos.number
    pokemonNumberP.className = "pokemon-number"

    pokemonInfosDiv.append(pokemonNameP, pokemonNumberP);

    let pokemonImgDiv = document.createElement("div");
    pokemonImgDiv.className = "pokemon-img";

    let pokemonImg = document.createElement("img");
    pokemonImg.src = pokemonInfos.photo;
    pokemonImg.alt = pokemonInfos.name;

    pokemonImgDiv.appendChild(pokemonImg);

    let pokemonTypesSpan = document.createElement("span")
    pokemonTypesSpan.className = "pokemon-types"

    let pokemonType = document.createElement("p")
    pokemonType.textContent = "Principal Type: " + pokemonInfos.type

    let pokemonTypes = document.createElement("p")
    pokemonTypes.textContent = "Types: " + pokemonInfos.types

    pokemonTypesSpan.append(pokemonType, pokemonTypes)

    pokemonSection.append(title, pokemonInfosDiv, pokemonImgDiv, pokemonTypesSpan)

    document.body.appendChild(pokemonSection)

}

renderPokemonInfos()