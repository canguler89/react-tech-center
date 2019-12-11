import React, { Component } from "react";
import Cases from "./Cases";
import Cpu from "./Cpu";
import "../App.css";
import Jokes from "./Jokes";

class Home extends Component {
  render() {
    return (
      <div className="title">
        <h1>
          <strong>Our Products</strong>
        </h1>
        <div className="items">
          <Cases />
          <Cpu />
          <hr />
          <Jokes />
        </div>
      </div>
    );
  }
}

export default Home;
