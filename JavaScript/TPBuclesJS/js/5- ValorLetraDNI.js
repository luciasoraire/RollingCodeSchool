do{
    let numero = parseInt(prompt("Ingrese un número de DNI, entre (0 y 99999999)"));
    console.log(numero);
    let resultado = numero % 23;
    console.log(resultado);
    if (numero >= 0 && numero <= 99999999){
    
    switch(resultado){
        case 0:
            alert("La letra que corresponde a su DNI es la T, DNI ingresado: " + numero);
            break;
        case 1:
            alert("La letra que corresponde a su DNI es la R, DNI ingresado: " + numero);
            break;
        case 2:
            alert("La letra que corresponde a su DNI es la W, DNI ingresado: " + numero);
            break;
        case 3:
            alert("La letra que corresponde a su DNI es la A, DNI ingresado: " + numero);
            break;
        case 4:
            alert("La letra que corresponde a su DNI es la G, DNI ingresado: " + numero);
            break;
        case 5:
            alert("La letra que corresponde a su DNI es la M, DNI ingresado: " + numero);
            break;
        case 6:
            alert("La letra que corresponde a su DNI es la Y, DNI ingresado: " + numero);
            break;
        case 7:
            alert("La letra que corresponde a su DNI es la F, DNI ingresado: " + numero);
            break;
        case 8:
            alert("La letra que corresponde a su DNI es la P, DNI ingresado: " + numero);
            break;
        case 9:
            alert("La letra que corresponde a su DNI es la D, DNI ingresado: " + numero);
            break;
        case 10:
            alert("La letra que corresponde a su DNI es la X, DNI ingresado: " + numero);
            break;
        case 11:
            alert("La letra que corresponde a su DNI es la B, DNI ingresado: " + numero);
            break;
        case 12:
            alert("La letra que corresponde a su DNI es la N, DNI ingresado: " + numero);
            break;
        case 13:
            alert("La letra que corresponde a su DNI es la J, DNI ingresado: " + numero);
            break;
        case 14:
            alert("La letra que corresponde a su DNI es la Z, DNI ingresado: " + numero);
            break;
        case 15:
            alert("La letra que corresponde a su DNI es la S, DNI ingresado: " + numero);
            break;
        case 16:
            alert("La letra que corresponde a su DNI es la Q, DNI ingresado: " + numero);
            break;
        case 17:
            alert("La letra que corresponde a su DNI es la V, DNI ingresado: " + numero);
            break;
        case 18:
            alert("La letra que corresponde a su DNI es la H, DNI ingresado: " + numero);
            break;
        case 19:
            alert("La letra que corresponde a su DNI es la L, DNI ingresado: " + numero);
            break;
        case 20:
            alert("La letra que corresponde a su DNI es la C, DNI ingresado: " + numero);
            break;
        case 21:
            alert("La letra que corresponde a su DNI es la K, DNI ingresado: " + numero);
            break;
        case 22:
            alert("La letra que corresponde a su DNI es la E, DNI ingresado: " + numero);
            break;
        default:
            alert("Ingresaste una opción errónea");
        }
    }
    else{
        alert("Ingresó un valor erróneo");
    }
}
while(confirm("¿Desea ingresar un DNI?"));
