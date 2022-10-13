import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Formulario from './components/Formulario';
import Titulo from './components/Titulo';

function App() {
  return (
    <Container>
      <div class="titulo">
      <Titulo></Titulo>
      </div>
      <div class="formulario">
      <Formulario></Formulario>
      </div>
    </Container>
  )
}

export default App;