import React from "react";
import data from "../data";

const CpuList = data.cpus;

class Cpu extends React.Component {
  render() {
    return (
      <div>
        <h2>CPU LIST IN HERE</h2>
        <ul id="items-ul">
          {CpuList.map((cp) => (
            <li id="cases1">
              <img src={cp.img} alt="cpus" />
              {cp.title}
              <br />
              <div className="price">
                {cp.price}
                {cp.currency}
              </div>
              <button className={"btn btn-primary"}>AddToCart</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Cpu;
