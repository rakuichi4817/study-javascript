"use strict";

let btn = document.getElementById("triggerButton");
btn.addEventListener("click", function(e){
    let elements = document.getElementsByTagName("p");
    console.log(elements);

    for(let element of elements){
        console.log(element.textContent);
    }
}, false)
