// url: http://api.bryanuniversity.edu/robs/list

axios.get('http://api.bryanuniversity.edu/bobby_heiking/list')
.then(response => {
    for(let i = 0; i < response.data.length; i++){
        const listItem = document.createElement('h2')
        listItem.textContent = response.data[i].name

        if(response.data[i].isComplete === true){
            listItem.classList.add('is-completed')
        }
        
        document.body.appendChild(listItem)
    }
})
.catch(error => console.log(error))