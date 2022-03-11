// Create arrays for each type of character available for user to select
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numberChar  = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialChar = [",", ".", "!", "@", "#", "$", "%", "&", "*", "_", "-", "<", ">", "?", "/"];

// Create array for generator to select random characters from each category
const randomChars = [
  getRandomLower(),
  getRandomUpper(),
  getRandomNumber(),
  getRandomSymbol(),
];

// Variables to confirm character
var randomLower = false;
var randomUpper = false;
var randomNumber = false;
var randomSymbol = false;
var randomConfirm = 0;

// Functions to generate new characters based on user's specified password length
function getRandomLower() {
  randomConfirm = Math.floor(Math.random() * lowerCase.length);

  return lowerCase[randomConfirm];
};

function getRandomUpper() {
  randomConfirm = Math.floor(Math.random() * upperCase.length);

  return upperCase[randomConfirm];
};

function getRandomNumber() {
  randomConfirm = Math.floor(Math.random() * numberChar.length);

  return numberChar[randomConfirm];
};

function getRandomSymbol() {
  randomConfirm = Math.floor(Math.random() * specialChar.length);

  return specialChar[randomConfirm];
};

//Functions to get user input to add upper and lower case characters, numbers, and special characters
function setRandomLower(){
  randomLower = confirm("Would you like to add lowercase characters?");
};

function setRandomUpper(){
  randomUpper = confirm("Would you like to add uppercase characters?");
};

function setRandomNumber(){
  randomNumber = confirm("Would you like to add number characters?");
};

function setRandomSymbol(){
  randomSymbol = confirm("Would you like to add special symbol characters?");
};

// Function to ask user to select characters and length for password
function getChoices() {
  setRandomLower();
  setRandomUpper();
  setRandomNumber();
  setRandomSymbol();
};

function passwordLength() {
  var howLong = prompt("Please choose the number of characters that you would like for your password, between 8 and 128 characters.");

  while(howLong < 8 || howLong > 128 || howLong === null || isNaN(howLong)){
    howLong = prompt("Sorry!! That number is not within 8 and 128 characters. Please try again.");
  }

  return howLong;
};

// Function to generate password from user's selected criteria
function generatePassword() {
  // length
  var passLength = passwordLength();
  var password = "";

  // User criteria 
  getChoices();

  //Loop iterates over criteria entered by user and chooses random number between 0-3 for switch cases 
  for(var i = 0; i < passLength; i++) {
    
    var rand = Math.floor(Math.random()*randomChars.length);

    switch(rand){
      case 0:
        if(randomLower) {
          password += getRandomLower();
          break;
        } else {
          i--;
          break;
        }
      case 1:
        if(randomUpper){
          password += getRandomUpper();
          break;
        } else {
          i--;
          break;
        }
      case 2:
        if(randomNumber){
          password += getRandomNumber();
          break;
        } else {
          i--;
          break;
        }
      case 3:
        if(randomSymbol){
          password += getRandomSymbol();
          break;
        } else {
          i--;
          break;
        }
      default:
        i--;
        break;
    }
  }
  return password;
};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);