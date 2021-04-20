'use strict';
const nav = document.querySelectorAll('main > nav a');
const projects = document.querySelectorAll('main > div');

nav[0].addEventListener("click",function(){
    removeClass();
    projects[0].classList.add('active');

})
nav[1].addEventListener("click",function(){
    removeClass();
    projects[1].classList.add('active');

})
nav[2].addEventListener("click",function(){
    removeClass();
    projects[2].classList.add('active');

})
function removeClass(){
    projects.forEach((e) => {
        e.classList.remove('active');
    });
}

const moreBtn = document.querySelectorAll('main > div .summary figcaption > span ');
const dior = document.querySelector('.dior');
const fuoripista = document.querySelector('.fuoripista');
const backBtn = document.querySelectorAll('.cover .back_btn')


moreBtn[0].addEventListener("click",function(){
    dior.classList.add('active');

})

backBtn[0].addEventListener("click",function(){
    dior.classList.remove('active');

})

moreBtn[1].addEventListener("click",function(){
    fuoripista.classList.add('active');
})

backBtn[1].addEventListener("click",function(){
    fuoripista.classList.remove('active');

})