import ItemColor from "./ItemColor";
import { ListGroup } from "react-bootstrap";

const ListaColores = ({ ArrayColores, BorrarColor }) => {
  return (
    <ListGroup>
      {ArrayColores.map((color, posicion) => (
        <ItemColor
          key={posicion}
          codigoColor={color}
          BorrarColor={BorrarColor}
        ></ItemColor>
      ))}
    </ListGroup>
  );
};

export default ListaColores;