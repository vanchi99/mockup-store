import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

const PRODUCTS = [
  { category: "Fruits", price: "$5", stocked: false, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$3", stocked: true, name: "Banana" },
  { category: "Fruits", price: "$2", stocked: false, name: "Grapes" },
  { category: "Fruits", price: "$2", stocked: true, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Broccoli" },
  { category: "Vegetables", price: "$1", stocked: false, name: "Carrot" },
];

export default function FilterableProductTable() {
  const [search, setSearch] = useState("");
  const [hideNoStock, setHideNoStock] = useState(false);
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col lg="6">
            <SearchBar
              search={search}
              setSearch={setSearch}
              hideNoStock={hideNoStock}
              setHideNoStock={setHideNoStock}
            />
            <ProductTable
              products={PRODUCTS}
              search={search}
              hideNoStock={hideNoStock}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
