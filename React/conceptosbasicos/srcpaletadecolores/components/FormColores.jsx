import ListaColores from "./ListaColores";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

const FormularioColores = () => {
  const coloresLocalStorage =JSON.parse(localStorage.getItem("ArrayColoresKey")) || [];
  const [color, setcolor] = useState("");
  const [ArrayColores, setArrayColores] = useState(coloresLocalStorage);



  const handleSubmit = (e) => {
    e.preventDefault();
    setArrayColores([...ArrayColores, color]);
    setcolor("");
  };

  const BorrarColor = (codigo) => {
    let ArrayModificado = ArrayColores.filter((item) => item !== codigo);
    setArrayColores(ArrayModificado);
  };

  useEffect(() => {
    localStorage.setItem("ArrayColoresKey", JSON.stringify(ArrayColores));
  }, [ArrayColores]);
  
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group
          className="mb-3 px-4 d-flex justify-content-center"
          controlId="form"
        >
          <Form.Control
            type="color"
            onChange={(e) => setcolor(e.target.value)}
            value={color}
          />
          <Button className="ms-4" variant="light" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaColores
        ArrayColores={ArrayColores}
        BorrarColor={BorrarColor}
        ></ListaColores>
    </div>
  );
};

export default FormularioColores;