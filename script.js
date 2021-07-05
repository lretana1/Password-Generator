// Assignment code here
let generatePassword = function(){
	
	let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let lowercase = "abcdefghijklmnopqrstuvwxyz";
	let numbers = "0123456789"
	let symbols = "!@#$%^&*()_+-=;:<>,.?"
	let passwordCharacters = ""
	
	let password = ""
  
  let len = parseInt(window.prompt("Enter the length of the password (8 - 128): "));
	while (len > 128 || len < 8){
		len = window.prompt("Entered invalid number, please enter the length of the password (8 - 128): ");
	}

	let low = window.prompt("Use lowercase? ('y' or 'n'): ").toLowerCase();
	while (low != "y" && low != "n"){
		low = window.prompt("Entered invalid input, Use lowercase? ('y' or 'n'): ").toLowerCase();
	}
  let upp = window.prompt("Use uppercase? ('y' or 'n'): ").toLowerCase();
	while (upp != "y" && upp != "n"){
		upp = window.prompt("Entered invalid input, Use uppercase? ('y' or 'n'): ").toLowerCase();
	}

	let num = window.prompt("Use numbers? ('y' or 'n'): ").toLowerCase();
	while (num != "y" && num != "n"){
		num = window.prompt("Entered invalid input, Use numbers? ('y' or 'n'): ").toLowerCase();
	}

	let spe = window.prompt("Use special characters? ('y' or 'n'): ").toLowerCase();
	while (spe != "y" && spe != "n"){
		spe = window.prompt("Entered invalid input, Use special characters? ('y' or 'n'): ").toLowerCase();
	}
  
  if (low == 'y' || upp == 'y' || num == 'y' || spe == 'y'){
		if (low == 'y'){
			passwordCharacters += lowercase;
		}
		if (upp == 'y'){
			passwordCharacters += uppercase;
		}
		if (num == 'y'){
			passwordCharacters += numbers;
		}
		if (spe == 'y'){
			passwordCharacters += symbols;
		}
		for(let x = 0; x < len; x++){
			rand = Math.floor(Math.random() * passwordCharacters.length);
			password += passwordCharacters.charAt(rand)
		}
		return password;
	}
	else{
		alert("Please select atleast one character type. Try Again");
		generatePassword();
	}

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
