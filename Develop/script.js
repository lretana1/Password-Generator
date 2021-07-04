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
