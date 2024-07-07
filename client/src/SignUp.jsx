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
  const isPasswordConfirmed = confirmPassword === password;

  const submitHandle = (e) => {
    if (isPasswordConfirmed) {
      e.preventDefault();
      axios
        .post("https://signup-page-api.vercel.app/register", {
          name,
          num,
          email,
          password,
        })
        .then((response) => {
          console.log("Post Successful");
          if (response != "Account Already Exists") {
            navigate("/signedup");
          } else {
            navigate("/signup");
            alert("Account Already Exists");
          }
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
      return <p>Passwords Don't Match</p>;
    } else {
      return null;
    }
  }

  return (
    <>
      <div className="wrapper">
        <h2>Register Page</h2>
        <form onSubmit={submitHandle}>
          <div className="input-box">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name:"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="input-box">
            <input
              type="text"
              pattern="\d*"
              maxLength="10"
              minLength="10"
              placeholder="Enter your mobile number:"
              onChange={(e) => setNum(e.target.value)}
              required
            />
          </div>

          <div className="input-box">
            <input
              placeholder="Enter your email id:"
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-box">
            <input
              placeholder="Enter your password:"
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="input-box">
            <input
              placeholder="Confirm password:"
              type="password"
              name="password"
              id="confirm-password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-box button">
            <input className="btn btn-primary" type="submit" value="Sign Up" />
          </div>
          <div className="text">
            <TryAgain />
          </div>
        </form>
      </div>
      <Link className="text" to="/">
        Already Have an account? Login then.
      </Link>
    </>
  );
}

export default SignUp;
