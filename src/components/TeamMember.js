import React from 'react';
const TeamMember = () => {
  return (

      <div className="col-md-4 col-sm-6 mb-4">
      <div className="our-team">
              <div className="image-container">
                  <img src="https://res.cloudinary.com/codeclannigeria/image/upload/q_auto/v1598648073/CCN/Teams%20Page%20Photos/tayormi_eisz58.jpg" alt="tayormi " />
                </div>
                <div className="team-content">
                    <h3 className="title">Ajiboye Temitope Tayomi</h3>
                    <span className="post">Founder, Code Clan</span>
                    <p className="description">Tayomi is the founder of Code Clan Nigeria, a community dedicated to turning beginners into pro developers. He is also a Developer with experience building enterprise mobile and web apps.</p>
                    <p className="tech-stack">
                      Tech Stack: Dot Net, Node, Angular, Flutter
                    </p>
                    <ul className="social">
                        <li>
                          <a className="fab fa-twitter" href="https://twitter.com/olu_tayormi" target="_blank"></a></li>
                        <li><a className="fab fa-github" href="https://github.com/tayormi"></a></li>
                        <li><a className="fab fa-linkedin" href="https://www.linkedin.com/in/tayormi/"></a></li>
                        
                    </ul>
                </div>
              </div>
      </div>
 
    
  )
}

export default TeamMember;