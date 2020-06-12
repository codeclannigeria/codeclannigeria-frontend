import styled from 'styled-components';

const LoginStyled = styled.div`
  .login-container {
    display: flex;
    min-height: 100vh;
  }

  .info-wrap {
    background: ${props => props.theme.primaryColor};
    width: 50%;
    display: block;
  }

  .logo {
    padding: 25px 60px;
    margin-top: 7px;
    height: 100px;
  }

  .info-wrap h1 {
    color: #fff;
    padding-left: 60px;
    font-size: 40px;
  }

  h5 {
    color: #fff;
    font-weight: 300;
    padding: 10px 60px;
  }

  .info-img {
    height: 400px;
    width: 280px;
    margin: 0 auto;
  }

  .info-img img {
    height: auto;
    max-width: 100%;
    padding-top: 30px;
  }

  .signin-wrap {
    margin: 8rem auto;
    width: 50%;
    padding: 0 30px;
  }

  label {
    color: ${props => props.theme.primaryColor};
    font-size: 14px;
    font-weight: 700;
  }

  form {
    padding: 40px;
  }

  form input {
    width: 100%;
    padding: 10px 10px;
    font-size: 14px;
    border-radius: 5px;
    border: 1px solid ${props => props.theme.primaryColor};
    margin-bottom: 20px;
    background: rgba(31, 89, 187, 0.05);
  }

  form input:focus {
    outline: none;
  }

  .form-con {
    padding: 10px 0 40px 0;
    margin-top: -1.5%;
  }

  .form-con input {
    width: 5%;
    margin-top: 1.2%;
  }

  .form-con a {
    float: right;
    text-decoration: none;
    color: ${props => props.theme.primaryColor};
    font-size: 14px;
    padding-right: 10px;
  }

  .form-text {
    text-align: center;
    margin-top: -30px;
    padding-bottom: 40px;
    font-size: 14px;
    font-weight: 400;
    color: ${props => props.theme.primaryColor};
  }

  .form-text a {
    text-decoration: none;
    color: #000;
  }

  .btn {
    background: ${props => props.theme.primaryColor};
    color: #fff;
  }

  .form-header h1,
  p {
    color: ${props => props.theme.primaryColor};
    padding-left: 2rem;
  }

  @media (max-width: 874px) {
    .info-wrap {
      display: none;
    }
    .signin-wrap {
      margin: 8rem auto;
      width: 100%;
      padding: 0 30px;
    }

    .form-con input {
      margin-top: 2%;
      margin-right: 3px;
    }
  }

  @media (max-width: 400px) {
    .form-con a {
      float: left;
      text-decoration: none;
      color: ${props => props.theme.primaryColor};
      font-size: 14px;
      padding-top: 6px;
      padding-right: 10px;
    }

    .signin-wrap {
      margin: 6rem auto;
      width: 100%;
      padding: 0 30px;
    }
    .form-con input {
      margin-top: 3%;
      margin-right: 3px;
    }
  }
`;
export default LoginStyled;
