//apparition des titres projets
var impair = document.querySelectorAll('h2.titre_projet_impair');
var pair = document.querySelector('.titre_projet_pair');
//console.log(impair)
window.addEventListener('scroll',() => {

    var hauteurFenetre = window.innerHeight;
    var hauteurScroll = window.scrollY;
    var hauteurBody = document.body.offsetHeight;

    // console.log(hauteurBody)
    var scrollValue = (hauteurFenetre + hauteurScroll) / hauteurBody
    //console.log(scrollValue);
    if(scrollValue > 0.90) {
       for(var i =0; i<impair.length; i++) {
           impair[i].style.transform = 'translateY(0)';
       }
            
        pair.style.transform = 'translateY(0)';
    }
})

