let numero = parseInt(prompt("Ingrese el número final de la piramide invertida, (menor o igual a 50)."));
if (numero>=0 && numero<=50){
    for(let i=1; i<=numero; i++)
    {
        for (let digito=1; digito<=i; digito++){
        document.write(digito);
        }
        document.write("<br>");
    }
}
else{
    document.write("Número erróneo. Actualice la página e intente de nuevo.");
}