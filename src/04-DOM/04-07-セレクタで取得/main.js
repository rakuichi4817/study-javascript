"use strict";

let btn = document.getElementById("triggerButton");
btn.addEventListener("click", function(e){
    let element = document.querySelector(".foo");
    console.log(element);
    console.log(element.textContent);

    let elements = document.querySelectorAll(".foo");
    console.log(element);
    for(let element of elements){
        console.log(element.textContent);
    }
}, false)
