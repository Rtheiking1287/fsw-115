

//* XML HTTP Request


    const xhr = new XMLHttpRequest()

    xhr.open("GET", 'https://pokeapi.co/api/v2/pokemon-form/', true)
    xhr.send()

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            let pokemon = JSON.parse(xhr.responseText)
            showPokemon(pokemon.results)
        } else if(xhr.readyState === 4 && xhr.status !== 200){
            console.log(xhr.responseText)
        }
    }


function showPokemon(pokemon){
    for(let i = 0; i < pokemon.length; i++){
        const character = document.createElement('h1')
        character.textContent = `Pokemon: ${pokemon[i].name}; URL: ${pokemon[i].url}`
        document.body.appendChild(character)
    }
}
