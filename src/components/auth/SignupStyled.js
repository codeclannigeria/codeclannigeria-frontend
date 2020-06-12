import styled from 'styled-components';

const SignupStyled = styled.div`
  .none {
    display: none;
  }
  /**Reusables*/
  .blue {
    color: #1f59bb;
    text-transform: capitalize;
    font-weight: 400;
  }
  .info {
    font-size: 13px;
    font-weight: 600;
    text-transform: capitalize;
  }
  /*Wrapper*/
  #wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
  }
  /**SignUpInfo Styles*/
  #signUpInfo {
    background-color: #1f59bb;
    color: #ffffff;
    padding: 2rem;
    width: 100%;
  }
  #logo {
    color: #fff;
    width: 90px;
    height: 90px;
  }

  .infoHeading {
    font-weight: 500;
    font-size: 50px;
    line-height: 75px;
  }

  .infoSubheading {
    font-size: 18px;
    line-height: 27px;
  }

  .infoHeading,
  .infoSubheading {
    text-transform: capitalize;
    margin: 1rem;
  }
  .infoSubheading::after {
    content: '...';
  }
  #infoIllustration {
    width: 300px;
    height: 300px;
    display: flex;
    align-self: center;
    margin: auto;
  }
  /*SignUpDiv styles**/
  #signUpDiv {
    background-color: #fff;
    border: transparent;
    margin: auto;
    width: 100%;
  }
  #signUpForm {
    margin: 0 auto;
    width: 25rem;
  }

  .nameInputGroup {
    /* width: 26.25rem; */
  }
  .nameInputGroup label:nth-child(2) {
    margin-left: 1rem;
  }
  label {
    color: #1f59bb;
    font-size: 14px;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    line-height: 21px;
  }
  .input {
    border: 0.25px solid #1f59bb;
    background: rgba(31, 89, 187, 0.05);
    border-radius: 5px;
    height: 2.3rem;
    width: 100%;
  }
  input[type='password'],
  [type='email'] {
    height: 2.3rem;
  }
  .privacy {
    text-align: center;
    font-size: 10px;
    font-weight: 300;
    margin-top: 30px;
    margin-bottom: 30px;
    line-height: 18px;
  }
  .submit {
    text-transform: capitalize;
    text-align: center;
    color: #fff;
    width: 100%;
    background-color: #1f59bb;
    border: transparent;
    padding: 0.5rem 0;
    border-radius: 5px;
  }
  .submit::after {
    content: '!';
  }
  .signIn {
    text-align: center;
    margin-top: 1rem;
    display: flex;
    align-self: center;
    justify-content: center;
  }
  .signIn span {
    padding-left: 0.25rem;
  }
  span a {
    color: darkblue;
    font-weight: 500;
  }
  /**Responsiveness**/

  @media only screen and (max-width: 850px) {
    #signUpInfo {
      display: none;
    }
  }

  @media only screen and (max-width: 800px) {
    #wrapper {
      padding: 1rem;
    }

    #signUpForm {
      width: auto;
    }

    #signUpDiv {
      padding-top: 3rem;
    }
    h1.show {
      display: block;
      font-size: 35px;
      color: #1f59bb;
      text-transform: capitalize;
      font-weight: 600;
    }
    h1.show:after {
      content: '.';
      font-size: 30px;
      font-weight: 500;
    }
    h2.display {
      margin-top: 0.5rem;
      display: block;
      color: #1f59bb;
      font-size: 20px;
      font-weight: 400;
      opacity: 1;
    }
    .nameInputGroup {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
    }
    .nameInputGroup label:nth-child(2) {
      margin-left: 0;
    }
  }
`;
export default SignupStyled;
