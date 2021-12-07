var btn = document.querySelectorAll('.choix_competence');
var ensemble = document.querySelectorAll('.ensemble');
 
for(var i =0; i<btn.length; i++) {
    btn[i].addEventListener('click', (e)=> {
    var detail = e.path[1].children[1].children[0];
    console.log(detail)
    detail.style.transform = 'translateX(0)';
    })
}