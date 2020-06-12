import React, { useState, useEffect } from "react"
import { authPass } from "../../state/auth/authActionCreator"
import { connect, useDispatch } from "react-redux"
import { validateEmail } from "./utils"
import { Link } from "react-router-dom"


function ForgotPassword({ authPass, loading, error, errResponse, token, history }) {
  const [values, setValues] = useState({
    email: ""

  })

return(

  <div>
<div className = "container-fluid" >
  <div className="row justify-content-center">

<div className="col-12 col-sm-6 col-md-4">
    <form className="form-container">
        
        <div className="form-group px-3">
            <div className="form-text mb-4">
                <h1 className="text-center mb-2 mt-4">Forgot Password</h1>
                <h3 className="text-center mt-4">Enter your email and we’d send you a link to reset your password </h3>
                
            </div>
            
            <div className="input-group mb-4">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                </div>
                <input typeof = "text" className= "form-control " placeholder = "Enter your Email Address" id="forget-Email"  aria-label="forget-Email" aria-describedby="forget-Email"/>
            </div>
            <button typeof="submit" className="btn btn-primary w-100 border-3">Submit</button>
            <a className="text-decoration-none"  href="/login/"><p className="text-center mt-5"> <span><i className="fas fa-chevron-left"></i></span>  Back to Login</p></a>
        </div>
      
        
      
    </form>
            
  </div>
</div>
</div>
</div>

)


}

export default ForgotPassword;