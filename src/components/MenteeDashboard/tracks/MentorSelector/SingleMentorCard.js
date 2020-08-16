import React from 'react';
import { Card } from 'antd';
import {
  GithubOutlined,
  EllipsisOutlined,
  TwitterOutlined,
} from '@ant-design/icons';

function SingleMentorCard() {
  return (
    <>
      <Card
        style={{ width: 'auto' }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <GithubOutlined key="github" />,
          <TwitterOutlined key="twitter" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <h3>Onasanya Babatunde</h3>
        <p>Developer at Google</p>
      </Card>
    </>
  );
}

export default SingleMentorCard;
