const menuBtn = document.querySelector('.menu-trigger');
const menu = document.querySelector('.menu');

menuBtn.addEventListener("click",function(){
    this.classList.toggle('active');
    menu.classList.toggle('active');
});