import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import EmpleadoList from './components/EmpleadoList';

function App() {
  return (
    <Container className="text-center">
      <h1 className="text-center">Empleados</h1>
      <br></br>
      <EmpleadoList></EmpleadoList>
    </Container>
     
  );
}

export default App;