import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      searchField: "",
    };
  }

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
    const filteredProducts = this.state.products.filter((product) => {
      return product.title.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Produkt suchen"
          onChange={(event) => {
            const searchField = event.target.value.toLocaleLowerCase();
            this.setState(() => {
              return { searchField };
            });
          }}
        />
        {filteredProducts.map((product) => {
          return (
            <div key={product.id}>
              <h2>{product.title}</h2>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
