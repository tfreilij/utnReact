import React, { Component } from "react";

import Registration from "./components/Registration";
import Login from "./components/Login";
import Home from "./components/Home";
import Product from "./components/Product";

import {BrowserRouter,Route} from "react-router-dom"

class App extends Component{
    constructor(){
        super();
       
    }
    
    render() {
        return (  
          <div>
                            
              <BrowserRouter>               
                  <Route path="/" component={Home} exact />
                  <Route path="/registration" component={Registration} exact />
                  <Route path="/login" component={Login} exact />
                  <Route path="/product/:id" component={Product} exact />   
              </BrowserRouter>  
              
            </div>
        )
    }
}

export default App;