import React, { Component } from "react";

class Cpu extends Component {
  render() {
    return (
      <div>
        <img
          src={process.env.PUBLIC_URL + "/images/cpu/i5 9400.jpg"}
          alt="cpu1"
          width="200px"
          height="200px"
        />
        <img
          src={process.env.PUBLIC_URL + "/images/cpu/i7 8700.jpg"}
          alt="cpu2"
          width="200px"
          height="200px"
        />
        <img
          src={process.env.PUBLIC_URL + "/images/cpu/i9 9900.jpg"}
          alt="cpu3"
          width="200px"
          height="200px"
        />
        <img
          src={process.env.PUBLIC_URL + "/images/cpu/ryzen 5.jpg"}
          alt="cpu4"
          width="200px"
          height="200px"
        />
        <img
          src={process.env.PUBLIC_URL + "/images/cpu/ryzen 7.jpg"}
          alt="cpu5"
          width="200px"
          height="200px"
        />
      </div>
    );
  }
}

export default Cpu;
