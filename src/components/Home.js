import React, { Component } from "react";
import GraphicCard from "./GraphicCard";
import Cases from "./Cases";
import Cpu from "./Cpu";
class Home extends Component {
  render() {
    return (
      <div className="title">
        <h1>
          <strong>Our Products</strong>
        </h1>
        <Cases />
        <Cpu />
        <GraphicCard />
      </div>
    );
  }
}

export default Home;
