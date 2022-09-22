let auto = {
    color: "Negro",
    marca: "Audi",
    modelo: "A4",
    encender: ()=>{
        document.write("<p>El vehiculo está encendido</p>")
    },
    apagar: ()=>{
        document.write("<p>El vehiculo está apagado</p>")
    }
}
document.write(`<p>El color del auto es: ${auto.color}</p>`)
document.write(`<p>La marca del auto es: ${auto.marca}</p>`)
document.write(`<p>El modelo del auto es: ${auto.modelo}</p>`)
auto.encender()
auto.apagar()