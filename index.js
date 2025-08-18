const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordBtn1 = document.getElementById("password-btn1")
let passwordBtn2 = document.getElementById("password-btn2")
let hasPassword1 = false
let hasPassword2 = false

function generatePasswords() {
    getRandomCharacter1()
    getRandomCharacter2()
}

function getRandomCharacter1() {
    if (hasPassword1 === false) {
        for (i = 0; i < 15; i++) {
                let randomIndex = Math.floor(Math.random() * characters.length)
                passwordBtn1.textContent += characters[randomIndex]
                hasPassword1 = true
            }
        }
}

function getRandomCharacter2() {
    if (hasPassword2 === false) {
        for (i = 0; i < 15; i++) {
                let randomIndex = Math.floor(Math.random() * characters.length)
                passwordBtn2.textContent += characters[randomIndex]
                hasPassword2 = true
            }
        }
}
