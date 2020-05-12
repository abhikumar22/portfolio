import React, { Component } from "react";
import "../assets/css/contact/main.css";
import "../assets/css/contact/util.css";
import SocialMediaComponent from "../component/SocialMediaComponent";
import { SOCIAL_URL } from "../utils/constants";
import { AiOutlineMail } from "react-icons/ai";
import { MdCall } from "react-icons/md";
import { Slide } from "@material-ui/core";

export default class About extends Component {
  handleSocialClick(val) {
    let url =
      val === 1
        ? SOCIAL_URL.GITHUB
        : val === 2
        ? SOCIAL_URL.FACEBOOK
        : val === 3
        ? SOCIAL_URL.LINKEDIN
        : val === 4
        ? SOCIAL_URL.TWITTER
        : val === 5
        ? SOCIAL_URL.STACKOVERFLOW
        : val === 6
        ? SOCIAL_URL.INSTAGRAM
        : SOCIAL_URL.MEDIUM;

    window.open(url);
  }

  render() {
    return (
      <Slide
      direction="left"
      in={true}
      // mountOnEnter
      // unmountOnExit
    >
      <div className="py-3 col-sm-12 col-lg-6">
        <div className="py-1 justify-content-md-center">
          <form
            className="contact1-form validate-form text-center"
            action="https://formspree.io/abhi.ckp1002@gmail.com"
            method="POST"
          >
            {/* <h3 className="text-white mb-3">Get in touch</h3> */}

            {/* <div
              className="wrap-input1 validate-input"
              data-validate="Name is required"
            >
              <input
                className="input1"
                type="text"
                name="name"
                placeholder="Name"
              />
              <span className="shadow-input1"></span>
            </div> */}

            <div
              className="wrap-input1 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                className="input1"
                type="text"
                name="From"
                placeholder="Email"
                required
              />
              <span className="shadow-input1"></span>
            </div>

            <div
              className="wrap-input1 validate-input"
              data-validate="Subject is required"
            >
              <input
                className="input1"
                type="text"
                name="Subject"
                placeholder="Subject"
                required
              />
              <span className="shadow-input1"></span>
            </div>

            <div
              className="wrap-input1 validate-input"
              data-validate="Message is required"
            >
              <textarea
                className="input1"
                name="Message"
                placeholder="Message"
                required
              ></textarea>
              <span className="shadow-input1"></span>
            </div>

            <div className="container-contact1-form-btn">
              <button
                className="contact1-form-btn"
                onClick={() => {
                  console.log("hello");
                }}
              >
                <span>Send Email</span>
              </button>
            </div>
            <div className="py-3 ml-2">
              <div className="col mx-auto justify-content-center">
                <SocialMediaComponent
                  type={1}
                  clickEvent={() => {
                    this.handleSocialClick(1);
                  }}
                />
                <SocialMediaComponent
                  type={2}
                  clickEvent={() => {
                    this.handleSocialClick(2);
                  }}
                />
                <SocialMediaComponent
                  type={3}
                  clickEvent={() => {
                    this.handleSocialClick(3);
                  }}
                />
                <SocialMediaComponent
                  type={4}
                  clickEvent={() => {
                    this.handleSocialClick(4);
                  }}
                />
                <SocialMediaComponent
                  type={5}
                  clickEvent={() => {
                    this.handleSocialClick(5);
                  }}
                />
                <SocialMediaComponent
                  type={6}
                  clickEvent={() => {
                    this.handleSocialClick(6);
                  }}
                />
                <SocialMediaComponent
                  type={7}
                  clickEvent={() => {
                    this.handleSocialClick(7);
                    console.log("sdkhk");
                  }}
                />
                <div
                  onClick={() => {}}
                  className="cursorPointer col col-sm col-lg col-xl col-md"
                  style={{ width: "auto" }}
                >
                </div>
              </div>
              <div className="row text-white mt-4">
                  <div className="col">
                    <AiOutlineMail color={"white"} size={"2em"} />
                    <h3 className="mt-1">EMAIL</h3>
                    <h6 className="mt-1">abhikr281@gmail.com</h6>

                </div>
                  <div className="col">
                    <MdCall color={"white"} size={"2em"} />
                    <h3 className="mt-1">CALL</h3>
                    <h6 className="mt-1">+918342962927</h6>

                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      </Slide>
    );
  }
}
