let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  const submitForm = document.getElementById("submitForm") 
  submitForm.addEventListener("submit", cardSubmitter)
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

function cardCreator (drink, event){
    // drink = {drinkName: margz, drinkIMG: *picture*.png}
    const cardDiv = document.createElement("div");
    const cardHeader = document.createElement("h2")
    const cardImg = document.createElement("img")
    const cardParagraph = document.createElement("p")
    const cardLike = document.createElement("button")
    const cardDislike = document.createElement("button")
    cardHeader.innerText = drink.drinkName
    cardImg.src = drink.drinkImg
    cardParagraph.innerText = 0
    cardLike.value = "Like"
    cardDislike.value = "Dislike"
    cardDiv.appendChild(cardHeader)
    cardDiv.appendChild(cardImg)
    cardDiv.appendChild(cardParagraph)
    cardDiv.appendChild(cardLike)
    cardDiv.appendChild(cardDislike)
    event.preventDefault();
    return cardDiv
}

function cardSubmitter(event){
    event.preventDefault()
    console.log("I was submitted")    
}