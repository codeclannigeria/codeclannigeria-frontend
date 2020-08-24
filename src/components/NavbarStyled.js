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
  .inner-header {
    background-color: #004495;
    padding: 1em 2em;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* padding: 0rem 4rem; */
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
  }
  @media only screen and (max-width: 968px) {
    a {
      color: #004296 !important;
      text-decoration: none;
    }
    .menu li {
      font-size: 1.1em;
      line-height: 5em;
    }

    .sign li {
      line-height: 2em;
    }

    .logo {
      width: auto;
      height: auto;
    }

    header {
      position: unset !important;
    }

    .toggle-btn {
      display: block;
      position: absolute;
      top: 0.5rem;
      right: 2rem;
      cursor: pointer;
    }

    .inner-header {
      display: flex;
      width: 100%;
      justify-content: space-around;
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

    .mobile-menu {
      background: #fff;
      padding: 1rem;
      flex-direction: column;
      margin-top: 1em;
      display: ${({ openNav }) => (openNav ? 'flex' : 'none')};
      transition: transform 0.3s ease-in-out;
      transform: ${({ openNav }) =>
        openNav ? 'translateX(0)' : 'translateX(-100%)'};
      ul {
        display: flex;
        flex-direction: column;
        li {
          color: #004296;
          font-size: 1.1em;
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
          color: #004296;
        }
        .mobile-button {
          background: #004296;
          k a {
            color: #fff !important;
            font-weight: bolder;
          }
        }
      }
    }
    .inner-header {
      padding: 1em;
      display: block;
      text-align: center;
    }
  }
`;
export default StyledNav;
