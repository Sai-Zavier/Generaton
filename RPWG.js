const lengthInput = document.getElementById("length");
const uppercaseInput = document.getElementById("uppercase");
const lowercaseInput = document.getElementById("lowercase");
const numbersInput = document.getElementById("numbers");
const symbolsInput = document.getElementById("symbols");
const generateButton = document.getElementById("generate");
const passwordInput = document.getElementById("password");
const copyButton = document.getElementById("copy");

const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=[]{};:'\"\\|,.<>/?`~";


generateButton.addEventListener("click", function () {
  // Get user preferences from inputs
let length = parseInt(lengthInput.value);
let uppercase = uppercaseInput.checked;
let lowercase = lowercaseInput.checked;
let numbers = numbersInput.checked;
let symbols = symbolsInput.checked;


if (isNaN(length) || length < 4 || length > 20) {
    alert("Please enter a valid password length (4-20)");
    return;
}

if (!uppercase && !lowercase && !numbers && !symbols) {
    alert("Please select at least one character type");
    return;
}

let password = "";
let charSet = "";


if (uppercase) charSet += uppercaseChars;
if (lowercase) charSet += lowercaseChars;
if (numbers) charSet += numberChars;
if (symbols) charSet += symbolChars;


for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
}


passwordInput.value = password;
});
