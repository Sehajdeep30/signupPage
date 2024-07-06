import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [authentication, setAuthentication] = useState();
  const navigate = useNavigate();

  const submitHandle = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/login", { email, password })
      .then((response) => {
        if (response.data == "Success") {
          navigate("/home");
        } else {
          setAuthentication(response.data);
          navigate("/login");
        }
      })
      .catch((e) => console.log("error is:", e));
  };

  return (
    <>
      <div>
        <form class="form-example" onSubmit={submitHandle}>
          <div class="form-example">
            <label for="email">Enter your email: </label>
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
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
      <div>{authentication}</div>
      <Link to="/register">Don't have an Account? Sign Up</Link>
    </>
  );
}

export default Login;
