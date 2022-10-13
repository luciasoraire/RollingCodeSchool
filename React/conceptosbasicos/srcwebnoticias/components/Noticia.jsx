import {Card,Button, Col} from "react-bootstrap"


const Noticia = ({noticia}) => {
    return (
        <Col sm={12} md={6} lg={3}>
        <Card>
      <Card.Img variant="top" src={noticia.image_url} />
      <Card.Body>
        <Card.Title>{noticia.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{noticia.category}</Card.Subtitle>
        <a href={noticia.link}>
        <Button variant="info">Ver más</Button>
        </a>
      </Card.Body>
    </Card>
        </Col>
    );
};

export default Noticia;