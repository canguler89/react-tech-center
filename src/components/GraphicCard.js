import React, { Component } from "react";
import data from "../data";

const cardList = data.cards;

class GraphicCard extends Component {
  render() {
    return (
      <div>
        <ul id="items-ul">
          {cardList.map((data) => (
            <li id="cases1">
              <img src={data.img} alt="cpus" />
              {data.title}
              <br />
              <div className="price">
                {data.price}
                {data.currency}
              </div>
              <button className={"btn btn-primary"}>AddToCart</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default GraphicCard;
