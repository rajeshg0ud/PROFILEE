let cardsEl= document.getElementById("cards-el")
let sumEl= document.getElementById("sum-el")
let messageEl= document.getElementById("message-el")

let firstCard=getRandomCard()
let secondCard= getRandomCard()
let sum= firstCard+secondCard
let hasBlackJack=false
let isAlive=true
let message=""

function getRandomCard(){
    let randomNum= Math.floor(Math.random()*13)

    if(randomNum>10){
        return 10
    }
    else if(randomNum===1){
        return 11
    }
    else{
        return randomNum
    }
}
function startGame(){
    renderGame()
}
function renderGame(){
    cardsEl.textContent = "Cards: " + firstCard + " " +secondCard
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        }else if (sum === 21) { 
        message = "You've got Blackjack!" 
        hasBlackJack = true
        } else {
        message = "You're out of the game!"
        isAlive=false
        }
        messageEl.textContent = message
}

function newCard(){
    let card=getRandomCard()

    sum+=card
    renderGame()
}

