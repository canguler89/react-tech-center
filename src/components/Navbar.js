import React, { Component } from "react";
import { Route, NavLink, Router } from "react-router-dom";

import Cpu from "./components/Cpu";
import Home from "./components/Home";
import GraphicCard from "./components/GraphicCard";
import HardDrives from "./components/HardDrives";
import Keyboards from "./components/Keyboards";
import Mainboards from "./components/Mainboards";
import Mouses from "./components/Mouses";
import Ram from "./components/Ram";

export default class Navbar extends Component {
  render() {
    return (
      <div className="container12">
        <Router>
          <nav className="nav-main">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
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
            </ul>
          </nav>
          <Route exact path="/" component={Home} />
          <Route exact path="/cpu" component={Cpu} />
          <Route exact path="/graphics" component={GraphicCard} />
          <Route exact path="/harddrives" component={HardDrives} />
          <Route exact path="/keyboards" component={Keyboards} />
          <Route exact path="/mainboards" component={Mainboards} />
          <Route exact path="/mouses" component={Mouses} />
          <Route exact path="/ram" component={Ram} />
        </Router>
      </div>
    );
  }
}
