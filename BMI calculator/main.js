
const btn = document.getElementById("btn")

btn.addEventListener("click" , BMICALCULATOR)




function BMICALCULATOR(){

  
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

     final_bmi = (weight/(height*height)*10000).toFixed(2)

    document.getElementById("bmi").innerHTML = final_bmi


if( final_bmi <=18.5){
    document.getElementById("strong").innerHTML = "UnderWeight"
}
else if( final_bmi <=24.9){
    document.getElementById("strong").innerHTML = "normal";
}

else if(final_bmi <=29.9 ){
    document.getElementById("strong").innerHTML = "OverWeight";
}
else {
    document.getElementById("strong").innerHTML = "Obese"
}

}