import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Signup from './components/auth/Signup';
import Dashboard from './components/MenteeDashboard/MenteeDashboard';
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
import TaskBrief from './components/MenteeDashboard/pendingTask/TaskBrief/TaskBrief';
import SingleCoursePage from './components/MenteeDashboard/courses/SingleCoursePage';

import MenteeList from './components/MentorDashbord/Mentees/MenteeList';
import MenteeProfile from './components/MentorDashbord/Mentees/MenteeProfile';
import MentorUserProfile from './components/MentorDashbord/Profile/MentorUserProfile';
import MenteeUserProfile from './components/MenteeDashboard/userProfile/MenteeUserProfile';
import SubmissionList from './components/MentorDashbord/Mentees/SubmissionList';

const checkAuth = () => {
  const token = localStorage.getItem('codeclan_token');

  if (!token) return false;

  try {
    const { exp, role } = decode(token);
    console.log(role);

    if (exp < new Date().getTime() / 1000) {
      return false;
    }
    return role;
  } catch (e) {
    return false;
  }
};

export const MenteeRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      checkAuth() === 'MENTEE' || checkAuth() === 'ADMIN' ? (
        <Component {...props} />
      ) : (
        // <Redirect to={{ pathname: '/login' }} />
        window.location.replace('/login')
      )
    }
  />
);

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      checkAuth() === 'MENTEE' ||
      checkAuth() === 'ADMIN' ||
      checkAuth() === 'MENTOR' ? (
        <Component {...props} />
      ) : (
        // <Redirect to={{ pathname: '/login' }} />
        window.location.replace('/login')
      )
    }
  />
);

export const MentorRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      checkAuth() === 'MENTOR' || checkAuth() === 'ADMIN' ? (
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
    <MenteeRoute exact path="/dashboard" component={Dashboard} />

    <MenteeRoute
      exact
      path="/dashboard/pending-task"
      component={PendingTasksPage}
    />

    <MenteeRoute
      exact
      path="/dashboard/pending-task/:id"
      component={TaskBrief}
    />
    <MenteeRoute
      exact
      path="/dashboard/pending-task/submit/:id"
      component={SubmitTask}
    />
    <MenteeRoute exact path="/dashboard/track" component={TrackList} />
    <MenteeRoute
      path="/dashboard/track/:trackName/:trackId"
      component={CoursesList}
    />
    <MenteeRoute
      path="/dashboard/course/:courseTitle/:courseId"
      component={SingleCoursePage}
    />
    <MenteeRoute
      exact
      path="/dashboard/mentee/mentor/"
      component={MentorDetails}
    />
    <MenteeRoute
      exact
      path="/dashboard/mentee/profile"
      component={MenteeUserProfile}
    />
  </Switch>
);

export const MentorRouter = () => (
  <Switch>
    <MentorRoute
      exact
      path="/dashboard/mentor/mentees"
      component={MenteeList}
    />
    <MentorRoute
      exact
      path="/dashboard/mentor/mentee/:userID"
      component={MenteeProfile}
    />
    <MentorRoute
      exact
      path="/dashboard/mentor/profile"
      component={MentorUserProfile}
    />
    <MentorRoute
      exact
      path="/dashboard/mentor/tasks-submissions/"
      component={SubmissionList}
    />
  </Switch>
);

export default BaseRouter;
