import React from 'react';
import DashboardHeaderStyled from './DashboardHeaderStyled';
import { connect } from 'react-redux';

function DashboardHeader({ toggleSidebar, showSidebar, data }) {
  const { photoUrl } = data;
  return (
    <DashboardHeaderStyled>
      <div className="top-bar mt-3 mb-4">
        <nav className="top-nav">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search dashboard"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary bg-blue"
                type="button"
                id="button-addon2"
              >
                <i className="fas fa-search text-white"></i>
                {/* <img src="img/search.png" alt="" /> */}
              </button>
            </div>
          </div>

          <div className="user__details">
            <div className="">
              <i style={{ color: '#B2BED3' }} className="far fa-bell"></i>
            </div>

            <div className="display-profile">
              <div className="display-picture">
                <img
                  src={
                    photoUrl ||
                    'https://cdn.imgbin.com/3/1/2/imgbin-united-states-computer-icons-desktop-free-high-quality-person-icon-default-profile-2aZui7ZnCtjpD6FkTi5Cz55r4.jpg'
                  }
                  alt="user"
                />
              </div>
              {/* <p className="mt-2 ml-4">{firstName}</p> */}
            </div>

            <div className="hamburger-menu" onClick={() => toggleSidebar()}>
              {!showSidebar ? (
                <i className="fas fa-bars text-blue"></i>
              ) : (
                <i className="fas fa-times  text-blue"></i>
              )}
            </div>
          </div>
        </nav>
      </div>
    </DashboardHeaderStyled>
  );
}

const mapStateToProps = store => {
  const { loading, data, error, errResponse } = store.user;
  return {
    loading,
    data,
    error,
    errResponse,
  };
};

// const mapDispatchToProps = { getTracksAction };

export default connect(mapStateToProps)(DashboardHeader);
