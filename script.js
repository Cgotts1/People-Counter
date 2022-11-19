// document.getElementById("count-el").innerText = 88

let increment = document.querySelector("#increment-btn")
let displayCount = document.querySelector("#count-el")
let saveBtn = document.querySelector("#save-btn")
let saveEL = document.querySelector("#save-el")

let count = 0;

increment.addEventListener('click', add)

function add(){
    count ++;
    displayCount.innerHTML = count;
}

saveBtn.addEventListener('click', save)


function save(){
    let countDash = count + " - "
    saveEL.innerHTML += countDash
    console.log(count)
}