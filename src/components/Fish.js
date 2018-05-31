import React, { Component } from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../helpers";

class Fish extends Component {
  //This is a regular react component and because of this we put it here
  //It is static becouse we declare the propTypes for all of the Fish, and everytime when we make new fish,
  //its not neccessery to duplicate this propType for every single one
  static propTypes = {
    details: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      price: PropTypes.number,
      status: PropTypes.string
      
    })
  };

  handleClick = () => {
    this.props.addToOrder(this.props.index);
  };

  render() {
    // const image = this.props.details.image;
    // const name = this.props.details.name;
    const { image, name, price, desc, status } = this.props.details;
    const isAvailable = status === "available";

    return (
      <li className="menu-fish">
        <img src={image} alt="name" />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button disabled={!isAvailable} onClick={this.handleClick}>
          {isAvailable ? "Add to Order" : "Sold Out!"}
        </button>
      </li>
    );
  }
}
export default Fish;
