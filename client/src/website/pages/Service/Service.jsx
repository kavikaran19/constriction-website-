import React from "react";
import "./Service.css";
import NavBarH from "../../components/images/NavBarH";
import Footer from "../../components/images/Footer";

function Service() {
  return (
    <>
      <NavBarH />
      <div className="maincont">
        <h1 className="heading">Our Services</h1>
        <div className="box-container">
          <div className="box">
            <img src="carpentryimg.png" alt="" />
            <h3>Carpentry</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              commodi?
            </p>
            <a href="ContactUs" className="btn">
              Read More{" "}
            </a>
          </div>

          <div className="box">
            <img src="paintingimg.png" alt="" />
            <h3>Painting</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              commodi?
            </p>
            <a href="ContactUs" className="btn">
              Read More
            </a>
          </div>

          <div className="box">
            <img src="roofingimg.png" alt="" />
            <h3>Roofing</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              commodi?
            </p>
            <a href="ContactUs" className="btn">
              Read More
            </a>
          </div>

          <div className="box">
            <img src="tileimg.png" alt="" />
            <h3>Tile work</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              commodi?
            </p>
            <a href="ContactUs" className="btn">
              Read More
            </a>
          </div>

          <div className="box">
            <img src="ceilingimg.png" alt="" />
            <h3>Ceiling</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              commodi?
            </p>
            <a href="ContactUs" className="btn">
              Read More
            </a>
          </div>

          <div className="box">
            <img src="gardeningimg.png" alt="" />
            <h3>Gardening</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              commodi?
            </p>
            <a href="ContactUs" className="btn">
              Read More
            </a>
          </div>

          <div className="box">
            <img src="weldingimg.png" alt="" />
            <h3>Welding</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              commodi?
            </p>
            <a href="ContactUs" className="btn">
              Read More
            </a>
          </div>

          <div className="box">
            <img src="interiorimg.png" alt="" />
            <h3>Interior Design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              commodi?
            </p>
            <a href="ContactUs" className="btn">
              Read More
            </a>
          </div>

          <div className="box">
            <img src="constructionimg.png" alt="" />
            <h3>Construction</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              commodi?
            </p>
            <a href="ContactUs" className="btn">
              Read More
            </a>
          </div>

          <div className="box">
            <img src="electricalimg.png" alt="" />
            <h3>Electrical</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              commodi?
            </p>
            <a href="ContactUs" className="btn">
              Read More
            </a>
          </div>

          <div className="box">
            <img src="plumbingimg.png" alt="" />
            <h3>Plumbing</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              commodi?
            </p>
            <a href="ContactUs" className="btn">
              Read More
            </a>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Service;
