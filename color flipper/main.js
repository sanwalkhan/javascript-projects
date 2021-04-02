const colors = ["#00b894" , "#00b894" , "#e17055" , "#a29bfe" , "#6c5ce7" , "#d63031" , "#fd79a8" ,  "#2d3436" , "#FFC312" , "#833471" , "#009432"];

const btn = document.querySelector(".btn")
const color =document.querySelector(".color")

btn.addEventListener("click", function(e){
    const randNum = Math.floor (Math.random() * colors.length)
    console.log(`randNum`, randNum)

    document.body.style.backgroundColor = colors [randNum]

    color.textContent = colors[randNum]

    btn.style.backgroundColor = colors [ randNum]

    btn.addEventListener("mouseover", function(e){
        btn.style.backgroundColor = "black"
    })
})