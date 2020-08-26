import styled from 'styled-components';
import Mask from './assets/image/homepage/mask.png';

const HomepageStyled = styled.div`
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

  .fab {
    font-family: 'Font Awesome 5 Brands';
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Gilroy', 'Nunito', sans-serif;
  }

  .back {
    background-image: url(${Mask});
    background-repeat: no-repeat;
    background-size: cover;
    padding: 20px 80px;
    color: white;
  }

  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
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

  .sorround {
    font-size: 24px;
    width: 33.3333%;
    line-height: 36px;
  }

  .title {
    font-weight: bolder;
    font-size: 4rem;
    padding: 0 0 0.8rem 0;
    line-height: 80px;
  }

  .pic-hold {
    width: 66.6666%;
    text-align: right;
  }

  .pic-hold div {
    display: inline-block;
    width: 40rem;
    height: 25rem;
    background-size: contain;
    background-image: url('./assets/images/5.jpg');
    background-blend-mode: hard-light;
    background-color: white;
    background-repeat: no-repeat;
  }

  .body {
    padding: 2rem 0;
    padding-top: 10rem;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 10rem;
  }

  .get-started {
    background: white;
    width: 130px;
    height: 56px;
    border-radius: 4px;
    color: #004495;
    font-weight: 600;
    outline: none;
    border: none;
    font-size: 18px;
    margin-top: 1rem;
  }

  .section-2 {
    padding-bottom: 5rem;
  }

  .section-2-title {
    font-size: 3rem;
    line-height: 79px;
    color: #1f59bb;
    font-weight: bold;
    text-align: center;
    padding: 0.5rem 5rem;
  }

  .collaboration {
    display: flex;
    flex-wrap: wrap;
    padding: 0 2rem;
    justify-content: space-between;
  }

  .text-title {
    color: #1f59bb;
    font-weight: 600;
    /* width: 50%; */
    font-size: 24px;
  }

  .collab-image {
    text-align: right;
  }

  .collab-text {
    margin-top: 6rem;
    margin-left: 6rem;
  }

  /* third section */

  .section-3 {
    padding: 5rem 4rem;
    background-color: rgba(0, 68, 149, 0.2);
  }
  .section-3-title {
    font-size: 3rem;
    line-height: 79px;
    color: #1f59bb;
    font-weight: bolder;
  }
  .small-text {
    font-size: 36px;
    margin-top: 1rem;
    color: #1f59bb;
  }

  .w-2\/3 {
    width: 66.6%;
  }

  .p-70-30 {
    width: 70%;
  }

  .tiny-text {
    font-size: 18px;
    font-weight: 300;
    color: #747474;
    margin-top: 0.5rem;
    line-height: 21px;
  }

  .absolute-pic {
    position: absolute;
    top: -9rem;
    right: 0;
    padding: 0.5rem;
    background: white;
  }

  .section-4 {
    padding: 5rem 0;
  }

  .section-4-title {
    font-size: 3rem;
    line-height: 79px;
    color: #1f59bb;
    font-weight: bolder;
    font-style: normal;
  }

  .straight {
    font-size: 36px;
    font-style: normal;
    font-weight: normal;
    line-height: 42px;
    text-align: center;
    color: #1f59bb;
    display: block;
  }

  .row {
    display: block;
    white-space: nowrap;
    overflow-x: hidden;
    position: relative;
  }

  .full-padding {
    padding: 2rem 4rem;
  }

  .inner {
    display: inline-block;
    width: 30%;
    margin-right: 2rem;
    margin-left: 2rem;
    white-space: normal;
  }

  .go {
    border-radius: 50%;
    top: 40%;
    position: absolute;
    border: none;
    box-shadow: 1px 2px 2px gray;
    width: 50px;
    height: 50px;
    outline: none;
    cursor: pointer;
    color: gray;
  }
  .go img {
    height: 20px;
    width: 20px;
  }

  .go-right {
    right: 5px;
  }
  .go-left {
    left: 5px;
  }

  .footer {
    background-color: #242424;
    color: white;
    padding: 4rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
  .inner .pic {
    height: 320px;
    background: #c4c4c4;
    overflow: hidden;
    object-fit: cover;
  }
  .pic img {
    height: 320px;
  }
  .white {
    color: white;
  }

  .norm {
    padding: 4rem;
  }

  .teams {
    background-color: #242424;
    color: white;
    text-align: center;
  }
  .teams .team:hover {
    background-color: #444444;
  }
  .teams .team {
    display: inline-block;
    padding: 1rem 1rem;
    margin-top: 5px;
    width: 20rem;
    background-color: #333333;
  }

  .teams .team-shell {
    display: inline-block;
    text-align: left;
    width: 80%;
  }

  .teams .head {
    display: block;
    padding: 1rem 2rem;
    margin: 1rem 1rem;
    font-size: 2rem;
  }
  .team .pic-space {
    height: 15rem;
    background: gray;
    border-radius: 4px;
  }

  .team .name {
    line-height: 50px;
    font-size: 24px;
    font-weight: bold;
  }

  .team .description {
    font-size: 18px;
    color: #d9d9d9;
  }

  .team .action {
    padding: 1rem;
    font-weight: bold;
    color: #1f59bb;
    border-radius: 4px;
    margin-top: 1rem;
    width: 100%;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
  .date {
    font-size: 14px;
    line-height: 30px;
    color: #bbbbbb;
  }

  .grey .head {
    font-weight: bold;
  }

  .grey {
    background: #cccccc !important;
    color: #444444;
    text-align: center;
  }

  .grey .description {
    color: #555555;
  }

  .grey .details {
    font-size: 1.5rem;
  }

  .grey .date {
    color: #555555;
  }

  .half-grey {
    background: #eeeeee !important;
  }

  .location {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .section-3-inner {
    display: flex;
    flex-wrap: wrap;
  }

  .common {
    width: 36%;
  }

  .major {
    font-size: 20px;
    margin: 5rem 10rem;
    text-align: center;
    line-height: 30px;
  }

  @media only screen and (max-width: 968px) {
    .logo {
      width: auto;
      height: auto;
    }
    .collab-image {
      text-align: center;
    }

    .text-title {
      width: 100%;
    }

    .collab-text {
      margin: 0;
      padding-left: 2rem;
      width: auto;
      font-size: 1.5rem;
      padding-right: 1rem;
      margin-top: 2rem;
    }
    .pic img {
      width: 100%;
    }

    .sorround {
      width: 100%;
    }
    .back {
      padding: 20px;
    }
    .body {
      padding: 1rem;
    }
    .pic-hold {
      display: none;
    }
    .title {
      font-size: 2rem;
      line-height: 38px;
      text-align: left;
    }
    .subtitle {
      font-size: 1.5rem;
    }
    .section-3,
    .section-4 {
      padding: 2rem 1rem;
    }
    .section-2-title,
    .section-3-title,
    .section-4-title {
      font-size: 2rem;
      line-height: unset;
      padding: 0.5rem;
    }
    .collaboration: {
      display: block;
    }
    .collaboration img {
      width: 80%;
    }
    .section-3 img {
      display: none;
    }
    .section-3-inner {
      display: block;
    }
    .absolute-pic {
      display: none;
    }
    .row {
      white-space: unset;
      overflow-x: unset;
    }
    .inner {
      width: 100%;
      margin: 0;
    }
    .go {
      display: none;
    }
    .p-70-30 {
      width: 100%;
    }
    .small-text {
      font-size: 1.5rem;
    }
    .common {
      width: 100%;
    }
    .major {
      font-size: 20px;
      margin: 1rem 2rem;
      text-align: center;
      line-height: 30px;
    }
    .grey .team-shell {
      width: auto;
    }
    .team.grey,
    .teams .team {
      width: auto;
      display: block;
    }
    .good {
      font-size: 3rem;
      font-weight: bold;
    }
    .norm-events img {
      display: none;
    }
  }
`;

export default HomepageStyled;
