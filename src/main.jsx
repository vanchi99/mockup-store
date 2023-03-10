import React from "react";
import ReactDOM from "react-dom/client";
import FilterableProductTable from "./components/FilterableProductTable";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FilterableProductTable />
  </React.StrictMode>
);
