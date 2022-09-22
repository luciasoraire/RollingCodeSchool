function ParOImpar(numeroEntero){
    if(numeroEntero % 2 == 0 ){
        document.write(`${numeroEntero} es un numero par`)
    }else{
        document.write(`${numeroEntero} no es un numero par`)
    }
}
let numeroEntero = parseInt(prompt('Escriba un numero entero'))
ParOImpar(numeroEntero)