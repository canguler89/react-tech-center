import React, { Component } from "react";
import data from "../data";

const caseList = data.cases;

class Cases extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = e => {
    e.preventDefault();
    console.log("item added to cart");
  };

  render() {
    let casesArray = caseList.map(c => (
      <li className="col-sm-3" key={c.id}>
        <img src={c.img} alt="ada" />
        {c.company}
        <br />
        {c.price}
        {c.currency}
        <button className={"btn btn-primary"} onClick={this.handleClick}>
          AddToCart
        </button>
      </li>
    ));
    return (
      <div>
        <h1> Our Computer Case List </h1>
        <ul className="items-ul">{casesArray}</ul>
      </div>
    );
  }
}

export default Cases;
