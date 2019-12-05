import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cases from "./components/Cases";
import Cpu from "./components/Cpu";
import Home from "./components/Home";
import GraphicCard from "./components/GraphicCard";
import HardDrives from "./components/HardDrives";
import Keyboards from "./components/Keyboards";
import Mainboards from "./components/Mainboards";
import Mouses from "./components/Mouses";
import Cart from "./components/Cart";
import Ram from "./components/Ram";
import { Route, NavLink, HashRouter } from "react-router-dom";
import logo from "./home1.png";
import cart from "./cart.png";
import { ButtonContainer } from "./components/Button";

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="container1">
          <nav className="nav-main">
            <ul>
              <li>
                <NavLink to="/">
                  <ButtonContainer>
                    <img src={logo} alt="home" width="40px" height="40px" />
                    Home
                  </ButtonContainer>
                </NavLink>
              </li>
              <li>
                <NavLink to="/cases">cases</NavLink>
              </li>
              <li>
                <NavLink to="/cpu">Cpu</NavLink>
              </li>
              <li>
                <NavLink to="/graphics">Graphic Cards</NavLink>
              </li>
              <li>
                <NavLink to="/harddrives">Hard Drives</NavLink>
              </li>
              <li>
                <NavLink to="/keyboards">Keyboards</NavLink>
              </li>
              <li>
                <NavLink to="/mainboards">Mainboards</NavLink>
              </li>
              <li>
                <NavLink to="/mouses">Mouses</NavLink>
              </li>
              <li>
                <NavLink to="/ram">Ram</NavLink>
              </li>
              <li>
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
      </HashRouter>

      <br />
    </div>
  );
}

export default App;
