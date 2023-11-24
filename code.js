const quien = document.getElementById("quien");
const que =  document.getElementById("que");
const donde = document.getElementById("donde");
const info = document.getElementById("info");
const contacto = document.getElementById("contacto");
const h1fadein = document.getElementById("h1-aparece");
const h2fadein = document.getElementById("h2-aparece");

quien.onclick = function(){window.location = "C:/xampp/htdocs/nav/quienessomos.html"};
que.onclick = function(){window.location = "C:/xampp/htdocs/nav/quehacemos.html"};
donde.onclick = function(){window.location = "C:/xampp/htdocs/nav/dondeestamos.html"};
info.onclick = function(){window.location = "C:/xampp/htdocs/nav/info.html"};
contacto.onclick = function(){window.location = "C:/xampp/htdocs/nav/contacto.html"};


const timeout1 = setTimeout(aparece1,4000);
const timeout2 = setTimeout(aparece2,6000);

function aparece1(){
    h1fadein.style.opacity = 1;
}
function aparece2(){
    h2fadein.style.opacity = 1;
}


//setTimeout(aparece(h2fadein),1000);


//window.onload = fadeIn;
//function fadeIn() { 
//    setInterval(aparece, 200); 
//}
//
//function aparece(elemento) {  
//    opacity = window.getComputedStyle(elemento).getPropertyValue("opacity");
//    console.log(window.getComputedStyle(elemento).getPropertyValue("opacity"))
//    console.log(elemento) 
//    while (opacity < 1){
//        //console.log(opacity)
//        //opacity =+ 0.1; 
//        elemento.style.opacity = opacity 
//    }
//} 