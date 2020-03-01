import React, { Component } from "react";
import logo from "../../image/logo.png";
import Avatar from '@material-ui/core/Avatar';
import "./LogHeader.css";

class LogHeader extends Component {
  render() {
    return (
      <div className="loginHeader">
        <nav className="navbar navbar-expand-lg navbar-light bg-light customContainer">
          <a className="navbar-brand" href="#">
            <img src={logo} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto align-items-center">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Dashboard <span className="sr-only">(current)</span>  
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i class="fas fa-envelope"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i class="fas fa-bell"></i>
                </a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="#">
              <Avatar>S</Avatar>
              </a>
            </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default LogHeader;
