// url: http://api.bryanuniversity.edu/robs/list

axios.get('http://api.bryanuniversity.edu/bobby_heiking/list')
.then(response => {
    for(let i = 0; i < response.data.length; i++){
        const h2 = document.createElement('h2')
        h2.textContent = response.data[i].name
        document.body.appendChild(h2)
    }
})
.catch(error => console.log(error))