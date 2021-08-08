import React from 'react'
import logo from '../travel.png';
import {
  Link
} from "react-router-dom";


export default function Header() {
    return (
        <nav className="navbar-expand-lg navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <Link clasName="navbar-brand" to="/">
            <img src={logo} alt="logo" width="60" height="28" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">ABOUT US</Link>
              </li>
            </ul>
          </div>
          <form class="form-inline">
              <button class="btn btn-light my-2 my-sm-0" type="Login">Login</button>
            </form>
        </div>
      </nav>
    )
}

