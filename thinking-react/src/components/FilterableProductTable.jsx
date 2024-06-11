import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { useState } from "react";

function FilterableProductTable() {
  const [searchText, setSearchText] = useState("");
  const [stockFilter, setStockFilter] = useState(false);

  const products = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  ];
  return (
    <>
      <SearchBar
        setStockFilter={setStockFilter}
        setSearchText={setSearchText}
        stockFilter={stockFilter}
        searchText={searchText}
      ></SearchBar>
      <ProductTable
        stockFilter={stockFilter}
        searchText={searchText}
        products={products}
      ></ProductTable>
    </>
  );
}

export default FilterableProductTable;
