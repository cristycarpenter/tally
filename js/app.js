
//Function: appends submitted names to cards.

function appendPlayerOne(){
	
	 const playerOneName = document.getElementById('playerOneInput').value;
	
	 if (playerOneName !== ''){
		 
			document.getElementById('playerOneName').textContent = playerOneName;
			document.getElementById('playerOneInput').style.display = 'none';
			document.getElementById('playerOneSave').style.display = 'none';
		 
		} else{
			
			alert("Please enter a name.");
			
		}
	
}




//Execute on click.
document.getElementById('playerOneSave').addEventListener('click', appendPlayerOne);






//How do I not repeat this??????? 