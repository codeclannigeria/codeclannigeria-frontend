import styled from 'styled-components';

const SignupStyled = styled.div`
  .none {
    display: none;
  }
  /**Reusables*/
  .blue {
    color: ${props => props.theme.primaryColor};
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
    background-color: ${props => props.theme.primaryColor};
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
    color: #fff;
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
    color: #21252f;
    font-size: 14px;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    line-height: 21px;
  }
  .input {
    border: 0.25px solid ${props => props.theme.primaryColor};
    background: rgba(31, 89, 187, 0.05);
    border-radius: 5px;
    height: 2.3rem;
    width: 90%;
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
    background-color: ${props => props.theme.primaryColor};
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
  .form-header {
    color: ${props => props.theme.primaryColor};
    /* padding-left: 9rem; */
    h1 {
      color: ${props => props.theme.primaryColor};
    }
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
      color: ${props => props.theme.primaryColor};
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
      color: ${props => props.theme.primaryColor};
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

  /* NEW */

  .border {
    border: 1px solid transparent !important;
  }

  a {
    color: #555555;
    text-decoration: none;
    border: 2px solid transparent;
    line-height: 1.5em;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    padding: 0.25em;
  }

  a:hover {
    color: rgb(233, 62, 128);
    border: 2px solid #333333;
    font-weight: 900;
    outline: none;
    border-radius: 4px;
  }

  .logo img {
    width: 108px;
    height: 80.6px;
  }
  .logo div {
    padding: 5px;
    overflow: hidden;
    display: inline-block;
  }
  .fa,
  .far {
    font-family: 'FontAwesome';
    font-weight: lighter;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Gilroy';
  }

  .main {
    display: flex;
    width: 100vw;
    height: 100vh;
    overflow: auto;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
  }
  .left {
    width: 35%;
    padding: 3em 6em;
    display: block;
  }

  .right {
    text-align: center;
    background: #f7f7f7;
    width: 65%;
    border-radius: 4px;
    padding: 5em;
  }

  .left,
  .right {
    height: 100%;
  }

  .small,
  .normal {
    text-align: start;
    padding-left: 8em;
    margin-top: 5em;
    font-size: 0.9em;
    font-weight: bold;
    color: #555555;
  }
  .normal {
    margin-top: 0;
    padding-left: 3em;
    line-height: 1.4em;
    padding-top: 0.5em;
    font-weight: 800;
    font-size: 2.4em;
  }
  .titles {
    padding-left: 0;
    font-size: 1.75em;
    font-weight: 600;
  }

  .logo {
    padding: 2em;
    text-align: center;
  }

  input,
  button {
    border: none;
    border: 1px solid transparent;
    padding: 0.8em;
    border-radius: 4px;
    outline: none;
  }

  form {
    margin-top: 2em;
  }

  form .block {
    /* margin-bottom: 1em; */
    border: 1px solid gainsboro;
    border-radius: 4px;
    display: flex;

    align-items: center;
  }

  .block span {
    margin-left: 4px;
  }

  form .block i {
    color: #aaa;
  }

  form input,
  form button {
    width: 100%;
  }

  input[type='email'],
  input[type='password'] {
    width: 90%;
  }

  input[type='submit'],
  button {
    color: white;
    background-color: #1f59bb;
    font-weight: bold;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1em;
    margin-top: 1em;
  }
  input[type='submit']:hover {
    background: #1f58ff;
  }
  button {
    background: white;
    color: #1f59bb;
    border: 1px solid gainsboro;
    align-content: center;
  }

  button i {
    color: rgba(255, 0, 0, 0.753);
  }

  button span {
    font-size: 1.4em;
    margin-right: 0.4em;
  }

  .centralize {
    text-align: start;
    margin-top: 1em;
  }

  .footer {
    font-weight: bold;
    line-height: 3rem;
    text-align: center;
  }

  @media only screen and (max-width: 968px) {
    .center {
      width: 100%;
      border-radius: 0;
      height: 100%;
    }
    .main {
      display: block;
      height: unset;
      width: unset;
      padding: 1em;
    }
    .left,
    .right {
      padding: 0;
      width: unset;
    }
    .right {
      display: none;
    }
  }
`;
export default SignupStyled;
