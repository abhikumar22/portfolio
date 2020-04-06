import React from "react";

export default function Home() {
  return (
    <div className="row ml-3">
      <div className="col-sm-12 col-lg-6 py-5">
        <p className="pt-3 pnk">- I am</p>
        <p className="pt-0 display-4 nm text-white">Abhishek kumar</p>
        <p className="pt-0 pnk">Software Engineer</p>
        <p className="pt-0 pnk2 text-white">
          Proven IT Professional with experience of 1.9+ years in Software
          Development & Project implementation, mainly focusing on business
          analysis, design, development of large-scalable application.
          Passionate about problem solving, Algorithms and Data Structures.
          Skilled in Python (Django), Mobile Development(React Native), ReactJS,
          Data Analysis with python which demands strong programming and an
          ability to analyse & solve complex problems with high efficiency.
        </p>
        <button
          type="button"
          className="btn btn-outline-primary mt-4 text-white display-4 font-weight-bold tansfont"
        >
          MORE ABOUT ME
        </button>
      </div>
    </div>
  );
}
