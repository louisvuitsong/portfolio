function common(){
    function func(){
        
        const menuBtn = document.querySelector('.menu-trigger');
        const menu = document.querySelector('.menu');
        const navBtn = document.querySelectorAll('.menu_nav a');
        const header = document.querySelector('header');

        menuBtn.addEventListener('click',function(){
            menuBtn.classList.toggle('active');
            menu.classList.toggle('active');
            header.classList.toggle('active');
        });

        navBtn.forEach(function(Link){
            Link.addEventListener("click",function(){
                menu.classList.toggle('active');
            });
        });

        
    }
    window.addEventListener('DOMContentLoaded',func);   
}
export default common;