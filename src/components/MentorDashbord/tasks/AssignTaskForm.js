import React from 'react';
import { Select, Modal, Form, Typography } from 'antd';

function AssignTaskForm({ onCancel, onCreate, visible }) {
  const { Option } = Select;
  const [form] = Form.useForm();

  const config = {
    rules: [
      {
        type: 'object',
        required: true,
        message: 'Please select time!',
      },
    ],
  };

  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
    );
  }

  // function handleChange(value) {
  //   console.log(`selected ${value}`);
  // }

  return (
    <React.Fragment>
      <Modal
        visible={visible}
        okText="Done"
        cancelText="Cancel"
        onCancel={onCancel}
        // onOk={() => {
        //   form
        //     .validateFields()
        //     .then(values => {
        //       form.resetFields();
        //       //   onCreate(values);
        //     })
        //     .catch(info => {
        //       console.log('Validate Failed:', info);
        //     });
        // }}
      >
        {/* <Form form={form} layout="vertical" name="assignTaskForm_in_modal">
          <Form.Item
            name="task"
            label="Task"
            rules={[
              {
                required: true,
                message: 'Please select task',
              },
            ]}
          >
            <Select
              mode="multiple"
              style={{ width: '100%' }}
              placeholder="Please select"
              defaultValue={['a10', 'c12']}
              onChange={handleChange}
            >
              {children}
            </Select>
            <Input />
          </Form.Item>
          <Form.Item name="extra_instructions" label="Extra Instructions">
            <Input type="textarea" />
          </Form.Item>
          <Form.Item name="deadline" label="Deadline" {...config}>
            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
          </Form.Item>
        </Form> */}

        <Typography>Task 1: Google the meaning og google</Typography>
        <Typography>
          Desc: lorem10lorem10lorem10lorem10lorem10lorem10lorem10
        </Typography>
        <Typography>Deadline: 10, fasanya alago</Typography>
      </Modal>
    </React.Fragment>
  );
}

export default AssignTaskForm;
