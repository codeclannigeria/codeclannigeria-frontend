import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import Modal from 'antd/lib/modal/Modal';
import { Descriptions } from 'antd';
import { getTaskSubmissionAction } from '../../../state/tasks/tasksActionCreator';
import CustomLoader from '../../common/Spinner/CustomLoader';
export const GradingModal = ({ visible, onCancel, onCreate, taskId }) => {
  const tasks = {
    updatedAt: '2020-08-23T00:11:04.963Z',
    createdAt: '2020-08-23T00:11:04.963Z',
    menteeComment: `lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,

    mentorComment: `lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,

    taskUrl: 'string',
    gradePercentage: 0,
    id: 'string',
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if (taskId && visible) {
      dispatch(getTaskSubmissionAction(taskId));
    }
  }, [dispatch, taskId, visible]);

  const task = useSelector(state => state.tasks.singleMenteeSubmittedTask);

  return (
    <>
      <Modal visible={visible} cancelText="Done" onCancel={onCancel}>
        {task.data ? (
          <Descriptions
            title={`Task ${taskId} `}
            size="small"
            layout="vertical"
            bordered={true}
            // column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
          >
            <Descriptions.Item label="Task Id">
              #{task.data.id}
            </Descriptions.Item>
            <Descriptions.Item label="Task Url">
              <a href={task.taskUrl}>{task.data.taskUrl}</a>
            </Descriptions.Item>
            <Descriptions.Item label="Grade %">
              {task.data.gradePercentage} %
            </Descriptions.Item>
            <Descriptions.Item label="Your Comment" span={3}>
              {task.data.menteeComment}
            </Descriptions.Item>
            <Descriptions.Item label="Mentor Comment" span={3}>
              {task.data.mentorComment}
            </Descriptions.Item>
          </Descriptions>
        ) : null}

        {task.loading ? <CustomLoader /> : null}
      </Modal>
    </>
  );
};

// "items": {
//   "updatedAt": "2020-08-23T00:11:04.963Z",
//   "createdAt": "2020-08-23T00:11:04.963Z",
//   "menteeComment": "string",
//   "mentorComment": "string",
//   "taskUrl": "string",
//   "gradePercentage": 0,
//   "id": "string"
// },

export default GradingModal;
