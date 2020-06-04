import styled from "styled-components"

const SignupStyled = styled.div`
  body {
    background-color: #f7f4f4;
    font-family: sans-serif;
  }
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
  .signUp {
    padding: 0rem 0.2rem;
  }
  .privacy {
    font-weight: 300;
    text-align: center;
    margin-top: 1rem;
    font-size: 12px;
  }
  .submit {
    text-transform: capitalize;
    text-align: center;
    color: #fff;
    width: 100%;
    background-color: #1f59bb;
    border: transparent;
    margin-top: 0.8rem;
    padding: 0.6rem 0;
    border-radius: 10px;
    cursor: pointer;
  }

  .submit::after {
    content: "!";
  }
  .signIn {
    text-align: center;
    margin-top: 1.2rem;
    display: flex;
    align-self: center;
    justify-content: center;
  }
  .signIn span {
    padding-left: 0.3rem;
  }
  span a {
    color: darkblue;
    font-weight: 500;
  }
  input {
    border: 1px solid #1f59bb;
    background: rgba(31, 89, 187, 0.05);
    border-radius: 5px;
    height: 1.8rem;
    width: 100%;
    margin-top: 0.5rem;
  }
  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-top: 1rem;
    color: #1f59bb;
    font-size: 17px;
  }
  .title {
    display: flex;
    align-self: center;
    justify-content: center;
    font-size: 35px;
    color: #1f59bb;
    font-weight: 600;
    margin-top: 50px;
  }
  .signUpDiv {
    width: fit-content;
    height: auto;
    background-color: #fff;
    border: transparent;
    display: block;
    margin: 20px auto;
  }
  #signUpForm {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
  .nameInputGroup {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 1rem;
  }
  .nameInputGroup label:nth-child(2) {
    padding-left: 1rem;
  }
`
export default SignupStyled
