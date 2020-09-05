import React, { Component } from 'react'
import '../styles/browseStyles.css'
import ProductCard from './productCard';

export default class Browse extends Component {
  state = {
    products: []
  }

  componentDidMount() {
    fetch("http://localhost:3001/products")
    .then((response) => response.json())
    .then(data => {
      console.log(data)
      this.setState({
          products: data
      });
    });
  }

  handleRedirectPDP = (productId) => {
    this.props.history.push(`productDisplayPage/${productId}`);
  }

  render() {
    let products = this.state.products.map(product => (
      <ProductCard product={product} key={product.id} handleRedirectPDP={this.handleRedirectPDP}/>
    ));
    return (
      <div className="productCards">
       {products}
      </div>
    )
  }
}
