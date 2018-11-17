import React, { Component } from "react";
import { formatPrice } from "./helpers";

class Fish extends Component {
  render() {
    const { price, desc, status } = this.props.fishData;
    const isAvailable = status === "available";
    return (
      <li className="menu-fish">
        <img src={this.props.fishData.image} alt={this.props.fishData.name} />
        <h4 className="fish-name">
          {this.props.fishData.name}
          <span className="price">{formatPrice(price)}</span>
        </h4>
        <p>{desc}</p>
        <button disabled={!isAvailable}>
          {isAvailable ? "Add To Cart" : "Sold Out"}
        </button>
      </li>
    );
  }
}

export default Fish;
