import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ProductRow({ name, price, color }) {
  return (
    <Row>
      <Col style={{ textAlign: "center", color: color }}>{name}</Col>
      <Col style={{ textAlign: "center" }}>{price}</Col>
    </Row>
  );
}

export default ProductRow;
