import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'antd/lib/modal/Modal';
import { Descriptions } from 'antd';
import { getTaskSubmissionAction } from '../../../state/tasks/tasksActionCreator';
import CustomLoader from '../../common/Spinner/CustomLoader';
export const GradingModal = ({ visible, onCancel, onCreate, taskId }) => {
  

  const dispatch = useDispatch();
  useEffect(() => {
    if (taskId && visible) {
      dispatch(getTaskSubmissionAction(taskId));
    }
  }, [dispatch, taskId, visible]);

  const task = useSelector(state => state.tasks.singleMenteeSubmittedTask);

  return (
    <React.Fragment>
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
              <a href={task.data.taskUrl}>{task.data.taskUrl}</a>
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
    </React.Fragment>
  );
};


export default GradingModal;
