// document.getElementById("count-el").innerText = 88

let increment = document.querySelector("#increment-btn")
let displayCount = document.querySelector("#count-el")
let count = 0;

increment.addEventListener('click', add)

function add(){
    count ++;
    displayCount.innerHTML = count;
}


localStorage.setItem("increment", displayCount.value)