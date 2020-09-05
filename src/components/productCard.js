import React, { Component } from 'react';
import '../styles/productCard.css';

export default class ProductCard extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div className="productCard" onClick={() => this.props.handleRedirectPDP(this.props.product.id)}>
        <div className="productImageContainer">
          <div className="productImage">
            <div className="imageContainer">
              <img className="image" alt="" src={this.props.product.imageTray} />
            </div>

              <div className="favButton"></div>

          </div>
        </div>
        <div className="productInfo">
          <div className="productTitleContainer">
            <span
              className="productTitle"
            >{this.props.product.title}</span>
          </div>
          <div>
            <span
              className="productPrice"
            >${this.props.product.price}</span>
          </div>
          <div className="productReviews">

              {this.props.product.reviewCount !== 1 ?
              <span>Reviewed by {this.props.product.reviewCount} people</span>
              :
              <span>Reviewed by {this.props.product.reviewCount} person</span>
              }

          </div>
        </div>
      </div>
    );
  }
}
