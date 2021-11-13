//A propos de moi
var un = document.querySelector('.un');

//Ajout de la class nav_show
un.addEventListener('mouseenter', () => {
        un.classList.add('nav_show');
    })
    // retrait de la class nav_show
un.addEventListener('mouseleave', () => {
        un.classList.remove('nav_show');
    })
    // Mes projets
var deux = document.querySelector('.deux');
var ecrou = document.querySelector('.ecrou');

//Ajout de la class nav_show
deux.addEventListener('mouseenter', () => {
    deux.classList.add('nav_show');

})

// retrait de la class nav_show
deux.addEventListener('mouseleave', () => {
    deux.classList.remove('nav_show');
})

//Me contacter
var trois = document.querySelector('.trois');

//Ajout de la class nav_show
trois.addEventListener('mouseenter', () => {
    trois.classList.add('nav_show');
})

// retrait de la class nav_show
trois.addEventListener('mouseleave', () => {
    trois.classList.remove('nav_show');
})