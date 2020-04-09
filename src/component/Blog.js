import React from "react";
import { Slide } from "@material-ui/core";

export default function About() {
  return (
    <Slide
    direction="left"
    in={true}
    // mountOnEnter
    // unmountOnExit
  >
    <div className="row ml-3">
      <div className="col-sm-12 col-lg-6 bg-danger py-5">
      <p className="pt-3 pnk">- I am</p>

      </div>
      
    </div>
    </Slide>
  );
}
