import React, { Component } from "react";
import data from "../data";

const CpuList = data.cpus;

class Cpu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h2>CPU LIST IN HERE</h2>
        <ul className="items-ul">
          {CpuList.map(cp => (
            <li className="col-sm-3">
              <img src={cp.img} alt="cpus" />
              {cp.title}
              <br />
              {cp.price}
              {cp.currency}
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

export default Cpu;
