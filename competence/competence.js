 var btnFront = document.querySelector('.btn_front');
var btnBack = document.querySelector('.btn_back');
var btnMaq = document.querySelector('.btn_maq');
var compFront = document.querySelector('.front');
var compBack = document.querySelector('.back');
var compMaq = document.querySelector('.maquette');

//clique sur le bouton front-end
btnBack.addEventListener('click', ()=> {
    compFront.style.transform = 'translateY(-337%)';
    compMaq.style.transform = 'translate(276%, -74px)';
    compBack.style.transform = 'translateX(0)';
})

//Clique sur le bouton back-end
btnFront.addEventListener('click', ()=> {
    compMaq.style.transform = 'translate(276%, -74px)';
    compBack.style.transform = 'translateX(-300%)';
    compFront.style.transform = 'translateY(106px)';
})

//Clique sur le bouton maquette
btnMaq.addEventListener('click', ()=> {
    compFront.style.transform = 'translateY(-337%)';
    compBack.style.transform = 'translateX(-300%)';
    compMaq.style.transform = 'translate(0, -74px)';
})