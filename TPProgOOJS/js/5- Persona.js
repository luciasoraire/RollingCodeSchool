class Persona {

    constructor(nombre, edad,dni,sexo, peso, altura, nacimiento){
    this.nombre= nombre;
    this.edad=edad;
    this.dni=dni;
    this.sexo=sexo;
    this.peso=peso;
    this.altura=altura;
    this.nacimiento=nacimiento;
}
mostrarGeneracion(){
    if ((this.nacimiento>=1994)||(this.nacimiento<=2010)){
        document.write(`<p>${this.nombre} es generación Z y su rasgo característico es Irreverencia.</p>`)
    }
    else if ((this.nacimiento>=1981)||(this.nacimiento<=1993)){
        document.write(`<p>${this.nombre}  es generación Y y su rasgo característico es Frustración.</p>`) 
    }
    else if ((this.nacimiento>=1969)||(this.nacimiento<=1980)){
        document.write(`<p>${this.nombre} es generación X y su rasgo característico es Obsesión por el éxito.</p>`) 
    }
    else if ((this.nacimiento>=1949)||(this.nacimiento<=1968)){
        document.write(`<p>${this.nombre} es generación Baby Boom y su rasgo característico es Ambición.</p>`) 
    }
    else{
        document.write(`<p>${this.nombre} es generación Silent Generation y su rasgo característico es Austeridad.</p>`) 
    }
}
esMayorDeEdad(){
    if (this.edad>=18){
    document.write(`<p> La persona ${this.nombre} ${this.apellido} es mayor de edad.</p>`)

}
    else{
    document.write(`<p> La persona ${this.nombre} ${this.apellido} es menor de edad.</p>`)
}
}
mostrarDatos(){
    document.write(`<p> Nombre: ${this.nombre}</p>`)
    document.write(`<p> Edad: ${this.edad}</p>`)
    document.write(`<p> DNI: ${this.dni}</p>`)
    document.write(`<p> Sexo: ${this.sexo}</p>`)
    document.write(`<p> Peso: ${this.peso}</p>`)
    document.write(`<p> Altura: ${this.altura}</p>`)
    document.write(`<p> Fecha de Nacimiento: ${this.nacimiento}</p>`)


}
generaDni(){
  
        return Math.floor(Math.random() * (99999999 - 11111111 + 1) + 11111111);
        
    }
  
}

let nombre= prompt("Ingrese su nombre");
let edad=parseInt(prompt("Ingrese su edad"));
let dni=parseInt(prompt("Ingrese su DNI"));
let sexo=prompt("Ingrese su sexo (H hombre, M mujer)");
let peso= prompt("Ingrese su peso");
let altura=parseFloat(prompt("Ingrese su altura"));
let nacimiento=prompt("Ingrese su fecha de nacimiento");



let personas = new Persona(nombre, edad,dni,sexo, peso, altura, nacimiento)

personas.mostrarDatos();
personas.esMayorDeEdad();
personas.mostrarGeneracion();

document.write("DNI generado aleatoreamente: "+personas.generaDni());




