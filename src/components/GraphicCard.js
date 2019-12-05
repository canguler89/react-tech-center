import React, { Component } from "react";

class GraphicCard extends Component {
  render() {
    return (
      <div>
        <img
          src={
            process.env.PUBLIC_URL + "/images/graphic-cards/evga gtx 1660.jpg"
          }
          alt="card1"
          width="200px"
          height="200px"
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "/images/graphic-cards/evga rtx 2080 ti.jpg"
          }
          alt="card2"
          width="200px"
          height="200px"
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "/images/graphic-cards/gigabyte rtx 2070.jpg"
          }
          alt="card3"
          width="200px"
          height="200px"
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "/images/graphic-cards/msi radeon rx 580.jpg"
          }
          alt="card4"
          width="200px"
          height="200px"
        />
        <img
          src={
            process.env.PUBLIC_URL + "/images/graphic-cards/msi rtx 2060.jpg"
          }
          alt="card5"
          width="200px"
          height="200px"
        />
      </div>
    );
  }
}

export default GraphicCard;
