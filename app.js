const passwordInput = document.querySelector("#password");
const passwordLength = document.querySelector("#length");
const uppercaseXter = document.querySelector("#uppercase");
const lowercaseXter = document.querySelector("#lowercase");
const numbers = document.querySelector("#numbers");
const symbols = document.querySelector("#symbols");
const passwordBtn = document.querySelector("#generate");
const copyBtn = document.querySelector("#copy");

const lowercase = "abcdefgijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const allNumbers = "0123456789";
const allSymbols = "~!@#$%^&*_-+=:;<,>.?";

const generatePassword = () => {
  let password = "";
  let length = passwordLength.value;
  let chars = "";

  chars += uppercaseXter.checked ? uppercase : "";
  chars += lowercaseXter.checked ? lowercase : "";
  chars += numbers.checked ? allNumbers : "";
  chars += symbols.checked ? allSymbols : "";

  for (let i = 0; i <= length; i++) {
    let random = Math.floor(Math.random() * chars.length);
    password += chars.substring(random, random + 1);
    passwordInput.value = password;
  }

  if (passwordInput.value === "") {
    alert("Select at least one character type.");
  }
};

const copyPassword = () => {
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(passwordInput.value)
      .then(function () {
        alert("Password copied to clipboard");
      })
      .catch(function (error) {
        console.error("Unable to copy to clipboard", error);
      });
  }
};

passwordBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);
