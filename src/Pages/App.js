import React from "react";
import "../assets/css/style.css";
import { NAVIGATION_TYPE, NAVIGATION_TYPE_NAME } from "../utils/constants";

import HomeComponent from "../component/HomeComponent";
import MySkills from "../component/MySkills";
import Blog from "../component/Blog";
import Contact from "../component/Contact";
import Portfolio from "../component/Portfolio";



export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      currentNavigation: 1,
      toShowTitle: true,
      navigationTitle: "",
      checked: true,
    };
  }
  setNavigationType(value) {
    this.setState(
      {
        checked: false,
        toShowTitle: false,
        navigationTitle: NAVIGATION_TYPE_NAME[value - 1],
      },
      () => {
        this.setState(
          {
            checked: true,
            currentNavigation: value,
          },
          () => {
            // console.log("lopp", this.state.currentNavigation);
          }
        );
      }
    );
  }

  render() {
    return (
      <div className="first">
        <div className="container">
          {/* <NavigationComponent/> */}
          <div className="pt-1">
            <nav className="navbar navbar-expand-lg navbar-dark abs fixed-top">
              <div className="w-100 d-flex flex-grow justify-content-center align-items-center">
                {this.state.toShowTitle ? (
                  // <img
                  //   src={logo}
                  //   style={{ height: 35, width: 35 }}
                  //   alt="Logo"
                  // />
                  <span
                    className="navbar-brand userhandle ml-2 font-weight-bold"
                    href="#"
                  >
                    abhikumar22
                  </span>
                ) : (
                  <span
                    className="navbar-brand userhandle ml-2 font-weight-bold"
                    href="#"
                  >
                    {this.state.navigationTitle}
                  </span>
                )}
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
                className="collapse navbar-collapse text-right "
                id="myNavbar7"
              >
                <ul className="navbar-nav ml-auto flex-nowrap">
                  <li
                  data-toggle="collapse" data-target=".navbar-collapse.show"
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
                  data-toggle="collapse" data-target=".navbar-collapse.show"
                    className="nav-item px-2"
                    onClick={() => {
                      this.setNavigationType(NAVIGATION_TYPE.MySkills);
                    }}
                  >
                    <span className="nav-link text-white abhi font2 cursorPointer">
                      MySkills
                    </span>
                  </li>
                  <li
                  data-toggle="collapse" data-target=".navbar-collapse.show"
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
                  data-toggle="collapse" data-target=".navbar-collapse.show"
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
                  data-toggle="collapse" data-target=".navbar-collapse.show"
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
          
            <div className="container rel mt-5">
            {/* <Slide
            direction="left"
            in={this.state.checked}
            // mountOnEnter
            // unmountOnExit
          > */}
            <div>
              {this.state.currentNavigation === NAVIGATION_TYPE.HOME ? (
                <HomeComponent />
              ) : this.state.currentNavigation === NAVIGATION_TYPE.MySkills ? (
                <MySkills />
              ) : this.state.currentNavigation === NAVIGATION_TYPE.PORTFOLIO ? (
                <Portfolio />
              ) : this.state.currentNavigation === NAVIGATION_TYPE.BLOG ? (
                <Blog />
              ) : (
                <Contact />
              )}
              </div>
          {/* </Slide> */}

              {/* <div className="text-white mt-2">
              <div className="copyright">
                <span>© Copyright abhikumar22 2020</span>
              </div>
            </div> */}
              
            </div>
        </div>
      </div>
    );
  }
}
