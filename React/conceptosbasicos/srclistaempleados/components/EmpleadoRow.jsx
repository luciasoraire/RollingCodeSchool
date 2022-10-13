import EmpleadoAvatar from "./EmpleadoAvatar";
import { Badge, Col, Row } from "react-bootstrap";

const EmpleadoRow = ({ArrayEmpleado}) => {
  return (
    <div>
      {ArrayEmpleado.map((empleado, id) => (
        <Row key={id}>
           <Col sm={12} md={4} lg={2}>
            <EmpleadoAvatar empleado={empleado}></EmpleadoAvatar>
          </Col>
          <Col sm={12} md={8} lg={3} className='text-center'>
            <div>
              <h3>{empleado.fullName}</h3>
              <span className="mb-3">
                {empleado.title}
                <Badge bg="dark" className="mx-4">
                  {empleado.department}
                </Badge>
              </span>
            </div>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default EmpleadoRow;