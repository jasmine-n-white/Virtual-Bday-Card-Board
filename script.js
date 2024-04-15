let myForm = document.getElementById("myForm");


function createCard() {
    let inputName = document.getElementById("name").value;
    let message = document.getElementById("message").value;
    let imageURL = document.getElementById("image").value;
    let card = document.createElement("div");
    card.classList.add("card");
    const h3Card = document.createElement("h3");
    h3Card.innerText = `From: ${inputName}`;
    card.appendChild(h3Card);
    const pCard = document.createElement("p");
    pCard.innerText = message;
    card.appendChild(pCard);
    const imgCard = document.createElement("img");
    imgCard.src = imageURL;
    imgCard.alt = "User submitted image";
    card.appendChild(imgCard);
    //create buttons, add the text, append to card
    const buttonSection = document.createElement("div");
    buttonSection.classList.add("button-section");
    card.appendChild(buttonSection);
    const featureCard = document.createElement("btn");
    featureCard.innerHTML = `<button class="feature-btn">✨Feature✨</button>`;
    buttonSection.appendChild(featureCard);
    const deleteCard = document.createElement("btn");
    deleteCard.innerHTML = `<button class="delete-btn">✖️Delete✖️</button>`;
    buttonSection.appendChild(deleteCard);
    //event listeners for the feature and delete buttons
    card.querySelector(".feature-btn").addEventListener("click", function() {
        card.classList.toggle("feature");
    });
    card.querySelector(".delete-btn").addEventListener("click", function() {
        card.remove();
    });
    //append card to grid
    document.getElementById("cardGrid").appendChild(card);
}

//form validation
function isAlpha(str) {
    return /^[A-Za-z]+$/.test(str);
  }

function isURL(str) {
    return /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
}


function checkForm() {
    let inputName = document.getElementById("name");
    let message = document.getElementById("message");
    let imageURL = document.getElementById("image");


//check validity of name input 
    if (inputName.validity.valueMissing) {
        inputName.setCustomValidity("Please enter a name!");
     } else if (!isAlpha(inputName.value)) {
        inputName.setCustomValidity("Name can only contain letters!");
        inputName.value = null;
     } else {
        inputName.setCustomValidity("");
     }
//check validity of personsal message input
     if (message.validity.valueMissing) {
        message.setCustomValidity("Please enter a message!");
     } else {
        message.setCustomValidity("");
     }
//check validity of GIF/image URL
     if (imageURL.validity.valueMissing) {
        imageURL.setCustomValidity("Please enter an image or GIF URL!");
     }  else if (imageURL.validity.typeMismatch){
        imageURL.setCustomValidity("Invalid input! You must enter a valid image or GIF URL.");
     } else {
        imageURL.setCustomValidity("");
     }
  




 }

     
    





myForm.addEventListener("submit", function(event) {
    event.preventDefault();
    checkForm();
    createCard();
    this.reset();
});



