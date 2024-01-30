const button = document.getElementById("btn");
button.addEventListener("click", (event) => {
    event.preventDefault();

    const namePokemon = document.getElementById("pokemon").value;

    getPokemon(null, namePokemon);
});

var count = 1

const button_right = document.getElementById("button-right");
const button_left = document.getElementById("button-left");
getPokemon(count);

button_right.addEventListener("click", () => {
    if(count < 898){
        count++;
    }
    getPokemon(count, null)
});

button_left.addEventListener("click", () => {
    if(count > 1){
        count--;
    }

    getPokemon(count, null)
});

function getPokemon(count, namePokemon){
    let url;
    if (count != null){
        url = `https://pokeapi.co/api/v2/pokemon/${count}/`
    } else {
        url = `https://pokeapi.co/api/v2/pokemon/${namePokemon.toLowerCase()}/`
    }

    axios.get(url).then((response) =>{
        const imgPokemon = response.data.sprites.front_default;
        console.log(response.data.sprites)
        const img = document.getElementById("imgPokemon");
        img.src = imgPokemon;
        img.alt = namePokemon
    }).catch((error) => {
        console.log(error)
    });
}

