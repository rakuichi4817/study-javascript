"use strict";

for(let i = 1; i<=3; i++){
    console.log(i);
}

let arr = ["a", "b", "c"];
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

// while処理
let i = 1;
while(i <= 3) {
    console.log(i);
    i++;
}

// do while文
let j = 1;
do {
    console.log(j);
    j++;
} while(j <= 3);

// forEach文
let colors = ["Red", "Green", "Blue"];

for(let i = 0; i < colors.length; i++){
    console.log(colors[i]);
};

// 同等の処理をforEach文で書く
colors.forEach(function(color){
    console.log(color);
});

//for of文
for(let color of colors){
    console.log(color);
}
