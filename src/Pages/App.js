import React from "react";
import "../assets/css/style.css";
import NavigationComponent from "../component/NavigationComponent";
import logo from "../assets/images/marvel.png";
import { NAVIGATION_TYPE } from "../utils/constants";

import HomeComponent from "../component/HomeComponent";
import About from "../component/About";
import Blog from "../component/Blog";
import Contact from "../component/Contact";
import Portfolio from "../component/Portfolio";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNavigation: 1,
    };
  }
  setNavigationType(value) {
    this.setState({ currentNavigation: value }, () => {
      console.log("lopp", this.state.currentNavigation);
    });
  }

  render() {
    return (
      <div className="first">
        <div className="container">
          {/* <NavigationComponent/> */}
          <div className="pt-1">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <div className="w-100 d-flex flex-grow justify-content-center align-items-center">
                {/* <span className="w-100 d-lg-none d-block"></span> */}
                <img src={logo} style={{ height: 35, width: 35 }} alt="Logo" />
                <span
                  className="navbar-brand userhandle ml-2 font-weight-bold"
                  href="#"
                >
                  abhikumar22
                </span>
                <div className="w-100 text-right">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#myNavbar7"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                </div>
              </div>
              <div
                className="collapse navbar-collapse text-right"
                id="myNavbar7"
              >
                <ul className="navbar-nav ml-auto flex-nowrap">
                  <li
                    className="nav-item px-2"
                    onClick={() => {
                      this.setNavigationType(NAVIGATION_TYPE.HOME);
                    }}
                  >
                    <span className="nav-link text-white abhi font2 cursorPointer">
                      Home
                    </span>
                  </li>
                  <li
                    className="nav-item px-2"
                    onClick={() => {
                      this.setNavigationType(NAVIGATION_TYPE.ABOUT);
                    }}
                  >
                    <span className="nav-link text-white abhi font2 cursorPointer">
                      About
                    </span>
                  </li>
                  <li
                    className="nav-item px-2"
                    onClick={() => {
                      this.setNavigationType(NAVIGATION_TYPE.PORTFOLIO);
                    }}
                  >
                    <span className="nav-link text-white abhi font2 cursorPointer">
                      Portfolio
                    </span>
                  </li>
                  <li
                    className="nav-item px-2"
                    onClick={() => {
                      this.setNavigationType(NAVIGATION_TYPE.BLOG);
                    }}
                  >
                    <span className="nav-link text-white abhi font2 cursorPointer">
                      Blog
                    </span>
                  </li>
                  <li
                    className="nav-item px-2"
                    onClick={() => {
                      this.setNavigationType(NAVIGATION_TYPE.CONTACT);
                    }}
                  >
                    <span className="nav-link text-white abhi font2 cursorPointer">
                      Contact
                    </span>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          {/* <HomeComponent /> */}
          <div className="container">
            {this.state.currentNavigation === 1 ? (
              <HomeComponent />
            ) : this.state.currentNavigation === 2 ? (
              <About />
            ) : this.state.currentNavigation === 3 ? (
              <Portfolio />
            ) : this.state.currentNavigation === 4 ? (
              <Blog />
            ) : (
              <Contact />
            )}
          </div>
        </div>
      </div>
    );
  }
}
