var button = document.getElementById("button")
button.addEventListener("click", function() {

axios.get('https://api.lyrics.ovh/v1/green day/holiday')
.then(response => {
    for(let i = 0; i < response.data.length; i++){
        const h2 = document.createElement('h2')
        h2.textContent = response.data[i].lyrics
        document.body.appendChild(h2)
    }
})
.catch(error => console.log(error))

})