const container = document.getElementById("flex-container");
title = ["d","e","r","p","i","c","","i","s","","d","o","w","n"];
const weirdCharacters = "!@#$%^&*()_+-=<>?[]{}|~><.,derpic";

function getRandomCharacter() {
    return weirdCharacters[Math.floor(Math.random() * weirdCharacters.length)];
}

for(let i = 0; i < title.length; i++){
    let letter = document.createElement("h1");
    letter.id = (i);
    letter.className = "letter";
    letter.textContent = title[i] === "" ? '\u00A0' : title[i];
    container.appendChild(letter);

    letter.addEventListener('mouseover', function() {
        this.originalText = this.textContent;  // Store the original text
        this.textContent = getRandomCharacter();
    });

}

