import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Index from "./components/Index";
import Resume from "./components/Resume"
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";

function App() {
  return (
    <Router>
     <CssBaseline/>
        <Switch>
        <React.Fragment>
            <Route exact path="/" component={Index}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/contacts" component={Contacts}/>
            </React.Fragment>
        </Switch>
        </Router> 
  )
};

export default App;
