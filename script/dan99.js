const two = 2;
let zero = 0;
let total = 0;
const number1 = document.querySelector('#number1')
const number2 = document.querySelector('#number2')
const btn = document.querySelector('#btn')
const answer = document.querySelector('.answer')
console.log (number1,number2,btn,answer)

btn.addEventListener('click',function(){
    total = two * zero
    console.log(total)
    answer.innerHTML=`${total}`
})