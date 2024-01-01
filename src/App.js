import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/CardList/CardList.component";
import SearchBar from "./components/SearchBar/SearchBar.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((products) => setProducts(products));
  }, []);

  useEffect(() => {
    const newFilteredProducts = products.filter((product) => {
      return product.title.toLocaleLowerCase().includes(searchField);
    });

    setFilteredProducts(newFilteredProducts)
  }, [products, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title"> Yusuf's Product Shop</h1>
      <SearchBar
        onChangeHandler={onSearchChange}
        placeholder="Produkte suchen"
        className="products-search-bar"
      />
      <CardList products={filteredProducts} />
    </div>
  );
};

export default App;
