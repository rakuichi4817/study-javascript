"use strict";

// +演算子で結合
let lastName = "イニエスタ";
let firstName = "アンドレス";
let message1 = "こんにちは" + firstName + "・" + lastName
console.log(message1);

// テンプレートリテラル
let message2 = `こんにちは ${firstName} ${lastName}
降格圏から脱出しましょう`
console.log(message2)