import Form from "react-bootstrap/Form";
function SearchBar({ search, setSearch, hideNoStock, setHideNoStock }) {
  return (
    <Form className="mt-3">
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check
          type="switch"
          label="Only Show Products in the store"
          checked={hideNoStock}
          onChange={() => {
            setHideNoStock(!hideNoStock);
          }}
        />
      </Form.Group>
    </Form>
  );
}
export default SearchBar;
