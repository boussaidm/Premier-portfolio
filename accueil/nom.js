//Mettre chaque lettre dans une span.

var cara = "Meriem BOUSSAID";
var tableau = cara.split('');
var titre = document.querySelector('.identite_titre');

tableau.forEach((e) => {

        var span = document.createElement("span");
        span.className += "caractere";
        span.innerHTML = e;
        var test = titre.appendChild(span);

    })
    //Lorsque la souris passe les lettres s'éparpille
var titreSpan = document.querySelector('.identite_titre').childNodes;

titre.addEventListener('mouseenter', () => {
        for (var i = 0; i < titreSpan.length; i++) {

            titreSpan[i].style.transform = 'translate(' + Math.floor(Math.random() * 500 - 250) + 'px,' + Math.floor(Math.random() * 500 - 250) + 'px)' + 'rotate(' + Math.floor(Math.random() * 500 - 250) + 'deg)';
            titreSpan[i].style.transition = "all 1.2s ease-out";

        }
    })
    //Lorsque quela souris part les lettres reviennent à leurs places
titre.addEventListener('mouseleave', () => {
    for (var j = 0; j < titreSpan.length; j++) {

        titreSpan[j].style.transform = 'translate( 0px, 0px)' + 'rotate(0deg)';
        titreSpan[j].style.transition = "all 0.9s ease-out";


    }
})