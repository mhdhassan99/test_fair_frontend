import React, { Component } from "react";
import ProductCard from "../productCard";

class Sectionals extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    fetch("http://localhost:3001/products")
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        this.setState({
          products: data,
        });
      });
  }

  render() {
    //   console.log('iii', this.state.products)
    let sofaCategory = this.state.products.filter(
      (sofa) => sofa.category === "Sectional"
    );
    let sofa = sofaCategory.map((sectional) => (
      <ProductCard product={sectional} key={sectional.id} />
    ));
    return <div className="productCards">{sofa}</div>;
  }
}

export default Sectionals;
