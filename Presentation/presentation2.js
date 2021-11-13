//Apparition du texte "a propos de moi"
window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    var niveauScroll = window.scrollY;
    var trans = document.querySelector('.trans');
    if (niveauScroll >= 342) {
        console.log('salut');
        trans.style.transform = 'translateX(0)';
        trans.style.transition = '0.8s ease-in-out';
    } else {
        trans.style.transform = 'translateX(-100%)';
    }
})