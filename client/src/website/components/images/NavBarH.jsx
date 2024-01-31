import React from "react";

const NavBarH = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="2.png" alt="Logo" />
      </div>
      <ul className="menu">
        <li>
          <a href="UHome">Home</a>
        </li>
        <li>
          <a href="Service">Services</a>
        </li>
        <li>
          <a href="Project">Projects</a>
        </li>
        <li>
          <a href="about">About Us</a>
        </li>
        <li>
          <a href="ContactUs">Contact Us</a>
        </li>
        <li>
            <a href="Userlogin">
          <button className="login-button">Login/Register</button>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBarH;
