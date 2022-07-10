var button = document.getElementById("button")
button.addEventListener("click", function() {

axios.get("https://www.dnd5eapi.co/api/ability-scores/cha")
.then(response => {
    for(let i = 0; i < response.data.length; i++){
        const h2 = document.createElement('h2')
        h2.textContent = `skill Name: ${response.data[i].full_name}; Description: ${response.data[i].desc}`
        document.body.appendChild(h2)
    }
})
.catch(error => console.log(error))

})