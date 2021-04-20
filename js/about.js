const skillBtn = document.querySelector('footer .skills-btn');
const skills = document.querySelector('.skills');

skillBtn.addEventListener("click",function(){
    this.classList.toggle('active');
    skills.classList.toggle('active');
});