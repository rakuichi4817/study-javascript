'use strict';

// 例1：3秒待って文字を表示する
const displayMessage = function() {
    console.log("Timeout!");
}
setTimeout(displayMessage, 3000);

// 例2：入力が完了した場合

//  コールバック関数を作成する
function greeting(name){
    console.log("Hello!" + name + "-san");
}

function inputUserName(callback) {
    let name = prompt("あなたのお名前を入力してください");
    callback(name);
}

inputUserName(greeting);