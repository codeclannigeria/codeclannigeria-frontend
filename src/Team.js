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
import kisha from './components/assets/image/team/kisha.jpg'
import Navbar from './components/Navbar';
import Footer from'./components/Footer';
import TeamRep from './TeamRep';


function Team() {
  return (
    <StyledTeam>

      <Navbar />

      <div className="norm">
        <div className="body" style={{ paddingBottom: 1 + 'em'}}>
          <div className="sorround">
            <div className="title">
              Meet our team
            </div>

            <div>
              Choose any of the teams you'd like to be a part of. There are different categories and different spheres just for you.
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
        <div className="head">
          Teams
        </div>

        <div className="team-shell">
          
            <TeamRep 
              repName="Ajiboye Temitope Tayomi" 
              srcPhoto={tayormi} profession="Founder, Code Clan" 
              story=' "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quo molestiae quas maxime cupiditate iusto esse odit consectetur! Repellat, ipsum." '
              motto=' "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quo molestiae quas maxime cupiditate iusto" ' jobDescription=" Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others..."
              twitterProfile="https://twitter.com/olu_tayormi"
              facebookProfile="https://facebook.com/topboyz009"
              githubProfile="https://github.com/tayormi"
            />

            <TeamRep 
              repName="Efereyan Karen" 
              srcPhoto={LifeWithKaren} 
              profession="Front end Developer" 
              story=' "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quo molestiae quas maxime cupiditate iusto esse odit consectetur! Repellat, ipsum." '
              motto=' "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quo molestiae quas maxime cupiditate iusto" ' jobDescription=" Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others..."
              twitterProfile="https://twitter.com/EfereyanK"
            
            />

            <TeamRep 
              repName="Obamrevwo Ejiro Edwin" 
              srcPhoto={ejiro} 
              profession="Software Developer" 
              story=' "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quo molestiae quas maxime cupiditate iusto esse odit consectetur! Repellat, ipsum." '
              motto=' "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quo molestiae quas maxime cupiditate iusto" ' jobDescription=" Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others..." 
              twitterProfile="https://twitter.com/edwin_ejiro"
              githubProfile="https://github.com/Ejiro-Edwin"
            />

            <TeamRep 
              repName="Ayodeji Olagbaiye" 
              srcPhoto={deji} 
              profession="Product Designer" 
              story=' "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quo molestiae quas maxime cupiditate iusto esse odit consectetur! Repellat, ipsum." '
              motto=' "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quo molestiae quas maxime cupiditate iusto" ' jobDescription=" Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others..." 
              twitterProfile="https://twitter.com/DejiNotDope"
            />

            <TeamRep 
              repName="Onalo Deborah" 
              srcPhoto={deborah} 
              profession="User Interface and Experience Designer" 
              story=' "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quo molestiae quas maxime cupiditate iusto." '
              motto=' "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quo molestiae quas maxime cupiditate iusto" ' jobDescription=" Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others..." 
              twitterProfile="https://twitter.com/deborah_oa"
            />

            <TeamRep 
              repName="Onasanya Babatunde" 
              srcPhoto={rammytunde} 
              profession="Software Developer" 
              story=' "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quo molestiae quas maxime cupiditate iusto esse odit consectetur! Repellat, ipsum." '
              motto=' "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quo molestiae quas maxime cupiditate iusto" ' jobDescription=" Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others..." 
              twitterProfile="https://twitter.com/simply_rammy"
              facebookProfile="https://facebook.com/onasanyatunde"
              githubProfile="https://github.com/rammyblog"
            />

            <TeamRep 
              repName="Ngozi Kalu" 
              srcPhoto={ngozi} 
              profession="Backend Developer" 
              story=' "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quo molestiae quas maxime cupiditate iusto esse odit consectetur! Repellat, ipsum." '
              motto=' "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quo molestiae quas maxime cupiditate iusto" ' jobDescription=" Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others..."
              twitterProfile="https://twitter.com/nollykalz"
            />

            <TeamRep 
              repName="ADEBAYO  Oluwaseun" 
              srcPhoto={seunbayo} 
              profession="Full-Stack Javascript Developer " 
              story=' "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quo molestiae quas maxime cupiditate iusto esse odit consectetur! Repellat, ipsum." '
              motto=' "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quo molestiae quas maxime cupiditate iusto" ' jobDescription=" Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others..."
              twitterProfile="https://twitter.com/seunbayoNg"
              facebookProfile="https://facebook.com/seunbayong"
              githubProfile="https://github.com/seunbayo"
            />

            <TeamRep 
              repName="Ajolore Emmanuel Babatunde" 
              srcPhoto={emmriz} 
              profession="Software Developer" 
              story=' "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quo molestiae quas maxime cupiditate iusto esse." '
              motto=' "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quo molestiae quas maxime cupiditate iusto" ' jobDescription=" Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others..."
              twitterProfile="https://twitter.com/emmanuelajolore"
              facebookProfile="https://facebook.com/emmanuelajolore"
              githubProfile="https://github.com/emmriz"
            />

            <TeamRep 
              repName="Daniel Owoyomi" 
              srcPhoto={daegee} 
              profession="Frontend Developer" 
              story=' "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quo molestiae quas maxime cupiditate iusto esse odit consectetur! Repellat, ipsum." '
              motto=' "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quo molestiae quas maxime cupiditate iusto" ' jobDescription=" Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others..." 
              twitterProfile="https://twitter.com/daegee_o"
              githubProfile="https://github.com/daegee"
            />

            <TeamRep 
              repName="Fortune Ochi" 
              srcPhoto={fortune} 
              profession="Software Developer" 
              story=' "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quo molestiae quas maxime cupiditate iusto esse odit consectetur! Repellat, ipsum." '
              motto=' "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quo molestiae quas maxime cupiditate iusto" ' jobDescription=" Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others..." 
              twitterProfile="https://twitter.com"
              facebookProfile="https://facebook.com"
              githubProfile="https://github.com"
            />

            <TeamRep 
              repName="Femi Anjorin" 
              srcPhoto={femi} 
              profession="Software Developer" 
              story=' "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quo molestiae quas maxime cupiditate iusto esse odit consectetur! Repellat, ipsum." '
              motto=' "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quo molestiae quas maxime cupiditate iusto" ' jobDescription=" Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others..." 
              twitterProfile="https://twitter.com"
              facebookProfile="https://facebook.com"
              githubProfile="https://github.com"
            />

            <TeamRep 
              repName="John Ademola" 
              srcPhoto={john} 
              profession="Software Developer" 
              story=' "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quo molestiae quas maxime cupiditate iusto esse odit consectetur! Repellat, ipsum." '
              motto=' "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quo molestiae quas maxime cupiditate iusto" ' jobDescription=" Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others..." 
              twitterProfile="https://twitter.com/crownedprinz"
              facebookProfile="https://facebook.com/dmola kunle"
            />

            
            <TeamRep 
              repName="Ofordile Oluchi Jennifer Kisha" 
              srcPhoto={kisha} 
              profession="Frontend Developer" 
              story=' "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quo." '
              motto=' "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quo molestiae quas maxime cupiditate iusto" ' jobDescription=" Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others..." 
              twitterProfile="https://twitter.com/codewithkisha"
            />
                
                
          </div>

        <Footer />
      </div>


    </StyledTeam>
  )
}

export default Team;
