import {Link} from "react-router-dom";

function SignedUp() {

  return (
    <>
    <h3>Signup Successful!!</h3>
      <Link to = "/login">
      Go back to log in page.
      </Link>
    </>
  );
}

export default SignedUp;