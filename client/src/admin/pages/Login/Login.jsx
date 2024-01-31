import React, { useState } from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8081/login", values)

      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/Dashboard");
        } else {
          setError(res.data.Error);
        }
      })

      .catch((err) => console.log(err));
  }

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
              <h2 className="text-center mb-2">Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="cont">
                  <label htmlFor="username" className="form-label">
                    User Name
                  </label>
                  <input
                    type="text"
                    className="input-edit"
                    placeholder="Username"
                    onChange={(e) =>
                      setValues({ ...values, username: e.target.value })
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
