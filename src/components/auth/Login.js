import React, { useEffect, useRef } from 'react';
import { authLogin } from '../../state/auth/authActionCreator';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginStyled from './LoginStyled';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import codeClanLogo from '../assets/image/codeClanLogo.png';
import Spinner from 'react-bootstrap/Spinner';
/*import loginAmico from '../assets/image/Login-amico.png';*/
import loginAmico from '../assets/image/auth/login.jpg';
import { message } from 'antd';
import checkAuth from '../../helpers/CheckAuth';

function LoginForm({ authLogin, loading, error, errResponse, token, history }) {
  const dispatch = useDispatch();
  const passwordRef = useRef();
  useEffect(() => {
    dispatch({ type: 'AUTH_RESET' });
  }, [dispatch]);

  const togglePasswordToText = ref => {
    ref.current.firstChild.type === 'password'
      ? (ref.current.firstChild.type = 'text')
      : (ref.current.firstChild.type = 'password');
  };

  useEffect(() => {
    const role = checkAuth();
    if (role === 'MENTEE' || role === 'ADMIN') {
      history.push('/dashboard');
    } else if (role === 'MENTOR') {
      history.push('/dashboard/mentor/mentees');
    }
  }, []);

  useEffect(() => {
    if (token) {
      const role = checkAuth();
      if (role === 'MENTEE' || role === 'ADMIN') {
        history.push('/dashboard');
      } else if (role === 'MENTOR') {
        history.push('/dashboard/mentor/mentees');
      }
      history.push('/dashboard');
    }
  }, [token, history, dispatch]);

  useEffect(() => {
    if (error) {
      message.error(errResponse);
    }
  }, [error, errResponse]);

  const errorClassNames = 'border input border-danger';
  const validClassNames = 'border input border-green';

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Invalid email address')
          .required('Enter your email address'),
        password: Yup.string().required('Enter your password'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        // setSubmitting(true);
        authLogin(values);
        // setSubmitting(false);
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <LoginStyled>
          <div>
            <div class="main">
              <div class="left">
                <div class="logo">
                  <div>
                    <Link to="/" className="image-link">
                      <img
                        src={codeClanLogo}
                        className="img-fluid"
                        alt="Code clan"
                      />
                    </Link>
                  </div>
                </div>
                <div class="titles"> Login to your account </div>
                <Form>
                  <label htmlFor="email">E-mail</label>{' '}
                  <div className="block">
                    <Field
                      id="email"
                      type="email"
                      name="email"
                      className={
                        touched.email && errors.email
                          ? errorClassNames
                          : validClassNames
                      }
                    />
                    <span>
                      <i class="fa fa-at" aria-hidden="true"></i>
                    </span>
                  </div>
                  <div className="d-block text-monospace text-danger small-text">
                    <ErrorMessage name="email" className="d-block" />
                  </div>
                  <label htmlFor="password">Password</label>
                  <div class="block" ref={passwordRef}>
                    <Field
                      id="password"
                      name="password"
                      className={
                        touched.password && errors.password
                          ? errorClassNames
                          : validClassNames
                      }
                      type="password"
                    />
                    <span>
                      <i
                        class="fa fa-eye"
                        aria-hidden="true"
                        onClick={() => togglePasswordToText(passwordRef)}
                      ></i>
                    </span>
                  </div>
                  <div className="d-block text-monospace text-danger small-text">
                    <ErrorMessage name="password" className="d-block" />
                  </div>
                  {/* <div className="form-con">
                    <div className="checkbox-container">
                      <input
                        type="checkbox"
                        className="regular-checkbox"
                        name="checked"
                      />
                      <span> Remember me </span>
                    </div>
                    <Link to="/forgotpass">forgot password ?</Link>
                    <br />
                  </div> */}
                  <button
                    disabled={loading}
                    className={loading ? 'btn btn-light w-100' : 'submit'}
                    type="submit"
                  >
                    {!loading ? (
                      'login'
                    ) : (
                      <span className="text-small">
                        <Spinner animation="border" variant="primary" />
                      </span>
                    )}
                  </button>
                  <div class="centralize" style={{ lineHeight: '2em' }}>
                    <p>
                      Don't have an account? <Link to="/register">Sign up</Link>
                    </p>
                  </div>
                </Form>
              </div>
              <div class="right">
                <img
                  alt="Login animation"
                  src={loginAmico}
                  style={{ height: '50%' }}
                />
                <p class="small">CODECLAN NIGERIA</p>
                <p class="normal">
                  Join us and take your programming career to the next level
                </p>
              </div>
            </div>
          </div>
        </LoginStyled>
      )}
    </Formik>
  );
}

// export default Signup;

const mapStateToProps = store => {
  return {
    loading: store.auth.loading,
    token: store.auth.token,
    error: store.auth.error,
    errResponse: store.auth.errResponse,
  };
};

const mapDispatchToProps = {
  authLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
