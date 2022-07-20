"use strict";

const imageUrls = [
    {src: "https://www.vissel-kobe.co.jp/profile/2022/images/yoshida02.jpg", description: "吉田 孝之"},
    {src: "https://www.vissel-kobe.co.jp/profile/2022/images/18_Hiroki-IIKURA_MJ.jpg", description: "飯倉 大樹"},
    {src: "https://www.vissel-kobe.co.jp/profile/2022/images/24_Gotoku-SAKAI_MJ.jpg", description: "酒井 高徳"},
    {src: "https://www.vissel-kobe.co.jp/profile/2022/images/06_SERGI-SAMPER_MJ.jpg", description: "セルジ サンペール"},
    {src: "https://www.vissel-kobe.co.jp/profile/2022/images/08_ANDRES-INIESTA_MJ.jpg", description: "アンドレス イニエスタ"},
];

// メイン画像の初期値を設定
let image = document.createElement("img");
image.setAttribute("src", imageUrls[0].src);
image.setAttribute("alt", imageUrls[0].description);

// 説明の初期値を設定
let description = document.createElement("p");
description.textContent = image.alt;

// 作成した要素の表示
let mainImage = document.getElementById("main_image");
mainImage.insertBefore(image, null); // 指定した要素の前に導入（nullの場合は末尾）
mainImage.insertBefore(description, null);

// サムネイル画像の表示
let thumnails = document.getElementById("thumnails");
for(let i = 0; i < imageUrls.length; i++){
    let thumnailImage = document.createElement("img");
    thumnailImage.setAttribute("src", imageUrls[i].src);
    thumnailImage.setAttribute("alt", imageUrls[i].description);
    thumnails.insertBefore(thumnailImage, null);

}

// クリックしたサムネイル画像をメイン画像に設定する
thumnails.addEventListener("click", function(e) {
    if(e.target.src){
        image.src = e.target.src;
        description.textContent = e.target.alt;
    }
}, false)