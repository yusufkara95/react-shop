import { useState } from "react";
import "./App.css";
import CardList from "./components/CardList/CardList.component";
import SearchBar from "./components/SearchBar/SearchBar.component";

const App = () => {

  const [searchField, setSearchField] = useState('');

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  
  
  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((products) =>
        this.setState(
          () => {
            return { products: products };
          },
          () => {
            console.log(this.state);
            // Überprüfe, ob die API ein Array zurückgibt
            //console.log(Array.isArray(products))
          }
        )
      );
  }

  

  render() {
    const { products, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredProducts = this.state.products.filter((product) => {
      return product.title.toLocaleLowerCase().includes(this.state.searchField);
    });

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
  

  

    
  }
}

export default App;
