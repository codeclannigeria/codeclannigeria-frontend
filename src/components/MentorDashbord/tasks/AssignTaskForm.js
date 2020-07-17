import React from 'react';
import { Select, Modal, Form, Input, DatePicker } from 'antd';

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

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <>
      <Modal
        visible={visible}
        okText="Assign"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then(values => {
              form.resetFields();
              //   onCreate(values);
            })
            .catch(info => {
              console.log('Validate Failed:', info);
            });
        }}
      >
        <Form form={form} layout="vertical" name="assignTaskForm_in_modal">
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
            {/* <Input /> */}
          </Form.Item>
          <Form.Item name="extra_instructions" label="Extra Instructions">
            <Input type="textarea" />
          </Form.Item>
          <Form.Item name="deadline" label="Deadline" {...config}>
            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default AssignTaskForm;
