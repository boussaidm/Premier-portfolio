var btn = document.querySelectorAll('.choix_competence');
var ensemble = document.querySelectorAll('.ensemble');
 
for(var i =0; i<btn.length; i++) {
    
    btn[i].addEventListener('click', (e)=> {
    //  console.log(); 
        var detail = e.target.nextElementSibling.children[0];
        detail.style.transform = 'translateX(0)';
        detail.style.webkitTransform = 'translateX(0)';
        detail.style.mozTransform = 'translateX(0)';
        detail.style.msTransform = 'translateX(0)';
        detail.style.oTransform = 'translateX(0)';
   
    })
}