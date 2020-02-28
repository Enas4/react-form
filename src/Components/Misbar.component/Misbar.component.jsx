import React, { Component, Fragment } from "react";
import "/home/enas/Documents/trading/src/Components/Misbar.component/Misbar.component.css";
import logo from "/home/enas/Documents/trading/src/Components/Misbar.component/Misbar-logo.png";
import WOW from "wowjs";
import { Link } from "react-router-dom";

class Misbar extends Component {
    componentDidMount() {
        new WOW.WOW().init();
    }
    render() {
        return (
            <Fragment>
                <div className="navbuttons">
                    <div className="navbar wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                     
                        <ul className="navbarlist">
                            <li className="nav-item"><Link to="/">HOME</Link></li>
                            <li className="nav-item"><Link to='/about'>ABOUT US</Link></li>
                            <li className="nav-item"><Link to='/services'>SERVICES</Link></li>
                            <li className="nav-item"><Link to='/clients'>CLIENTS</Link></li>
                            <li className="nav-item"><Link to='/footer'>CONTACTS</Link></li>
                        </ul>
                       
                        <img src={logo} width="20%" alt="wait" />
                        <h1 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">WELCOME TO <span>MISBAR !</span></h1>
                        <p className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">We started our business in 1994 as heavy machinery traders for more than 10 years after so many years of <br /> experience we expanded to trading metals in 2012 to local companies and contractors, in 2014 we expanded our <br />business to reach more markets around the region.</p>

                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Misbar;




















































