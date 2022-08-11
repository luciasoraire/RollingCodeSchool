let cadena = prompt("Ingrese el texto");
let posicion;
cadena=cadena.toLowerCase();
for(let i=0; i<= cadena.length; i++){
    if((cadena.charAt(i)=="a")||(cadena.charAt(i)=="e")||(cadena.charAt(i)=="i")||(cadena.charAt(i)=="o")||(cadena.charAt(i)=="u")){
        posicion=i+1;    
        break;
    } 
}
document.write("Posición de la primera vocal: " + posicion);