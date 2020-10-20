import styled from 'styled-components';

export const AboutStyled = styled.div`
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
}

.teams {
    background-color: #242424;
    color: white;
    text-align: center;
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
    width: 80%;
}

.head {
    color: #A4031F;
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
`

export default AboutStyled;