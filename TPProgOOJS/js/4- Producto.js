class Producto{

    constructor(codigo,nombre,precio){
        this.codigo=codigo;
        this.nombre=nombre;
        this.precio=precio;

    }
    

    imprimir(){
        document.write(`<p> ${this.codigo} ${this.nombre}  $${this.precio}</p>`)
    }

}

let producto1 = new Producto(1252242121825822,"Azúcar",113);
let producto2 = new Producto(2427283293252441,"Arroz integral",249);
let producto3 = new Producto(3123453781319283,"Aceite",620);

let productos = [2];

productos[0]=producto1;
productos[1]=producto2;
productos[2]=producto3;

for (let i = 0; i < productos.length; i++) {
   productos[i].imprimir();
  }

