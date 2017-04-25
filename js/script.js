
//Gathers a player's name and outputs it to the scoreboard with a player card. 
function printPlayerCards(){
	
  const scoreboard = document.getElementById('scoreboard');
	let scoreboardCardCount = scoreboard.getElementsByClassName('playerCard').length;
	scoreboardCardCount += 1;
	console.log(scoreboardCardCount);
	
	//Grab player's name from form.
	const playerNameInput = document.getElementById('playerNameInput').value;
	
	if (playerNameInput !== ''){
		//If not blank...
		if(scoreboardCardCount < 6){
	
			//If no more than 5 player cards exist...

			//Creates row.
			const row = document.createElement('div');
			row.className += 'row well playerCard';

			//Creates player's name column.
			const nameColumn = document.createElement('div');
			nameColumn.className += 'col-md-2 player';
			
			//Adds player's name to card.
			const name = document.createElement('h3');
			name.textContent = playerNameInput;
			nameColumn.appendChild(name);
			
			//Creates player's points column.
			const pointsColumn = document.createElement('div');
			pointsColumn.className += 'col-md-10 points';
			pointsColumn.id += 'pointsPlayer';
			
			//Create plus/minus buttons for points.
			const pointsAddButton = document.createElement('button');
			pointsAddButton.className = 'glyphicon glyphicon-chevron-up right';
			pointsAddButton.id += 'addPoint';
			
			const pointsMinusButton = document.createElement('button');
			pointsMinusButton.className = 'glyphicon glyphicon-chevron-down right';
			pointsMinusButton.id += 'minusPoint';
			
			pointsColumn.appendChild(pointsMinusButton);
			pointsColumn.appendChild(pointsAddButton);
			
			//Adds columns to row.
			row.appendChild(nameColumn);
			row.appendChild(pointsColumn);
			
			//Adds the card to page.
			document.getElementById('scoreboard').appendChild(row);
			
			//Clears input field.
			document.getElementById('playerNameInput').value = '';

		} else{
			 //If blank..
			 alert('Sorry. You cannot add more than 5 players at this time. Tweet me if you don\'t like it.');
		}
	} else{
		//If 5 cards already exist...
		alert("Please enter a name.");
 }
}

//Adds points to player cards.
function addPoint(playerCardClicked) {
  const point = document.createElement('span');
	point.innerHTML = "|";
	playerCardClicked.appendChild(point);
}

//Minuses points from player cards.
function minusPoint(playerCardClicked) {
	const lastPointAdded = playerCardClicked.querySelector('span:last-child');
	playerCardClicked.removeChild(lastPointAdded);
}


//Listens for adding of player name and runs printPlayerCards.
document.getElementById('addPlayerCard').addEventListener('click', printPlayerCards);

//Listen for points being added. The target event property returns the element that triggers the event! So e = whatever you clicked. 
document.addEventListener('click',function(e){
	const pointsButtonClicked = e.target;
	//console.log(whichPointsButton);  
	const playerCardClicked = pointsButtonClicked.parentElement;
	//console.log(whichPlayerCard);

  if(e.target && e.target.id == 'addPoint'){
			addPoint(playerCardClicked);
 	}
	
	if(e.target && e.target.id == 'minusPoint'){
			minusPoint(playerCardClicked);
 	}
});