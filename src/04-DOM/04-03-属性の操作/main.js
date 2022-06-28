"use strict";

let btn = document.getElementById("triggerButton");
btn.addEventListener("click", function(e){
    // IDによるノード取得
    let inputColorName = document.getElementById("inputColorName");
    // 取得したinput要素の入力値を取得
    let colorNameText = inputColorName.value;
    // 取得したinput要素のname属性値を取得
    let inputName = inputColorName.getAttribute("name");
    // idがshowTextのp要素を取得
    let showText = document.getElementById("showText");
    // 出力
    showText.textContent = `name属性: ${inputName}, 入力された色: ${colorNameText}`
}, false)


// class属性を追加・更新（赤）
let setRedClassButton = document.getElementById("setRedClassButton");
setRedClassButton.addEventListener("click", function(e){
    let showText = document.getElementById("showText");
    showText.setAttribute("class", "red");
}, false);

// class属性を追加・更新（青）
let setBlueClassButton = document.getElementById("setBlueClassButton");
setBlueClassButton.addEventListener("click", function(e){
    let showText = document.getElementById("showText");
    showText.setAttribute("class", "blue");
}, false);

// class属性の削除
let removeClassButton = document.getElementById("removeClassButton");
removeClassButton.addEventListener("click", function(e){
    let showText = document.getElementById("showText");
    showText.removeAttribute("class");
}, false);