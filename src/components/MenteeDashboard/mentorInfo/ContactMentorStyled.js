import styled from 'styled-components';

const ContactMentorStyled = styled.div`
  textarea {
    width: 100%;
    height: 100%;
    resize: none;
    border: none;
    min-height: 23rem;
    background: #fbfcff;
    box-shadow: 0px 4px 15px rgba(31, 89, 187, 0.1);
    border-radius: 10px;
    padding: 1rem;
  }

  .send-message-cta {
    background: #6b9ae9;
    border-radius: 8px;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default ContactMentorStyled;
