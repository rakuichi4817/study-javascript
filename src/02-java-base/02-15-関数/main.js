'use strict';

// 基本的な関数
function getRectangle(height, width) {
    return height * width;
}

console.log(getRectangle(3, 5))

// 関数リテラル
const rectangle = function(height, width) {
    return height * width;
}

console.log(rectangle(3, 5))

// Function()コンストラクター
const getRectangle2 = new Function('height', 'width', 'return height * width');

console.log(getRectangle2(3, 5))

// アロー関数
const getRectangle3 = (height, width) => {
    return height * width;
}

console.log(getRectangle3(3, 5))

// callback関数
const displayMessage = function() {
    console.log("Timeout!");
}
setTimeout(displayMessage, 3000);