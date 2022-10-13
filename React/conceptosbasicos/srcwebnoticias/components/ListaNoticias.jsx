import { Row,Card } from 'react-bootstrap';
import ItemNoticia from './Noticia';


const ListaNoticias = ({noticias}) => {
    return (
        <Card className='mt-5'>
        <Row className='pt-3'>
            {noticias.map((noticia, posicion)=>(<ItemNoticia key={posicion} noticia={noticia}></ItemNoticia>))}
        </Row>
        </Card>
            
        
    );
};

export default ListaNoticias;