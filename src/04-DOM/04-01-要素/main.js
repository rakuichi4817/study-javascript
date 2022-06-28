"use strict";

let btn = document.getElementById("triggerButton");
btn.addEventListener("click", function(e){
    // alert("clicked!");
    let headerTitle = document.getElementById("headerTitle");
    console.log(headerTitle.textContent);
}, false)