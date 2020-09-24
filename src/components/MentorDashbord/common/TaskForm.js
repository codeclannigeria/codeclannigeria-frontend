import React, { useEffect, useState } from 'react';
import { Modal, Form, Input, message, InputNumber } from 'antd';
import { connect } from 'react-redux';
import { gradeTaskAction } from '../../../state/tasks/tasksActionCreator';
const { TextArea } = Input;
function TaskForm({
  visible,
  onCreate,
  onCancel,
  initialData,
  gradeTask,
  loading,
  error,
  errResponse,
}) {
  const [form] = Form.useForm();

  const handleFormSubmit = async values => {
    console.log(values);
    // if (error) {
    //   message.error(errResponse);
    // }
  };

  const [commentLimit, setcommentLimit] = useState(0);

  const handleCommentLimit = e => {
    setcommentLimit(e.target.value.length);
  };

  useEffect(() => {
    if (error) {
      message.error(errResponse);
    }
  }, [error]);

  useEffect(() => {
    if (!loading && !error && gradeTask === 'success') {
      message.success('Grading success');
      onCancel();
    }
  }, [error, loading, gradeTask, onCancel]);

  useEffect(() => {
    if (initialData && initialData.mentorComment) {
      setcommentLimit(initialData.mentorComment.length);
    }
  }, [initialData]);

  return (
    <>
      <Modal
        okText="Grade"
        visible={visible}
        cancelText="Cancel"
        onCancel={onCancel}
        confirmLoading={loading}
        onOk={() => {
          form
            .validateFields()
            .then(values => {
              form.resetFields();

              onCreate(values, initialData);
            })
            .catch(info => {
              console.log('Validate Failed:', info);
            });
        }}
      >
        <Form
          form={form}
          initialValues={initialData}
          layout="vertical"
          name="taskForm_in_modal"
        >
          <Form.Item name="taskUrl" label="Task Url">
            <Input readOnly />
          </Form.Item>
          <Form.Item name="menteeComment" label="Mentee Comment">
            <TextArea rows={4} readOnly />
          </Form.Item>
          <p className="d-flex justify-content-end m-0">
            Char count: {`${commentLimit}/1024`}
          </p>

          <Form.Item
            name="mentorComment"
            label="Your Comment"
            rules={[
              {
                required: true,
                message: 'Please input your comment',
              },
            ]}
          >
            <TextArea onChange={handleCommentLimit} rows={4} maxlength={1024} />
          </Form.Item>
          <Form.Item
            name="gradePercentage"
            label="Grade percentage"
            rules={[
              {
                required: true,
                message: 'Please enter a grade',
              },
            ]}
          >
            <InputNumber
              defaultValue={0}
              min={0}
              max={100}
              formatter={value => `${value}%`}
              parser={value => value.replace('%', '')}
            />
          </Form.Item>
          <Form.Item name="id">
            <Input type="hidden" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

const mapStateToProps = store => {
  const { loading, data, error, errResponse, gradeTask } = store.tasks;
  return {
    loading,
    data,
    error,
    errResponse,
    gradeTask,
  };
};

const mapDispatchToProps = { gradeTaskAction };

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
