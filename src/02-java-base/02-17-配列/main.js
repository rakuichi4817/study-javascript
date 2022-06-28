'use strict';

// 初期化
let colors = ["Red", "Green", "Blue"];
console.log(colors);
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);


// データ型は自由
let arr = [1, "2", 3.0, ["a", "b"]];
console.log(arr);

// 個数
console.log(colors.length);

// 末尾の値を取得
console.log(colors[colors.length-1]);
// Nonetypeになる
console.log(colors[-1]);


// 空の配列
let empty_arr = [];
console.log(empty_arr);


// 末尾に追加
colors.push("Black");
console.log(colors);

// 先頭に追加
colors.unshift("White");
console.log(colors);

// 更新
colors[1] = "Aka";
console.log(colors);

// 指定した位置に1つ以上の値を挿入
let insertArr = ["a", "b", "c"];
insertArr.splice(1, 0, "d");
console.log(insertArr);

// 複数の場合
insertArr.splice(2, 0, "X", "Y", "Z");
console.log(insertArr);


// 指定した位置から削除
insertArr.splice(2, 3);
console.log(insertArr);

// 統合
let arr1 = ["a", "b", "c"];
let arr2 = ["d", "e"];
let mergedArr = arr1.concat(arr2);
console.log(mergedArr);
console.log(arr1);
console.log(arr2);

// 先頭を削除
let arr3 = ["a", "b", "c", "d"];
arr3.shift();
console.log(arr3);


// 末尾を削除
arr3.pop();
console.log(arr3);