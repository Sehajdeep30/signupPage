import React, { useState } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignUp.css"; // Assuming you save the CSS code in SignUp.css

function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  let isPasswordConfirmed = confirmPassword === password;

  const submitHandle = (e) => {
    if (isPasswordConfirmed) {
      axios.defaults.withCredentials = true;
      e.preventDefault();
      axios
        .post("https://signup-page-api.vercel.app/register", {
          name,
          num,
          email,
          password,
        })
        .then(() => {
          console.log("Post Successful");
          navigate("/signedup");
        })
        .catch((e) => {
          console.log("error is:", e);
        });
    } else {
      return (
        <>
          <Navigate to="/register" />
        </>
      );
    }
  };

  function TryAgain() {
    if (!isPasswordConfirmed) {
      return (
        <>
          <h3>Passwords Don't Match</h3>
        </>
      );
    } else {
      return null;
    }
  }

  return (
    <>
    <h2 className="head">Sign Up</h2>
      <div className="background">
        <div className="signup-container">
          <form className="form-example" onSubmit={submitHandle}>
            <div className="form-group">
              <label htmlFor="name">Enter your name: </label>
              <input
                className="form-control"
                type="text"
                name="name"
                id="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="num">Enter your Mobile Number: </label>
              <input
                className="form-control"
                type="text"
                pattern="\d*"
                maxLength="10"
                minLength="10"
                onChange={(e) => {
                  setNum(e.target.value);
                }}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Enter your Email ID: </label>
              <input
                className="form-control"
                type="email"
                name="email"
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Enter your password: </label>
              <input
                className="form-control"
                type="password"
                name="password"
                id="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Confirm your password: </label>
              <input
                className="form-control"
                type="password"
                name="password"
                id="password"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <input className="btn btn-primary" type="submit" value="Submit" />
            </div>
            <div className="error-message">
            <TryAgain /></div>
          </form>
        </div>
      </div>
      <Link className="link" to="/">
        Already Have an account? Login then.
      </Link>
    </>
  );
}

export default SignUp;
