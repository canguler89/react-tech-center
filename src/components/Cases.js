import React, { Component } from "react";
import { storeProducts } from "../data";

class Cases extends Component {
  state = {
    cases: storeProducts
  };
  render() {
    console.log(this.state.cases);
    return (
      <div>
        <h1> Our Computer Case List </h1>
        {/* <img
          src={process.env.PUBLIC_URL + "/images/cases/corsair.jpg"}
          alt="case1"
          width="200px"
          height="200px"
        />
        <img
          src={process.env.PUBLIC_URL + "/images/cases/DIYpc.jpg"}
          alt="case2"
          width="200px"
          height="200px"
        />
        <img
          src={process.env.PUBLIC_URL + "/images/cases/NZXT.jpg"}
          alt="case3"
          width="200px"
          height="200px"
        />
        <img
          src={process.env.PUBLIC_URL + "/images/cases/rosewill.jpg"}
          alt="case4"
          width="200px"
          height="200px"
        />
        <img
          src={process.env.PUBLIC_URL + "/images/cases/thermaltake.jpg"}
          alt="case5"
          width="200px"
          height="200px"
        /> */}
      </div>
    );
  }
}

export default Cases;
