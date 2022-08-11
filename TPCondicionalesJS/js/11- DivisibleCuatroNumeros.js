document.write("<br>");
let numero = prompt("Ingrese el número para determinar si es divisible en 2, 3, 5 o 7");
if (numero%2==0){
    document.write("El número " + parseInt(numero) + " es divisible en 2");
}
if (numero%3==0){
    document.write("<br>");
    document.write("El número " + parseInt(numero) + " es divisible en 3");
}
if (numero%5==0){
    document.write("<br>");
    document.write("El número " + parseInt(numero) + " es divisible en 5");
}
if (numero%7==0){
    document.write("<br>");
    document.write("El número " + parseInt(numero) + " es divisible en 7");
}
