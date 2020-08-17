import React from 'react';
import ForgotPasswordStyled from './ForgotPasswordStyled';
// import { authPass } from "../../state/auth/authActionCreator"
// import { connect, useDispatch } from "react-redux"
// import { validateEmail } from "./utils"
// import { Link } from "react-router-dom"

function ForgotPassword({
  authPass,
  loading,
  error,
  errResponse,
  token,
  history,
}) {
  // const [values, setValues] = useState({
  //   email: '',
  // });

  return (
    <ForgotPasswordStyled>
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="container-fluid">
            <div class="display"></div>
          </div>
           
          <div class="col-12 col-sm-6 col-md-4">
            <form class="form-container">
                
              <div class="form-group px-3">
                <div class="form-text mb-4">
                  <h1 class="text-center mb-2">Forgot Password</h1>
                  <p class="text-center mt-4">Enter your email and we’d send you a link to reset your password </p>
                    
                </div>
                  
                <div class="input-group mb-4">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fas fa-envelope"></i></span>
                  </div>
                  <input type="email" class="form-control" id="forget-Email"  aria-label="forget-Email" aria-describedby="forget-Email" />
                </div>
                <button type="submit" class="btn btn-primary w-100 border-3">Submit</button>
                <a class="text-decoration-none" href="/login/"><p class="text-center mt-5"> <span><i class="fas fa-chevron-left"></i></span>  Back to Login</p></a>
              </div> 
            </form>
            
          </div>
        </div>
      </div>
    </ForgotPasswordStyled>
  );
}

export default ForgotPassword;
