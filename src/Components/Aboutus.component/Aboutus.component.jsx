import React, { Component } from "react"
import "/home/enas/Documents/trading/src/Components/Aboutus.component/Aboutus.component.css";
import pic from "/home/enas/Documents/trading/src/Components/Aboutus.component/about-us.png";


class About extends Component {
    render() {
        return (
            <div className="cf">

                <div className="containerimage wow fadeIn" data-wow-duration="0.8s" data-wow-delay="0.3s"><img src={pic} alt="wait" /></div>

                <div className="cfp">
                    <h1 className="wow fadeIn" data-wow-duration="0.8s" data-wow-delay="0.3s">ABOUT US</h1>
                    <div className="underline"></div>
                    <blockquote className="blockquote">
                        <p className="mb-0 wow fadeIn" data-wow-duration="0.8s" data-wow-delay="0.3s">" Every day we use our expertise and logistical networks to further expand our trading network , efficiently and responsibly. Founded in Dammmm, Saudi Arabia in 1994 , today the company has offices in Dammmm, Jeddah and Dubai and trades over a variety of products like copper , aluminum and steel to hard industrial equipment. Through the years, the group has its reputation and had been made Known to being committed to produce a high quality and excellence services. Misbar group has its highly qualified and professional employees managing the different divisions and department. These employees working with full coordination with each other to maintain the company’s principle of completing the project timely and the required specifications.</p>
                        <hr />
                        <footer className="blockquote-footer">Ammar, CEO - Misbar Trading<cite title="Source Title">Source Title</cite></footer>
                    </blockquote>
                </div>

            </div>
        )
    }
}

export default About;