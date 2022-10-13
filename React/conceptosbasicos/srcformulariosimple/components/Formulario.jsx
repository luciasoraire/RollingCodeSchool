import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Formulario = () => {
 const [nombre, setNombre] = useState("");
 const [apellido, setApellido] = useState("");
 const [edad, setEdad] = useState("");

 const handleSubmit=(e)=>{
  e.preventDefault();
  if(nombre===""||apellido===""||edad==="")
  alert("Completar todos los datos")
  else{
    alert("Datos enviados")
  }
 }

    return (
        <Form  className='mt-5' onSubmit={handleSubmit}>
        <Form.Group className="mb-4" controlId="name"onChange={(e)=>setNombre(e.target.value)}
          value={nombre}>
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su nombre" />
        </Form.Group>
        <Form.Group className="mb-4" controlId="lastname"onChange={(e)=>setApellido(e.target.value)}
          value={apellido}>
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su apellido" />
        </Form.Group>
        <Form.Group className="mb-4" controlId="age"onChange={(e)=>setEdad(e.target.value)}
          value={edad}>
          <Form.Label>Edad</Form.Label>
          <Form.Control type="number" placeholder="Ingrese su edad" />
        </Form.Group>
        <Button  variant="light" type="submit">
          Enviar
        </Button>
      </Form>
    );
};

export default Formulario;