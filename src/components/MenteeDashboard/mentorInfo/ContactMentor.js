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
          <button className="btn btn-primary send-message-cta" type="submit">
            <i class="fas fa-paper-plane" style={{ marginRight: 5 }}></i> Send
            this message
          </button>
        </div>
      </form>
    </ContactMentorStyled>
  );
}

export default ContactMentor;
