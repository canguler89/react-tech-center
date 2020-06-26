import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Cpu from "./Cpu";
import Home from "./Home";
import GraphicCard from "./GraphicCard";
import HardDrives from "./HardDrives";
import Keyboards from "./Keyboards";
import Mainboards from "./Mainboards";
import Mouses from "./Mouses";
import Ram from "./Ram";
import logo from "./home1.png";
import cart from "./cart.png";
import { ButtonContainer } from "./Button";
import Cases from "./Cases";
import Cart from "./Cart";

export default class Navbar extends Component {
  render() {
    return (
      <div className="container12">
        <Router>
          <div className="container1">
            <nav className="nav-main">
              <ul className="nav-ul">
                <li className="nav-li">
                  <NavLink to="/">
                    <ButtonContainer>
                      <img src={logo} alt="home" width="40px" height="40px" />
                      Home
                    </ButtonContainer>
                  </NavLink>
                </li>
                <li className="nav-li">
                  <NavLink to="/cases">cases</NavLink>
                </li>
                <li className="nav-li">
                  <NavLink to="/cpu">Cpu</NavLink>
                </li>
                <li className="nav-li">
                  <NavLink to="/graphics">Graphic Cards</NavLink>
                </li>
                <li className="nav-li">
                  <NavLink to="/harddrives">Hard Drives</NavLink>
                </li>
                <li className="nav-li">
                  <NavLink to="/keyboards">Keyboards</NavLink>
                </li>
                <li className="nav-li">
                  <NavLink to="/mainboards">Mainboards</NavLink>
                </li>
                <li className="nav-li">
                  <NavLink to="/mouses">Mouses</NavLink>
                </li>
                <li className="nav-li">
                  <NavLink to="/ram">Ram</NavLink>
                </li>
                <li className="nav-li">
                  <NavLink to="/cart">
                    <ButtonContainer>
                      <img src={cart} alt="cart" width="40px" height="40px" />
                      Cart
                    </ButtonContainer>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <Route exact path="/" component={Home} />
          <Route exact path="/cases" component={Cases} />
          <Route exact path="/cpu" component={Cpu} />
          <Route exact path="/graphics" component={GraphicCard} />
          <Route exact path="/harddrives" component={HardDrives} />
          <Route exact path="/keyboards" component={Keyboards} />
          <Route exact path="/mainboards" component={Mainboards} />
          <Route exact path="/mouses" component={Mouses} />
          <Route exact path="/ram" component={Ram} />
          <Route exact path="/cart" component={Cart} />
        </Router>
      </div>
    );
  }
}
