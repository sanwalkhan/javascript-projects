const meter = document.getElementById("meter")

const foot = document.getElementById("foot")

foot.addEventListener("click" , HeightFeet)

meter.addEventListener("click" , HeightMeter)

function HeightMeter(){
   let input = document.getElementById("input").value

   var result = (input * 0.3048 + " "+"meter")

  

   document.getElementById("output").innerHTML = result
}


function HeightFeet(){

    let input = document.getElementById("input").value

   var result = (input  / 3.281 + " " +" Foot");

   document.getElementById("output").innerHTML = result;

}
