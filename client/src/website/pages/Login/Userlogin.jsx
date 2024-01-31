import React, { useState } from "react";
import "./Userlogin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";

function Userlogin() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8081/userlogin", values)

      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/UHome");
          console.log("login success")
        } else {
          setError(res.data.Error);
        }
      })

      .catch((err) => console.log(err));
  }
  console.log(values)

  return (
    <div className="container2 vh-50">
      <div className="row vh-100 justify-content-center align-items-center">
        {/* 'col-lg-4' for large devices and 'col-12' for smaller ones for responsiveness */}
        <div className="col-lg-4 col-12">
          <div className="card-design">
            {" "}
            {/* Added card and shadow for better styling */}
            <div className="card-body p-10">
              {/* Image Container */}
              <div className="mb-4 text-center">
                {/* Replace 'login_image.jpg' with your desired image source */}
                <img
                  src="2.png"
                  className="img-fluid rounded-circle"
                  alt="Login"
                  style={{ width: "250px" }}
                />
              </div>

              {/* Error message */}
              <div className="text-danger">{values.error && values.error}</div>

              {/* Login Form */}
              <h2 className="text-center mb-2">User Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="cont">
                  <label htmlFor="username" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    className="input-edit"
                    placeholder="Email"
                    onChange={(e) =>
                      setValues({ ...values, email: e.target.value })
                    }
                  />
                </div>
                <div className="cont">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="input-edit"
                    placeholder="Password"
                    onChange={(e) =>
                      setValues({ ...values, password: e.target.value })
                    }
                  />
                </div>
                <button className="btn-submit" type="submit">
                  Login
                </button>
              </form>
              <p className="text-center mt-3 text-secondary">
              If you have account, Please <Link to="/Registration">Registr Now</Link>
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userlogin;
