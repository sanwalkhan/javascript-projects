const btn = document.getElementById("btn")

let result = document.getElementById("output")

btn.addEventListener("click" , function(){
    let words = document.getElementById("input").value;

    let str = words.replaceAll(/\s/g,'')
    let output = str.length;

    console.log(`output`, output)

    result.innerHTML = output;

    
})
