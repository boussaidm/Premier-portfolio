console.log(window.innerHeight);
console.log(window.innerHeight / 2);
var section = document.querySelector('.presentation_projet');
//console.log(section.offsetTop / 3);
var demiHauteurEcran = window.innerHeight / 2;



window.addEventListener('click', () => {
    var hautSection = section.offsetTop;
    console.log(hautSection)
    if (section.offsetTop < demiHauteurEcran) {

        console.log('booonjour')
    }
})