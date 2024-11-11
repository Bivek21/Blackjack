// let age = 22;
// if (age < 22) {
//   console.log("You are not ready to do clubbing");
// } else {
//   console.log("Welcome to the club");
// }

let firstCard = 10;
let secondCard = 11;
let cards = [firstCard, secondCard];
let hasBlackJack = false;
let isAlive = false;
let message = "";
let card = ["firstCard" + "secondCard"];
let sum = firstCard + secondCard;
let messageEL = document.getElementById("message-el");
let sumEl = document.querySelector(".sum-el");
let cardEl = document.getElementById("card-el");
// let newCard = document.getElementById("newCard");

function startGame() {
  renderGame();
}

function renderGame() {
  //render out first card and second card
  cardEl.textContent = "card:" + cards[0] + " " + cards[1];
  //render out all the card that we have
  sumEl.textContent = "sum:" + sum;
  if (sum <= 20) {
    message = "DO you want to draw a new card";
    isAlive = true;
  } else if (sum == 21) {
    message = "You won the game ";
    hasBlackJack = true;
    isAlive = true;
  } else {
    message = "You are out of game";
    isAlive = false;
  }
  messageEL.textContent = message;
}

function newCard() {
  let card = 8;
  sum += card;

  renderGame();
}

// let name = "bivek";
// let age = "26";
// likePizza = true;
// let myList = [name, age, likePizza];
// console.log(myList);
// let cards = [7, 4];
// cards.push[6];

// let message = [
//   "Hi How are you",
//   " I'm great what about you?",
//   "All good been working on my portfolio lately",
// ];
// let newMessage = "You wanna go out for a cup of coffee";
// message.push(newMessage);
// console.log(message);
// message.pop();
// console.log(message);
