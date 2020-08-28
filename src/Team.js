import React from 'react';
import StyledTeam from './TeamStyled';
import groupSession from './components/assets/image/homepage/groupSession.jpg';
import teamMember from './components/assets/image/team/teamMember.jpg';
import tayormi from './components/assets/image/team/tayormi.jpg';
import femi from './components/assets/image/team/femi.jfif';
import fortune from './components/assets/image/team/fortune.jfif';
import LifeWithKaren from './components/assets/image/team/LifeWithKaren.jpg';
import rammytunde from './components/assets/image/team/rammytunde.jpg';
import deborah from './components/assets/image/team/deborah.jpg';
import deji from './components/assets/image/team/deji.jpg';
import emmriz from './components/assets/image/team/emmriz.jpg';
import ngozi from './components/assets/image/team/ngozi.jpeg';
import ejiro from './components/assets/image/team/ejiro.jpg';
import seunbayo from './components/assets/image/team/seunbayo.jpg';
import daegee from './components/assets/image/team/daegee.jpeg';
import john from './components/assets/image/team/john.jpg';
import kisha from './components/assets/image/team/kisha.jpeg';
import bayonle from './components/assets/image/team/bayonle.jpg';
import semiu from './components/assets/image/team/semiu.jpg';
import johnOdey from './components/assets/image/team/johnOdey.jpg';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TeamRep from './TeamRep';

function Team() {
  return (
    <StyledTeam>
      <Navbar />

      <div className="norm">
        <div className="body" style={{ paddingBottom: 1 + 'em' }}>
          <div className="sorround">
            <div className="title">Meet our team</div>

            <div>
              Choose any of the teams you'd like to be a part of. There are
              different categories and different spheres just for you.
            </div>
          </div>

          <div className="pic-hold">
            <div>
              <img
                src={groupSession}
                alt="main-team"
                className="img-fluid main-img"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="teams">
        <div className="head">Teams</div>

        <div className="team-shell">
          <TeamRep
            repName="Ajiboye Temitope Tayomi"
            srcPhoto={tayormi}
            profession="Founder, Code Clan"
            story=' "Tayomi is the founder of Code Clan Nigeria, a community dedicated to turning beginners into pro developers. He is also a Developer with experience building enterprise mobile and web apps." '
            motto=' "Do not be afraid to fail" '
            jobDescription=" Dot Net, Node, Angular, Flutter"
            twitterProfile="https://twitter.com/olu_tayormi"
            facebookProfile="https://facebook.com/topboyz009"
            githubProfile="https://github.com/tayormi"
          />

          <TeamRep
            repName="Fortune Ochi"
            srcPhoto={fortune}
            profession="Software Engineer"
            story=' "5+ years experience working as a software engineer" '
            motto={'"I\'m obsessed with quality🏆"'}
            jobDescription="Nodejs, Asp.Net, Angular, ReactJs, Java"
            twitterProfile="https://twitter.com"
            facebookProfile="https://facebook.com"
            githubProfile="https://github.com"
          />

          <TeamRep
            repName="Onasanya Babatunde"
            srcPhoto={rammytunde}
            profession="Fullstack Developer"
            story={
              "I'm a full-stack developer and Computer Engineering undergraduate with a passion for building excellent software. With two years of experience, and a track record of meeting aggressive goals."
            }
            motto={
              ' "Don\'t let negativity affect your vision. A lot of people have said harsh things, but I don\'t let it affect me." '
            }
            jobDescription="Python, Django, JavaScript, Node, Express, React, PostgreSQL, MongoDB"
            twitterProfile="https://twitter.com/simply_rammy"
            facebookProfile="https://facebook.com/onasanyatunde"
            githubProfile="https://github.com/rammyblog"
          />

          <TeamRep
            repName="Onalo Deborah"
            srcPhoto={deborah}
            profession="User Interface and Experience Designer"
            story={
              ' "I love designing simple elegant and engaging interfaces and experiences for everyone. Sometimes, I wear the white coat and play Pharmacist." '
            }
            motto=' "Design is intelligence made visible." -- Alina Wheeler, author.  '
            jobDescription={
              ' UX-UI Designers are generally responsible for collecting, researching, investigating and evaluating user requirements. Their responsibility is to deliver an outstanding user experience providing an exceptional and intuitive application design. Majority of the work was done with Figma. '
            }
            twitterProfile="https://twitter.com/deborah_oa"
          />

          <TeamRep
            repName="Ngozi Kalu"
            srcPhoto={ngozi}
            profession="Backend Developer"
            story=""
            motto=""
            jobDescription=""
            twitterProfile="https://twitter.com/nollykalz"
          />

          <TeamRep
            repName="John Ademola"
            srcPhoto={john}
            profession="Software Developer"
            story=""
            motto=""
            jobDescription=""
            twitterProfile="https://twitter.com/crownedprinz"
            facebookProfile="https://facebook.com/dmola kunle"
          />
          <TeamRep
            repName="Ayodeji Olagbaiye"
            srcPhoto={deji}
            profession="Product Designer"
            story='"Stumbled on Design and fell in love. We die here"'
            motto='"Keep pushing"'
            jobDescription="Figma"
            twitterProfile="https://twitter.com/DejiNotDope"
          />

          <TeamRep
            repName="Mukaila Semiu"
            srcPhoto={semiu}
            profession="Frontend Developer"
            story=' "I am Mukaila Semiu, I started my programming  journey with Code Clan Nigeria with a team trained By the founder himself Temi Ajiboye Jan2020Mentorship. I now a frontend developer." '
            motto=' "Learn everyday to developer the brain" '
            jobDescription="HTML, CSS, Bootstrap, Vanilla JavaScript and Reactjs"
            twitterProfile="https://twitter.com/semiteagain"
            facebookProfile="https://web.facebook.com/Semiteagain"
          />

          <TeamRep
            repName="Daniel Owoyomi"
            srcPhoto={daegee}
            profession="Frontend Developer"
            story=' "Life is less difficult with simple and user-friendly solutions" '
            motto=' "Simplicity is the biggest sophistication" '
            jobDescription="HTML, CSS, JavaScript, React"
            twitterProfile="https://twitter.com/daegee_o"
            githubProfile="https://github.com/daegee"
          />
          <TeamRep
            repName="Efereyan Karen"
            srcPhoto={LifeWithKaren}
            profession="Frontend Developer"
            story=""
            motto=""
            jobDescription=""
            twitterProfile="https://twitter.com/EfereyanK"
          />

          <TeamRep
            repName="Ajolore Emmanuel Babatunde"
            srcPhoto={emmriz}
            profession="Frontend Developer"
            story=' "A result-driven, and analytical front-end developer who can think “out of the box”, Strong in design and integrated problem-solving skills." '
            motto=' "The beauty of life does not depend on how happy you are alone but also how happy others can be because of you." '
            jobDescription=" HTML, CSS, JavaScript, Angular Framework, Bootstrap framework"
            twitterProfile="https://twitter.com/emmanuelajolore"
            facebookProfile="https://facebook.com/emmanuelajolore"
            githubProfile="https://github.com/emmriz"
          />

          <TeamRep
            repName="Ofordile Oluchi Jennifer Kisha"
            srcPhoto={kisha}
            profession="Nurse and Frontend Developer"
            story=' "I love programming because it helps me give life to designs..It helps me connect with amazing people and contribute my quota to tech." '
            motto=' "Success is your duty, your responsibility, and your obligation...Own it!" '
            jobDescription=" Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others..."
            twitterProfile="https://twitter.com/codewithkisha"
          />

          <TeamRep
            repName="Oluwafemi Anjorin"
            srcPhoto={femi}
            profession="Fullstack Developer"
            story='"Full Stack Developer with experience building web applications using JavaScript, including extensive experience managing cross-functional teams. Committed to making impact to the community."'
            motto='"Ad astra per aspera"'
            jobDescription="React, Redux, Node, GraphQL, Express, PosgreSQL, MongoDB, knex, sqlite"
            twitterProfile="https://twitter.com"
            facebookProfile="https://facebook.com"
            githubProfile="https://github.com"
          />

          <TeamRep
            repName="Adebayo Oluwaseun"
            srcPhoto={seunbayo}
            profession="Fullstack Developer "
            story=' "I am passionate about solving problems, developing innovative products geared toward simplifying &amp; Improving life. " '
            motto=' "If you can imagine it,we can bring it to Life" '
            jobDescription="Html, Css, javascript, Vue, NodeJs, mongoDb, git"
            twitterProfile="https://twitter.com/seunbayoNg"
            facebookProfile="https://facebook.com/seunbayong"
            githubProfile="https://github.com/seunbayo"
          />
          <TeamRep
            repName="John Odey"
            srcPhoto={johnOdey}
            profession="Fullstack Developer @Creative Intelligence Group"
            story=' "I’m a passionate and believe that impossible is nothing. I strive daily to be world-class developer. Working on projects that helps solve real problems excites me." '
            motto=" “First, solve the problem. Then, write the code.” – John Johnson "
            jobDescription="Javascript, Vue, Nuxt, Laravel"
            twitterProfile="https://twitter.com/jon_odey0"
            facebookProfile="https://www.facebook.com/john.odey1/"
          />

          <TeamRep
            repName="Olanrewaju Bayonle Kayode"
            srcPhoto={bayonle}
            profession="Software Developer"
            story=""
            motto=""
            jobDescription=""
            twitterProfile="https://twitter.com/infinityjoy28"
          />
          <TeamRep
            repName="Obamrevwo Ejiro Edwin"
            srcPhoto={ejiro}
            profession="Software Engineer"
            story='"Engineer with years of experience building scalable and performant applications. I have a strong experience in designing and building distributed systems using Service Oriented Architecture approach."'
            motto='"Engineering  | Faith | Influence"'
            jobDescription="Golang, grpc, Docker, Google Cloud, Kubernetes, NATS, CircleCI, Terraform and go-micro, Nodejs"
            twitterProfile="https://twitter.com/edwin_ejiro"
            githubProfile="https://github.com/Ejiro-Edwin"
          />
        </div>

        <Footer />
      </div>
    </StyledTeam>
  );
}

export default Team;
