import React, { Component, Fragment } from "react";
import "/home/enas/Documents/trading/src/Components/Services.component/Services.component.css"
import pic1 from "./service-1.jpg";
import pic2 from "./service-2.jpg";
import pic3 from "./service-3.jpg";

class Services extends Component {
    render() {
        return (
            <Fragment>
            <div className="services">
                <h1>SERVICES</h1>
                <hr />
                <div className="srvpara"><p>We started our business in 1994 as heavy machinery traders for more than 10 years after so many years of experience we expanded to trading metals in 2012 to local companies and contractors, in 2014 we expanded our business to reach more markets around the region. we have been offering premium metal product solutions to the clients within stipulated time frame. We have collaborated with reliable vendors for procuring qualitative metal products. Use of optimum quality metal in scrap of metal products and high performance and efficiency. We like to think that based of our well known experience in the market and the region we can deliver the best deals to our clients.</p></div>
            


           <div className="pics">

            <div className="pictures">

                <div className="card" style={{ width: '20rem', height:'23rem' }}>
                    <img className="card-img-top" src={pic1} alt="Card-cap" />
                    <div className="card-body">
                        <h3 className="card-title">ALUMINIUM</h3>
                        <p className="card-text">We offer pure aluminium at the best rates in the market.</p>
                    </div>
                </div>
            </div> 

            <div className="pictures">
                <div className="card" style={{  width: '20rem', height:'23rem' }}>
                    <img className="card-img-top" src={pic2} alt="Card-cap" />
                    <div className="card-body">
                        <h3 className="card-title">COPPER</h3>
                        <p className="card-text">We offer pure copper at the best rates in the market.</p>
                    </div>
                </div>
            </div> 

            <div className="pictures">
                <div className="card" style={{  width: '20rem', height:'23rem'}}>
                    <img className="card-img-top" src={pic3} alt="Card-cap" />
                    <div className="card-body">
                        <h3 className="card-title">STEEL</h3>
                        <p className="card-text">We offer pure steel at the best rates in the market.</p>
                    </div>
                </div>
            </div> 

            </div>

            </div> 
            </Fragment>
        )
    }
}
export default Services;