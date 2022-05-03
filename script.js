let body = document.querySelector("body");

let divContain = document.querySelector(".divContain");


let h1 = document.querySelector("h1");
let divItem = document.querySelectorAll(".item");
let darkButton = document.querySelector(".iconSun");

darkButton.addEventListener("click", () => {
    body.classList.toggle("darkBody");
    h1.classList.toggle("darkH1");
    divContain.classList.toggle("darkContain");
    darkButton.classList.toggle("darkmode");

    for(let i = 0; i < divItem.length; i++) {
        divItem[i].classList.toggle("darkItem");
    }
})