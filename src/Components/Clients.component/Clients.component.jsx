import React, { Component, Fragment} from "react";
import "/home/enas/Documents/trading/src/Components/Clients.component/Clients.component.css";
import pic1 from "./pic1.png";
import pic2 from "./pic2.png";
import pic3 from "./pic3.png";
import pic4 from "./pic4.png";
import pic5 from "./pic5.png";
import pic6 from "./pic6.png";

class Client extends Component {
    render() {
        return (
            <Fragment>
                <div className="clients">
                    <h1>CLIENTS</h1>
                    <hr />
                    <img src={pic1} width="10%" alt="wait"/>
                    <img src={pic2} width="10%" alt="wait"/>
                    <img src={pic3} width="10%" alt="wait"/>
                    <img src={pic4} width="10%" alt="wait"/>
                    <img src={pic5} width="10%" alt="wait"/>
                    <img src={pic6} width="10%" alt="wait"/>
                </div>
            </Fragment>


        )
    }
}
export default Client;