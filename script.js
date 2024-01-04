const passwordBox = document.getElementById("password");
const passwordLength = 12;
const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
const numberCharacters = "0123456789";
const symbolCharacters = "@#$%^&*()_+~<>{}[]!?/-|=";
const button = document.querySelector("button");
const copy = document.getElementById('copy')


const allCharacters =
  uppercaseCharacters +
  lowercaseCharacters +
  numberCharacters +
  symbolCharacters;
function generateRandomPassword() {
  let password = "";
  password +=
    uppercaseCharacters[Math.floor(Math.random() * uppercaseCharacters.length)];
  password +=
    lowercaseCharacters[Math.floor(Math.random() * lowercaseCharacters.length)];
  password +=
    numberCharacters[Math.floor(Math.random() * numberCharacters.length)];
  password +=
    symbolCharacters[Math.floor(Math.random() * symbolCharacters.length)];

  while (passwordLength > password.length) {
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }
  passwordBox.value = password;
}

button.addEventListener("click", generateRandomPassword);

function copyPassword(){
  passwordBox.select()
  document.execCommand("copy")
  alert(`Password ${passwordBox.value} copied!`)
}

copy.addEventListener('click',copyPassword)