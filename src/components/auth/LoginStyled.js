import styled from 'styled-components';

const LoginStyled = styled.div`
  @font-face {
    font-family: "Gilroy";
    src: url("assets/fonts/Gilroy-Light.otf")
}

a {
    color: #555555;
    text-decoration: none;
    border: 2px solid transparent;
    line-height: 1.5em;
    transition: all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    padding: .25em;
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
.logo div{
    padding: 5px;
    overflow: hidden;
    display: inline-block;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Gilroy";
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
    width: 38%;
    padding: 3em 6em;
    display: block;
}

.right {
    text-align: center;
    background: #f7f7f7;
    width: 62%;
    border-radius: 4px;
    padding: 5em;
}

.left, .right {
    height: 100%;
}

.small, .normal {
    text-align: start;
    padding-left: 8em;
    margin-top: 5em;
    font-size: .9em;
    font-weight: bold;
    color: #555555;
}
.normal{
    margin-top: 0;
    padding-left: 3em;
    line-height: 1.4em;
    padding-top: .5em;
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
    text-align: center
}

input, button {
    border: none;
    border: 1px solid transparent;
    padding: .8em;
    border-radius: 4px;
    outline: none;
}

form {
    margin-top: 2em;
}

form .block{
    margin-bottom: 1em;
    border: 1px solid gainsboro;
    border-radius: 4px;
}

form .block i {
    color: #aaa;
}

form input, form button {
    width: 100%;
}

.form-con {
    padding: 10px 0 20px 0;
    margin-top: -1.5%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  .form-con input {
    width: 5%;
    margin-top: 1.2%;
  }

  .form-con a {
    text-decoration: none;
    color: ${props => props.theme.primaryColor};
    font-size: 14px;
  }

input[type=email], input[type=password] {
    width: 90%;
}

input[type="submit"], button {
    color: white;
    background-color: ${props => props.theme.primaryColor};
    font-weight: bold;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1em;
    margin-top: 1em;
}
input[type="submit"]:hover {
    background: #1f58ff;
    color: white;
}
button {
    background: ${props => props.theme.primaryColor};
    color: white;
    border: 1px solid gainsboro;
    align-content: center;
}

button i {
    color: rgba(255, 0, 0, 0.753);
}

button span {
    font-size: 1.4em;
    margin-right: .4em;
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
  .left, .right {
      padding: 0;
      width: unset;
  }
  .right {
      display: none;
  }
}
`

export default LoginStyled;
