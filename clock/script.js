const display = document.getElementById("display");

// func
function getTime() {
  let now = new Date();
  let hrs = now.getHours();
  let mins = now.getMinutes();
  let secs = now.getSeconds();
  let period = "AM"

  // modifying into 12 hrs format
  if(hrs >= 12){
    period = "PM"
    hrs -= 12
  }
  if(hrs == 0) hrs = 12
  
  // Adding "0" if their is only one num
  hrs = hrs.toString().padStart(2, "0")
  mins = mins.toString().padStart(2, "0")
  secs = secs.toString().padStart(2, "0")

  time = `${hrs} : ${mins} : ${secs} ${period}`
  display.innerHTML = time
}

setInterval(getTime, 1000)