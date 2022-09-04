import React, { useState, useEffect } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar';
import Footer from './components/Footer.js'
import Buy from "./components/Buy.js";
import Register from "./components/Register.js";
import About from "./components/About.js";
import Home from "./components/Home";
import Faq from "./components/Faq";
import { Route, Switch } from "react-router-dom"
export default function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  const loginHandler = () => {
    setLoggedIn(!loggedIn);
  }

  return (
<div>
<NavBar/>
<Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/buy">
          <Buy />
        </Route>
        <Route path="/sell">
          <Register />
        </Route>

        <Route path="/about">
          <About />
        </Route>
        <Route path="/faq">
          <Faq />
        </Route>
        <Route path="/buyform">
        <Register/>
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    <Footer/>
    </div>
  )
}
