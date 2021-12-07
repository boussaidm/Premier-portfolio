var burger = document.querySelector('.burger');
var navbar = document.querySelector('.navbar')
burger.addEventListener('click', ()=> {
    navbar.classList.toggle('showNav')
    burger.classList.toggle('showNav')
})