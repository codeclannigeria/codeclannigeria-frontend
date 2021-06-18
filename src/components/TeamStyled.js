import styled from 'styled-components';


{/***********************************
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
*************************************/}


const StyledTeam = styled.div`
@font-face {
  font-family: "Gilroy";
  src:url("assets/fonts/Gilroy-Light.otf")
}

a {
  color: white;
  text-decoration: none;
}
.card-container .footer a{
  color: #1F59BB;
}
a:hover {
  color: #d0d0d0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Gilroy";
}

.logo {
  width: 75.8px;
  height: 58.33px;
}

.back-m {
  background-image: url('assets/images/Rectangle\ 196.png');
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

.inner-header {
  background-color: #004495;
  padding: 1em 2em;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.menu {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}

header ul li {
  display: inline-block;
  font-family: "Gilroy";
  font-size: 18px;
  line-height: 27px;
  width: 100px;
  text-align: center;
}

.button {
  background: #F2A359;
  width: 130px;
  padding: 10px;
  outline: none;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
}

.sorround {
  font-size: 24px;
  width: 33.3333%;
  line-height: 36px;
}

.title{
  font-weight: bolder;
  font-size: 40px;
  padding: 0 0 .8em 0;
  line-height: 60px;
}

.pic-hold {
  width: 66.6666%;
  text-align: right;
}

.pic-hold div {
  display: inline-block;
  width: 40em;
  height: 25em;
  background-size: contain;
  background-image: url('./assets/images/5.jpg');
  background-blend-mode: hard-light;
  background-color: white;
  background-repeat: no-repeat
}

.body {
  padding: 2em 0;
  padding-top: 10em;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 10em;
}

.get-started {
  color: white;
  background: #F2A359;
  border-radius: 4px;
  font-weight: 600;
  outline: none;
  border: none;
  font-size: 23px;
  margin-top: 1em;
  padding: 1.5rem 3rem;
}

.section-2 {
  padding-bottom: 5em;
}

.section-2-title {
  font-size: 64px;
  line-height: 79px;
  color: #1F59BB;
  font-weight: bold;
  text-align: center;
  padding: .5em 5em;
}

.collaboration {
  display: flex;
  flex-wrap: wrap;
}

.text-title {
  color: #1F59BB;
  font-weight: 600;
  width: 50%;
  font-size: 24px;
}

.collab-image {
  text-align: right;
}


/* third section */

.section-3 {
  padding: 5em 4em;
  background-color: rgba(0, 68, 149, 0.2);
}
.section-3-title {
  font-size: 64px;
  line-height: 79px;
  color: #1F59BB;
  font-weight: bolder;
}
.small-text {
  font-size: 36px;
  margin-top: 1em;
  color: #1F59BB;
}

.w-2\/3 {
  width: 66.6%
}

.p-70-30 {
  width: 70%
}

.tiny-text {
  font-size: 18px;
  font-weight: 300;
  color: #747474;
  margin-top: .5em;
  line-height: 21px;
}

.absolute-pic {
  position: absolute;
  top: -9em;
  right: 0;
  padding: .5em;
  background: white
}

.section-4 {
  padding: 5em 0;
}

.section-4-title {
  font-size: 64px;
  line-height: 79px;
  color: #1F59BB;
  font-weight: bolder;
  font-style: normal;
}

.straight {
  font-size: 36px;
  font-style: normal;
  font-weight: normal;
  line-height: 42px;
  text-align: center;
  color: #1F59BB;
  display: block;
}

.row {
  white-space: nowrap;
  overflow-x: hidden;
  position: relative;
}

.full-padding {
  padding: 2em 4em;
}

.inner {
  display: inline-block;
  width: 30%;
  margin-right: 2em;
  margin-left: 2em;
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

.footer-m {
  background-color: #242424;
  color: white;
  padding: 4em 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

}
.inner .pic {
  height: 320px;
  background: #C4C4C4;
  overflow: hidden;
  object-fit: cover
}
.pic img {
  height: 320px;
}
.white {
  color: white;
}

.norm {
  padding: 4em;
  background-color: #E5E9ED;
}

.teams {
  background-color: #242424;
  color: white;
  text-align: center;
  padding-bottom: 2rem;
}

.teams .team {
  display: inline-block;
  margin-top: 5px;
  width: 20em;
  margin-left: 2em;
  margin-right: 2em;
}

.teams .team-shell {
  display: inline-block;
  text-align: left;
  width: 90%;
}

.head {
  color: #fff;
}

.teams .head {
  display: block;
  padding: 1em 2em;
  margin: 1em 1em;
  font-size: 2em;
}
.team .pic-space {
  height: 15em;
  background: gray;
  border-radius: 4px;
}

.team .name {
  line-height: 50px;
  font-size: 24px;
  font-weight: bold
}

.team .description {
  font-size: 18px;
  color: #d9d9d9;
}

.team .action {
  padding: 1em;
  font-weight: bold;
  color: #1F59BB;
  border-radius: 4px;
  margin-top: 1em;
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
  font-size: 1.5em;
}

.grey .date {
  color: #555555;
}

.half-grey {
  background: #eeeeee!important;
}

.location {
  font-size: 1em;
  line-height: 1.5em;
}

.section-3-inner {
  display: flex;
  flex-wrap: wrap
}

.common {
  width: 36%;
}

.major {
  font-size: 20px;
  margin: 5em 10em;
  text-align: center;
  line-height: 30px;
}

@media only screen and (max-width: 968px) {
  header {
      position: unset;
  }
  .inner-header {
      padding: 1em;
      display: block;
      text-align: center;
  }
  .logo {
      width: 20%;
      height: auto;
  }
  .menu {
      display: unset;
  }
  
  .pic img {
      width: 100%;
  }
  .menu li {
      font-size: 1.1em;
      line-height: 5em;
  }

  .sign li {
      line-height: 2em;
  }
  .sorround {
      width: 100%
  } 
  .back-m {
      padding: 20px;
  }
  .body {
      padding: 1em;
  }
  .pic-hold {
      display: none
  }
  .title {
      font-size: 2em;
      text-align: center;
  }
  .section-3,
  .section-4 {
      padding: 2em 1em;
  }
  .section-2-title, .section-3-title,
  .section-4-title {
      font-size: 2em;
      line-height: 1.5em;
      padding: .5em;
  }
  .collaboration: {
      display: block;
  }
  .collaboration img {
      width: 80%
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
      width: 100%
  }
  .small-text {
      font-size: .8em;
  }
  .common {
      width: 100%;
  }
  .major {
      font-size: 20px;
      margin: 1em 2em;
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
      font-weight: bold
  }
  .norm-events img {
      display:none;
  }
}












body {
  margin-top: 60px;
  font-size: 14px;
  font-family: "Helvetica Nueue", Arial, Verdana, sans-serif;
  background-color: #E5E9ED !important;
}

.btn:hover,
.btn:focus,
.btn:active {
  outline: 0 !important;
}

/* entire container, keeps perspective */
.card-container {
  -webkit-perspective: 800px;
  -moz-perspective: 800px;
  -o-perspective: 800px;
  perspective: 800px;
  margin-bottom: 30px;
}

/* flip the pane when hovered */
.card-container:not(.manual-flip):hover .card,
.card-container.hover.manual-flip .card {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  transform: rotateY(180deg);
}


.card-container.static:hover .card,
.card-container.static.hover .card {
  -webkit-transform: none;
  -moz-transform: none;
  -o-transform: none;
  transform: none;
}

/* flip speed goes here */
.card {
  -webkit-transition: -webkit-transform .5s;
  -moz-transition: -moz-transform .5s;
  -o-transition: -o-transform .5s;
  transition: transform .5s;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  transform-style: preserve-3d;
  position: relative;
}

/* hide back of pane during swap */
.front,
.back {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #FFF;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.14);
}

/* front pane, placed above back */
.front {
  z-index: 2;
}

/* back, initially hidden pane */
.back {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  transform: rotateY(180deg);
  z-index: 3;
}

.back .btn-simple {
  position: absolute;
  left: 0;
  bottom: 4px;
}

/*        Style       */


.card {
  background: none repeat scroll 0 0 #FFFFFF;
  border-radius: 4px;
  color: #444444;
}

.card-container,
.front,
.back {
  width: 100%;
  height: 420px;
  border-radius: 4px;
}

.card .cover {
  height: 105px;
  overflow: hidden;
  border-radius: 4px 4px 0 0;
}

.card .cover img {
  width: 100%;
}

.card .user {
  border-radius: 50%;
  display: block;
  height: 120px;
  margin: -55px auto 0;
  overflow: hidden;
  width: 120px;
  border: 4px solid black;
}

.card .user img {
  background: none repeat scroll 0 0 #FFFFFF;
  height: 100%;
  object-fit: cover;
}

.card .content {
  background-color: rgba(0, 0, 0, 0);
  box-shadow: none;
  padding: 10px 20px 20px;
}

.card .content .main {
  min-height: 160px;
}

.card .back .content .main {
  height: 215px;
}

.card .name {
  font-size: 22px;
  line-height: 28px;
  margin: 10px 0 0;
  text-align: center;
  text-transform: capitalize;
}

.card h5 {
  margin: 5px 0;
  font-weight: 400;
  line-height: 20px;
}

.card .profession {
  color: #999999;
  text-align: center;
  margin-bottom: 20px;
}

.card .footer {
  border-top: 1px solid #EEEEEE;
  color: #999999;
  margin: 30px 0 0;
  padding: 10px 0 0;
  text-align: center;
}

.card .footer .social-links {
  font-size: 18px;
}

.card .footer .social-links a {
  margin: 0 7px;
}

.card .footer .btn-simple {
  margin-top: -6px;
}

.card .header {
  padding: 15px 20px;
  height: 90px;
}

.card .motto {
  border-bottom: 1px solid #EEEEEE;
  color: #999999;
  font-size: 14px;
  font-weight: 400;
  padding-bottom: 10px;
  text-align: center;
}

.card .stats-container {
  width: 100%;
  margin-top: 50px;
}

.card .stats {
  display: block;
  float: left;
  width: 33.333333%;
  text-align: center;
}

.card .stats:first-child {
  border-right: 1px solid #EEEEEE;
}

.card .stats:last-child {
  border-left: 1px solid #EEEEEE;
}

.card .stats h4 {
  font-weight: 300;
  margin-bottom: 5px;
}

.card .stats p {
  color: #777777;
}

/*      Just for presentation        */

.title {
  color: #506A85;
  text-align: center;
  font-weight: 300;
  font-size: 44px;
  margin-bottom: 90px;
  line-height: 90%;
}

.title small {
  font-size: 17px;
  color: #999;
  text-transform: uppercase;
  margin: 0;
}

.space-30 {
  height: 30px;
  display: block;
}

.space-50 {
  height: 50px;
  display: block;
}

.space-200 {
  height: 200px;
  display: block;
}

.white-board {
  background-color: #FFFFFF;
  min-height: 200px;
  padding: 60px 60px 20px;
}

.ct-heart {
  color: #F74933;
}

pre.prettyprint {
  background-color: #ffffff;
  border: 1px solid #999;
  margin-top: 20px;
  padding: 20px;
  text-align: left;
}

.atv,
.str {
  color: #05AE0E;
}

.tag,
.pln,
.kwd {
  color: #3472F7;
}

.atn {
  color: #2C93FF;
}

.pln {
  color: #333;
}

.com {
  color: #999;
}

.btn-simple {
  opacity: .8;
  color: #666666;
  background-color: transparent;
}

.btn-simple:hover,
.btn-simple:focus {
  background-color: transparent;
  box-shadow: none;
  opacity: 1;
}

.btn-simple i {
  font-size: 16px;
}

.navbar-brand-logo {
  padding: 0;
}

.navbar-brand-logo .logo {
  border: 1px solid #333333;
  border-radius: 50%;
  float: left;
  overflow: hidden;
  width: 60px;
}

.navbar .navbar-brand-logo .brand {
  color: #FFFFFF;
  float: left;
  font-size: 18px;
  font-weight: 400;
  line-height: 20px;
  margin-left: 10px;
  margin-top: 10px;
  width: 60px;
}

.navbar-default .navbar-brand-logo .brand {
  color: #555;
}


/*       Fix bug for IE      */

@media screen and (-ms-high-contrast: active),
(-ms-high-contrast: none) {

  .front,
  .back {
      -ms-backface-visibility: visible;
      backface-visibility: visible;
  }

  .back {
      visibility: hidden;
      -ms-transition: all 0.2s cubic-bezier(.92, .01, .83, .67);
  }

  .front {
      z-index: 4;
  }

  .card-container:not(.manual-flip):hover .back,
  .card-container.manual-flip.hover .back {
      z-index: 5;
      visibility: visible;
  }
}






















@font-face {
  font-family: 'Pe-icon-7-stroke';
  src: url('../fonts/Pe-icon-7-stroke.eot?-2irksn');
  src: url('../fonts/Pe-icon-7-stroke.eot?#iefix-2irksn') format('embedded-opentype'),
      url('../fonts/Pe-icon-7-stroke.woff?-2irksn') format('woff'),
      url('../fonts/Pe-icon-7-stroke.ttf?-2irksn') format('truetype'),
      url('../fonts/Pe-icon-7-stroke.svg?-2irksn#Pe-icon-7-stroke') format('svg');
  font-weight: normal;
  font-style: normal;
}

[class^="pe-7s-"],
[class*=" pe-7s-"] {
  display: inline-block;
  font-family: 'Pe-icon-7-stroke';
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.pe-7s-cloud-upload:before {
  content: "\e68a";
}

.pe-7s-cash:before {
  content: "\e68c";
}

.pe-7s-close:before {
  content: "\e680";
}

.pe-7s-bluetooth:before {
  content: "\e68d";
}

.pe-7s-cloud-download:before {
  content: "\e68b";
}

.pe-7s-way:before {
  content: "\e68e";
}

.pe-7s-close-circle:before {
  content: "\e681";
}

.pe-7s-id:before {
  content: "\e68f";
}

.pe-7s-angle-up:before {
  content: "\e682";
}

.pe-7s-wristwatch:before {
  content: "\e690";
}

.pe-7s-angle-up-circle:before {
  content: "\e683";
}

.pe-7s-world:before {
  content: "\e691";
}

.pe-7s-angle-right:before {
  content: "\e684";
}

.pe-7s-volume:before {
  content: "\e692";
}

.pe-7s-angle-right-circle:before {
  content: "\e685";
}

.pe-7s-users:before {
  content: "\e693";
}

.pe-7s-angle-left:before {
  content: "\e686";
}

.pe-7s-user-female:before {
  content: "\e694";
}

.pe-7s-angle-left-circle:before {
  content: "\e687";
}

.pe-7s-up-arrow:before {
  content: "\e695";
}

.pe-7s-angle-down:before {
  content: "\e688";
}

.pe-7s-switch:before {
  content: "\e696";
}

.pe-7s-angle-down-circle:before {
  content: "\e689";
}

.pe-7s-scissors:before {
  content: "\e697";
}

.pe-7s-wallet:before {
  content: "\e600";
}

.pe-7s-safe:before {
  content: "\e698";
}

.pe-7s-volume2:before {
  content: "\e601";
}

.pe-7s-volume1:before {
  content: "\e602";
}

.pe-7s-voicemail:before {
  content: "\e603";
}

.pe-7s-video:before {
  content: "\e604";
}

.pe-7s-user:before {
  content: "\e605";
}

.pe-7s-upload:before {
  content: "\e606";
}

.pe-7s-unlock:before {
  content: "\e607";
}

.pe-7s-umbrella:before {
  content: "\e608";
}

.pe-7s-trash:before {
  content: "\e609";
}

.pe-7s-tools:before {
  content: "\e60a";
}

.pe-7s-timer:before {
  content: "\e60b";
}

.pe-7s-ticket:before {
  content: "\e60c";
}

.pe-7s-target:before {
  content: "\e60d";
}

.pe-7s-sun:before {
  content: "\e60e";
}

.pe-7s-study:before {
  content: "\e60f";
}

.pe-7s-stopwatch:before {
  content: "\e610";
}

.pe-7s-star:before {
  content: "\e611";
}

.pe-7s-speaker:before {
  content: "\e612";
}

.pe-7s-signal:before {
  content: "\e613";
}

.pe-7s-shuffle:before {
  content: "\e614";
}

.pe-7s-shopbag:before {
  content: "\e615";
}

.pe-7s-share:before {
  content: "\e616";
}

.pe-7s-server:before {
  content: "\e617";
}

.pe-7s-search:before {
  content: "\e618";
}

.pe-7s-film:before {
  content: "\e6a5";
}

.pe-7s-science:before {
  content: "\e619";
}

.pe-7s-disk:before {
  content: "\e6a6";
}

.pe-7s-ribbon:before {
  content: "\e61a";
}

.pe-7s-repeat:before {
  content: "\e61b";
}

.pe-7s-refresh:before {
  content: "\e61c";
}

.pe-7s-add-user:before {
  content: "\e6a9";
}

.pe-7s-refresh-cloud:before {
  content: "\e61d";
}

.pe-7s-paperclip:before {
  content: "\e69c";
}

.pe-7s-radio:before {
  content: "\e61e";
}

.pe-7s-note2:before {
  content: "\e69d";
}

.pe-7s-print:before {
  content: "\e61f";
}

.pe-7s-network:before {
  content: "\e69e";
}

.pe-7s-prev:before {
  content: "\e620";
}

.pe-7s-mute:before {
  content: "\e69f";
}

.pe-7s-power:before {
  content: "\e621";
}

.pe-7s-medal:before {
  content: "\e6a0";
}

.pe-7s-portfolio:before {
  content: "\e622";
}

.pe-7s-like2:before {
  content: "\e6a1";
}

.pe-7s-plus:before {
  content: "\e623";
}

.pe-7s-left-arrow:before {
  content: "\e6a2";
}

.pe-7s-play:before {
  content: "\e624";
}

.pe-7s-key:before {
  content: "\e6a3";
}

.pe-7s-plane:before {
  content: "\e625";
}

.pe-7s-joy:before {
  content: "\e6a4";
}

.pe-7s-photo-gallery:before {
  content: "\e626";
}

.pe-7s-pin:before {
  content: "\e69b";
}

.pe-7s-phone:before {
  content: "\e627";
}

.pe-7s-plug:before {
  content: "\e69a";
}

.pe-7s-pen:before {
  content: "\e628";
}

.pe-7s-right-arrow:before {
  content: "\e699";
}

.pe-7s-paper-plane:before {
  content: "\e629";
}

.pe-7s-delete-user:before {
  content: "\e6a7";
}

.pe-7s-paint:before {
  content: "\e62a";
}

.pe-7s-bottom-arrow:before {
  content: "\e6a8";
}

.pe-7s-notebook:before {
  content: "\e62b";
}

.pe-7s-note:before {
  content: "\e62c";
}

.pe-7s-next:before {
  content: "\e62d";
}

.pe-7s-news-paper:before {
  content: "\e62e";
}

.pe-7s-musiclist:before {
  content: "\e62f";
}

.pe-7s-music:before {
  content: "\e630";
}

.pe-7s-mouse:before {
  content: "\e631";
}

.pe-7s-more:before {
  content: "\e632";
}

.pe-7s-moon:before {
  content: "\e633";
}

.pe-7s-monitor:before {
  content: "\e634";
}

.pe-7s-micro:before {
  content: "\e635";
}

.pe-7s-menu:before {
  content: "\e636";
}

.pe-7s-map:before {
  content: "\e637";
}

.pe-7s-map-marker:before {
  content: "\e638";
}

.pe-7s-mail:before {
  content: "\e639";
}

.pe-7s-mail-open:before {
  content: "\e63a";
}

.pe-7s-mail-open-file:before {
  content: "\e63b";
}

.pe-7s-magnet:before {
  content: "\e63c";
}

.pe-7s-loop:before {
  content: "\e63d";
}

.pe-7s-look:before {
  content: "\e63e";
}

.pe-7s-lock:before {
  content: "\e63f";
}

.pe-7s-lintern:before {
  content: "\e640";
}

.pe-7s-link:before {
  content: "\e641";
}

.pe-7s-like:before {
  content: "\e642";
}

.pe-7s-light:before {
  content: "\e643";
}

.pe-7s-less:before {
  content: "\e644";
}

.pe-7s-keypad:before {
  content: "\e645";
}

.pe-7s-junk:before {
  content: "\e646";
}

.pe-7s-info:before {
  content: "\e647";
}

.pe-7s-home:before {
  content: "\e648";
}

.pe-7s-help2:before {
  content: "\e649";
}

.pe-7s-help1:before {
  content: "\e64a";
}

.pe-7s-graph3:before {
  content: "\e64b";
}

.pe-7s-graph2:before {
  content: "\e64c";
}

.pe-7s-graph1:before {
  content: "\e64d";
}

.pe-7s-graph:before {
  content: "\e64e";
}

.pe-7s-global:before {
  content: "\e64f";
}

.pe-7s-gleam:before {
  content: "\e650";
}

.pe-7s-glasses:before {
  content: "\e651";
}

.pe-7s-gift:before {
  content: "\e652";
}

.pe-7s-folder:before {
  content: "\e653";
}

.pe-7s-flag:before {
  content: "\e654";
}

.pe-7s-filter:before {
  content: "\e655";
}

.pe-7s-file:before {
  content: "\e656";
}

.pe-7s-expand1:before {
  content: "\e657";
}

.pe-7s-exapnd2:before {
  content: "\e658";
}

.pe-7s-edit:before {
  content: "\e659";
}

.pe-7s-drop:before {
  content: "\e65a";
}

.pe-7s-drawer:before {
  content: "\e65b";
}

.pe-7s-download:before {
  content: "\e65c";
}

.pe-7s-display2:before {
  content: "\e65d";
}

.pe-7s-display1:before {
  content: "\e65e";
}

.pe-7s-diskette:before {
  content: "\e65f";
}

.pe-7s-date:before {
  content: "\e660";
}

.pe-7s-cup:before {
  content: "\e661";
}

.pe-7s-culture:before {
  content: "\e662";
}

.pe-7s-crop:before {
  content: "\e663";
}

.pe-7s-credit:before {
  content: "\e664";
}

.pe-7s-copy-file:before {
  content: "\e665";
}

.pe-7s-config:before {
  content: "\e666";
}

.pe-7s-compass:before {
  content: "\e667";
}

.pe-7s-comment:before {
  content: "\e668";
}

.pe-7s-coffee:before {
  content: "\e669";
}

.pe-7s-cloud:before {
  content: "\e66a";
}

.pe-7s-clock:before {
  content: "\e66b";
}

.pe-7s-check:before {
  content: "\e66c";
}

.pe-7s-chat:before {
  content: "\e66d";
}

.pe-7s-cart:before {
  content: "\e66e";
}

.pe-7s-camera:before {
  content: "\e66f";
}

.pe-7s-call:before {
  content: "\e670";
}

.pe-7s-calculator:before {
  content: "\e671";
}

.pe-7s-browser:before {
  content: "\e672";
}

.pe-7s-box2:before {
  content: "\e673";
}

.pe-7s-box1:before {
  content: "\e674";
}

.pe-7s-bookmarks:before {
  content: "\e675";
}

.pe-7s-bicycle:before {
  content: "\e676";
}

.pe-7s-bell:before {
  content: "\e677";
}

.pe-7s-battery:before {
  content: "\e678";
}

.pe-7s-ball:before {
  content: "\e679";
}

.pe-7s-back:before {
  content: "\e67a";
}

.pe-7s-attention:before {
  content: "\e67b";
}

.pe-7s-anchor:before {
  content: "\e67c";
}

.pe-7s-albums:before {
  content: "\e67d";
}

.pe-7s-alarm:before {
  content: "\e67e";
}

.pe-7s-airplay:before {
  content: "\e67f";
}

`



export default StyledTeam;
