import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Signup from './components/auth/Signup';
import Dashboard from './components/dashboard';
import Landing from './components/landing';
import LoginForm from './components/auth/Login';
import SignupForm from './components/auth/Form';
import EmailConfirmationSent from './components/auth/EmailConfirmationSent';
import ForgotPassword from './components/auth/ForgotPassword';
import ConfirmEmail from './components/auth/ConfirmEmail';
import decode from 'jwt-decode';
import CoursesList from './components/dashboard/courses/CoursesList';
import TrackList from './components/dashboard/tracks/TrackList';
import MentorDetails from './components/dashboard/mentorInfo/mentorDetails';
import SubmitTask from './components/dashboard/pendingTask/SubmitTask';
import PendingTasksPage from './components/dashboard/pendingTask/PendingTasksPage';
import { AnimatePresence } from 'framer-motion';
import TaskBrief from './components/dashboard/pendingTask/TaskBrief/TaskBrief';
import SingleCoursePage from './components/dashboard/courses/SingleCoursePage';

const checkAuth = () => {
  const token = localStorage.getItem('codeclan_token');
  // const refreshToken

  if (!token) return false;

  try {
    console.log(decode(token));

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
        <Redirect to={{ pathname: '/login' }} />
      )
    }
  />
);

// const location = useLocation();
export const BaseRouter = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/register/" component={Signup} />
    <Route path="/login/" component={LoginForm} />
    <Route path="/form/" component={SignupForm} />
    <Route path="/email-verification-sent/" component={EmailConfirmationSent} />
    <Route path="/confirm-email/" component={ConfirmEmail} />
    <Route path="/forgotpass" component={ForgotPassword} />
  </Switch>
);

export const DashboardRouter = ({ location }) => (
  <AnimatePresence>
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
      <PrivateRoute path="/dashboard/mentor/" component={MentorDetails} />
    </Switch>
  </AnimatePresence>
);

export default BaseRouter;
