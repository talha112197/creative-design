let btns = document.querySelectorAll('.open-btn');
let scrollBtn = document.querySelector('.scroll-to-top');
for(let btn of btns) {
    btn.addEventListener('click' , () => {
       btn.previousElementSibling.classList.toggle('show');
       btn.firstChild.classList.toggle('animate');
    });
}

scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('visible', window.scrollY > 200);
});


