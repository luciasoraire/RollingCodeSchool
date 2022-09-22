document.write("<br>");
let numeroUno = prompt("Ingrese el primer número");
let numeroDos = prompt ("Ingrese el segundo número");
if (numeroUno>numeroDos){
document.write("El primer número ingresado ("+ parseInt(numeroUno)+ ") es el mayor.");
}
else if (numeroUno==numeroDos){
    document.write("Ambos números ingresados son iguales");
}
else{
    document.write("El segundo número ingresado (" + parseInt(numeroDos) + ") es el mayor.");
}