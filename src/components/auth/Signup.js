import React, { useEffect, useRef } from 'react';
import { signup } from '../../state/auth/authActionCreator';
import { connect, useDispatch } from 'react-redux';
import SignupStyled from './SignupStyled';
// import { validateEmail } from './utils';
import { Link } from 'react-router-dom';
import AlertComponent from '../common/AuthAlert';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import codeClanLogo from '../assets/image/codeClanLogo.png';
import Spinner from 'react-bootstrap/Spinner';
import loginAmico from '../assets/image/auth/login.jpg';
import { notification } from 'antd';
import checkAuth from '../../helpers/CheckAuth';

function Signup({ register, loading, errResponse, token, history }) {
  const dispatch = useDispatch();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const togglePasswordToText = ref => {
    ref.current.firstChild.type === 'password'
      ? (ref.current.firstChild.type = 'text')
      : (ref.current.firstChild.type = 'password');
  };

  useEffect(() => {
    dispatch({ type: 'AUTH_RESET' });
  }, [dispatch]);

  const openNotification = () => {
    notification.success({
      message: 'Registration Successful',
      description: 'Kindly check your email for further instructions',
    });
  };
  useEffect(() => {
    if (checkAuth()) {
      history.push('/dashboard');
    }
  }, []);

  useEffect(() => {
    if (token) {
      openNotification();
      history.push('/email-verification-sent/');
    }
  }, [token, history, dispatch]);

  const errorClassNames = 'border input border-danger';
  const validClassNames = 'border input border-green';
  // const regex = /^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/i;

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password1: '',
        password2: '',
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .min(3, 'Too short')
          .max(64, 'Must be 64 characters or less')
          .required('Enter your first name i.e John '),
        lastName: Yup.string()
          .min(3, 'Too short')
          .max(64, 'Must be 64 characters or less')
          .required('Enter your Last name i.e Doe '),
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
        // const nameArray = tempValues.fullName.split(' ');
        // tempValues.firstName = nameArray[0];
        // tempValues.lastName = nameArray[1];
        tempValues.password = tempValues.password1;
        // delete tempValues.fullName;
        delete tempValues.password1;
        delete tempValues.password2;
        register(tempValues);
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <SignupStyled>
          <div>
            <div class="main">
              <div class="left">
                <div class="logo">
                  <div>
                    <img src={codeClanLogo} alt="Code claan" />
                  </div>
                </div>
                <div class="titles"> Create your account </div>
                <Form>
                  <AlertComponent variant="danger" text={errResponse} />
                  <label htmlFor="firstName">
                    First Name <span class="text-danger">*</span>
                  </label>
                  <div class="block">
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
                    <span>
                      <i class="far fa-user"></i>
                    </span>
                  </div>
                  <div className="d-block text-monospace text-danger small-text">
                    <ErrorMessage name="firstName" className="d-block" />
                  </div>

                  <label htmlFor="lastName">
                    Last Name <span class="text-danger">*</span>
                  </label>
                  <div class="block">
                    <Field
                      name="lastName"
                      id="lastName"
                      className={
                        touched.lastName && errors.lastName
                          ? errorClassNames
                          : validClassNames
                      }
                      type="text"
                    />
                    <span>
                      <i class="far fa-user"></i>
                    </span>
                  </div>
                  <div className="d-block text-monospace text-danger small-text">
                    <ErrorMessage name="lastName" className="d-block" />
                  </div>
                  <label htmlFor="email">
                    E-mail <span class="text-danger">*</span>
                  </label>

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
                  <label htmlFor="password1">
                    Password <span class="text-danger">*</span>
                  </label>

                  <div class="block" ref={passwordRef}>
                    <Field
                      id="password1"
                      name="password1"
                      className={
                        touched.password1 && errors.password1
                          ? errorClassNames
                          : validClassNames
                      }
                      type="password"
                    />
                    <span onClick={() => togglePasswordToText(passwordRef)}>
                      <i class="fa fa-eye" aria-hidden="true"></i>
                    </span>
                  </div>
                  <div className="d-block text-monospace text-danger small-text">
                    <ErrorMessage name="password1" className="d-block" />
                  </div>
                  <label htmlFor="password2">
                    Confirm Password <span class="text-danger">*</span>
                  </label>

                  <div class="block" ref={confirmPasswordRef}>
                    <Field
                      id="password2"
                      name="password2"
                      className={
                        touched.password2 && errors.password2
                          ? errorClassNames
                          : validClassNames
                      }
                      type="password"
                    />
                    <span
                      onClick={() => togglePasswordToText(confirmPasswordRef)}
                    >
                      <i class="fa fa-eye" aria-hidden="true"></i>
                    </span>
                  </div>
                  <div className="d-block text-monospace text-danger small-text">
                    <ErrorMessage name="password2" className="d-block" />
                  </div>

                  <button
                    disabled={loading}
                    className={loading ? 'btn btn-light w-100' : 'submit'}
                    type="submit"
                  >
                    {!loading ? (
                      'get started'
                    ) : (
                      <span>
                        <Spinner animation="border" variant="primary" />
                      </span>
                    )}
                  </button>
                  <div class="centralize" style={{ lineHeight: '2em' }}>
                    <p>
                      Already have an account? <Link to="/login">Log in</Link>
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
