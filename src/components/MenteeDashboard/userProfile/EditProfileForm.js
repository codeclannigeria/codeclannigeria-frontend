import React, { useEffect, useState } from 'react';
import EditProfileStyled from './EditProfileStyled';
import {
  Modal,
  Form,
  Input,
  message,
  Row,
  Col,
  DatePicker,
  Select,
} from 'antd';
import moment from 'moment';
import { connect } from 'react-redux';
import { editUserProfileApi } from '../../../state/user/userActionCreator';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import TextArea from 'antd/lib/input/TextArea';
const { Option } = Select;
const EditProfileForm = ({
  visible,
  onCreate,
  onCancel,
  initialData,
  editUserProfileApi,
  loading,
  error,
  errResponse,
  editUser,
}) => {
  const [form] = Form.useForm();

  const handleFormSubmit = async values => {
    console.log(values);

    values.technologies = [];
    // values.description = '';
    values.dob = values.dob._d.toISOString();
    if (!values.phoneNumber.startsWith('+')) {
      values.phoneNumber = `+${values.phoneNumber}`;
    }
    await editUserProfileApi(values);
    // if (error) {
    //   message.error(errResponse);
    // }
  };

  // useEffect(() => {
  //   if (error) {
  //     message.error(errResponse);
  //   }
  // }, [error]);

  useEffect(() => {
    if (!loading && !error && editUser === 'success') {
      message.success('Profile succesfully updated');
      onCreate();
    }
  }, [error, loading]);

  const [country, setCountry] = useState();
  const [customInitialData, setCustomInitialData] = useState();
  useEffect(() => {
    if (initialData.country) {
      setCountry(initialData.country);
    } else {
      setCountry('');
    }
    const dateObj = new Date(initialData.dob);
    if (!initialData.phoneNumber) {
      initialData.phoneNumber = '';
    }
    initialData.dob = moment(dateObj);
    setCustomInitialData(initialData);
  }, []);
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
        okText="Update Profile"
        confirmLoading={loading}
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then(values => {
              // form.resetFields();
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
          initialValues={customInitialData}
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

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={12}>
              <Form.Item
                name="country"
                label="Country"
                rules={[
                  {
                    required: true,
                    message: 'Please select your country',
                  },
                ]}
              >
                <CountryDropdown
                  value={initialData.country}
                  onChange={value => setCountry(value)}
                  style={{ width: '100%' }}
                  className="custom-select"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="city"
                label="State"
                rules={[
                  {
                    required: true,
                    message: 'Please select your state',
                  },
                ]}
              >
                <RegionDropdown
                  country={country}
                  value={initialData.city}
                  style={{ width: '100%' }}
                  className="custom-select"
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={12}>
              <Form.Item
                name="phoneNumber"
                label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your phone number',
                  },
                ]}
              >
                <PhoneInput
                  style={{ width: '100%' }}
                  country={'ng'}
                  value={initialData.phoneNumber}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="dob"
                label="Date Of Birth"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please select your Date of Birth',
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      const today = new Date();
                      const birthDate = new Date(value); //format is mm.dd.yyyy
                      const age = today.getFullYear() - birthDate.getFullYear();
                      console.log({ age });
                      if (age > 6) {
                        return Promise.resolve();
                      }

                      return Promise.reject('Too young to be on the platform');
                    },
                  }),
                ]}
              >
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={12}>
              <Form.Item
                name="gender"
                label="Gender"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please select your Date of Birth',
                  },
                ]}
              >
                <Select allowClear>
                  <Option value="MALE">Male</Option>
                  <Option value="FEMALE">Female</Option>
                  <Option value="UNSPECIFIED">Prefer not to say</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name="description"
            label="About you"
            rules={[
              {
                required: true,
                message: 'Please write a brief description about yourself',
              },
            ]}
          >
            <TextArea maxLength={'128'} />
          </Form.Item>
        </Form>
      </Modal>
    </EditProfileStyled>
  );
};

const mapStateToProps = store => {
  const { editUser, loading, data, error, errResponse } = store.user;
  return {
    loading,
    data,
    error,
    errResponse,
    editUser,
  };
};

const mapDispatchToProps = { editUserProfileApi };

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileForm);
