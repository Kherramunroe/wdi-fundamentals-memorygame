console.log("Up and running!");
// console.log("User flipped " + 'cardOne');
// console.log("User flipped " + 'cardTwo');

var cards = [
{
rank: 'Queen',
suit: 'Hearts',
cardImage: "images/queen-of-hearts.png"
},
{
rank: 'Queen',
suit: 'Diamonds',
cardImage: "images/queen-of-diamonds.png"
},
{
rank: 'King',
suit: 'Hearts',
cardImage: "images/king-of-hearts.png"
},
{
rank: 'King',
suit: 'Diamonds',
cardImage: "images/king-of-diamonds.png"
},
];
var cardsInPlay = []; 

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) 
 	{alert("You found a match!");} 
 else 
  {alert("Sorry, try again.");}
}

function flipCard()
  {
	// checkForMatch();
	var cardId = this.getAttribute('data-id');
	console.log("User flipped" + " " + cards[cardId].rank); 
		cardsInPlay.push(cards[cardId].rank);
		console.log("User flipped" + " " + cards[cardId].suit);
	console.log("User flipped" + " " + cards[cardId].cardImage);
	this.setAttribute('src', cards[cardId].cardImage);
if (cardsInPlay.length === 2) {

	 checkForMatch();

}
} 
	// 	 console.log("User flipped" + " " + cards[cardId].rank); 
	// 	cardsInPlay.push(cards[cardId].rank);
	// 	console.log("User flipped" + " " + cards[cardId].suit);
	// console.log("User flipped" + " " + cards[cardId].cardImage);
	// checkForMatch();
	
		// flipCard(0);
		// flipCard(2);


function createBoard() {
for (var i = 0; i < cards.length; i++) {
	var cardElement = document.createElement('img');
cardElement.setAttribute('src', 'images/back.png');
cardElement.setAttribute('data-id', i);
cardElement.addEventListener('click', flipCard);
document.getElementById('game-board').appendChild(cardElement);
    
}
}

createBoard();


// var cardTwo = document.createElement('img');
// var cardThree = document.createElement('img');
// var cardFour = document.createElement('img');



// var cards = ['Queen', 'Queen', 'King', 'King'];
// var cardOne = cards[0];
// cardsInPlay.push('cardOne');
// console.log("User flipped queen");

// var cardTwo = cards[2];
// cardsInPlay.push('cardTwo');
// console.log("User flipped king")

// if (cardsInPlay.length === 2)
 // if (cardsInPlay[0] === cardsInPlay[1])  
	// {alert("You found a match!");}
	// 	else {alert("Sorry try again.");}

