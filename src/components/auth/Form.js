import React, { useState, useEffect } from 'react';
import { signup } from '../../state/auth/authActionCreator';
import { connect, useDispatch } from 'react-redux';
import SignupStyled from './SignupStyled';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupForm = () => {
  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '' }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <SignupStyled>
        <p className="title">Sign Up</p>
        <div className="signUpDiv">
          <Form id="signUpForm">
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
            <button type="submit">Submit</button>
          </Form>
        </div>
      </SignupStyled>
    </Formik>
  );
};

export default SignupForm;
