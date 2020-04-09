import React from "react";
import {
  CircularProgressbarWithChildren,
  CircularProgressbar,
} from "react-circular-progressbar";
import "../assets/css/about/style.css";
import "../assets/css/about/custom.css";
import { FaPython, FaReact, FaDatabase } from "react-icons/fa";
import { Slide } from "@material-ui/core";

const percentage = 66;


export default function MySkills() {
  return (
    <Slide
    direction="left"
    in={true}
    // mountOnEnter
    // unmountOnExit
  >
    <div className="text-center col-sm-12 col-lg-6">
      <div className="py-5 text-white">
        <div className="row">
          <div className="col" style={{ width: 150, height: 150 }}>
            <CircularProgressbarWithChildren value={90}>
              {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
              <FaPython color={"white"} size={"1.2em"} />
              <div style={{ fontSize: 16, marginTop: 5 }}>
                <strong>90 %</strong>
              </div>
            </CircularProgressbarWithChildren>
            <h5 className="mt-2">Python</h5>
          </div>

          <div className="col" style={{ width: 150, height: 150 }}>
            <CircularProgressbarWithChildren value={75}>
              {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
              <FaReact color={"white"} size={"1.2em"} />
              <div style={{ fontSize: 16, marginTop: 5 }}>
                <strong className="mt-2">75 %</strong>
              </div>
            </CircularProgressbarWithChildren>
            <h5 className="mt-2">React</h5>
          </div>

          <div className="col" style={{ width: 150, height: 150 }}>
            <CircularProgressbarWithChildren value={80}>
              {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
              <FaDatabase color={"white"} size={"1.2em"} />
              <div style={{ fontSize: 16, marginTop: 5 }}>
                <strong className="mt-2">80 %</strong>
              </div>
            </CircularProgressbarWithChildren>
            <h5 className="mt-2">Databases</h5>
          </div>
        </div>
      </div>
      <div className=" text-white mt-2">
        <h5>Additional skills</h5>
      </div>
    </div>
  </Slide>
  );
}
