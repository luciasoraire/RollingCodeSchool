let nota = parseInt(prompt("Ingrese una nota"));
while((nota>=0)&&(nota<=10)){
    if((nota>=0)&&(nota<=2)){
        alert("Muy deficiente");
        break;
    }
    else if ((nota>=3)&&(nota<=4)){
        alert("Insuficiente");
        break;
    }
    else if ((nota>=5)&&(nota<=6)){
        alert("Suficiente");
        break;
    }
    else if (nota===7){
        alert("Bien");
        break;
    }
    else if ((nota>=8)&&(nota<=9)){
        alert("Notable");
        break;
    }
    else{
        alert("Sobresaliente");
        break;
    }

}
while ((nota<0)||(nota>10)){
    if (nota<0){
    document.write("Número erróneo.");
    break;
    }

    else{
    document.write("Introduce un número válido.");
    break;
    }
}
