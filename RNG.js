let button = document.querySelector('button');
let body = document.querySelector('body');
let number = document.querySelector('.number');

button.addEventListener('click',()=>{
    const numbers = [1,2,3,4,5,6,7,8,9,0];

    for(let i = 0; i < 2; i++){
        const randomNumber = Math.floor(Math.random()*numbers.length)
        const getNumber = numbers[randomNumber]
        result = getNumber
    }
    number.textContent = result;
})
