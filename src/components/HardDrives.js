import React, { Component } from "react";
import data from "../data";

const hdList = data.hardDrives;

class HardDrives extends Component {
  render() {
    return (
      <div>
        <ul id="items-ul">
          {hdList.map((card) => (
            <li id="cases1">
              <img src={card.img} alt="hds" />
              {card.title}
              <br />
              <div className="price">
                {card.price}
                {card.currency}
              </div>
              <button className={"btn btn-primary"} onClick={this.handleClick}>
                AddToCart
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default HardDrives;
