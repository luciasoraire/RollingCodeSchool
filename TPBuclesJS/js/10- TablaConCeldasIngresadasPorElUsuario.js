const filas = parseInt(prompt("Ingrese un número de filas"));
const columnas = parseInt(prompt("Ingrese un número de columnas"));
let resultado = filas*columnas;
document.write(`<table> <tbody>`);
for (let indiceFila = 0; indiceFila<filas; indiceFila++){
    document.write(`<tr>`);
    for(let indiceColumna=0; indiceColumna<columnas; indiceColumna++){
    document.write(`<td>${resultado}</td>`);
    resultado--;
}
    document.write(`</tr>`);
}
document.write(`</tbody> </table>`);