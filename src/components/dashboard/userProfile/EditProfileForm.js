import React, { useState } from 'react';
import EditProfileStyled from './EditProfileStyled';
import { Button, Modal, Form, Input, InputNumber } from 'antd';

const EditProfileForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <EditProfileStyled>
      <Modal
        visible={visible}
        title={
          <p
            style={{
              fontSize: 24,
              lineHeight: '36px',
              color: '#353a45',
              margin: 0,
            }}
          >
            Edit your profile
          </p>
        }
        okText="Edit"
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
          layout="vertical"
          name="form_in_modal"
          initialValues={{
            modifier: 'public',
          }}
          size={'large'}
        >
          <Form.Item
            name="firstName"
            label="First Name"
            rules={[
              {
                required: true,
                message: 'Please input your first name!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[
              {
                required: true,
                message: 'Please input your last name!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="phoneNumber" label="Phone Number">
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>
        </Form>
      </Modal>
    </EditProfileStyled>
  );
};
export default EditProfileForm;
