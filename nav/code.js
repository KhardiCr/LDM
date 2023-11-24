const quien = document.getElementById("quien");
const que =  document.getElementById("que");
const donde = document.getElementById("donde");
const info = document.getElementById("info");
const contacto = document.getElementById("contacto");
const inicio = document.getElementById("Inicio");

quien.onclick = function(){window.location = "C:/xampp/htdocs/nav/quienessomos.html"};
que.onclick = function(){window.location = "C:/xampp/htdocs/nav/quehacemos.html"};
donde.onclick = function(){window.location = "C:/xampp/htdocs/nav/dondeestamos.html"};
info.onclick = function(){window.location = "C:/xampp/htdocs/nav/info.html"};
contacto.onclick = function(){window.location = "C:/xampp/htdocs/nav/contacto.html"};
inicio.onclick = function(){window.location = "C:/xampp/htdocs/index.html"};

function alertsubmit(){
    const divform = document.getElementById("divform");
    divform.innerHTML = "<h1>Nos pondremos en contacto contigo!</h1>"
    divform.append("**Vas a ser redirigido al la pagina de inicio")
    const after = setTimeout(aftersubmit,5000);
}

function aftersubmit(){
    window.location = "C:/xampp/htdocs/index.html";
}