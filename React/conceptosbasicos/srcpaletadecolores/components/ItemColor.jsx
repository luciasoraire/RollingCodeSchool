import { Button, Card, Col, Row } from "react-bootstrap";

const ItemColor = ({codigoColor,BorrarColor}) => {
  return (
    <Row className="py-3">
      <Col>
        <Card  style={{backgroundColor:codigoColor}} >
          <Card.Body>
            <Card.Title>Color:</Card.Title>
            <Card.Text>
            {codigoColor}
            </Card.Text>
            <Button variant="light" onClick={()=>BorrarColor(codigoColor)}>Eliminar</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
export default ItemColor;