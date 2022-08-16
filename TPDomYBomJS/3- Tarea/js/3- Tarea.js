let tareas = []


function agregar(){
        let Tarea = prompt("Ingrese la tarea a agregar.")
        tareas.push(Tarea)
}


function eliminar(){
        let eliminar=prompt("Ingrese la tarea que será eliminada.");
        let tareaBuscar = tareas.filter((tareas) => {
        return tareas != eliminar;
        });
        tareas = tareaBuscar;
}

function mostrar(){
        let ul = document.createElement("ul");  
        document.getElementById("lista").appendChild(ul);
        tareas.forEach(tareaEncontrada);
        function tareaEncontrada(element) {
            let li = document.createElement("li");
            ul.appendChild(li);
            li.innerHTML=li.innerHTML + element
        }
    };
