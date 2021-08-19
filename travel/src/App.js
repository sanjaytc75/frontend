import './App.css';
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { About } from "./MyComponents/About";
import Main from "./MyComponents/Main";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './MyComponents/Carousel';
import Login from './MyComponents/Login';
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
        <Header />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <Main />
                <Carousel />
              </>)
          }}>
          </Route>
          <Route exact path="/about" component={About}>
            <About />
          </Route>
          <Route exact path="/Login" component={Login}>
            <Login />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;

