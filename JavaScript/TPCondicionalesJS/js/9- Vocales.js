document.write("<br>");

let text = prompt("Escribe una frase");

for (i=0; i<=text.length; i++){

    if ((text.charAt(i))=="a"||(text.charAt(i))=="A"){
        document.write("<br>");
        document.write("La frase contiene la vocal a")
    }
    
    if ((text.charAt(i))=="e"||(text.charAt(i))=="E"){
        document.write("<br>");
        document.write("La frase contiene la vocal e")
    }

    if ((text.charAt(i))=="i"||(text.charAt(i))=="I"){
        document.write("<br>");
        document.write("La frase contiene la vocal i")
    }

    if ((text.charAt(i))=="o"||(text.charAt(i))=="O"){
        document.write("<br>");
        document.write("La frase contiene la vocal o")
    }
    
    if ((text.charAt(i))=="u"||(text.charAt(i))=="U"){
        document.write("<br>");
        document.write("La frase contiene la vocal u")
    }

}