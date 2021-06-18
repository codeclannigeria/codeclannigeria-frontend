import React, { useEffect } from 'react';
import ForgotPasswordStyled from './ForgotPasswordStyled';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { message, notification } from 'antd';
import * as Yup from 'yup';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
import { fogetPasswordRequestAction } from '../../state/auth/authActionCreator';
import Spinner from 'react-bootstrap/Spinner';

function ForgotPassword({ history }) {
  const dispatch = useDispatch();
  const authState = useSelector(state => state.auth);
  const { loading, error, errResponse, token } = authState;

  const errorClassNames = 'border input border-danger';
  const validClassNames = 'border input border-green';
  useEffect(() => {
    dispatch({ type: 'AUTH_RESET' });
  }, [dispatch]);

  const openNotification = () => {
    notification.success({
      message: 'Request Successful',
      description: 'Kindly check your email for further instructions',
    });
  };

  useEffect(() => {
    if (token) {
      openNotification();
      history.push('/email-verification-sent/');
    }
  }, [token, history, dispatch]);
  useEffect(() => {
    if (error) {
      message.error(errResponse);
    }
  }, [error, errResponse]);

  return (
    <React.Fragment>
      <Navbar />
      <Formik
        initialValues={{ email: '' }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Enter your email address'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(fogetPasswordRequestAction(values));
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
                        <h1 className="text-center mb-2">Forgot Password?</h1>
                        <p className="text-center mt-4">
                          Enter your email and we’d send you a link to reset
                          your password{' '}
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
                          name="email"
                          aria-label="forget-Email"
                          aria-describedby="forget-Email"
                        />
                      </div>
                      <div className="d-block text-monospace text-danger small-text">
                        <ErrorMessage name="email" className="d-block" />
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

export default ForgotPassword;
