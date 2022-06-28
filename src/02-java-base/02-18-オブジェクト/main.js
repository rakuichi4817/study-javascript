"use strict";

let user = new Object();
user.name = "Rakuichi";
user.gender = "man";
user.birthYear = 1995;
console.log(user);

let user2 = {name: "rakuichi",
gender: "man", birthYear: 1995};
console.log(user2);


// ドット記述法
console.log(user.birthYear);
console.log(user2.birthYear);

// ブラケット記法
console.log(user["name"]);

// キーの取得
console.log(Object.keys(user))

// 結合
let obj1 = { a: 1, b: 2, c: 3};
let obj2 = { d: 4, e: 5, c: 6};
let mergedObj = Object.assign(obj1, obj2);
console.log(mergedObj);

// オブジェクトメソッドの作成
// メソッドの追加
let user3 = {
    name: "rakuichi",
    gender: "man", 
    birthYear: 1995,
    calcAge: function(thisYear){
        return thisYear - this.birthYear;
    }
};
console.log(user3.calcAge(2022));