var front = document.querySelector('.front_end');
var front_show = document.querySelector('.front_show');
var fleche = document.querySelector('.fleche');
var turn = document.querySelector('.fleche_turn');
var html = document.querySelector('.progression_html');
var css = document.querySelector('.progression_css');
var js = document.querySelector('.progression_js');

fleche.addEventListener('click', () => {
    front.classList.toggle('front_show');
    fleche.classList.toggle('fleche_turn');
    setTimeout(function progress() {

        html.style.width = '90%';
        css.style.width = '90%';
        js.style.width = '50%';

    }, 250);
})