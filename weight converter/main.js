 const bodyweight = document.getElementById("weight")

 const pound = document.getElementById("pound")
 
pound.addEventListener("click" , weightpound)

bodyweight.addEventListener("click" , weightkg)

function weightkg(){
    let input = document.getElementById("input").value

    var result = (input/2.205 + " "+"KG")

   

    document.getElementById("output").innerHTML = result
}


function weightpound(){
    let input = document.getElementById("input").value

    var result = (input * 2.205 + " " +" Pound");

    document.getElementById("output").innerHTML = result;
}
