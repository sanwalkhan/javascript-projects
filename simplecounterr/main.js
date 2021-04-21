let counterDisplay = document.querySelector('.counter-display');
let counterMinus = document.querySelector('.counter-minus');
let counterPlus = document.querySelector('.counter-plus');

let count = 0;



counterPlus.addEventListener("click",()=>{
    count++;
    updateDisplay();
}) ;

counterMinus.addEventListener("click",()=>{
    if(count >= 1){
        count--
    }
    else{
        alert("Counter Should Above Zero")
    }
    updateDisplay();
});


function updateDisplay(){
    counterDisplay.innerHTML = count;
};