import React from 'react';

function TeamRep({
  repName,
  srcPhoto,
  profession,
  story,
  motto,
  jobDescription,
  twitterProfile,
  facebookProfile,
  githubProfile,
}) {
  return (
    <React.Fragment>
      <div className="team">
        <div className="card-container">
          <div className="card">
            <div className="front">
              <div className="cover">
                <img alt={repName} src={srcPhoto} />
              </div>
              <div className="user">
                <img className="img-circle" alt={repName} src={srcPhoto} />
              </div>
              <div className="content">
                <div className="main">
                  <h3 className="name">{repName}</h3>
                  <p className="profession">{profession}</p>

                  <p className="text-center">{story}</p>
                </div>
              </div>
            </div>
            <div className="back">
              <div className="header">
                <h5 className="motto">{motto}</h5>
              </div>
              <div className="content">
                <div className="main">
                  <h4 className="text-center">Job Description</h4>
                  <p className="text-center">{jobDescription}</p>
                </div>
              </div>
              <div className="footer">
                <div className="social-links text-center">
                  <a
                    rel="noopener noreferrer"
                    href={facebookProfile}
                    className="facebook"
                  >
                    <i className="fa fa-facebook fa-fw"></i>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href={githubProfile}
                    className="google"
                  >
                    <i className="fa fa-github fa-fw"></i>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href={twitterProfile}
                    className="twitter"
                  >
                    <i className="fa fa-twitter fa-fw"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default TeamRep;
