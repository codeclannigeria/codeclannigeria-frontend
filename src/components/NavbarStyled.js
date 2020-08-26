import styled from 'styled-components';

const StyledNav = styled.div`
  font-family: 'Gilroy', 'Nunito', sans-serif;
  a {
    color: white;
    text-decoration: none;
  }
  a:hover {
    color: #d0d0d0;
  }

  .fas {
    font-family: 'Font Awesome 5 Free';
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Gilroy', 'Nunito', sans-serif;
  }

  .logo {
    width: auto;
    height: 100%;
  }
  header {
    background-color: #004296;
  }
  .inner-header {
    background-color: #004495;
    padding: 1rem 2rem;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* padding: 0rrem 4rrem; */
    align-items: center;
  }

  .menu {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
  }

  header ul li {
    display: inline-block;
    font-family: 'Gilroy';
    font-size: 18px;
    line-height: 27px;
    width: 100px;
    text-align: center;
  }
  .button {
    background: white;
    width: 130px;
    padding: 10px;
    outline: none;
    color: #004495;
    text-align: center;
    border-radius: 4px;
    cursor: pointer;
    a {
      color: #004296;
    }
  }
  .mobile-menu {
    display: none;
  }

  .mobile-sign {
    display: none;
  }

  .toggle-btn {
    display: none;
    /* margin: auto; */
  }
  @media only screen and (max-width: 968px) {
    a {
      color: #004296;
      text-decoration: none;
    }
    .menu li {
      font-size: 1.1rem;
      line-height: 5rem;
    }

    .sign li {
      line-height: 2rem;
    }

    .logo {
      width: 74% !important;
      height: auto;
    }

    header {
      position: unset !important;
    }

    .toggle-btn {
      display: block;
      /* position: absolute; */
      top: 1.5rem;
      right: 2rem;
      cursor: pointer;

      z-index: 100;
    }

    .close {
      margin-top: 5rem;
      margin-left: auto;
      opacity: 1;
    }

    .inner-header {
      display: flex;
      width: 100%;
      justify-content: space-between;
      padding: 1.5rem 1.3rem;
    }

    .menu {
      display: none;
    }

    .desktop-sign {
      display: none;
    }

    /* .menu {
      display: unset;
    } */

    .header-copyright {
      font-size: 1.5rem;
      text-align: center;
      margin: 4rem 0;
      font-weight: bolder;
    }

    .mobile-menu {
      padding: 1rem;
      margin-top: 1rem;
      display: ${({ openNav }) => (openNav ? 'flex' : 'none')};
      transition: transform 0.3s ease-in-out;
      margin: 0;
      z-index: 99;
      position: fixed;
      top: 0;
      right: 0;
      width: 100%;
      height: 100vh;
      background-color: #004296;
      flex-direction: column;
      padding: 0 35px;
      /* justify-content: center; */

      align-items: center;
      color: #fff;
      transform: ${({ openNav }) =>
        openNav ? 'translateX(0)' : 'translateX(-100%)'};
      ul {
        display: flex;
        flex-direction: column;
        li {
          color: #fff;
          font-size: 1.5rem;
          margin: 18px 0;
          font-weight: bolder;
        }
      }
      /* background: #fff; */
    }

    .mobile-sign {
      display: flex;
      justify-content: center;
      align-items: center;
      ul {
        display: flex;
        flex-direction: column;
        li {
          color: #fff;
        }
        .mobile-button {
          border: 3px solid #fff;
          padding: 0.5rem;
          border-radius: 10px;
          a {
            color: #fff !important;
            font-weight: bolder;
          }
        }
      }
    }
  }
`;
export default StyledNav;
