// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function randomNum(min, max) {
  if (!max) {
    max = min;
    min = 0;
  }
  var rand = Math.random();
  return Math.floor(min * (1 - rand) + rand * max);
}
function randomItem(list) {
  return list[randomNum(list.length)];
}

function generatePassword() {
  var Input = window.prompt("Hello! Enter a password length between 8 - 128");
  var characterAmount = parseInt(Input);

  if (isNaN(characterAmount)) {
    window.alert("Please input a number.");
    return;
  }
  if (characterAmount < 8 || characterAmount > 128) {
    window.alert("Must be a number between 8 - 128.");
    return;
  }
  var numbers = window.confirm("Do you want numbers in your password?");
  var symbols = window.confirm("Do you want special symbols in your password?");
  var lowerCase = window.confirm(
    "Do you want lower case letters in your password?"
  );
  var upperCase = window.confirm(
    "Do you want upper case numbers in your password?"
  );
  var numbersList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var symbolsList = ["!", "#", "&", "%", ")", "*"];
  var alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var upperCaseAlph = [];

  var options = [];

  for (var i = 0; i < alphabet.length; i++) {
    upperCaseAlph[i] = alphabet[i].toUpperCase();
  }
  if (numbers) {
    options.push(numbersList);
  }
  if (lowerCase) {
    options.push(alphabet);
  }
  if (upperCase) {
    options.push(upperCaseAlph);
  }
  if (symbols) {
    options.push(symbolsList);
  }
  if (options.length === 0) {
    options.push(alphabet);
  }
  var newPassword = "";
  for (var i = 0; i < characterAmount; i++) {
    var randomLists = randomItem(options);
    var randomChar = randomItem(randomLists);
    newPassword += randomChar;
  }
  return newPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
