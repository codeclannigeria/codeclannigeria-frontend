import styled from 'styled-components';

const ForgotPasswordStyled = styled.div`
  .form-container {
    padding: 30px;
    background: #ffffff;
    color: #1f59bb;
    align-self: center;
    box-shadow: 0px 1px 3px rgba(53, 151, 245, 0.2);
  }
  .form-control {
    background: rgba(53, 151, 245, 0.05);
  }

  .image-container {
    align-self: center;
    justify-self: center;
    align-self: center;
    justify-self: center;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .btn {
    background: #1f59bb;
  }

  .title {
    font-size: 2.4em;
    font-weight: bold;
    text-align: center;
  }

  .normal {
    margin-top: 0;
    padding-left: 3em;
    line-height: 1.4em;
    padding-top: 0.5em;
    font-weight: bold;
    color: #555555;
    text-align: center;

    /* font-size: 2em; */
  }
`;

export default ForgotPasswordStyled;
