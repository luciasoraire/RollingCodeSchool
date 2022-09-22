let sumas = [];
let pruebaDado1 = [];
let pruebaDado2 = [];

for (let i = 0; i < 50; i++) {
  let dado1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  let dado2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  let suma = dado1 + dado2;
  sumas.push(suma);
  pruebaDado1.push(dado1);
  pruebaDado2.push(dado2);
}

document.write('Resultados del primer dado: '+ pruebaDado1);
document.write('<br>Resultados del segundo dado: '+pruebaDado2);
document.write('<br>Resultados de la suma: '+sumas);


document.write(`<table> 
<tbody>
<tr><td>Resultado</td><td>Frecuencia</td></tr>
`)


for( let resultado =2; resultado <=12; resultado++){
    let contador=0;
    for(let posicion =0; posicion < sumas.length; posicion++){
        if(resultado === sumas[posicion]){
            contador++
        }
    }
    document.write(`<tr><td>${resultado}</td><td>${contador}</td></tr>`);
}

document.write(`</tbody></table>`)