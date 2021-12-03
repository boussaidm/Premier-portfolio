//Apparition du texte "a propos de moi"

window.addEventListener('scroll', () => {

    var trans = document.querySelector('.ma_presentation');
    var hauteurFenetreP = window.innerHeight;
    var hauteurScrollP = window.scrollY;
    var hauteurBodyP = document.body.offsetHeight;

    // console.log(hauteurBody)
    var scrollValueP = (hauteurFenetreP + hauteurScrollP) / hauteurBodyP
    console.log(scrollValueP);

    if (scrollValueP > 0.37) {
        console.log('vasy')
            trans.style.transform = 'translateX(0)';
            trans.style.opacity = "1";
            trans.style.transition = 'all 1.5s ease-in-out';

        

    }
})