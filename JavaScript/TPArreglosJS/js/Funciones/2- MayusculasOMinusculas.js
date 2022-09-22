function MasyusculascOMinusculas(texto){
    if(texto === texto.toUpperCase()){
        document.write("La cadena de texto está formada únicamente por mayúsculas.");
    }else if(texto === texto.toLowerCase()){
        document.write("La cadena de texto está formada únicamente por minúsculas.");
    }else{
        document.write("La cadena de texto está formada tanto por mayúsculas como por minúsculas.");
    }
}
let texto = prompt("Ingrese una cadena de texto");
MasyusculascOMinusculas(texto)