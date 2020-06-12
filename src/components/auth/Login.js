import React, { useEffect } from 'react';
import { authLogin } from '../../state/auth/authActionCreator';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginStyled from './LoginStyled';
import AlertComponent from '../common/AuthAlert';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import codeClanLogoWhite from '../assets/image/codeClanLogoWhite.png';
import Spinner from 'react-bootstrap/Spinner';
import loginAmico from '../assets/image/Login-amico.png';

function LoginForm({ authLogin, loading, error, errResponse, token, history }) {
  // const [values, setValues] = useState({
  //   email: '',
  //   password: '',
  // });

  const dispatch = useDispatch();
  // const [emailError, setEmailError] = useState(false);
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   authLogin(values);
  // };

  useEffect(() => {
    if (token) {
      history.push('/dashboard');
    }

    return () => {
      dispatch({ type: 'AUTH_RESET' });
    };
  }, [token, history, dispatch]);

  // const handleChange = e => {
  //   if (e.target.name === 'email') {
  //     setEmailError(!validateEmail(e.target.value));
  //   }

  //   setValues({
  //     ...values,
  //     [e.target.name]: e.target.value,
  //   });
  // };

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
          <div className="login-container">
            <div class="info-wrap">
              <img src={codeClanLogoWhite} alt="" class="logo" />
              <h1>
                Welcome to CodeClan <br />
                Nigeria
              </h1>
              <h5>Login to access your account</h5>
              <div class="info-img">
                <img src={loginAmico} alt="Login Animation" />
              </div>
            </div>
            <div class="signin-wrap">
              <div className="form-header">
                <h1>Welcome back,</h1>
                <p>Please login in to continue</p>
              </div>
              <Form>
                <AlertComponent variant="danger" text={errResponse} />

                <label htmlFor="email">Email address</label>
                <br />
                <Field
                  name="email"
                  className={
                    touched.email && errors.email
                      ? errorClassNames
                      : validClassNames
                  }
                  type="email"
                />
                <div className="d-block text-monospace text-danger small-text">
                  <ErrorMessage name="email" className="d-block" />
                </div>

                <br />
                <label htmlFor="password">Password</label>
                <br />
                <Field
                  name="password"
                  className={
                    touched.password && errors.password
                      ? errorClassNames
                      : validClassNames
                  }
                  type="password"
                />
                <div className="d-block text-monospace text-danger small-text">
                  <ErrorMessage name="password" className="d-block" />
                </div>
                <br />
                <div className="form-con">
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      className="regular-checkbox"
                      name="checked"
                    />
                    <span> Remember me </span>
                  </div>
                  <a href="forgetPassword.html">forgot password ?</a>
                  <br />
                </div>
                <button
                  disabled={loading}
                  className={loading ? 'btn btn-light w-100' : 'btn w-100'}
                >
                  {!loading ? (
                    'Sign In'
                  ) : (
                    <span>
                      <Spinner animation="border" variant="primary" /> Signing
                      in....
                    </span>
                  )}
                </button>
              </Form>
              <div className="form-text">
                <p>
                  Don't have an account? <Link to="/register">Sign up</Link>
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
