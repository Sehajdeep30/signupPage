import { Link } from "react-router-dom";
import "./SignUp.css";

function SignedUp() {
  return (
    <>
      <div className="wrapper">
        <h3>Signup Successful!!</h3>
        <div className="input-box button">
          <Link to="/" className="link">
            Go back to log in page.
          </Link>
        </div>
      </div>
    </>
  );
}

export default SignedUp;
