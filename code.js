const inputNombre = document.getElementById("inNombre")
const inputApellido = document.getElementById("inApellido")
const inputMail = document.getElementById("inMail")
const aplicarBtn = document.getElementById("aplicarBtn")
const divListadoT = document.getElementById("listadoTrabajadores")
const olListadoT = document.getElementById("olTrabajadores")
const liIT = document.getElementById("liIT")
const liMA = document.getElementById("liMA")
const liVE = document.getElementById("liVE")
const liAD = document.getElementById("liAD")
const dropdownmenu = document.getElementById("dropdownMenuButton1")
const dptIt = document.getElementById("dptIt")
const dptMa = document.getElementById("dptMa")
const dptVe = document.getElementById("dptVe")
const dptAd = document.getElementById("dptAd")
dptIt.addEventListener("click",function(){dropdownmenu.innerText = "It"});
dptMa.addEventListener("click",function(){dropdownmenu.innerText = "Marketing"});
dptVe.addEventListener("click",function(){dropdownmenu.innerText = "Ventas"});
dptAd.addEventListener("click",function(){dropdownmenu.innerText = "Administracion"});




aplicarBtn.addEventListener("click",function(){
    let nombre = inputNombre.value
    let apellido = inputApellido.value
    let email = inputMail.value
    let dpto = dropdownmenu.innerText

    let arrayTrabajador = [nombre,apellido,email,dpto]

    altaTrabajador(arrayTrabajador);

});

function altaTrabajador(arrayTrabajador){
    let sal = salador(arrayTrabajador[0])
    addToListado(arrayTrabajador,sal);
    addToResumenDptos(arrayTrabajador[0],arrayTrabajador[3],sal);
}

function addToListado(arrayTrabajador,sal){
    let liE = crearElementoListado(arrayTrabajador,sal);
    olListadoT.appendChild(liE)
}

function addToResumenDptos(nombre,dpto,sal){
    let liE = crearElementoResumenDptos(nombre,sal)

    switch (dpto){
        
        case "It":
            liIT.appendChild(liE)
        break;
        case "Marketing":
            liMA.appendChild(liE)
        break;
        case "Ventas":
            liVE.appendChild(liE)
        break;
        case "Administracion":
            liAD.appendChild(liE)
        break;
        default:
            console.log("revisa el dpto amigo")
        break;
    }
    
}
function salador(nombre){
    
    let id = nombre + Math.random() * ((nombre.length+5) - 3) + 1;
    return id
}

function crearElementoResumenDptos(nombre,sal){
    let liE = document.createElement("li")
    liE.setAttribute("class", "list-group-item fade-in fade-in-text")
    liE.setAttribute("id", sal)
    liE.innerText = nombre
    return liE
}
function crearElementoListado(arrayTrabajador,sal){
    
    let liE = document.createElement("li")
    liE.setAttribute("class","list-group-item d-flex justify-content-between align-items-start fade-in-text")
    liE.setAttribute("id", sal )
    liE.setAttribute("value", arrayTrabajador[3])
    let divE = document.createElement("div")
    divE.setAttribute("class","ms-2 me-auto")
    let divE2 = document.createElement("div")
    divE2.setAttribute("class","fw-bold")
    divE.innerText = arrayTrabajador[0] + " " + arrayTrabajador[1]
    let btnE = document.createElement("button")
    btnE.setAttribute("type", "button")
    btnE.setAttribute("class", "btn btn-danger")
    btnE.setAttribute("onclick","removeFromListado(this)")
    let spanE = document.createElement("span")
    spanE.setAttribute("class", "badge badge-danger")
    spanE.innerText = "Borrar"
    liE.appendChild(divE)
    divE.appendChild(divE2)
    divE2.innerText = arrayTrabajador[2]
    liE.appendChild(btnE)
    btnE.appendChild(spanE)
    return liE
}


function removeFromListado(e){
    console.log(e.parentNode)
    e.parentNode.remove()
    
    //removeFromResumenDptos(e.parentNode.getAttribute('id'),e.parentNode.getAttribute('value'))
    document.getElementById(e.parentNode.getAttribute('id')).remove()
    
}

function removeFromResumenDptos(identificador,dpto){
    let nodelist
    switch (dpto){
        
        case "It":
            nodelist = liIT.querySelectorAll('li')
            console.log(liIT.querySelectorAll('li'))
            nodelist.forEach(function(element){
                if (element.id == identificador){
                    console.log(element)
                    element.remove()
                }
            })
        
        break;
        case "Marketing":
            nodelist = liMA.querySelectorAll('li')
            console.log(liMA.querySelectorAll('li'))
            nodelist.forEach(function(element){
                if (element.id === identificador){
                    element.remove()
                }
            })
    
        break;
        case "Ventas":
            nodelist = liVE.querySelectorAll('li')
            console.log(liVE.querySelectorAll('li'))
            nodelist.forEach(function(element){
                if (element.id === identificador){
                    element.remove()
                }
            })
    
            
        break;
        case "Administracion":
            
            nodelist = liAD.querySelectorAll('li')
            console.log(liAD.querySelectorAll('li'))
            nodelist.forEach(function(element){
                if (element.id === identificador){
                    element.remove()
                }
            })
        break;
        default:
            console.log("revisa el dpto amigo")
        break;
    }
}