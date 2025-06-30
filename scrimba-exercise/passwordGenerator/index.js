const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
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
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let generateBtn = document.querySelector(".generate-btn");
let againBtn = document.querySelector(".again-btn");
let resetBtn = document.querySelector(".reset-btn");
let passwordBox1 = document.querySelector(".password-box-1");
let passwordBox2 = document.querySelector(".password-box-2");
let input = document.querySelector("#input-el");

let passwordLength;

// how to make passwordLength a chosbale variable. like i can set the length of password. 

function getRandomCharacter() {
  let randomNum = Math.floor(Math.random() * characters.length);
  return characters[randomNum];
}

function generateRandomPassword1() {
  let password = "";

  // if (input.value === ""){
  //   passwordLength = 15;
  // } else {
  //   passwordLength = input.value;
  // }
  // input.value=""
  
  for (let i = 0; i < passwordLength; i++) {
    password += getRandomCharacter();
    console.log(password);
  }
  passwordBox1.textContent = password;
}

function generateRandomPassword2() {
  let password = "";
  //  if (input.value === ""){
  //   passwordLength = 15;
  // } else {
  //   passwordLength = input.value;
  // }
  // input.value="";

  for (let i = 0; i < passwordLength; i++) {
    password += getRandomCharacter();
    console.log(password);
  }

  passwordBox2.textContent = password;
}

function generateRandomPassword() {
 if (input.value === ""){
    passwordLength = 15;
  } else {
    passwordLength = input.value;
  }
  input.value="";


  generateRandomPassword1();
  generateRandomPassword2();
}

function resetPassword() {
  password = "";
  passwordBox1.textContent = password;
  passwordBox2.textContent = password;
}

generateBtn.addEventListener("click", generateRandomPassword);
againBtn.addEventListener("click", generateRandomPassword);
resetBtn.addEventListener("click", resetPassword);
