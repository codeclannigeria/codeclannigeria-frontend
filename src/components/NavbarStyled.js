import styled from 'styled-components';

const StyledNav = styled.div`
  font-family: 'Libre Franklin', sans-serif;
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
    font-family: 'Libre Franklin', sans-serif;
  }

  .logo {
    width: auto;
    height: 34px;
  }
  header {
    background-color: transparent;
    height: 72px;
  }
  .nav-link{
    font-family: 'Libre Franklin', serif;
    font-weight: 600;
  font-size: 0.875rem;
  }
  nav {
  height: 72px;
}
.navbar-brand img {
  height: 34px;
}
.navbar .topnav-links .nav-link {
  color: #131b49;
  font-family: 'Libre Franklin', serif;
  font-size: 0.875rem;
}

  .inner-header {
    background-color: transparent;
    color: #131b49;
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
    font-size: 18px;
    line-height: 27px;
    padding-right: .5rem;
    padding-left: .5rem;
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
      color: #12376d;
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
    
    .menu li {
      font-size: 1.1rem;
      line-height: 5rem;
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
      background-color: #30507f;
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
          :hover {
            color: #dcd8d8;
            opacity: 0.5;
          }
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
        li,
        .login-link {
          color: #fff;
          :hover {
            color: #dcd8d8;
            opacity: 0.5;
          }
        }
        .mobile-button {
          border: 3px solid #fff;
          padding: 0.5rem;
          border-radius: 10px;
          :hover {
            border-color: #dcd8d8;
            opacity: 0.5;
          }
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
