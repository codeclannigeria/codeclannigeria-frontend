import React, { useEffect } from 'react';
import ForgotPasswordStyled from './ForgotPasswordStyled';
// import { authPass } from "../../state/auth/authActionCreator"
import { useDispatch } from 'react-redux';
// import { validateEmail } from "./utils"
// import { Link } from "react-router-dom"
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { message } from 'antd';
import * as Yup from 'yup';
import ForgotPasswordImage from '../assets/image/auth/forgot_password.png';

function ForgotPassword({
  authPass,
  loading,
  error,
  errResponse,
  token,
  history,
}) {
  const dispatch = useDispatch();

  const errorClassNames = 'border input border-danger';
  const validClassNames = 'border input border-green';
  useEffect(() => {
    dispatch({ type: 'AUTH_RESET' });
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      message.error(errResponse);
    }
  }, [error, errResponse]);

  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Invalid email address')
          .required('Enter your email address'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <ForgotPasswordStyled>
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-sm-12 col-md-12">
                <Form className="form-container">
                  <div className="form-group px-3">
                    <div className="form-text mb-4">
                      <h1 className="text-center mb-2">Forgot Password</h1>
                      <p className="text-center mt-4">
                        Enter your email and we’d send you a link to reset your
                        password{' '}
                      </p>
                    </div>

                    <div className="input-group mb-4">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fas fa-envelope"></i>
                        </span>
                      </div>
                      <Field
                        type="email"
                        className={`form-control ${
                          touched.email && errors.email
                            ? errorClassNames
                            : validClassNames
                        }`}
                        id="forget-Email"
                        aria-label="forget-Email"
                        aria-describedby="forget-Email"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary w-100 border-3"
                    >
                      Submit
                    </button>
                    <a className="text-decoration-none" href="/login/">
                      <p className="text-center mt-5">
                        <span>
                          <i className="fas fa-chevron-left"></i>
                        </span>{' '}
                        Back to Login
                      </p>
                    </a>
                  </div>
                </Form>
              </div>

              <div className="col-lg-8 image-container ">
                <img
                  className="img-fluid"
                  src={ForgotPassword}
                  alt="Forgot password"
                />
                <p class="small">CODECLAN NIGERIA</p>
                <p class="normal">
                  Forgot your password? Input your email so you reset your
                  password
                </p>
              </div>
            </div>
          </div>
        </ForgotPasswordStyled>
      )}
    </Formik>
  );
}

export default ForgotPassword;
