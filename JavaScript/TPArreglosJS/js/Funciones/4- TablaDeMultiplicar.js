function tabla(){
document.write(`<table> 
<tbody>
<tr><td>Tabla del ${numero}</td></tr>
`)

for( let i =0; i <=10; i++){
    
    
    document.write(`<tr><td>${numero}x${i} = ${numero*i}</td></tr>`);
}

}

let numero = parseInt(prompt("Ingrese el número para realizar su tabla de multiplicar"));
tabla(numero)