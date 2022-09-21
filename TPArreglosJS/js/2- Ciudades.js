let ciudades = [];
do {
  let ciudad = prompt("Ingrese el nombre de ciudades");
  ciudades.push(ciudad);
} while (confirm("¿Quiere escribir mas Ciudades?"));

MostrarCiudades("Arreglo original");

document.write(`<br>Longitud del arreglo: ${ciudades.length}</br>`)

document.write(`<br>Ciudad 1: ${ciudades[0]}</br> <br>Ciudad 3: ${ciudades[2]} </br> <br>Ultima ciudad: ${ciudades[ciudades.length - 1]}</br> `)

ciudades.push("Paris")

MostrarCiudades("Añadimos Paris en la última posición");

document.write(`<br>Ciudad 2: ${ciudades[1]}</br>` 
)
ciudades[1] = "Barcelona"

MostrarCiudades("Sustitución de la segunda ciudad por Barcelona");

function MostrarCiudades(titulo){
    document.write("<h3>"+titulo+"</h3>" );
    document.write(`<ul>`);
    for (let i = 0; i < ciudades.length; i++) {
      document.write(`<li>${ciudades[i]}</li>`);
    }
    document.write(`</ul>`);
  };