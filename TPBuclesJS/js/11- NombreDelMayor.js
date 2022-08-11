let nombre1 = prompt("Ingrese el nombre de la primera persona");
let edad1 = parseInt(prompt("Ingrese la edad de la primera persona"));
let nombre2 = prompt("Ingrese el nombre de la segunda persona");
let edad2 = parseInt(prompt("Ingrese la edad de la segunda persona"));
let nombre3 = prompt("Ingrese el nombre de la tercera persona");
let edad3 = parseInt(prompt("Ingrese la edad de la tercera persona"));
let maximo = Math.max(edad1,edad2,edad3);
if(maximo==edad1){
    document.write("El mayor de los 3 es "+nombre1);
}
if(maximo==edad2){
    document.write("El mayor de los 3 es "+nombre2);
}
if(maximo==edad3){
    document.write("El mayor de los 3 es "+nombre3);
}