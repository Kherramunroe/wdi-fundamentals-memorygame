console.log("Up and running!");
// console.log("User flipped " + 'cardOne');
// console.log("User flipped " + 'cardTwo');

var cards = ['Queen', 'Queen', 'King', 'King'];
var cardsInPlay = []; 

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}

function flipCard(cardId)
  {
	
if (cardsInPlay.length === 2)

	 checkForMatch();
 
		 console.log("User flipped" + " " + cards[cardId]); 
		cardsInPlay.push(cards[cardId]);
	};
		flipCard(0);
		flipCard(2);
	


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

