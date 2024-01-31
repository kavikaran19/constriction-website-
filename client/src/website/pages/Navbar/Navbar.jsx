import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
      <div className="logo">
        <img src="logo192.png" alt="Logo" />
      </div>
      <ul className="menu">
        <li><a href="UHome">Home</a></li>
        <li><a href="Service">Services</a></li>
        <li><a href="project">Projects</a></li>
        <li><a href="about">About Us</a></li>
        <li><a href="ContactUs">Contact Us</a></li>
        <li><button className="login-button">Login</button></li>
      </ul>
    </div>
    </nav>
  );
};

export default Navbar;
