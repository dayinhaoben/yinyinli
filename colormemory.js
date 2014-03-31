var score;
var cardsmatched;

var ui = $("#gameUI");
var uiIntro = $("#gameIntro");
var uiStats = $("#gameStats");
var uiComplete = $("#gameComplete");
var uiCards= $("#cards");
var uirestart = $(".gameRestart");
var uiScore = $(".gameScore");
var uiPlay = $("#gamePlay");
var uiTimer = $("#timer");
var matchingGame = {};
matchingGame.deck = ['lightBlue', 'yellow', 'purple', 'green', 'chineseRed', 'orange', 'red', 'blue', 'lightBlue', 'yellow', 'purple', 'green', 'chineseRed', 'orange', 'red', 'blue',];

$(function(){
	  init();
});

function init() {
					uiComplete.hide();
					uiCards.hide();
					playGame = false;
					uiPlay.click(function(e) {
						e.preventDefault();
						uiIntro.hide();
						startGame();
					});
				
					uirestart.click(function(e) {
						e.preventDefault();
						uiComplete.hide();					
						reStartGame();
					});
			}

function startGame(){//start game and create cards from deck array
	uiTimer.show();
	uiScore.html("0 seconds");
	uiStats.show();
	uiCards.show();
	score = 0;
	cardsmatched = 0;
   	if (playGame == false) {
   			playGame = true;
			matchingGame.deck.sort(shuffle);
			for(var i=0;i<15;i++){
					$(".card:first-child").clone().appendTo("#cards");
				}
				uiCards.children().each(function(index) {// initialize each card's position					
					$(this).css({// align the cards to be 3x6 ourselves.
						"left" :30 + ($(this).width() + 20) * (index % 4),
						"top" : 30 + ($(this).height() + 20) * Math.floor(index / 4)
					});					
					var pattern = matchingGame.deck.pop();// get a pattern from the shuffled deck
					$(this).find(".back").addClass(pattern);// visually apply the pattern on the card's back side.
					$(this).attr("data-pattern",pattern);// embed the pattern data into the DOM element.					
					$(this).click(selectCard);// listen the click event on each card DIV element.
				});											 
	   	timer();
	};			   
  }

//timer 
function timer() {
				if (playGame) {//alert("timer set")
					scoreTimeout = setTimeout(function() {
						uiScore.html(++score + " seconds");		
						timer();
					}, 1000);
				};
		};

//shuffle cards
function shuffle() {
	return 0.5 - Math.random();
}

//onclick function add flip class and then check to see if cards are the same
function selectCard() {	
	if ($(".card-flipped").size() > 1) {// we do nothing if there are already two cards flipped.
	return;
	}
	$(this).addClass("card-flipped");	
	if ($(".card-flipped").size() == 2) {// check the pattern of both flipped card 0.7s later.
	setTimeout(checkPattern,700);
	}
}

//if pattern is same remove cards otherwise flip back
function checkPattern() {
	if (isMatchPattern()) {
		$(".card-flipped").removeClass("card-flipped").addClass("card-removed");
			if(document.webkitTransitionEnd){
				$(".card-removed").bind("webkitTransitionEnd",	removeTookCards);
			}else{
				removeTookCards();
			}
		} else {
		$(".card-flipped").removeClass("card-flipped");
	}
}

//put 2 flipped cards in an array then check the image to see if it's the same.
function isMatchPattern() {
	var cards = $(".card-flipped");
	var pattern = $(cards[0]).data("pattern");
	var anotherPattern = $(cards[1]).data("pattern");
	return (pattern == anotherPattern);
}

//check to see if all cardmatched variable is less than 8 if so remove card only otherwise remove card and end game 
function removeTookCards() {
	if (cardsmatched < 7){
		cardsmatched++;
		$(".card-removed").remove();
	}else{
		$(".card-removed").remove();
		uiCards.hide();
		uiComplete.show();
		clearTimeout(scoreTimeout);
	}	
}

//recreate the original card , stop the timer and re populate the array with class names
function reStartGame(){
				playGame = false;
				uiCards.html("<div class='card'><div class='face front'></div><div class='face back'></div></div>");
				clearTimeout(scoreTimeout);
				matchingGame.deck = ['lightBlue', 'yellow', 'purple', 'green', 'chineseRed', 'orange', 'red', 'blue', 'lightBlue', 'yellow', 'purple', 'green', 'chineseRed', 'orange', 'red', 'blue',];		
				startGame();
			}
				