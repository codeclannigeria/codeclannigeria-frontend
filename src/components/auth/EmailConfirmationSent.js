import React from 'react';

import { ReactComponent as EmailArrived } from '../assets/svgs/email_arrived.svg';
import ConfirmedStyled from './EmailConfirmationSentStyled';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

function EmailConfirmationSent() {
  return (
    <>
      <Navbar />
      <div className="container">
        <ConfirmedStyled>
          <div className="details">
            <h2>You have gotten a mail!</h2>
            <p>
              We have just sent you verification link to the email you provided.
              Go to your mail to access the link and complete your signup.
              Ensure you check your spam folder as well.
            </p>
            {/* <EmailSent className="img-fluid mx-auto" /> */}
            <span>
              Already have an account? <Link to="/login/">Login</Link>
            </span>
          </div>
          <div>
            <EmailArrived className="img-fluid" />
          </div>
        </ConfirmedStyled>
      </div>
    </>
  );
}

export default EmailConfirmationSent;
