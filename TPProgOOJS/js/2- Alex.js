let cuenta = {
    titular: 'Alex',
    saldo: 0,
    transferir(){
        console.log('estamos en el metodo transferir');
        console.log(this);
    },
    ingresar(deposito){
        console.log(this);
        this.saldo += deposito; 
        console.log('Se ingreso $'+ deposito);
    },
    extraer(retiro){
        if(this.saldo >= retiro){
            this.saldo -= retiro;
            document.write(`<p>Se retiro $${retiro}</p>`);
        }else{
            document.write(`<p>Saldo insuficiente</p>`);
        }
    },
    informar(){
        document.write(`<p>La cuenta de ${this.titular}, posee un saldo de $${this.saldo}</p>`)
    },
    
}
cuenta.informar(cuenta);
console.log(this)
let deposito = parseFloat(prompt('Ingrese el monto a depositar'));
cuenta.ingresar(deposito);
let retiro = parseFloat(prompt('Ingrese el monto a extraer'));
cuenta.extraer(retiro);
cuenta.informar();