import React, { Component } from "react";

import "//home/enas/Documents/trading/src/Components/Footer.component/Footer.component.css";
import logo from "/home/enas/Documents/trading/src/Components/Footer.component/map-overlay.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';


class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <img src={logo} width="10%" alt="wait" />
                <p>We hope that you have found the information provided here <br />helpful to you and we look forward to hearing from you.</p>
                <p><h5>Contact Info</h5>
                    +966581377789<br />
                    Ammar@misbartrading.com<br />
                    Saudi Arabia - Khobar<br />
                    UAE - Dubai</p>
                <ul>
                    <li> <FontAwesomeIcon icon={faFacebookSquare} size='2x' style={{ color: "rgb(28, 28, 121" }} /></li>
                    <li>  <FontAwesomeIcon icon={faTwitterSquare} size='2x' style={{ color: "rgb(28, 28, 121" }} /></li>
                    <li>  <FontAwesomeIcon icon={faLinkedin} size='2x' style={{ color: "rgb(28, 28, 121" }} /></li>
                </ul>
                <p className="footerpara">All right reserved Misbar Trading @ 2019<br />
                    Designed By <span>ENAS</span></p>
            </div>
        )
    }
}
export default Footer;