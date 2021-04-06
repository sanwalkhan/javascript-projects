const  daysE1  = document.getElementById("days") 
const  hoursE1  = document.getElementById("hour") 
const  minE1  = document.getElementById("min") 
const  secE1  = document.getElementById("sec") 




const givaway = "9 Apr 2021";

function countdown(){
const givawaydate = new Date(givaway);
const currentdate = new Date()


const seconds = (givawaydate - currentdate) /1000 

const days = Math.floor(seconds / 24 / 3600)


const hours = Math.floor (seconds / 3600 % 24 )

const minutes = Math.floor (seconds / 60) % 60

const secondss = Math.floor(seconds % 60)

console.log(days , hours , minutes , secondss)


daysE1.innerHTML = formatTime(days);
hoursE1.innerHTML = formatTime(hours);
minE1.innerHTML = formatTime(minutes)
secE1.innerHTML = formatTime(secondss)



}


function formatTime(time){
    return time < 10 ? `0${time}` : time
}


countdown()
setInterval(countdown , 1000)


