function perimetroRectangulo(ladoa, ladob){
    let perimetro = 2*(ladoa+ladob);
    document.write(`El perímetro del rectángulo es ${perimetro}`);
}

let ladoa = parseInt(prompt("Ingrese la medida del lado A del rectángulo"));
let ladob = parseInt(prompt("Ingrese la medida del lado B del rectángulo"));
perimetroRectangulo(ladoa,ladob)