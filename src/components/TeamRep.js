import React from 'react'; 

const TeamRep = ({repName, srcPhoto, profession, story, motto, 
                    jobDescription, twitterProfile, facebookProfile, 
                    linkedinProfile, githubProfile, index}) => {
    return (
        <div className="col-md-4 col-sm-6 mb-4">
          <div className="our-team">
            <div className="image-container">
              <img
                src={srcPhoto}
                alt={repName}
              />
            </div>
            <div className="team-content">
              <h3 className="title">{repName}</h3>
              <span className="post">{profession}</span>
              <p className="description">
                {story}
              </p>
              <p className="tech-stack">
                {jobDescription}
              </p>
              <ul className="social">
                <li>
                  <a
                    className="fab fa-twitter"
                    href={twitterProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {' '}
                  </a>
                </li>
                <li>
                  <a
                    className="fab fa-github"
                    href={githubProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {' '}
                  </a>
                </li>
                <li>
                  <a
                    className="fab fa-linkedin"
                    href={linkedinProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {' '}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
}

export default TeamRep;