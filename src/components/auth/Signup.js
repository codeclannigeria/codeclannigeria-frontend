import React, { useState, useEffect } from 'react';
import { signup } from '../../state/auth/authActionCreator';
import { connect, useDispatch } from 'react-redux';
import SignupStyled from './SignupStyled';
// import { validateEmail } from './utils';
import { Link } from 'react-router-dom';
import AlertComponent from '../common/AuthAlert';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import codeClanLogoWhite from '../assets/image/codeClanLogoWhite.png';
import Spinner from 'react-bootstrap/Spinner';
import loginAmico from '../assets/image/Login-amico.png';

function Signup({ register, loading, error, errResponse, token, history }) {
  // const [values, setValues] = useState({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   password: '',
  // });
  const dispatch = useDispatch();

  // eslint-disable-next-line
  const [emailError, setEmailError] = useState(false);

  useEffect(() => {
    if (token) {
      history.push('/email-verification-sent/');
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

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   register(values);
  // };

  const errorClassNames = 'border input border-danger';
  const validClassNames = 'border input border-green';

  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Enter your first name'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Enter your last name'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Enter your email address'),
        password: Yup.string().required('Enter a password of your choice'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        register(values);
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <SignupStyled>
          <div id="wrapper">
            <div id="signUpInfo">
              <img
                src={codeClanLogoWhite}
                className="img-fluid"
                alt="Code Clan Logo"
              />
              <h1 class="infoHeading">welcome to CodeClan Nigeria</h1>
              <p class="infoSubheading">sign up to</p>
              <img
                src={loginAmico}
                alt="Login Animation"
                id="infoIllustration"
              />
            </div>
            <div id="signUpDiv">
              <h1 class="none show">register</h1>
              <h2 class="none display">Create a Code Clan account</h2>
              <Form id="signUpForm">
                <AlertComponent variant="danger" text={errResponse} />
                <div className="nameInputGroup form-row">
                  <div className="col">
                    <label htmlFor="firstName">First Name</label>
                    <Field
                      name="firstName"
                      id="firstName"
                      className={
                        touched.firstName && errors.firstName
                          ? errorClassNames
                          : validClassNames
                      }
                      type="text"
                    />
                    <div className="d-block text-monospace text-danger small-text">
                      <ErrorMessage name="firstName" className="d-block" />
                    </div>
                  </div>
                  <div className="col">
                    <label htmlFor="lastName">Last Name</label>
                    <Field
                      name="lastName"
                      className={
                        touched.lastName && errors.lastName
                          ? errorClassNames
                          : validClassNames
                      }
                      type="text"
                    />
                    <div className="d-block text-monospace text-danger small-text">
                      <ErrorMessage name="lastName" className="d-block" />
                    </div>
                  </div>
                </div>
                <label htmlFor="email">Email Address</label>
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

                <label htmlFor="password">Password</label>
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

                <p className="info blue privacy">
                  by clicking on this button, you agree to our Terms of use and
                  privacy policy
                </p>
                <button
                  disabled={isSubmitting}
                  className={loading ? 'btn btn-light w-100' : 'submit'}
                >
                  {!loading ? (
                    'get started'
                  ) : (
                    <span>
                      <Spinner animation="border" variant="primary" /> Signing
                      up....
                    </span>
                  )}
                </button>
                <p className="info blue signIn">
                  already have an account?
                  <span>
                    <Link to="/login/">Sign In</Link>
                  </span>
                </p>
              </Form>
            </div>
          </div>
        </SignupStyled>
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
  register: signup,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
