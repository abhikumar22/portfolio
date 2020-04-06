import React from "react";
import logo from "../assets/images/marvel.png";

export default function Car() {
  return (
    <div className="pt-1">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="d-flex flex-grow justify-content-center align-items-center">
          <span className="w-100 d-lg-none d-block"></span>
          <img src={logo} style={{ height: 35, width: 35 }} alt="Logo" />
          <span className="navbar-brand userhandle ml-2 font-weight-bold" href="#">
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
          className="collapse navbar-collapse flex-grow-1 text-right"
          id="myNavbar7"
        >
          <ul className="navbar-nav ml-auto flex-nowrap">
            <li className="nav-item px-2">
              <span className="nav-link text-white abhi font2">Home</span>
            </li>
            <li className="nav-item px-2">
              <span className="nav-link text-white abhi font2">About</span>
            </li>
            <li className="nav-item px-2">
              <span className="nav-link text-white abhi font2">Portfolio</span>
            </li>
            <li className="nav-item px-2">
              <span className="nav-link text-white abhi font2">Blog</span>
            </li>
            <li className="nav-item px-2">
              <span className="nav-link text-white abhi font2">Contact</span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
