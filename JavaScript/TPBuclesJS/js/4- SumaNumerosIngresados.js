let suma = 0;
let numero;
do{
numero = parseInt(prompt("Ingrese un número"));
suma = suma + numero;
}
while (confirm("¿Desea ingresar otro número?"));
document.write("La suma de los números ingresados es "+ suma );