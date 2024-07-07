import { Navigate, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [num, setNum] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  let isPasswordConfirmed = confirmPassword == password;

  const submitHandle = (e) => {
    if (isPasswordConfirmed) {
      axios.defaults.withCredentials = true;
      e.preventDefault();
      axios
        .post("https://signup-page-api.vercel.app/register", { name, num, email, password })
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
    if (isPasswordConfirmed == false) {
      return (
        <>
          <h3>Passwords Don't Match</h3>
        </>
      );
    } else {
      return <></>;
    }
  }

  return (
    <>
      <div>
        <form class="form-example" onSubmit={submitHandle}>
          <div class="form-example">
            <label for="name">Enter your name: </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
          </div>

          <div class="form-example">
            <label for="num">Enter your Mobile Number: </label>
            <input
              type="text"
              pattern="\d*"
              maxlength="10"
              minLength="10"
              onChange={(e) => {
                setNum(e.target.value);
              }}
              required
            />
          </div>

          <div class="form-example">
            <label for="email">Enter your Email ID: </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>
          <div class="form-example">
            <label for="password">Enter your password: </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>
          <div class="form-example">
            <label for="password">Confirm your password: </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              required
            />
          </div>
          <div class="form-example">
            <input type="submit" value="Submit" />
          </div>
          <TryAgain />
        </form>
      </div>
      <Link to="/">Already Have an account? Login then.</Link>
      <br />
    </>
  );
}

export default SignUp;
