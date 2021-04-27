export default function about() {
    setTimeout(funA,500);
    function funA() {
        const skillBtn = document.querySelector('.skills_btn');
        const skills = document.querySelector('.skills');

        skillBtn.addEventListener('click',function(){
            this.classList.toggle('active');
            skills.classList.toggle('active');
        });
    }
}