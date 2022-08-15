function abrirJuego(){
    BotonJugar.innerHTML = '¡El juego ha comenzado!'

    let form = document.createElement("form");
    let crearInput = document.createElement("input");
    document.getElementsByClassName("ingresar")[0].appendChild(form);
    crearInput.setAttribute("type", "number");
    crearInput.setAttribute("class", "num");
    crearInput.setAttribute("min", "1");
    crearInput.setAttribute("max", "5");
    crearInput.setAttribute("placeholder", "Número");
    let crearButton = document.createElement("button");
    crearButton.setAttribute("type", "submit");
    crearButton.setAttribute("class", "enviar");
    crearButton.setAttribute("placeholder", "Submit");
    crearButton.setAttribute("onclick", "juego()");
    form.appendChild(crearInput);
    form.appendChild(crearButton);
    
}

function juego(){
    let random = Math.floor(Math.random() * (6 - 1) + 1); /*Redondeo el numero decimal a uno entero (menor).*/ 
    let numero = document.getElementsByClassName("num")[0].value;
    if(random == numero){
        alert("¡Felicidades! Tu número "+numero+" coincide con el número mágico "+ random+".")
    }
    else if (random > numero && numero<=5){
        alert("¡Estuviste cerca! Tu número " +numero+ " era menor al número mágico " +random+".")
    }
    else if (random < numero && numero<=5){
        alert("¡Estuviste cerca! Tu número " +numero+ " era mayor al número mágico " +random+"." )
    }
    else {
        alert("Recuerda que el número mágico se encuentra entre 1 y 5.");
    }
   
}