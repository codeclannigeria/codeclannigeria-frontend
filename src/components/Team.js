// import React from 'react';
// import StyledTeam from './TeamStyled';
// import groupSession from './assets/image/homepage/groupSession.jpg';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import TeamRep from './TeamRep';

// function Team() {
//   return (
//     <StyledTeam>
//       <Navbar />

//       <div className="norm">
//         <div className="body" style={{ paddingBottom: 1 + 'em' }}>
//           <div className="sorround">
//             <div className="title">Meet our team</div>

//             <div>
//               Choose any of the teams you'd like to be a part of. There are
//               different categories and different spheres just for you.
//             </div>
//           </div>

//           <div className="pic-hold">
//             <div>
//               <img
//                 src={groupSession}
//                 alt="main-team"
//                 className="img-fluid main-img"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="teams">
//         <div className="head">Teams</div>

//         <div className="team-shell">
//           <TeamRep
//             repName="Ajiboye Temitope Tayomi"
//             srcPhoto="https://res.cloudinary.com/codeclannigeria/image/upload/q_auto/v1598648073/CCN/Teams%20Page%20Photos/tayormi_eisz58.jpg"
//             profession="Founder, Code Clan"
//             story=' "Tayomi is the founder of Code Clan Nigeria, a community dedicated to turning beginners into pro developers. He is also a Developer with experience building enterprise mobile and web apps." '
//             motto=' "Do not be afraid to fail" '
//             jobDescription=" Dot Net, Node, Angular, Flutter"
//             twitterProfile="https://twitter.com/olu_tayormi"
//             facebookProfile="https://facebook.com/topboyz009"
//             githubProfile="https://github.com/tayormi"
//           />

//           <TeamRep
//             repName="Fortune Ochi"
//             srcPhoto="https://res.cloudinary.com/codeclannigeria/image/upload/q_auto/v1598648044/CCN/Teams%20Page%20Photos/fortune_xcb5jb.jpg"
//             profession="Software Engineer"
//             story=' "5+ years experience working as a software engineer" '
//             motto={'"I\'m obsessed with quality🏆"'}
//             jobDescription="Nodejs, Asp.Net, Angular, ReactJs, Java"
//             twitterProfile="https://twitter.com"
//             facebookProfile="https://facebook.com"
//             githubProfile="https://github.com"
//           />

//           <TeamRep
//             repName="Onasanya Babatunde"
//             srcPhoto="https://res.cloudinary.com/codeclannigeria/image/upload/q_auto/v1598648075/CCN/Teams%20Page%20Photos/rammytunde_v9srev.jpg"
//             profession="Fullstack Developer"
//             story={
//               ' "I\'m a full stack Developer and Computer Engineering undergraduate with passion for building excellent softwares. With 2 years of experience, and a track record of meeting aggressive goals." '
//             }
//             motto={
//               ' "Don\'t let negativity affect your vision. A lot of people have said harsh things, but I don\'t let it affect me." '
//             }
//             jobDescription="Python, Django, JavaScript, Node, Express, React, PostgreSQL, MongoDB"
//             twitterProfile="https://twitter.com/simply_rammy"
//             facebookProfile="https://facebook.com/onasanyatunde"
//             githubProfile="https://github.com/rammyblog"
//           />

//           <TeamRep
//             repName="Onalo Deborah"
//             srcPhoto="https://res.cloudinary.com/codeclannigeria/image/upload/q_auto/v1598648044/CCN/Teams%20Page%20Photos/deborah_ivljlf.jpg"
//             profession="User Interface and Experience Designer"
//             story={
//               ' "I love designing simple elegant and engaging interfaces and experiences for everyone. Sometimes, I wear the white coat and play Pharmacist." '
//             }
//             motto=' "Design is intelligence made visible." -- Alina Wheeler, author.  '
//             jobDescription={
//               ' UX-UI Designers are generally responsible for collecting, researching, investigating and evaluating user requirements. Their responsibility is to deliver an outstanding user experience providing an exceptional and intuitive application design. Majority of the work was done with Figma. '
//             }
//             twitterProfile="https://twitter.com/deborah_oa"
//           />

//           <TeamRep
//             repName="Ngozi Kalu"
//             srcPhoto="https://res.cloudinary.com/codeclannigeria/image/upload/q_auto/v1598648053/CCN/Teams%20Page%20Photos/ngozi_oztovc.jpg"
//             profession="Backend Developer"
//             story=""
//             motto=""
//             jobDescription=""
//             twitterProfile="https://twitter.com/nollykalz"
//           />

//           <TeamRep
//             repName="John Ademola"
//             srcPhoto="https://res.cloudinary.com/codeclannigeria/image/upload/q_auto/v1598648051/CCN/Teams%20Page%20Photos/john_uuuslr.jpg"
//             profession="Software Developer"
//             story=""
//             motto=""
//             jobDescription=""
//             twitterProfile="https://twitter.com/crownedprinz"
//             facebookProfile="https://facebook.com/dmola kunle"
//           />

//           <TeamRep
//             repName="Ayodeji Olagbaiye"
//             srcPhoto="https://res.cloudinary.com/codeclannigeria/image/upload/q_auto/v1598644858/CCN/deji_egmldb.jpg"
//             profession="Product Designer"
//             story='"Stumbled on Design and fell in love. We die here"'
//             motto='"Keep pushing"'
//             jobDescription="Figma"
//             twitterProfile="https://twitter.com/DejiNotDope"
//           />

//           <TeamRep
//             repName="Mukaila Semiu"
//             srcPhoto="https://res.cloudinary.com/codeclannigeria/image/upload/q_auto/v1598648053/CCN/Teams%20Page%20Photos/semiu_w7edkh.jpg"
//             profession="Frontend Developer"
//             story=' "I am Mukaila Semiu, I started my programming  journey with Code Clan Nigeria with a team trained By the founder himself Temi Ajiboye Jan2020Mentorship. I now a frontend developer." '
//             motto=' "Learn everyday to developer the brain" '
//             jobDescription="HTML, CSS, Bootstrap, Vanilla JavaScript and Reactjs"
//             twitterProfile="https://twitter.com/semiteagain"
//             facebookProfile="https://web.facebook.com/Semiteagain"
//           />

//           <TeamRep
//             repName="Daniel Owoyomi"
//             srcPhoto="https://res.cloudinary.com/codeclannigeria/image/upload/q_auto/v1598648043/CCN/Teams%20Page%20Photos/daegee_mtozdt.jpg"
//             profession="Frontend Developer"
//             story=' "Life is less difficult with simple and user-friendly solutions" '
//             motto=' "Simplicity is the biggest sophistication" '
//             jobDescription="HTML, CSS, JavaScript, React"
//             twitterProfile="https://twitter.com/daegee_o"
//             githubProfile="https://github.com/daegee"
//           />

//           <TeamRep
//             repName="Efereyan Karen"
//             srcPhoto="https://res.cloudinary.com/codeclannigeria/image/upload/q_auto/v1598648131/CCN/Teams%20Page%20Photos/LifeWithKaren_doooxy.jpg"
//             profession="Frontend Developer"
//             story=""
//             motto=""
//             jobDescription=""
//             twitterProfile="https://twitter.com/EfereyanK"
//           />

//           <TeamRep
//             repName="Ajolore Emmanuel Babatunde"
//             srcPhoto="https://res.cloudinary.com/codeclannigeria/image/upload/q_auto/v1598648137/CCN/Teams%20Page%20Photos/emmriz_slp5pv.jpg"
//             profession="Frontend Developer"
//             story=' "A result-driven, and analytical front-end developer who can think “out of the box”, Strong in design and integrated problem-solving skills." '
//             motto=' "The beauty of life does not depend on how happy you are alone but also how happy others can be because of you." '
//             jobDescription=" HTML, CSS, JavaScript, Angular Framework, Bootstrap framework"
//             twitterProfile="https://twitter.com/emmanuelajolore"
//             facebookProfile="https://facebook.com/emmanuelajolore"
//             githubProfile="https://github.com/emmriz"
//           />

//           <TeamRep
//             repName="Ofordile Oluchi Jennifer Kisha"
//             srcPhoto="https://res.cloudinary.com/codeclannigeria/image/upload/q_auto/v1598648046/CCN/Teams%20Page%20Photos/kisha_fzwect.jpg"
//             profession="Nurse and Frontend Developer"
//             story=' "I love programming because it helps me give life to designs..It helps me connect with amazing people and contribute my quota to tech." '
//             motto=' "Success is your duty, your responsibility, and your obligation...Own it!" '
//             jobDescription=" Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others..."
//             twitterProfile="https://twitter.com/codewithkisha"
//           />

//           <TeamRep
//             repName="Oluwafemi Anjorin"
//             srcPhoto="https://res.cloudinary.com/codeclannigeria/image/upload/q_auto/v1598648044/CCN/Teams%20Page%20Photos/femi_uqhnew.jpg"
//             profession="Fullstack Developer"
//             story='"Full Stack Developer with experience building web applications using JavaScript, including extensive experience managing cross-functional teams. Committed to making impact to the community."'
//             motto='"Ad astra per aspera"'
//             jobDescription="React, Redux, Node, GraphQL, Express, PosgreSQL, MongoDB, knex, sqlite"
//             twitterProfile="https://twitter.com"
//             facebookProfile="https://facebook.com"
//             githubProfile="https://github.com"
//           />

//           <TeamRep
//             repName="Adebayo Oluwaseun"
//             srcPhoto="https://res.cloudinary.com/codeclannigeria/image/upload/q_auto/v1598648097/CCN/Teams%20Page%20Photos/seunbayo_zfzfuy.jpg"
//             profession="Fullstack Developer "
//             story=' "I am passionate about solving problems, developing innovative products geared toward simplifying &amp; Improving life. " '
//             motto=' "If you can imagine it,we can bring it to Life" '
//             jobDescription="Html, Css, javascript, Vue, NodeJs, mongoDb, git"
//             twitterProfile="https://twitter.com/seunbayoNg"
//             facebookProfile="https://facebook.com/seunbayong"
//             githubProfile="https://github.com/seunbayo"
//           />

//           <TeamRep
//             repName="John Odey"
//             srcPhoto="https://res.cloudinary.com/codeclannigeria/image/upload/q_auto/v1598648048/CCN/Teams%20Page%20Photos/johnOdey_di0pxp.jpg"
//             profession="Fullstack Developer @Creative Intelligence Group"
//             story=' "I’m a passionate and believe that impossible is nothing. I strive daily to be world-class developer. Working on projects that helps solve real problems excites me." '
//             motto=" “First, solve the problem. Then, write the code.” – John Johnson "
//             jobDescription="Javascript, Vue, Nuxt, Laravel"
//             twitterProfile="https://twitter.com/jon_odey0"
//             facebookProfile="https://www.facebook.com/john.odey1/"
//           />

//           <TeamRep
//             repName="Olanrewaju Bayonle Kayode"
//             srcPhoto="https://res.cloudinary.com/codeclannigeria/image/upload/q_auto/v1598648045/CCN/Teams%20Page%20Photos/bayonle_okydvj.jpg"
//             profession="Software Developer"
//             story=""
//             motto=""
//             jobDescription=""
//             twitterProfile="https://twitter.com/infinityjoy28"
//           />

//           <TeamRep
//             repName="Obamrevwo Ejiro Edwin"
//             srcPhoto="https://res.cloudinary.com/codeclannigeria/image/upload/q_auto/v1598648043/CCN/Teams%20Page%20Photos/ejiro_wsrv6w.jpg"
//             profession="Software Engineer"
//             story='"Engineer with years of experience building scalable and performant applications. I have a strong experience in designing and building distributed systems using Service Oriented Architecture approach."'
//             motto='"Engineering  | Faith | Influence"'
//             jobDescription="Golang, grpc, Docker, Google Cloud, Kubernetes, NATS, CircleCI, Terraform and go-micro, Nodejs"
//             twitterProfile="https://twitter.com/edwin_ejiro"
//             githubProfile="https://github.com/Ejiro-Edwin"
//           />
//         </div>

//         <Footer />
//       </div>
//     </StyledTeam>
//   );
// }

// export default Team;

import React from 'react';
import TeamMember from './TeamMember';
import StyledTeam from './TeamStyled';
import Navbar from './Navbar';
import Footer from './Footer';

const Team = () => {
  return (
    <StyledTeam>
      <div className="container-fluid pry-padd-form">
        <div className="row">
          <Navbar/>
        </div>
        <div className="row my-5 py-5">
          <h1 className="title text center">
            Our Team
          </h1>
        </div>
        
        <div className="row">
          
        <TeamMember />
        <TeamMember/>
        <TeamMember/>
        <TeamMember/>
        <TeamMember/>
      </div>
      
      </div>
      <Footer/>
    </StyledTeam>
  )
}

export default Team

