const characters = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
  "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];


let displayBtnOne = document.getElementById("display-psw-one")
let displayBtnTwo = document.getElementById("display-psw-two")

function generatePassword(){
  
  let passwordOne = ""
  let passwordTwo = ""
  
  let passwordLength = 15
  
  for (let i = 0; i<passwordLength; i++){
    passwordOne += characters[Math.floor(Math.random()*characters.length)]
    passwordTwo += characters[Math.floor(Math.random()*characters.length)]
  }
  
  displayBtnOne.textContent = passwordOne
  displayBtnTwo.textContent = passwordTwo

}