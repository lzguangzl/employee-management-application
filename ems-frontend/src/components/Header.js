import React, { Component } from "react";
import EMSLogo from "../images/ems_logo.png";

class Header extends Component {
  render() {
    return (
      <header>
        <nav className='navbar navbar-expand-md navbar-dark bg-dark '>
          <a href='/' className='navbar-brand'>
            <img
              src={EMSLogo}
              width='30'
              height='30'
              className='d-inline-block align-top'
              alt='EMS'
            />{" "}
            <span className='mobile'>Employee Management System</span>
          </a>
        </nav>
      </header>
    );
  }
}
export default Header;
