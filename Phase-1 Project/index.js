let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  const submitForm = document.getElementById("submitForm")
  const showAll = document.getElementById("Show your liked drinks")
  const showDisliked = document.getElementById("Show your disliked drinks")
  const showLiked = document.getElementById("Show all your drinks") 
  submitForm.addEventListener("submit", cardSubmitter)
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
    showAll.addEventListener("click", () => {
        console.log("I was clicked")
    })
  });
});

function cardCreator (drink, event){
    // drink = {drinkName: margz, drinkIMG: *picture*.png}
    const cardDiv = document.createElement("div")
    cardDiv.classList.add("card")
    const cardHeader = document.createElement("h2")
    const cardImg = document.createElement("img")
    const cardParagraph = document.createElement("p")
    const cardLike = document.createElement("button")
    cardLike.addEventListener("click", () => {
        cardParagraph.innerText = "You like this drink!"
        cardLike.style.visibility = "hidden"
        cardDislike.style.visibility = "visible"
    })
    const cardDislike = document.createElement("button")
    cardDislike.addEventListener("click", () => {
        cardParagraph.innerText = "You don't like this drink!"
        cardDislike.style.visibility = "hidden"
        cardLike.style.visibility = "visible"
    })
    cardHeader.innerText = drink.drinkName
    cardImg.src = drink.drinkImg
    cardParagraph.innerText = 0
    cardLike.innerText = "Like"
    cardDislike.innerText = "Dislike"
    cardDiv.appendChild(cardHeader)
    cardDiv.appendChild(cardImg)
    cardDiv.appendChild(cardParagraph)
    cardDiv.appendChild(cardLike)
    cardDiv.appendChild(cardDislike)
    return cardDiv
}

function cardSubmitter(event){
    event.preventDefault()
    const submitForm = document.getElementById("submitForm")
   const drinkName = submitForm.querySelector('input[name="name"]').value
   const drinkImg = submitForm.querySelector('input[name="image"]').value
   const drinks = {drinkName: drinkName, drinkImg: drinkImg}
    console.log("I was submitted")
    console.log(drinks)
    const htmlDrink = cardCreator(drinks)
    console.log(htmlDrink)
    const container = document.getElementById("toy-collection")
    container.appendChild(htmlDrink)    
}


