import logo from './travel.png';
import './App.css';
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { About } from "./MyComponents/About";
import Main from "./MyComponents/Main";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './MyComponents/Carousel';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>

      <Router>
        <Header />
        <Switch>
          <Route exact path="/" render={()=>{
            return (
            <>
            <Main />
            <Carousel />
            </> )
            
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>

    </>
  );
}

export default App;

