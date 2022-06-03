let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  const submitForm = document.getElementById("submitForm");
  submitForm.addEventListener("submit", cardSubmitter);
  addBtn.addEventListener("click", () => {
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
})

function cardSubmitter(event) {
    event.preventDefault();
    const submitForm = document.getElementById("submitForm");
    const drinkName = submitForm.querySelector('input[name="name"]').value;
    const drinkImg = submitForm.querySelector('input[name="image"]').value;
        if(drinkName === "" || drinkImg === ""){
        alert("You are missing a required field!")
        } else {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkName)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        findAndCreateDrinkCard(data.drinks, drinkName, drinkImg);
      });
      }
  }

function cardCreator(drink, verifiedDrinkObject) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  const cardHeader = document.createElement("h2");
  const verifiedCard = document.createElement("h3");
  const cardImg = document.createElement("img");
  cardImg.classList.add("img-center")
  const cardParagraph = document.createElement("p");
  const cardLike = document.createElement("button");
  cardLike.addEventListener("click", () => {
    cardParagraph.innerText = "You like this drink!";
    cardLike.style.visibility = "hidden";
    cardDislike.style.visibility = "visible";
  });
  const cardDislike = document.createElement("button");
  cardDislike.addEventListener("click", () => {
    cardParagraph.innerText = "You don't like this drink!";
    cardDislike.style.visibility = "hidden";
    cardLike.style.visibility = "visible";
  });
  cardHeader.innerText = drink.drinkName;
  cardImg.src = drink.drinkImg;
  cardLike.innerText = "Like";
  cardDislike.innerText = "Dislike";
  cardDiv.appendChild(cardHeader);
  if (verifiedDrinkObject) {
    verifiedCard.innerText = "Verified";
    cardDiv.appendChild(verifiedCard);
  }
  cardDiv.appendChild(cardImg);
  cardDiv.appendChild(cardParagraph);
  cardDiv.appendChild(cardLike);
  cardDiv.appendChild(cardDislike);
  return cardDiv;
}



function findAndCreateDrinkCard(drinks, drinkName, drinkImg) {
  let verified;
  if (drinks) {
    verified = drinks.find((element) => {
      return drinkName.toUpperCase() === element.strDrink.toUpperCase();
    });
  }
  const drinkObject = { drinkName: drinkName, drinkImg: drinkImg };
  const htmlDrink = cardCreator(drinkObject, verified);
  const container = document.getElementById("toy-collection");
  container.appendChild(htmlDrink);
}