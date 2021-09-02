import React, { useEffect, useCallback } from 'react';
import DashboardLayout from '../../../common/DashboardLayout';
import TaskBriefStyled from './TaskBriefStyled';
import { Link } from 'react-router-dom';
import { Tag, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleTaskAction } from '../../../../state/tasks/tasksActionCreator';
import { getSingleTrack } from '../../../../state/tracks/tracksActionCreator';
import CustomLoader from '../../../common/Spinner/CustomLoader';
import { getSingleCourse } from '../../../../state/courses/coursesActionCreator';
import Interweave from 'interweave';
import he from 'he';
function TaskBrief(props) {
  const { id } = props.match.params;
  let { query } = props.location;
  const dispatch = useDispatch();
  const task = useSelector(state => state.tasks);
  const track = useSelector(state => state.tracks);
  const course = useSelector(state => state.courses);

  const fetchData = useCallback(async () => {
    dispatch(getSingleTaskAction(id));
    // await dispatch()
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (task.singleTask) {
      dispatch(getSingleTrack(task.singleTask.track));

      if (task.singleTask.course) {
        dispatch(getSingleCourse(task.singleTask.course));
      }
    }
  }, [task]);

  return (
    <TaskBriefStyled>
      <Link
        to="/dashboard/pending-task"
        className="btn btn-outline-primary btn-sm mb-3 "
      >
        <i className="fas fa-arrow-left"></i> Back to Tasks
      </Link>
      {task.singleTask ? (
        <React.Fragment>
          <h2>{task.singleTask.title} </h2>
          <Tag color="#1f59bb">
            {track.singleTrack ? track.singleTrack.title : null}
          </Tag>

          <div className="task-details mt-3">
            <h4>Task Brief</h4>
            {task.singleTask ? (
              <React.Fragment>
                <Interweave content={he.decode(task.singleTask.description)} />
              </React.Fragment>
            ) : (
              <Spin />
            )}
            {/* {task.singleTask ? {}: <Spin />} */}
          </div>
          {task.singleTask.course ? (
            <div>
              <h2>
                <i className="fas fa-book-reader"></i> Course(s) Needed for this
                task
              </h2>
              <p>For this Task, ensure you the check out course(s) below</p>
              👇👇👇
              <div>
                {course.singleCourse ? (
                  <a
                    href={course.singleCourse.playlistUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="block"
                  >
                    {course.singleCourse.title}
                  </a>
                ) : null}
              </div>
            </div>
          ) : null}
        </React.Fragment>
      ) : (
        <CustomLoader />
      )}
      {/*
      <p>
        You can use any tools you like to help you complete the challenge. So
        if you've got something you'd like to practice, feel free to give it a
        go.
      </p>
      <p>
        The only JavaScript you'll need for this challenge is to initiate the
        share options when someone clicks the share icon.
      </p>

      <p>Your users should be able to:</p>

      <ul>
        <li>
          View the optimal layout for the component depending on their
          device's screen size
        </li>

        <li>
          See the social media share links when they click the share icon
        </li>
      </ul>

      <p>
        Download the starter code and go through the README.md file. This will
        provide further details about the project. The style-guide.md file is
        where you'll find colors, fonts, etc.
      </p>

      <p>
        Want some support on the challenge? Join our Slack community and ask
        questions in the help channel.
      </p>

    */}
      <div className="cta_container mt-4">
        {/* <button classNameName="btn btn-outline-secondary">
        Download starter files
      </button> */}
        <Link
          to={`/dashboard/pending-task/submit/${id}`}
          className="btn btn-outline-primary mr-0"
        >
          Submit Task
        </Link>
      </div>
    </TaskBriefStyled>
  );
}

export default DashboardLayout(TaskBrief);
