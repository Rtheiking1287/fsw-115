// url: https://swapi.dev/api/people/4

const getData = async () => {
    let response;
    try{
        response = await axios.get('https://swapi.dev/api/people/3')
        const homeworld = await axios.get(response.data.homeworld)
        const film = await axios.get(homeworld.data.films[1])
        const character = await axios.get(film.data.characters[2])
        displayDataToDom(homeworld, film, character)
    }
    catch(error){
        console.log(error)
    }

}
    
getData()

function displayDataToDom(homeworld, film, character){
    console.log(film)
    const h1 = document.createElement('h1')
    h1.textContent = homeworld.data.name
    document.body.appendChild(h1)

    const h2 = document.createElement('h2')
    h2.textContent = film.data.title
    document.body.appendChild(h2)

    const h3 = document.createElement('h3')
    h3.textContent = character.data.name
    document.body.appendChild(h3)
}