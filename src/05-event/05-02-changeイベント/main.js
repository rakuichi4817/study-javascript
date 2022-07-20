"use strict";

function handleChange() {
    const checkAll = document.getElementById("checkAll");

    const checkBoxes = document.getElementsByName("player");

    for(const checkBox of checkBoxes){
        checkBox.checked = checkAll.checked;
    }
}

checkAll.addEventListener("change", handleChange, false)