import React, { Component } from "react";
import ReactDOM from 'react-dom';
import "/home/enas/Documents/trading/src/Components/Form.component/Form.component.css";
import App from "/home/enas/Documents/trading/src/App.js";
import MyErr from "/home/enas/Documents/trading/src/MyErr.jsx";

export class Form extends Component{
    state={
        username:"enas",
        password:"12345",
        confirmUser:"",
        confirmPass:""
    }
    constructor(props){
        super(props);
        this.state={
            logInSuccess:true
        }
    }

changeHandler = (ev) => {
    console.log("ev.target.name", ev.target.name);
    console.log("ev.target.value", ev.target.value);
    this.setState({
        [ev.target.id]: ev.target.value
    })
}
rendComp = (e) => {
    e.preventDefault();
    const myuser = this.state.confirmUser;
    const mypass = this.state.confirmPass
    
    console.log('working',myuser)
    if(myuser==='enas' && mypass==='12345'){
        return ReactDOM.render(<App />, document.getElementById('root'));
 
    } else {
         return ReactDOM.render(<MyErr />, document.getElementById('root'));

    }
  }
  
render(){
    return(
            <div className="formdiv">
                <form onSubmit={(e)=>this.rendComp(e)}>
                <label className="userlabel">Username</label>
                <br />
                <input type="text"  onChange={this.changeHandler} id="confirmUser" />
                <br />
                <br />
                <label className="pswd">Password</label>
                <br />
                <input type="password" onChange={this.changeHandler} id="confirmPass" />
                <br />
                <br />
                <button  onClick={(event)=>this.rendComp(event)}>Sumbit</button>
                </form>
            </div>
        )
    }
    
}

export default Form;




