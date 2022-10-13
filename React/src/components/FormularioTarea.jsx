import ListaTarea from "./ListaTarea";
import { Form,Button } from "react-bootstrap";
import { useState, } from "react";

const FormularioTarea = () => {

const [tarea,setTarea]=useState("");
const [arregloTarea, setArregloTarea] = useState([])

const handleSubmit=(e)=>{
e.preventDefault();
setArregloTarea([...arregloTarea,tarea])
setTarea('')
};

const borrarTarea=(nombre)=>{
let arregloModificado=arregloTarea.filter((item)=>(item!==nombre));
setArregloTarea(arregloModificado);
}

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Ingrese una tarea" onChange={(e)=>setTarea(e.target.value)}
          value={tarea} />
        <Button variant="dark" type="submit">
          Enviar
        </Button>
        </Form.Group>
      </Form>
      <ListaTarea arregloTarea={arregloTarea} borrarTarea={borrarTarea} ></ListaTarea>
    </div>
  );
};

export default FormularioTarea;