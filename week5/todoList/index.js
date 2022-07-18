// url: http://api.bryanuniversity.edu/robs/list

const getItems = () => {
    axios.get('http://api.bryanuniversity.edu/robs/list')
    .then(res => displayItems(res.data))
    .catch(err => console.error(err))
}
getItems()

const displayItems = (items) => {

    let container = document.getElementById('todoContainer')
    container.innerHTML = ''

    items.forEach(item => {
        console.log(item)

//Cards and features

        // Cards
        let cardContainer = document.createElement('div')
        cardContainer.classList.add('todo-card')
        
        // Name
        let nameElement = document.createElement('h1')
        nameElement.textContent = item.name
        cardContainer.appendChild(nameElement)

        // Edit button
        let editButton = document.createElement('button')
        let buttonText = ''
        item.isComplete ? buttonText = 'Click me if not done' : buttonText = 'Click me when done' 

        editButton.textContent = buttonText
        editButton.addEventListener('click', editItem)
        editButton.id = item._id
        editButton.value = item.isComplete 
        cardContainer.appendChild(editButton)
        
        // Delete button
        let deleteButton = document.createElement('button')
        deleteButton.textContent = 'Get rid of it'
        deleteButton.addEventListener('click', deleteItem)
        deleteButton.id = item._id
        cardContainer.appendChild(deleteButton)

        // Add card
        container.appendChild(cardContainer)
    });
}

// Creating tasks 
const addNewItem = (e) => {
    e.preventDefault()
    
    let nameInputElement = document.getElementById('todoTitleInput').value
    let descriptionInputElement = document.getElementById('todoDescriptionInput').value
    let priceInputElement = document.getElementById('todoPriceInput').value
    let completeInputElement = document.getElementById('todoCompletedInput').checked


    let newData = {
        description: descriptionInputElement,
        isComplete: completeInputElement,
        name: nameInputElement,
        price: priceInputElement
    }

    console.log(newData)

    axios.post('http://api.bryanuniversity.edu/robs/list', newData)
    .then(() => getItems())
    .catch(err => console.error(err))

}

let form = document.getElementById('todoForm')
form.addEventListener('submit', addNewItem)

// Delete the task
const deleteItem = (e) => {
    const id = e.target.id

    axios.delete(`http://api.bryanuniversity.edu/robs/list/${id}`)
    .then(() => getItems())
    .catch(err => console.error(err))
}

// Update the task
const editItem = (e) => {
    const id = e.target.id
    const value = e.target.value

    console.log(id)

    let newValue = null

    if(value === 'true'){
        newValue = false
    } else {
        newValue = true
    }

    let updatedData = {
        isComplete: newValue
    }

    axios.put(`http://api.bryanuniversity.edu/robs/list/${id}`, updatedData)
    .then(() => getItems())
    .catch(err => console.error(err))
}