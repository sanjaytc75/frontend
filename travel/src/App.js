import './App.css';
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { About } from "./MyComponents/About";
import Main from "./MyComponents/Main";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './MyComponents/Carousel';
import Login from './MyComponents/Login';
import Register from './MyComponents/Register';
import Header2 from './MyComponents/Header2';
import Home from './MyComponents/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
              <Header />
                <Main />
                <Carousel />
              </>)
          }}>
          </Route>
          <Route exact path="/about" component={About}>
          <Header />
            <About />
          </Route>
          <Route exact path="/Login" component={Login}>
          <Header />
            <Login />

          </Route>
          <Route exact path="/Register" component={Register}>
          <Header />
            <Register />
          </Route>
          <Route exact path="/Home" render={() => {
            return (
              <>
              <Header2 />
              <Home />
                <Main />
              </>)
          }}></Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

