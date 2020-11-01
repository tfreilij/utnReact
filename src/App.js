import React, { Component } from "react";

import Registration from "./components/Registration";
import Login from "./components/Login";
import Home from "./components/Home";
import Product from "./components/Product";

import {BrowserRouter,Route} from "react-router-dom"
import firebase from './Config/firebase'

class App extends Component{
    constructor(props){
        super(props);
       
        console.log(firebase);
    }
    
    render() {
        return (  
          <div>
                            
              <BrowserRouter>               
                  <Route path="/" component={Home} exact />
                  <Route path="/registration" component={Registration} exact />
                  <Route path="/login" component={Login} exact />
                  <Route path="/product/:id" component={Product} exact />   
                  <Route path="/home" component={Home} exact />   
              </BrowserRouter>  
              
            </div>
        )
    }
}

export default App;