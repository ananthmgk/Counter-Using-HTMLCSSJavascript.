const counter = document.querySelector('.counter');
const increment = document.querySelector('.increment');
const decrement = document.querySelector('.decrement');
let count=0;
increment.addEventListener("click", ()=>{
    count=count+1;
    counter.innerHTML= count;
});

decrement.addEventListener("click", ()=>{
    count=count-1;
    counter.innerHTML= count;
});