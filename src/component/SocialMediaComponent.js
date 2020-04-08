import React,{Component }from "react";
import {
  FaGithub,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaMediumM,
  FaStackOverflow,
} from "react-icons/fa";
import "../assets/css/contact/main.css";


export default class SocialMediaComponent extends Component {
    render(){
        return (
            <div
              className="cursorPointer col col-sm col-lg col-xl col-md"
              onClick={() => {this.props.clickEvent()}}
              style={{ width: "auto" }}
            >
                {this.props.type===1?<FaGithub color={"white"} size={"1.2em"} />:
                this.props.type===2? <FaFacebookF color={"white"} size={"1.2em"} />:
                this.props.type===3?<FaLinkedinIn color={"white"} size={"1.2em"} />:
                this.props.type===4?<FaTwitter color={"white"} size={"1.2em"} />:
                this.props.type===5? <FaStackOverflow color={"white"} size={"1.2em"} />:
                this.props.type===6?<FaInstagram color={"white"} size={"1.2em"} />:
                <FaMediumM color={"white"} size={"1.2em"} />
                }
              
        
              {/* <FaFacebookF color={"white"} size={"1.2em"} />
              <FaLinkedinIn color={"white"} size={"1.2em"} />
              <FaTwitter color={"white"} size={"1.2em"} />
              <FaMediumM color={"white"} size={"1.2em"} />
              <FaStackOverflow color={"white"} size={"1.2em"} />
              <FaInstagram color={"white"} size={"1.2em"} /> */}
        
            </div>
          );
    }
  
}
