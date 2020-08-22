import styled from 'styled-components';

const StyledTeam = styled.div`
  .col-md-3 .img-fluid {
    height: 300px !important;
    // width: 300px !important;
  }
  .team-container {
    background-color: #112542;
  }
  .white {
    color: #fff !important;
  }
  .main-img {
    border-radius: 2%;
  }
  .main-team-section {
    padding: 50px 20px 0 20px;
  }
  .colored-link {
    color: #36b8f2;
    padding-top: 15px;
  }
  .muted-link {
    color: #225070;
  }
  .footer {
    background-color: #000;
    padding: 40px 25px;
  }
  .socials {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .socials li {
    font-size: 30px;
    padding-left: 50px;
  }
  .socials li a .fa {
    color: #fff;
  }
  .copyright {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    color: #fff;
  }

  @media only screen and (max-width: 768px) {
    .col-md-3 img {
      border-radius: 2%;
      margin: 0 auto;
    }
    .main-team-intro {
      font-size: 32px;
      border-bottom: 2px solid #36b8f2;
    }
    .main-team-details {
      font-size: 15px;
    }
    .col-md-3 {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin: 15px auto;
    }
  }
`;
export default StyledTeam;
