import React from 'react';
import DashboardHeaderStyled from './DashboardHeaderStyled';

function DashboardHeader({ toggleSidebar, showSidebar }) {
  return (
    <DashboardHeaderStyled>
      
      <div class="top-bar mt-3 mb-4">
        <nav class="top-nav">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="Search dashboard"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-secondary bg-blue"
                type="button"
                id="button-addon2"
              >
                <i class="fas fa-search text-white"></i>
                {/* <img src="img/search.png" alt="" /> */}
              </button>
            </div>
          </div>

          <div class="user__details">
            <div class="">
              <i class="far fa-bell fa-2x"></i>
            </div>

            <div class="display-profile">
              <div class="display-picture"></div>
              <p class="mt-2 ml-4">John Doe</p>
            </div>

            <div class="hamburger-menu" onClick={() => toggleSidebar()}>
              {!showSidebar ? (
                <i class="fas fa-bars fa-2x text-blue"></i>
              ) : (
                <i class="fas fa-times fa-2x text-blue"></i>
              )}
            </div>
          </div>
        </nav>
      </div>
    </DashboardHeaderStyled>
  );
}

export default DashboardHeader;
