import React from "react";
import "./About.css";
import NavBarH from "../../components/images/NavBarH";
import Footer from "../../components/images/Footer";

function About() {
  return (
    <>
      <NavBarH />
      <div className="container">
        <div className="heading">
          <h1>About Us</h1>
        </div>
        <section className="about">
          <div className="about-image">
            <img src="bg2.jpg" alt="Aboutusimage" />
          </div>
          <div className="about-content">
            <p>
              When that light bulb goes off or when that refrigerator stops
              cooling, the first thought that comes up in mind is the hassle you
              have to go through to get it fixed followed by the inconvenience
              you will have to go through if you don’t get it fixed!
              <br />
              <br />
              We are QuickHelp, a platform for you to book trusted expert
              service providers (or Service Partners, as we call them),
              on-demand, at your convenience to eliminate this hassle for you!
              <br />
              <br />
              We are a young, passionate company working tirelessly to make a
              difference in the lives of people by catering to their service
              needs at their doorsteps. Be it getting a plumbing job done,
              getting a cleaner, fixing your aircon, or putting up a new roof,
              we make sure to provide you with the best!
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default About;
