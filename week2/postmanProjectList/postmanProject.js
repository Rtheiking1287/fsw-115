var tyrion = [
 {
    "sentence": "Never forget what you are. The rest of the world will not. Wear it like armour, and it can never be used to hurt you.",
    "character": {
        "name": "Tyrion Lannister",
        "slug": "tyrion",
        "house": {
            "name": "House Lannister of Casterly Rock",
            "slug": "lannister"
        }
    }
}
]

var tyrionQuote = document.getElementById("imp")

for (var i = 0; i < tyrion.length; i++) {
tyrionQuote.innerHTML += "<li>" + `Quote: ` + tyrion[i].sentence + "</li>"
tyrionQuote.innerHTML += "<li>" + `Character Name: ` + tyrion[i].character.name + "</li>"
tyrionQuote.innerHTML += "<li>" + `Character House: ` + tyrion[i].character.house.name + "</li>"
tyrionQuote.innerHTML += "<li>" + `Character Slug: ` + tyrion[i].character.house.slug + "</li>"
}
