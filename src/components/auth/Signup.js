import React, { useState, useEffect } from "react"
import { signup } from "../../state/auth/authActionCreator"
import { connect, useDispatch } from "react-redux"
import SignupStyled from "./SignupStyled"
import { validateEmail } from "./utils"
import { Link } from "react-router-dom"

function Signup({
  register,
  loading,
  error,
  errResponse,
  token,
  history,
  location,
}) {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  })
  const dispatch = useDispatch()
  const [emailError, setEmailError] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    register(values)
    console.log(loading)
  }

  useEffect(() => {
    if (token) {
      history.push("/dashboard")
    }
    return () => {
      dispatch({ type: "AUTH_RESET" })
    }
  }, [token, history, dispatch])

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmailError(!validateEmail(e.target.value))
    }

    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <SignupStyled>
      <p className="title">Sign Up</p>
      <div className="signUpDiv">
        <form action="" id="signUpForm" onSubmit={handleSubmit}>
          <p className="info blue signUp">sign up with email</p>
          {error ? <div className="error"> {errResponse}</div> : null}
          <div className="nameInputGroup">
            <label for="firstName">
              First Name
              <br />
              <input
                type="text"
                id="firstName"
                name="firstName"
                onChange={handleChange}
                required
              />
            </label>
            <label for="lastName">
              Last Name
              <br />
              <input
                type="text"
                name="lastName"
                id="lastName"
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <label for="email">
            Email
            <br />
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              required
              className={emailError ? "box-error" : "dd"}
            />
          </label>
          <label for="password">
            Password
            <br />
            <input
              type="password"
              name="password"
              className=""
              required
              id="password"
              onChange={handleChange}
            />
          </label>
          <p className="info blue privacy">
            by clicking on this button, you agree to our Terms of use and
            privacy policy
          </p>
          <button disabled={emailError} className="submit">
            {!loading ? "get started" : "Signing up...."}
          </button>
          <p className="info blue signIn">
            already have an account?
            <span>
              <Link to="/login/">Sign In</Link>
            </span>
          </p>
        </form>
      </div>
    </SignupStyled>
  )
}

// export default Signup;

const mapStateToProps = (store) => {
  return {
    loading: store.auth.loading,
    token: store.auth.token,
    error: store.auth.error,
    errResponse: store.auth.errResponse,
  }
}

const mapDispatchToProps = {
  register: signup,
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
