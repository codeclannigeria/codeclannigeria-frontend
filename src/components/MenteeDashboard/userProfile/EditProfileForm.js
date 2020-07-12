import React, { useState } from 'react';
import EditProfileStyled from './EditProfileStyled';
import { Button, Modal, Form, Input, InputNumber, message } from 'antd';
import { connect } from 'react-redux';
import { editUserProfileApi } from '../../../state/user/userActionCreator';

const EditProfileForm = ({
  visible,
  onCreate,
  onCancel,
  initialData,
  editUserProfileApi,
  loading,
  error,
  errResponse,
}) => {
  const [form] = Form.useForm();

  const handleFormSubmit = async values => {
    values.technologies = [''];
    values.description = '';
    await editUserProfileApi(values);
    if (error) {
      message.error(errResponse);
    }
    onCreate(values);
  };
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
        confirmLoading={loading && error}
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then(values => {
              form.resetFields();
              // onCreate(values);
              handleFormSubmit(values);
            })
            .catch(info => {
              // console.log('Validate Failed:', info);
            });
        }}
      >
        <Form
          form={form}
          layout="vertical"
          name="form_in_modal"
          initialValues={initialData}
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
            <Input
              type="number"
              addonBefore="+234"
              // formatter={value => `+234 ${value}`}
              // formatter={value => `+234${value}`}
              // parser={value => value.replace('+234', '')}
              style={{ width: '100%' }}
            />
          </Form.Item>
        </Form>
      </Modal>
    </EditProfileStyled>
  );
};

const mapStateToProps = store => {
  const { loading, data, error, errResponse } = store.user;
  return {
    loading,
    data,
    error,
    errResponse,
  };
};

const mapDispatchToProps = { editUserProfileApi };

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileForm);
