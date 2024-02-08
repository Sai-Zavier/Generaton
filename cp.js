let button = document.querySelector('button');
let body = document.querySelector('body');
let code = document.querySelector('.code');

button.addEventListener('click',()=>{
    const hexCode = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let hexSign = "#";

    for(let i = 0; i < 6; i++){
        const randomCode = Math.floor(Math.random()*hexCode.length)
        const getHexCode = hexCode[randomCode]
        hexSign = hexSign + getHexCode
    }
    body.style.backgroundColor = hexSign;
    code.textContent = hexSign;
})
