import React from 'react';
import Misbar from "/home/enas/Documents/trading/src/Components/Misbar.component/Misbar.component.jsx";
import About from "./Components/Aboutus.component/Aboutus.component.jsx";
import Services from "./Components/Services.component/Services.component.jsx";
import Clients from "./Components/Clients.component/Clients.component.jsx";
import Footer from './Components/Footer.component/Footer.component.jsx';
import { Route, BrowserRouter as Router} from 'react-router-dom'



class App extends React.Component {
  render() {
    return (
     
        <Router>
          <div>
           
          <Route path="/" component={Misbar}/>
          <Route path="/about" component={About}/>
          <Route path="/services" component={Services}/>
          <Route path="/clients" component={Clients}/>
          <Route path="/footer" component={Footer}/>
          
          </div>
        </Router>
    )
  }
}

export default App;
