const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
function randomChars(){
return characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)] + characters[Math.floor(Math.random() * characters.length)]
}
let password1 = undefined
let password2 = undefined

let output1 = document.getElementById('output1')
output1.textContent = '__________________________________________________________'
let output2 = document.getElementById('output2')
output2.textContent = '__________________________________________________________'
function generatePasswords(){
    output1.textContent = randomChars()
    password1 = output1.textContent
    output2.textContent = randomChars()
    password2 = output2.textContent
    console.log(password1)
}
function copy1(){
     Clipboard.writeText(password1);
    
}
function copy2(){
     Clipboard.writeText(password2);
    
}
