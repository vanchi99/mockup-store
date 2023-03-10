import { Col, Container, Row } from "react-bootstrap";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default function ProductTable({ products, search, hideNoStock }) {
  let rows = [];
  let ant = "";
  let color;
  products.forEach((e) => {
    color = "black";
    if (e.category != ant) {
      rows.push(<ProductCategoryRow key={e.category} category={e.category} />);
      ant = e.category;
    }
    if (!e.stocked) {
      color = "red";
    }
    if (
      (e.stocked || !hideNoStock) &&
      e.name.toLowerCase().includes(search.toLowerCase())
    ) {
      rows.push(
        <ProductRow key={e.name} name={e.name} price={e.price} color={color} />
      );
    }
  });

  return (
    <Container>
      <Row>
        <Col>
          <p className="title">Name</p>
        </Col>
        <Col>
          <p className="title">Price</p>
        </Col>
      </Row>
      {rows}
    </Container>
  );
}
