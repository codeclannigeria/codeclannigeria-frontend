import React, { useState, useEffect } from 'react';
import { Upload, Modal, message, Col, Row } from 'antd';
import ImgCrop from 'antd-img-crop';
import EditProfileStyled from './EditProfileStyled';
import { useDispatch } from 'react-redux';
import { getUserProfileApi } from '../../../state/user/userActionCreator';
// import {  } from 'react';

const ProfileImageUpload = ({ visible, name, photoUrl, onCreate }) => {
  const [fileList, setFileList] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    setFileList([
      {
        uid: '-1',
        name,
        status: 'done',
        url: photoUrl,
      },
    ]);
  }, [name, photoUrl]);

  const onChange = ({ fileList: newFileList, file }) => {
    setFileList(newFileList);
    if (file.status !== 'uploading') {
      console.log(file, fileList);
    }
    if (file.status === 'done') {
      message.success(`${file.name} file uploaded successfully`);
      dispatch(getUserProfileApi());
    } else if (file.status === 'error') {
      message.error(`${file.name} file upload failed.`);
    }
  };

  // const handleOk = async file => {
  //   try {
  //     console.log({ fileList });

  //     const res = await codeClanApi.post(
  //       'profile/upload_profile_photo',
  //       {
  //         file: file,
  //       },
  //       { headers: { 'Content-Type': 'multipart/form-data' } }
  //     );
  //     console.log(res);
  //   } catch (error) {
  //     console.log({ error });
  //   }
  // };

  const onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };
  const beforeUpload = file => {
    const isJpgOrPng =
      file.type === 'image/jpeg' ||
      file.type === 'image/jpg' ||
      file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error({
        content: 'Only JPG or PNG files are supported',
        key: 'updatable',
      });
    }
    const isLessThan5M = file.size / 1024 / 1024 < 5;
    if (!isLessThan5M) {
      message.error({
        content: "That's way too large! Try using something smaller than 5MB",
        key: 'updatable',
      });
    }
    return isJpgOrPng && isLessThan5M;
  };
  return (
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
          Edit your profile picture
        </p>
      }
      onCancel={onCreate}
      // confirmLoading={}
      onOk={onCreate}
    >
      <EditProfileStyled>
        <Row>
          <Col span={24}>
            <ImgCrop rotate>
              <Upload
                className="ant-upload-picture-card-wrapper"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignContent: 'center',
                  padding: '2rem',
                }}
                // action={handleOk}
                listType="picture-card"
                fileList={fileList}
                onChange={onChange}
                onPreview={onPreview}
                beforeUpload={beforeUpload}
                action={
                  'https://codeclannigeria-api.herokuapp.com/api/profile/upload_profile_photo'
                }
                headers={{
                  Authorization: `Bearer ${localStorage.getItem(
                    'codeclan_token'
                  )}`,
                }}
                progress={{
                  strokeColor: {
                    '0%': '#108ee9',
                    '100%': '#87d068',
                  },
                  strokeWidth: 3,
                  format: percent => `${parseFloat(percent.toFixed(2))}%`,
                }}
              >
                {fileList.length < 1 && '+ Upload'}
              </Upload>
            </ImgCrop>
          </Col>
        </Row>
      </EditProfileStyled>
    </Modal>
  );
};

export default ProfileImageUpload;
