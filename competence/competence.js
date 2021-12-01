 var btnFront = document.querySelector('.btn_front');
// var btnBack = document.querySelector('.btn_back');
// var btnMaq = document.querySelector('.btn_maq');
var compFront = document.querySelector('.front');
var compBack = document.querySelector('.back');
var compMaq = document.querySelector('.maquette');

//clique sur le bouton front-end
btnFront.addEventListener('click', ()=> {
    //compBack.style.transform = 'translateY(-200%)';
    //compMaq.style.transform = 'translateX(200%)';
    compFront.style.transform = 'translateX(0em)';
})

// //Clique sur le bouton back-end
// btnBack.addEventListener('click', ()=> {
//     compMaq.style.transform = 'translateX(200%)';
//     compFront.style.transform = 'translateX(-200%)';
//     compBack.style.transform = 'translateY(0)';
// })

// //Clique sur le bouton maquette
// btnMaq.addEventListener('click', ()=> {
//     compBack.style.transform = 'translateY(-200%)';
//     compFront.style.transform = 'translateX(-200%)';
//     compMaq.style.transform = 'translateX(-100%)';
// })