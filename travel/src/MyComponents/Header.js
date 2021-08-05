import React from 'react'
import logo from '../travel.png';


export default function Header() {
    return (
        <nav className="navbar-expand-lg navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a clasName="navbar-brand" href="#">
            <img src={logo} alt="" width="60" height="28" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Bus Tickets</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
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

