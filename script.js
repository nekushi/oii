let mainContainer = document.querySelector('.container');
let center = document.querySelector('.hover-me');
let sub1 = document.querySelector('.sub1');
let sub2 = document.querySelector('.sub2');
let sub3 = document.querySelector('.sub3');
let close = document.querySelector('.close');

function elevate() {
    center.style.fontSize = "2rem";
    sub1.style.fontSize = "1rem";
    sub2.style.fontSize = "1rem";
    sub3.style.fontSize = "1rem";
    sub1.style.top = "-50%";
    sub1.style.left = "175%";
    sub2.style.left = "200%";
    sub3.style.top = "150%";
    sub3.style.left = "175%";
    close.style.left = "-75%";
    close.style.fontSize = "1rem";
}
function release() {
    center.style.fontSize = "0rem";
    sub1.style.top = "50%";
    sub1.style.left = "50%";
    sub2.style.left = "50%";
    sub3.style.top = "50%";
    sub3.style.left = "50%";
    close.style.left = "50%";
    close.style.fontSize = "1px";
}