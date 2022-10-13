import {Container} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import FormColores from "./components/FormColores";
function App() {
  return (
    <Container className='my-5 text-center'>
      <div>
      <h1>Elige tu paleta de color</h1>
      <br></br>
      </div>
      <FormColores></FormColores>
    </Container>
  );
}

export default App;