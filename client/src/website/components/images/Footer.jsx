import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="row">
          {/* You can add more columns with links or any other information here */}
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="/about">About us</a>
              </li>
              <li>
                <a href="/service">Our services</a>
              </li>
              <li>
                <a href="/service">Projects</a>
              </li>
              <li>
                <a href="/contactus">Contact us</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Address</h4>
            <ul>
              <li>
                <a href="#">Kopay center, jaffna,srilanka</a>
              </li>
              <li>
                <a href="#">Phone: (077) 923-1941</a>
              </li>
            </ul>
          </div>

          {/* You can add a column with a subscription form, social media links, or any other content here */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
