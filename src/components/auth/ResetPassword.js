import React, { useEffect, useRef, useState } from 'react';
import ForgotPasswordStyled from './ForgotPasswordStyled';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { message, notification } from 'antd';
import * as Yup from 'yup';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
import { resetPasswordRequestAction } from '../../state/auth/authActionCreator';
import Spinner from 'react-bootstrap/Spinner';
import queryString from 'query-string';

function ResetPassword({ history, location }) {
  const dispatch = useDispatch();
  const authState = useSelector(state => state.auth);
  const { loading, error, errResponse, token } = authState;
  const [passwordDisplay, setpasswordDisplay] = useState({
    password: null,
    confirmPassword: null,
  });
  const [resetToken, setresetToken] = useState();
  const [resetEmail, setResetEmail] = useState();

  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const togglePasswordToText = ref => {
    const passwordNode = ref.current.childNodes[1];
    const nodeName = passwordNode.name;

    if (passwordNode.type === 'password') {
      passwordNode.type = 'text';
      const tempState = { ...passwordDisplay, [nodeName]: true };
      setpasswordDisplay(tempState);
    } else {
      passwordNode.type = 'password';
      const tempState = { ...passwordDisplay, [nodeName]: false };
      setpasswordDisplay(tempState);
    }
  };

  const errorClassNames = 'border input border-danger';
  const validClassNames = 'border input border-green';
  useEffect(() => {
    dispatch({ type: 'AUTH_RESET' });
  }, [dispatch]);

  const openNotification = () => {
    notification.success({
      message: 'Password Reset Successful',
      description: 'You can login into your account with the new password',
    });
  };

  useEffect(() => {
    if (token) {
      openNotification();
      //   history.push('/email-verification-sent/');
    }
  }, [token, dispatch]);
  useEffect(() => {
    if (error) {
      message.error(errResponse);
    }
  }, [error, errResponse]);

  useEffect(() => {
    const UrlQueryStrings = location.search;
    const queryValues = queryString.parse(UrlQueryStrings);

    const token = queryValues.token || undefined;
    const email = queryValues.email || undefined;
    setResetEmail(email);
    setresetToken(token);

    // if (!token || !email) {
    //   history.push('/');
    // }
  }, [location.search]);

  return (
    <React.Fragment>
      <Navbar />
      <Formik
        initialValues={{ password: '', confirmPassword: '' }}
        validationSchema={Yup.object({
          password: Yup.string().required('Enter a password of your choice'),
          confirmPassword: Yup.string()
            .required('Confirm the password entered above')
            .oneOf([Yup.ref('password'), null], 'Passwords must match'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          const userData = {
            newPassword: values.password,
            token: resetToken,
            email: resetEmail,
          };
          dispatch(resetPasswordRequestAction(userData));
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <ForgotPasswordStyled>
            <div className="container-fluid">
              <div className="row justify-content-center align-items-center vh-100">
                <div className="col-lg-5 col-sm-6 col-md-6 align-self-center">
                  <Form className="form-container ">
                    <div className="form-group px-3">
                      <div className="form-text mb-4">
                        <h1 className="text-center mb-2">
                          Reset your Password
                        </h1>
                        <p className="text-center mt-4">
                          Enter the new password of your choice
                        </p>
                      </div>

                      <div className="input-group mb-4" ref={passwordRef}>
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i class="fas fa-lock"></i>
                          </span>
                        </div>

                        <Field
                          type="password"
                          className={`form-control ${
                            touched.password && errors.password
                              ? errorClassNames
                              : validClassNames
                          }`}
                          name="password"
                          aria-label="forget-Email"
                          aria-describedby="forget-Email"
                        />
                        <div class="input-group-append">
                          <span
                            class="input-group-text"
                            name="password"
                            onClick={() => togglePasswordToText(passwordRef)}
                          >
                            {passwordDisplay.password ? (
                              <i class="fas fa-eye-slash"></i>
                            ) : (
                              <i class="far fa-eye"></i>
                            )}
                          </span>
                        </div>
                      </div>
                      <div className="d-block text-monospace text-danger small-text">
                        <ErrorMessage name="password" className="d-block" />
                      </div>

                      <div
                        className="input-group mb-4"
                        ref={confirmPasswordRef}
                      >
                        <div className="input-group-prepend">
                          <span
                            name="confirmPassword"
                            className="input-group-text"
                          >
                            <i class="fas fa-lock"></i>
                          </span>
                        </div>
                        <Field
                          type="password"
                          className={`form-control ${
                            touched.confirmPassword && errors.confirmPassword
                              ? errorClassNames
                              : validClassNames
                          }`}
                          name="confirmPassword"
                        />
                        <div class="input-group-append">
                          <span
                            class="input-group-text"
                            onClick={() =>
                              togglePasswordToText(confirmPasswordRef)
                            }
                          >
                            {passwordDisplay.confirmPassword ? (
                              <i class="fas fa-eye-slash"></i>
                            ) : (
                              <i class="far fa-eye"></i>
                            )}
                          </span>
                        </div>
                      </div>
                      <div className="d-block text-monospace text-danger small-text">
                        <ErrorMessage
                          name="confirmPassword"
                          className="d-block"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={loading}
                        className={
                          loading ? 'btn btn-primary w-100 border-3' : 'submit'
                        }
                      >
                        {!loading ? (
                          'Submit'
                        ) : (
                          <span className="text-small">
                            <Spinner animation="border" variant="primary" />
                          </span>
                        )}
                      </button>
                      <Link className="text-decoration-none" to="/login">
                        <p className="text-center mt-5">
                          <span>
                            <i className="fas fa-chevron-left"></i>
                          </span>{' '}
                          Back to Login
                        </p>
                      </Link>
                    </div>
                  </Form>
                </div>
                {/* 
                <div className="col-lg-8 image-container ">
                  <img
                    className="img-fluid"
                    style={{ width: '50%' }}
                    src={ForgotPasswordImage}
                    alt="Forgot password"
                  />
                  <p class="title">CODECLAN NIGERIA</p>
                  <p class="normal">
                    Forgot your password? Input your email so you reset your
                    password
                  </p>
                </div> */}
              </div>
            </div>
          </ForgotPasswordStyled>
        )}
      </Formik>
    </React.Fragment>
  );
}

export default ResetPassword;
