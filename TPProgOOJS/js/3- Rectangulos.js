
class Rectangulos{
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }

        Mostrar(){
            document.write(`<p>El alto del rectángulo es de ${this.alto} y el ancho es ${this.ancho}</p>`)
    }
        CalcularPerimetro(){
           document.write(`<p>El perímetro del rectángulo es ${this.alto+this.ancho+this.ancho+this.alto}</p>`);
        
    }

        CalcularArea(){
            document.write(`<p>El área del rectángulo es ${this.alto*this.ancho}</p>`);
    }
        Modificar(){
            this.alto = parseFloat(prompt("Ingrese la nueva altura"));
            this.ancho = parseFloat(prompt("Ingrese el nuevo ancho"));
            
        }
        
}

let alto = parseFloat(prompt("Ingrese la altura"));
let ancho = parseFloat(prompt("Ingrese el ancho"));
let rectangulos = new Rectangulos(alto, ancho);

do{
    let numero= parseInt(prompt(`Seleccione una opcion:
    
    1- Mostrar datos
    2- Calcular perímetro
    3- Calcular área
    4- Modificar datos
    `))



switch (numero) {


    case 1:
        
        rectangulos.Mostrar();
        break;
        
    case 2:
        
        rectangulos.CalcularPerimetro();
        break;

    case 3:
        rectangulos.CalcularArea();
        break;

    case 4:
        rectangulos.Modificar()
        break;
        
    default:
        document.write("Número erróneo");
        break;
}
}
while (confirm('¿Quiere realizar otra operacion?'));