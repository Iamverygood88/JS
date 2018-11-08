(() => {
	// simple JS file
	console.log('fired! or loaded... whatever');

	var choices = ["Rock", "Paper", "Scissors"];
	var computer; 
	var player = document.querySelector ("#weapon");
	var trigger = document.querySelector("#play");
	var status = document.querySelector(".winlose");

	function playGame() {

		// make the computer choose a random weapon
		computer = choices[Math.floor(Math.random() * choices.length)]; 

		var player_choice = player.value;

		if(computer.toLowerCase() === player_choice.toLowerCase()) {
			status.textContent = "Tie! You live to shoot another day."; 
		}
		else if ( player_choice.toLowerCase() == "rock") {
			if (computer.toLowerCase() === "scissors") {

				status.textContent = `Win! ${player_choice} beats ${computer}.`;

			} else {

				status.textContent = `Lose! ${computer} beats ${player_choise}.`; 

			}

		}

		else if ( player_choice.toLowerCase() == "Paper") {
			if (computer.toLowerCase() === "rock") {

				status.textContent = `Win! ${player_choice} beats ${computer}.`;

			} else {

				status.textContent = `Lose! ${computer} beats ${player_choise}.`; 

			}

		}


		else if ( player_choice.toLowerCase() == "scissors") {
			if (computer.toLowerCase() === "paper") {

				status.textContent = `Win! ${player_choice} beats ${computer}.`;

			} else {

				status.textContent = `Lose! ${computer} beats ${player_choise}.`; 

			}

		}

		else {
			player.value = ""; 
			alert("You didn't pick a valid weapon... try again");

		}
	}

    trigger.addEventListener("click", playGame);
})();