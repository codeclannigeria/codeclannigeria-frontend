import React from 'react';
import { Card } from 'antd';
import {
  GithubOutlined,
  EllipsisOutlined,
  TwitterOutlined,
} from '@ant-design/icons';

function SingleMentorCard({ mentor }) {
  console.log(mentor);
  const { firstName, lastName, city, country, photoUrl } = mentor;
  return (
    <>
      <Card
        style={{ width: 'auto' }}
        cover={
          <img
            alt={firstName}
            src={
              photoUrl ||
              'https://cdn.imgbin.com/3/1/2/imgbin-united-states-computer-icons-desktop-free-high-quality-person-icon-default-profile-2aZui7ZnCtjpD6FkTi5Cz55r4.jpg'
            }
          />
        }
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
