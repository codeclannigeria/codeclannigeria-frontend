import React, { useEffect } from 'react';
import { authLogin } from '../../state/auth/authActionCreator';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginStyled from './LoginStyled';
import AlertComponent from '../common/AuthAlert';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import codeClanLogo from '../assets/image/codeClanLogo.png';
import Spinner from 'react-bootstrap/Spinner';
/*import loginAmico from '../assets/image/Login-amico.png';*/
import loginAmico from '../assets/image/auth/login.jpg';

function LoginForm({ authLogin, loading, error, errResponse, token, history }) {
  const dispatch = useDispatch();

  // const resetAuthState = useCallback(() => {
  //   dispatch({ type: 'AUTH_RESET' });
  // }, [dispatch]);

  useEffect(() => {
    dispatch({ type: 'AUTH_RESET' });
  }, [dispatch]);
  // useEffect(() => {
  //   if (errResponse) {
  //     resetAuthState();
  //   }
  // }, [errResponse, resetAuthState]);

  useEffect(() => {
    console.log(token);

    if (token) {
      history.push('/dashboard');
    }
  }, [token, history, dispatch]);

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
                    <img src={codeClanLogo} alt="Code claan" />
                  </div>
                </div>
                <div class="titles"> Login to your account </div>
                <Form>
                  <AlertComponent variant="danger" text={errResponse} />
                  <label htmlFor="email">E-mail</label>

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
                    <div className="d-block text-monospace text-danger small-text">
                      <ErrorMessage name="email" className="d-block" />
                    </div>
                  </div>
                  <label htmlFor="password">Password</label>

                  <div class="block">
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
                      <i class="fa fa-eye" aria-hidden="true"></i>
                    </span>
                    <div className="d-block text-monospace text-danger small-text">
                      <ErrorMessage name="password" className="d-block" />
                    </div>
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
                      <span>
                        <Spinner animation="border" variant="primary" /> Signing
                        in....
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
