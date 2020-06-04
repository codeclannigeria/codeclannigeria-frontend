import React, { useState, useEffect } from "react"
import { authLogin } from "../../state/auth/authActionCreator"
import { connect } from "react-redux"
// import "./css/signin.css"
import { validateEmail } from "./utils"
import { Link } from "react-router-dom"
import LoginStyled from "./LoginStyled"
function LoginForm({ authLogin, loading, error, errResponse, token, history }) {
  const [values, setValues] = useState({
    email: "",
    password: "",
  })

  const [emailError, setEmailError] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    authLogin(values)
  }

  useEffect(() => {
    if (token) {
      history.push("/dashboard")
    }
  }, [token, history])

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
    <LoginStyled>
      <div className="wrapper">
        <h1>Sign In</h1>
        {error ? <div className="error"> {errResponse}</div> : null}

        <form onSubmit={handleSubmit}>
          <label>Email address</label>
          <br />
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={values.email}
            required
            className={emailError ? "box-error" : "dd"}
          />
          <br />
          <label>password</label>
          <br />
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            required
          />
          <br />
          <div className="form-con">
            <label>
              <input type="checkbox" name="checked" />
              Remember me
            </label>
            <a href="forgetPassword.html">forgot password ?</a>
            <br />
          </div>
          <input
            type="submit"
            disabled={emailError}
            value={!loading ? "Sign in" : "Loading..."}
            className="btn"
          />
        </form>
        <div className="form-text">
          <p>
            Don't have an account? <Link to="/register">Sign up</Link>
          </p>
        </div>
      </div>
    </LoginStyled>
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
  authLogin,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
