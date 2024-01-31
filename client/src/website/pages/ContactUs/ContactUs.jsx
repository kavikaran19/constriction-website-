import React from "react";
import { useState } from "react";
import "./ContactUs.css";
import axios from "axios";
import NavBarH from "../../components/images/NavBarH";
import Footer from "../../components/images/Footer";
// import { useNavigate } from 'react-router-dom';

function ContactUs() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [services, setServices] = useState("");
  const [messages, setMessages] = useState("");

  // const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/ContactUs", {
        fullName,
        email,
        phone,
        services,
        messages,
      })
      .then((res) => {
        setFullName("");
        setEmail("");
        setPhone("");
        setServices("");
        setMessages("");
        window.location.reload();

        return console.log("Submited Successfully");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
    <NavBarH/>
      <div className="contact-wrapper">
        <div className="left-section">
          <div className="location">
            <h2>Our Location</h2>
            <p>kopay center,jaffna ,srilanka.</p>
          </div>
          <div className="email">
            <h2>Email Us</h2>
            <p>ThanaEngineering@gmail.com</p>
          </div>
          <div className="hours">
            <h2>Business Hours</h2>
            <p>Monday - Friday: 9AM - 7PM Saturday - Sunday: 10AM - 3PM</p>
          </div>
        </div>

        <div className="right-section">
          <h2>Contact us today!</h2>
          <p>
            Hello, we are always here to help you. Please fill out the form. We
            will get back to you as soon as possible.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Full Name"
                name="fullName"
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                placeholder="Phone"
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="services"> Services</label>
              <select
                id="services"
                name="services"
                onChange={(e) => setServices(e.target.value)}
              >
                <option value="selectservices">Select Services</option>
                <option value="carpentry">Carpentry</option>
                <option value="ceiling">Ceiling</option>
              </select>
            </div>
            <div className="form-group">
              <textarea
                placeholder="Messages"
                name="messages"
                onChange={(e) => setMessages(e.target.value)}
              ></textarea>
            </div>
            <button className="btn-submit" type="submit">Submit</button>
          </form>
        </div>
      </div>
      <Footer/>

  
    </>
  );
}

export default ContactUs;
