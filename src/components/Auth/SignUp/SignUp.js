import { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css"

function SignUp({changeAuthMode, onSignUpSubmit}) {
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: ""
  })

  const handleInputChange = (e) => {
    const stateCopy = {...userCredentials}
    stateCopy[e.target.name] = e.target.value
    setUserCredentials(stateCopy)
  }

  const handleSignUpSubmit = (e) => {
    e.preventDefault()
    onSignUpSubmit(userCredentials)
    setUserCredentials({
      username: "",
      password: ""
    })
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSignUpSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <Link className="link-primary" to="/login">
              Sign In
            </Link>
          </div>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="username"
              name="username"
              className="form-control mt-1"
              placeholder="Enter username"
              value={userCredentials.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={userCredentials.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <Link to="/">password?</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
export default SignUp;
