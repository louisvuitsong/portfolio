export default function work(){
    setTimeout(fun,300);

    function fun() {
        
        const moreBtn = document.querySelector('main .more');
        const backBtn = document.querySelector('.cover .back_btn');
        const moreDetail = document.querySelector('main > div .more_detail');
    
        moreBtn.addEventListener('click',function(){
            moreDetail.classList.add('active');
        });
    
        backBtn.addEventListener('click',function(){
            moreDetail.classList.remove('active');
        });

        const navBtn = document.querySelectorAll('.work_main nav a');

        navBtn.forEach(function(event){
            event.addEventListener('click',function(event){
                removeClass();
                this.classList.add('active');
            });
        })

        function removeClass(){
            navBtn.forEach(function(e){
                e.classList.remove('active');
            })
        }
    }
}