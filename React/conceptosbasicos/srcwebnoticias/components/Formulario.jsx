import { Form, Button, Container } from "react-bootstrap";
import { useState } from "react";
import ListaNoticias from "./ListaNoticias";

const Formulario = () => {
  const [noticias, setNoticias] = useState([]);
  const [categoria, setCategoria] = useState("");
  const [pais, setPais] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    consultarAPI();
  };

  const consultarAPI = async () => {
    try {
      const respuesta = await fetch(
        `https://newsdata.io/api/1/news?country=ar&apikey=pub_121255cebe5af61129044085f56a740b5796b&category=${categoria}&country=${pais}`
      );
      const dato = await respuesta.json();
      console.log(dato.results);
      setNoticias(dato.results);
    } catch (error) {}
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-lg-flex d-md-flex">
          <Form.Select
            aria-label="categoria"
            onChange={(e) => setCategoria(e.target.value)}
            value={categoria}
            required
          >
            <option>Categorias</option>
            <option value="business">Negocios</option>
            <option value="entertainment">Entretenimiento</option>
            <option value="environment">Medio Ambiente</option>
            <option value="food">Gastronomia</option>
            <option value="health">Salud</option>
            <option value="politics">Politica</option>
            <option value="science">Ciencia</option>
            <option value="sports">Deportes</option>
            <option value="technology">Tecnologia</option>
            <option value="top">Top</option>
            <option value="world">Mundo</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 d-lg-flex d-md-flex">
         
          <Form.Select
            aria-label="pais"
            onChange={(e) => setPais(e.target.value)}
            value={pais}
            required
          >
            <option>Paises</option>
            <option value="ar">Argentina </option>
            <option value="au">Australia </option>
            <option value="at">Austria </option>
            <option value="bd">Bangladesh </option>
            <option value="be">Belgium </option>
            <option value="br">Brazil </option>
            <option value="bg">Bulgaria </option>
            <option value="ca">Canada </option>
            <option value="cl">Chile</option>
            <option value="cn">China </option>
            <option value="co">Colombia </option>
            <option value="cu">Cuba </option>
            <option value="cz">Czech republic</option>
            <option value="eg">Egypt </option>
            <option value="fi">Finland </option>
            <option value="fr">France </option>
            <option value="de">Germany </option>
            <option value="gr">Greece </option>
            <option value="hk">Hong kong</option>
            <option value="hu">Hungary </option>
            <option value="in">India </option>
            <option value="id">Indonesia </option>
            <option value="iq">Iraq </option>
            <option value="ie">Ireland </option>
            <option value="il">Israel </option>
            <option value="it">Italy </option>
            <option value="jp">Japan</option>
            <option value="kz">Kazakhstan </option>
            <option value="kw">Kuwait </option>
            <option value="lv">Latvia </option>
            <option value="lb">Lebanon </option>
            <option value="lt">Lithuania </option>
            <option value="my">Malaysia </option>
            <option value="mx">Mexico </option>
            <option value="ma">Morocco </option>
            <option value="nl">Netherland </option>
            <option value="nz">New zealand</option>
            <option value="ng">Nigeria </option>
            <option value="kp">North korea</option>
            <option value="no">Norway</option>
            <option value="pk">Pakistan</option>
            <option value="pe">Peru</option>
            <option value="ph">Philippines </option>
            <option value="pl">Poland </option>
            <option value="pt">Portugal </option>
            <option value="ro">Romania </option>
            <option value="ru">Russia </option>
            <option value="sa">Saudi arabia</option>
            <option value="rs">Serbia </option>
            <option value="sg">Singapore </option>
            <option value="sk">Slovakia </option>
            <option value="si">Slovenia </option>
            <option value="za">South africa</option>
            <option value="kr">South korea</option>
            <option value="es">Spain </option>
            <option value="se">Sweden </option>
            <option value="ch">Switzerland </option>
            <option value="tw">Taiwan </option>
            <option value="tz">Tanzania </option>
            <option value="th">Thailand </option>
            <option value="tr">Turkey </option>
            <option value="ua">Ukraine</option>
            <option value="ae">United arab emirates </option>
            <option value="gb">United kingdom</option>
            <option value="us">United states of america</option>
            <option value="ve">Venezuela</option>
            <option value="vi">Vietnam</option>
          </Form.Select>
        </Form.Group>
        <Button className="text-center" type="submit">Buscar</Button>
      </Form>
      <ListaNoticias noticias={noticias}></ListaNoticias>
    </Container>
  );
};

export default Formulario;