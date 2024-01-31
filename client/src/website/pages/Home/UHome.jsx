import React from "react";
import "./UHome.css";
import NavBarH from "../../components/images/NavBarH";
import Footer from "../../components/images/Footer";

const Home = () => {
  return (
    <div>
     <NavBarH/>

      <div className="background-image">
        <img src="bg5.jpeg" alt="background-image" />
        <div className="inner-back-text">
          <h1>
            Engineering Solutions <br />
            {/* <span>Creative & Professional</span> */}
          </h1>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit,
          </p>
          <div className="inner-back-btn">
            <a href="project" className="second-btn">
              view projects
            </a>
          </div>
        </div>
      </div>

      <div className="welcome">
        <div className="main-welcome">
          <div className="inner-welcome">
            <div className="welcome-text">
              <h1>welcome to our company</h1>
              <p>
              THANA ENGINEERING SOLUTIONS was founded by a group of passionate construction professionals who have amassed over 15 years of experience on various civil engineering projects across Asia, Oceania, and the Middle East for renowned global construction firms. Our expertise ranges from residential homes to airport projects.
At THANA ENGINEERING SOLUTIONS, we employ the best engineering practices from the initial planning stages to project completion. As the most seasoned construction team in the jaffna region, we possess extensive knowledge and proficiency in residential, commercial, and industrial construction, allowing us to deliver projects of any scale with ease.
              </p>
            </div>
          </div>
          <div className="inner-welcome">
            <img src="bg3.jpg" alt="" style={{width:"500px"}} />
          </div>
        </div>
      </div>

      <div className="chose-us">
        <h1>
          why <span>chose</span> us
        </h1>
        <p className="chose-text">
        At THANA ENGINEERING SOLUTIONS,
         At Future Builders, we understand that choosing a real estate partner is a significant decision,
          and we're here to make that choice an easy one. When you select Future Builders,
           you're not just choosing a company; you're selecting a vision, a commitment,
            and a promise of excellence. Here are compelling reasons why we are the ideal choice for your real estate needs:
            </p>
        <div className="main-chose">
          <div className="inner-chose">
            <div className="chose-icon">
              {/* Add your icon component or image here */}
            </div>
            <h2>Deliver time</h2>
            <p>
            "In the realm of swift deliveries, Future Builders stands unmatched.
             Our Time Deliverance service guarantees punctuality and precision. We blend efficiency with reliability,
             turning projects into timely successes."
            </p>
          </div>
          {/* Repeat the structure for other inner-chose sections */}
          <div className="inner-chose">
            <div className="chose-icon">
              {/* Add your icon component or image here */}
            </div>
            <h2>Perfect Works</h2>
            <p>
            "In the real estate maze. Our Property Consultation service ensures informed,
             successful ventures. We offer insights,
             experience, and market understanding, turning investments into informed triumphs."
            </p>
          </div>
          <div className="inner-chose">
            <div className="chose-icon">
              {/* Add your icon component or image here */}
            </div>
            <h2>Reasonable Budgect</h2>
            <p>
            "In the world of budget-friendly solutions, Reasonable Budget pioneers.
             We offer quality without compromise, ensuring every penny's worth. Expert guidance,
             smart choices; stretch your dollar further with us."
            </p>
          </div>
        </div>
      </div>
    <Footer/>
    
    </div>
  );
};

export default Home;
