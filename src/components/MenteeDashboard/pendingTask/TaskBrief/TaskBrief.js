import React, { useEffect, useState, useCallback } from 'react';
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

function TaskBrief(props) {
  const { id } = props.match.params;
  let { query } = props.location;
  const dispatch = useDispatch();
  const task = useSelector(state => state.tasks);
  const track = useSelector(state => state.tracks);
  const course = useSelector(state => state.courses);

  const fetchData = useCallback(async () => {
    await dispatch(getSingleTaskAction(id));
    // await dispatch()
  }, []);

  const a =
    'Topic: The Internet<br> <br> Video Resources<br> <br> <a href=https://www.youtube.com/watch?v=Dxcc6ycZ73M&list=PLkZYeFmDuaN21nQjzE4RLLNccK_YP0P0_&index=2&t=0s>https://www.youtube.com/watch?v=Dxcc6ycZ73M&list=PLkZYeFmDuaN21nQjzE4RLLNccK_YP0P0_&index=2&t=0s </a><br> <br> https://www.youtube.com/watch?v=ZhEf7e4kopM&list=PLkZYeFmDuaN21nQjzE4RLLNccK_YP0P0_&index=3&t=0s<br> <br> https://www.youtube.com/watch?v=5o8CwafCxnU&list=PLkZYeFmDuaN21nQjzE4RLLNccK_YP0P0_&index=4&t=0s<br> <br> https://www.youtube.com/watch?v=AYdF7b3nMto&list=PLkZYeFmDuaN21nQjzE4RLLNccK_YP0P0_&index=5&t=0s<br> <br> https://www.youtube.com/watch?v=kBXQZMmiA4s&list=PLkZYeFmDuaN21nQjzE4RLLNccK_YP0P0_&index=6&t=0s<br> <br> https://www.youtube.com/watch?v=ZghMPWGXexs&list=PLkZYeFmDuaN21nQjzE4RLLNccK_YP0P0_&index=7&t=0s<br> <br> https://www.youtube.com/watch?v=AuYNXgO_f3Y&list=PLkZYeFmDuaN21nQjzE4RLLNccK_YP0P0_&index=8&t=0s<br> <br> <br> <br> Task:<br> <br> Write an Article on What you have learnt so far. Does the Internet fascinate or intrigue you. One of the best ways to learn about a thing is to write about it.<br> <br> Submission Guideline<br> <br> Create a blog on hashnode.com then post your article on it. Submit with a link to the article.';

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
        <>
          <h2>{task.singleTask.title} </h2>
          <Tag color="#1f59bb">
            {track.singleTrack ? track.singleTrack.title : null}
          </Tag>

          <div classNameName="task-details mt-3">
            <h4>Task Brief</h4>
            {task.singleTask ? (
              <Interweave content={task.singleTask.description} />
            ) : (
              <Spin />
            )}
          </div>
          {task.singleTask.course ? (
            <div>
              <p>For this Task, ensure you check out</p>
              {course.singleCourse ? (
                <a
                  href={course.singleCourse.playlistUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {course.singleCourse.title}
                </a>
              ) : null}
            </div>
          ) : null}
        </>
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
      <div className="cta_container">
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
