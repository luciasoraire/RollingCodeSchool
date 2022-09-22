let cadena = prompt("Ingrese el texto");
cadena=cadena.toLowerCase();
let vocales = 0;
for(let i=0; i<= cadena.length;i++){
if((cadena.charAt(i)=="a")||(cadena.charAt(i)=="e")||(cadena.charAt(i)=="i")||(cadena.charAt(i)=="o")||(cadena.charAt(i)=="u")){
vocales=vocales+1;}
}
document.write("Cantidad de vocales: " +vocales);