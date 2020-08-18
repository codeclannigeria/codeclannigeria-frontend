import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Signup from './components/auth/Signup';
import Dashboard from './components/MenteeDashboard/MenteeDashboard';
import Landing from './components/landing';
import LoginForm from './components/auth/Login';
import Homepage from './components/Homepage';
import SignupForm from './components/auth/Form';
import EmailConfirmationSent from './components/auth/EmailConfirmationSent';
import ForgotPassword from './components/auth/ForgotPassword';
import ConfirmEmail from './components/auth/ConfirmEmail';
import decode from 'jwt-decode';
import CoursesList from './components/MenteeDashboard/courses/CoursesList';
import TrackList from './components/MenteeDashboard/tracks/TrackList';
import MentorDetails from './components/MenteeDashboard/mentorInfo/mentorDetails';
import SubmitTask from './components/MenteeDashboard/pendingTask/SubmitTask';
import PendingTasksPage from './components/MenteeDashboard/pendingTask/PendingTasksPage';
import { AnimatePresence } from 'framer-motion';
import TaskBrief from './components/MenteeDashboard/pendingTask/TaskBrief/TaskBrief';
import SingleCoursePage from './components/MenteeDashboard/courses/SingleCoursePage';
import UserProfile from './components/MenteeDashboard/userProfile/userProfile';

import MenteeList from './components/MentorDashbord/Mentees/MenteeList';
import MenteeProfile from './components/MentorDashbord/Mentees/MenteeProfile';

const checkAuth = () => {
  const token = localStorage.getItem('codeclan_token');

  if (!token) return false;

  try {
    const { exp } = decode(token);

    if (exp < new Date().getTime() / 1000) {
      return false;
    }
  } catch (e) {
    return false;
  }
  return true;
};

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      checkAuth() ? (
        <Component {...props} />
      ) : (
        // <Redirect to={{ pathname: '/login' }} />
        window.location.replace('/login')
      )
    }
  />
);

// const location = useLocation();
export const BaseRouter = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route path="/register/" component={Signup} />
    <Route path="/login/" component={LoginForm} />
    <Route path="/form/" component={SignupForm} />
    <Route path="/email-verification-sent/" component={EmailConfirmationSent} />
    <Route path="/confirm-email/" component={ConfirmEmail} />
    <Route path="/forgotpass" component={ForgotPassword} />
  </Switch>
);

export const DashboardRouter = ({ location }) => (
  <Switch location={location} key={location.pathname}>
    <PrivateRoute exact path="/dashboard" component={Dashboard} />

    <PrivateRoute
      exact
      path="/dashboard/pending-task"
      component={PendingTasksPage}
    />

    <PrivateRoute
      exact
      path="/dashboard/pending-task/:id"
      component={TaskBrief}
    />
    <PrivateRoute
      exact
      path="/dashboard/pending-task/submit/:id"
      component={SubmitTask}
    />
    <PrivateRoute exact path="/dashboard/track" component={TrackList} />
    <PrivateRoute
      path="/dashboard/track/:trackName/:trackId"
      component={CoursesList}
    />
    <PrivateRoute
      path="/dashboard/course/:courseTitle/:courseId"
      component={SingleCoursePage}
    />
    <PrivateRoute
      exact
      path="/dashboard/mentee/mentor/"
      component={MentorDetails}
    />
    <PrivateRoute
      exact
      path="/dashboard/mentee/profile"
      component={UserProfile}
    />
  </Switch>
);

export const MentorRouter = () => (
  <Switch>
    <PrivateRoute
      exact
      path="/dashboard/mentor/mentees"
      component={MenteeList}
    />
    <PrivateRoute
      exact
      path="/dashboard/mentor/mentee/:userID"
      component={MenteeProfile}
    />
  </Switch>
);

export default BaseRouter;
