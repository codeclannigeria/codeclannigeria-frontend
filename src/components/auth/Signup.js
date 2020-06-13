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
    dispatch({ type: 'AUTH_RESET' });
  }, [dispatch]);

  useEffect(() => {
    if (token) {
      history.push('/email-verification-sent/');
    }
    // return () => {
    //   dispatch({ type: 'AUTH_RESET' });
    // };
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
  const regex = /^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/i;

  return (
    <Formik
      initialValues={{ fullName: '', email: '', password1: '', password2: '' }}
      validationSchema={Yup.object({
        fullName: Yup.string()
          .min(3, 'Too short')
          .max(64, 'Must be 64 characters or less')

          .matches(regex, 'Enter your full name i.e John Doe')
          .required('Enter your full name i.e John Doe'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Enter your email address'),
        password1: Yup.string().required('Enter a password of your choice'),
        password2: Yup.string()
          .required('Confirm the password entered above')
          .oneOf([Yup.ref('password1'), null], 'Passwords must match'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        const tempValues = { ...values };
        const nameArray = tempValues.fullName.split(' ');
        tempValues.firstName = nameArray[0];
        tempValues.lastName = nameArray[1];
        tempValues.password = tempValues.password1;
        delete tempValues.fullName;
        delete tempValues.password1;
        delete tempValues.password2;
        register(tempValues);
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
              <Form id="signUpForm">
                <div className="form-header">
                  <h1 class="show">Create Account</h1>
                  <p class=" display">
                    Start your journey to becoming a world class developer
                  </p>
                </div>
                <AlertComponent variant="danger" text={errResponse} />
                <div className="nameInputGroup">
                  <label htmlFor="fullName">Full Name</label>
                  <Field
                    name="fullName"
                    id="fullName"
                    className={
                      touched.fullName && errors.fullName
                        ? errorClassNames
                        : validClassNames
                    }
                    type="text"
                  />
                  <div className="d-block text-monospace text-danger small-text">
                    <ErrorMessage name="fullName" className="d-block" />
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

                <label htmlFor="password1">Password</label>
                <Field
                  name="password1"
                  className={
                    touched.password1 && errors.password1
                      ? errorClassNames
                      : validClassNames
                  }
                  type="password"
                />
                <div className="d-block text-monospace text-danger small-text">
                  <ErrorMessage name="password1" className="d-block" />
                </div>

                <label htmlFor="password2">Password</label>
                <Field
                  name="password2"
                  className={
                    touched.password2 && errors.password2
                      ? errorClassNames
                      : validClassNames
                  }
                  type="password"
                />
                <div className="d-block text-monospace text-danger small-text">
                  <ErrorMessage name="password2" className="d-block" />
                </div>

                <p className="info blue privacy">
                  by clicking on this button, you agree to our Terms of use and
                  privacy policy
                </p>
                <button
                  disabled={loading}
                  className={loading ? 'btn btn-light w-100' : 'submit'}
                  type="submit"
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
