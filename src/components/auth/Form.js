import React from 'react';

import SignupStyled from './SignupStyled';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import AlertComponent from '../common/AuthAlert';

const SignupForm = () => {
  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <SignupStyled>
        <div id="wrapper">
          <div id="signUpInfo">
            <img
              src="./img/codeclannglogo.png"
              alt="Code Clan Logo"
              id="logo"
            />
            <h1 class="infoHeading">
              welcome to CodeClan
              <br />
              Nigeria
            </h1>
            <p class="infoSubheading">sign up to</p>
            <img src="./img/keyToComputer.png " alt="" id="infoIllustration" />
          </div>
          <div id="signUpDiv">
            <h1 class="none show">register</h1>
            <h2 class="none display">Create a Code Clan account</h2>
            <Form id="signUpForm">
              <AlertComponent variant="danger" />
              <p className="info blue signUp">sign up with email</p>
              <div className="nameInputGroup">
                <label htmlFor="firstName">First Name</label>
                <br />

                <Field name="firstName" id="firstName" type="text" />
                <ErrorMessage name="firstName" />
                <label htmlFor="lastName">Last Name</label>
                <Field name="lastName" type="text" />
                <ErrorMessage name="lastName" />
              </div>
              <label htmlFor="email">Email Address</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" />
              <p className="info blue privacy">
                by clicking on this button, you agree to our Terms of use and
                privacy policy
              </p>
              <button disabled className="submit">
                Sign up
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
    </Formik>
  );
};

export default SignupForm;
