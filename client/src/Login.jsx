import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import './Login.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authentication, setAuthentication] = useState("");
  const navigate = useNavigate();

  const submitHandle = (e) => {
    e.preventDefault();
    // axios.defaults.withCredentials = true;
    axios
      .post("https://signuppage-api.onrender.com/login", { email, password })
      .then((response) => {
        if (response.data === "Success") {
          navigate("/home");
        } else {  
          setAuthentication(response.data);
        }
      })
      .catch((e) => console.log("error is:", e));
  };

  return (
    <>
      <div className="box">
        <form className="form-group" onSubmit={submitHandle}>
          <h2>Login</h2>
          <div className="form-example">
            <label htmlFor="email">Enter your email:</label>
            <input
              className="form-control"
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-example">
            <label htmlFor="password">Enter your password:</label>
            <input
              className="form-control"
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input className="btn btn-primary" type="submit" value="Login" />
          </div>
          {authentication && <div className="error-message">{authentication}</div>}
        </form>
      </div>
      <Link className="link" to="/register">Don't have an Account? Sign Up</Link>
    </>
  );
}

export default Login;
