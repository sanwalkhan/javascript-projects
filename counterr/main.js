let count = 0;


const value = document.querySelector("#value")

const btns = document.querySelectorAll(".btn")

console.log(`btns`, btns)


btns.forEach(function (btn) {
    btn.addEventListener("click" , function(e){
        const classes = e.currentTarget.classList
        if(classes.contains("decrease")){
            count--;
        }
        else if(classes.contains("increase")){
            count++;
        }
        else{
            count = 0;
        }
        if (count < 0){
            value.style.color = "red";
        }
        else if (count > 0){
            value.style.color = "green";
        }
        else{
            value.style.color = " hsl(211, 39%, 23%)";
        }
        value.textContent = count
        })
});



