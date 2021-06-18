import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../utils';
import axios from 'axios';
import queryString from 'query-string';

import Navbar from '../Navbar';
import verifyError from '../assets/image/verify-error.png';
import EmailConfirmed from '../assets/image/email-confirmed.png';
import { Link } from 'react-router-dom';

function ConfirmEmail(props) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    setLoading(true);
    const UrlQueryStrings = props.location.search;
    const queryValues = queryString.parse(UrlQueryStrings);

    const token = queryValues.token || undefined;
    const email = queryValues.email || undefined;

    if (!token && !email) {
      setError(true);
      setLoading(false);
    }
    const url = BASE_URL + '/auth/confirm-email';
    axios
      .post(url, {
        token,
        email,
      })
      .then(result => {
        setLoading(false);
      })
      .catch(error => {
        try {
          setErrorMessage(error.response.data.message);
        } catch (error) {}
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <React.Fragment>
        <Navbar />
        <div className="d-flex align-items-center justify-content-center flex-column vh-100">
          <p> Please hold on a second...</p>
        </div>
      </React.Fragment>
    );
  }

  //   I was too tired to make this a components to reduce the number of codes
  if (error) {
    return (
      <React.Fragment>
        <Navbar />
        <div className="d-flex align-items-center justify-content-center flex-column vh-100">
          {errorMessage ? (
            <React.Fragment>
              <h2>{errorMessage}</h2>
              <p className="text-monospace">
                Kindly Click here to <Link to="/login"> Login</Link> to
                youraccount
              </p>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <h2>We couldn't verify your email</h2>
              <p>Are you sure this is the exact same link from your email?</p>
            </React.Fragment>
          )}

          <img
            src={verifyError}
            alt="verification failed"
            className="img-fluid"
            width="300"
          />
          <br />
        </div>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <Navbar />
      <div className="d-flex align-items-center justify-content-center flex-column vh-100">
        <h2>Email successfully Verified</h2>
        <p className="text-monospace">
          Kindly Click here to <Link to="/login"> Login</Link> to your account
        </p>
        <img
          src={EmailConfirmed}
          alt="verification successful"
          className="img-fluid"
          width="300"
        />
        <br />
      </div>
    </React.Fragment>
  );
}

export default ConfirmEmail;
