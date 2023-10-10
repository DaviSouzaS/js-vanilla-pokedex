const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 12
let offset = 0;

function convertPokemonToLi(pokemon) {

    let listItem = document.createElement("li");
    listItem.id = "pokemonCard";
    listItem.className = "pokemon " + pokemon.type;
    
    listItem.addEventListener("click", () => {

        localStorage.clear();

        let pokemonInfos = JSON.stringify(pokemon);

        localStorage.setItem("pokeInfos", pokemonInfos)

        location.href='assets/pages/pokemon-infos/index.html'
    })

    let numberSpan = document.createElement("span");
    numberSpan.className = "number";
    numberSpan.textContent = "#" + pokemon.number;
    listItem.appendChild(numberSpan);

    let nameSpan = document.createElement("span");
    nameSpan.className = "name";
    nameSpan.textContent = pokemon.name;
    listItem.appendChild(nameSpan);

    let detailDiv = document.createElement("div");
    detailDiv.className = "detail";
    listItem.appendChild(detailDiv);

    let typesList = document.createElement("ol");
    typesList.className = "types";
    detailDiv.appendChild(typesList);

    pokemon.types.forEach(function(type) {
        let typeListItem = document.createElement("li");
        typeListItem.className = "type " + type;
        typeListItem.textContent = type;
        typesList.appendChild(typeListItem);
    });

    let img = document.createElement("img");
    img.src = pokemon.photo;
    img.alt = pokemon.name;
    detailDiv.appendChild(img);

    pokemonList.appendChild(listItem);

}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        pokemons.map(convertPokemonToLi)
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const RecordsWithNextPage = offset + limit

    if (RecordsWithNextPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})