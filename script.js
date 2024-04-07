let myForm = document.getElementById("myForm");


function createCard() {
    let inputName = document.getElementById("name").value;
    let message = document.getElementById("message").value;
    let imageURL = document.getElementById("image").value;
    let card = document.createElement("div");
    card.classList.add("card");
    const h3Card = document.createElement("h3");
    h3Card.innerText = inputName;
    card.appendChild(h3Card);
    const pCard = document.createElement("p");
    pCard.innerText = message;
    card.appendChild(pCard);
    const imgCard = document.createElement("img");
    imgCard.src = imageURL;
    imgCard.alt = "User submitted image";
    card.appendChild(imgCard);
    //create buttons, add the text, append to card
    const featureCard = document.createElement("btn");
    featureCard.innerHTML = `<button class="feature-btn">Feature</button>`;
    card.appendChild(featureCard);
    const deleteCard = document.createElement("btn");
    deleteCard.innerHTML = `<button class="delete-btn">Delete</button>`;
    card.appendChild(deleteCard);
    //event listeners for the feature and delete buttons
    // btn.querySelector(".feature-btn").addEventListener("click", function() {
        
    // });
    // btn.querySelector(".delete-btn").addEventListener("click", function() {
    // });
    //append card to grid
    document.getElementById("cardGrid").appendChild(card);
}

myForm.addEventListener("submit", function(event) {
    event.preventDefault();
    createCard();
});


