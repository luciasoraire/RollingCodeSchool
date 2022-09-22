let numero = parseInt(prompt("Ingrese el número final de la piramide invertida, (menor o igual a 50)."));
if (numero>=0 && numero<=50){
    for(let i=numero; i>=1; i--)
    {
        for (let repeticion=i; repeticion>=1; repeticion--){
        document.write(i);
        }
        document.write("<br>");
    }
}
else{
    document.write("Número erróneo. Actualice la página e intente de nuevo.");
}