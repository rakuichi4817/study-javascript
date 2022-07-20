"use strict";

// イベントハンドラ
function keyUp(e) {
    // console.log("keyUp");
    // console.log(inputText.value);
    // 入力された値を取得する
    let str = inputText.value;
    str = str.replace(/\r?\n/g, "");
    // 残り文字数
    let num = 10 - str.length;
    console.log(num);
    // 文字数表示部分の要素を取得
    const characterCount = document.getElementById("characterCount");
    // 残り文字数をセット
    characterCount.textContent = num;

    // 残り文字数表示部分のp要素を取得
    const characterCountWrap = document.getElementById("characterCountWrap");
    // 文字数の設定
    if(num >= 0) {
        characterCountWrap.style.color = "black";
    } else {
        characterCountWrap.style.color = "red";
    }
}

const inputText = document.getElementById("inputText");
inputText.addEventListener("keyup", keyUp, false);