"use strict";
var images = ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg', 'images/image4.jpg', 'images/image5.jpg'];
// 初期化
var current = 0;
var prevButton = document.getElementById('prev');
var nextButton = document.getElementById('next');
var mainImage = document.getElementById('main_image');
var pageNum = document.getElementById('page');

function changePageNum() {
    pageNum.textContent = (current + 1) + '/' + images.length;
}

function changeImage(num) {
    if(current + num >= 0 && current + num < images.length) {
        current += num;
        mainImage.src = images[current];
        changePageNum();
    }
};

prevButton.onclick = function() {
    changeImage(-1);
}

nextButton.onclick = function() {
    changeImage(1);
}

// main_imageを押したら最初のページに戻る
mainImage.onclick = function() {
    mainImage.src = images[0];
    current = 0;
    pageNum.textContent = (current + 1) + '/' + images.length;
}

changePageNum();
