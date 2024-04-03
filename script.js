let myForm = document.getElementById("myForm");


function createCard() {
    let inputName = document.getElementById("name").value;
    let message = document.getElementById("message").value;
    let imageURL = document.getElementById("image").value;
    let card = document.createElement("div");
    card.classList.add("card");
    const h3Card = document.createElement("h3");
    h3Card.innterHTML = inputName;
    card.appendChild(h3Card);
    const pCard = document.createElement("p");
    pCard.innerText = message;
    card.appendChild(pCard);
    //create img, add the text, append to card
    //create buttons, add the text, append to card

    //append card to grid
    document.getElementById("cardGrid").appendChild(card);
}

myForm.addEventListener("submit", function(event) {
    event.preventDefault();
    createCard();
});
