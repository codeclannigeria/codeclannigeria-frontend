import React from 'react';
import { Card } from 'antd';
import {
  GithubOutlined,
  EllipsisOutlined,
  TwitterOutlined,
} from '@ant-design/icons';

function SingleMentorCard({ mentor }) {
  const { firstName, lastName, city, country, photoUrl } = mentor;
  return (
    <>
      <Card
        style={{ width: 'auto' }}
        cover={<img alt={firstName} src={photoUrl} />}
        actions={[
          <GithubOutlined key="github" />,
          <TwitterOutlined key="twitter" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <h3>
          {firstName} {lastName}
        </h3>
        <p>
          From {city}, {country}
        </p>
      </Card>
    </>
  );
}

export default SingleMentorCard;
