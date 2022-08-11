document.write("<br>");
let numeroUno = prompt("Ingrese el primer número");
let numeroDos = prompt ("Ingrese el segundo número");
let numeroTres = prompt ("Ingrese el tercer número");
if ((numeroUno>numeroDos) && (numeroUno>numeroTres)){
document.write("El primer número ingresado ("+ parseInt(numeroUno)+ ") es el mayor.");
}
else if ((numeroUno==numeroDos) && (numeroDos==numeroTres)){
    document.write("Los tres números ingresados son iguales.");
}
else if ((numeroDos>numeroUno) && (numeroDos>numeroTres)){
    document.write("El segundo número ingresado ("+ parseInt(numeroDos)+ ") es el mayor.");
}
else {
    document.write("El tercer número ingresado ("+ parseInt(numeroTres)+ ") es el mayor.");
}