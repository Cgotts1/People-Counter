// document.getElementById("count-el").innerText = 88

let increment = document.querySelector("#increment-btn")
let displayCount = document.querySelector("#count-el")
let saveBtn = document.querySelector("#save-btn")
let saveEL = document.querySelector("#save-el")

let count = 0;   //starts the counter off at 0


increment.addEventListener('click', add)
function add(){
    count ++;                           //adds count by 1
    displayCount.innerHTML = count;      // displays the count
}


saveBtn.addEventListener('click', save)
function save(){
    let countDash = count + " - ";
    saveEL.innerHTML += countDash;      // += keeps adding to the counting log
    count = 0;                       //resets count to 0 so it can start from there next time
    displayCount.innerHTML =  0;     // resets the display to 0
}