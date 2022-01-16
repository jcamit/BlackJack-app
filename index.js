let player = {
    name: "Player1",
    chips: 155
}

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let cards = [];
let message = "";
let sum = 0;
isAlive = false;
HasBlackjack = false;

let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name  + ": $" + player.chips; 


function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 12) + 1;
    if(randomCard === 1){
        return 12;
    }else if(randomCard > 10){
        return 11
    }else{
        return randomCard;
    }
}

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    cards = [firstCard];
    sum = firstCard;
    
    randerGame();

}

function randerGame(){
    cardsEl.textContent = "Cards: "
    for(let i = 0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
        
     sumEl.textContent = "Sum: " + sum;
    }
    if(sum <= 20){
        message = "Do you want to draw the card?"
    }else if(sum === 21){
        message = "You've got the Blackjack!"
        HasBlackjack = true;
    }else{
        message = "You're out of the game"
        isAlive = false;
    }
    messageEl.textContent = message;

}
function newCard(){
    if(isAlive === true && HasBlackjack === false){
        let card = getRandomCard()
        cards.push(card);
        sum += card;
    }
    randerGame();
}
