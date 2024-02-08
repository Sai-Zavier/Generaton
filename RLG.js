let button = document.querySelector('button');
let body = document.querySelector('body');
let letter = document.querySelector('.letter');

button.addEventListener('click',()=>{
    const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    for(let i = 0; i < 2; i++){
        const randomLetter = Math.floor(Math.random()*letters.length)
        const getLetter = letters[randomLetter]
        result = getLetter
    }
    letter.textContent = result;
})


