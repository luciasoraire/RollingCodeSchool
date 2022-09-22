let edad = parseInt(prompt("Ingrese su edad"));
while(edad>=0){
    if (edad>=18){
        document.write("Ya puede conducir");
        break;
    }
    else{
        document.write("No puede conducir");
        break;
    }
}
while(edad<0){
    document.write("Número no válido");
    break;
}

