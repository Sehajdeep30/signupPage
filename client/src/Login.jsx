import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [authentication, setAuthentication] = useState();
  const navigate = useNavigate();

  const submitHandle = (e) => {
    axios.defaults.withCredentials = true;
    e.preventDefault();
    axios
      .post("https://signup-page-api.vercel.app/login", { email, password })
      .then((response) => {
        if (response.data == "Success") {
          navigate("/home");
        } else {
          setAuthentication(response.data);
          navigate("/");
        }
      })
      .catch((e) => console.log("error is:", e));
  };

  return (
    <>
      <div class = "box">
        <form class="form-group" onSubmit={submitHandle}>
          <div class="form-example">
            <label for="email">Enter your email: </label>
            <input
            class="form-control"
              type="email"
              name="email"
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>
          <div class="form-group">
            <label for="password">Enter your password: </label>
            <input
            class="form-control"
              type="password"
              name="password"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>
          <div class="form-group">
            <input class="btn btn-primary" type="submit" value="Login" />
          </div>
        </form>
      </div>
      <div>{authentication}</div>
      <Link to="/register">Don't have an Account? Sign Up</Link>
    </>
  );
}

export default Login;
