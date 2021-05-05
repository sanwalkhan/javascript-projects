let day_number = document.getElementById("day");
let date_number = document.getElementById("date");

let d = new Date();
let day = d.getDay();
let date = d.toLocaleString();

switch (day) {
  case 0:
    day = "sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

day_number.innerHTML = day;
date_number.innerHTML = date