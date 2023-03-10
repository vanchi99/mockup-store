import { Col, Row } from "react-bootstrap";

function ProductCategoryRow({ category }) {
  return (
    <Row>
      <Col>
        <p className="title">{category}</p>
      </Col>
    </Row>
  );
}
export default ProductCategoryRow;
