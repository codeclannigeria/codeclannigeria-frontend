import React, { useState } from 'react';
import ContactMentorStyled from './ContactMentorStyled';

function ContactMentor() {
  const [message, setMessage] = useState('');

  const handleChange = e => {
    console.log(e.target.value);

    setMessage(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    alert(message);
  };
  return (
    <ContactMentorStyled>
      <form onSubmit={handleSubmit}>
        <textarea onChange={handleChange} name="message"></textarea>
        <div className="text-center d-flex justify-content-center align-items-center">
          <input
            className="btn btn-primary send-message-cta"
            value="Send this message"
            type="submit"
          />
        </div>
      </form>
    </ContactMentorStyled>
  );
}

export default ContactMentor;
