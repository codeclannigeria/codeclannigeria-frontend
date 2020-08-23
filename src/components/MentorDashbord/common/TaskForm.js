import React, { useEffect } from 'react';
import { Modal, Form, Input, message } from 'antd';
import { connect } from 'react-redux';
import { gradeTaskAction } from '../../../state/tasks/tasksActionCreator';
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

  useEffect(() => {
    console.log(initialData);
  }, []);

  useEffect(() => {
    if (error) {
      message.error(errResponse);
    }
  }, [error]);

  useEffect(() => {
    if (!loading && !error && gradeTask === 'success') {
      message.success('Profile succesfully updated');
      onCreate();
    }
  }, [error, loading]);

  return (
    <>
      <Modal
        okText="Create"
        visible={visible}
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then(values => {
              form.resetFields();
              onCreate(values);
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
            <Input readOnly type="textarea" />
          </Form.Item>
          <Form.Item name="mentorComment" label="Your Comment">
            <Input type="textarea" />
          </Form.Item>
          <Form.Item name="gradePercentage" label="Grade percentage">
            <Input type="number" />
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
