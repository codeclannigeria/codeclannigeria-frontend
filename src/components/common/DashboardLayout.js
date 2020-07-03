import React, { useState } from 'react';
import DashboardSidebar from './DashboardSidebar';
import DashboardHeader from './DashboardHeader';
import DashboardLayoutStyled from './DashboardLayoutStyled';
import { ReactComponent as HomeIcon } from '../assets/svgs/dashboard/cli_home.svg';
import { ReactComponent as UserGroup } from '../assets/svgs/dashboard/cli_group.svg';
import { ReactComponent as Settings } from '../assets/svgs/dashboard/cli_settings.svg';
import { ReactComponent as Bookmark } from '../assets/svgs/dashboard/cli_bookmark.svg';
import { ReactComponent as Message } from '../assets/svgs/dashboard/cli_message.svg';
import { ReactComponent as Avatar } from '../assets/svgs/dashboard/cli_avatar.svg';
import { motion } from 'framer-motion';
const pageVariants = {
  initial: {
    opacity: 0,
    x: '-100vw',
    scale: 0.8,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: '100vw',
    scale: 1.2,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.3,
};

// const pageStyle = {
//   position: 'absolute',
// };

const DashboardLayout = Component => {
  return function DashboardPage(props) {
    const [showSidebar, setshowSidebar] = useState(false);
    const toggleSidebar = () => {
      setshowSidebar(!showSidebar);
    };
    const tabs = [
      { id: 1, icon: <HomeIcon />, link: '/dashboard' },
      { id: 2, icon: <UserGroup />, link: '/dashboard/mentor' },
      { id: 3, icon: <Message />, link: '/dashboard/track' },
      { id: 4, icon: <Bookmark />, link: '/dashboard/pending-task' },
      { id: 5, icon: <Avatar />, link: '#' },
      { id: 6, icon: <Settings />, link: '#' },
    ];
    const { url } = props.match;

    return (
      <DashboardLayoutStyled>
        <DashboardSidebar tabs={tabs} path={url} showSidebar={showSidebar} />
        <motion.div
          // style={pageStyle}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <DashboardHeader
            toggleSidebar={toggleSidebar}
            showSidebar={showSidebar}
          />
          <div className="dashboard-wrap row">
            <div className="dashboard-content col-md-10 container">
              <Component {...props} />
            </div>
          </div>
        </motion.div>
      </DashboardLayoutStyled>
    );
  };
};

export default DashboardLayout;
