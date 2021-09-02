import React from 'react';
import { Card, Tag } from 'antd';
// import {
//   GithubOutlined,
//   EllipsisOutlined,
//   TwitterOutlined,
// } from '@ant-design/icons';

function SingleMentorCard({ mentor }) {
  const {
    firstName,
    lastName,
    city,
    country,
    photoUrl,
    technologies,
    description,
  } = mentor;
  return (
    <React.Fragment>
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
        // actions={[
        //   <GithubOutlined key="github" />,
        //   <TwitterOutlined key="twitter" />,
        //   <EllipsisOutlined key="ellipsis" />,
        // ]}
      >
        <h3>
          {firstName} {lastName}
        </h3>
        <p>
          <span>{city || country ? ` From ${city}, ${country}` : null}</span>
        </p>
        <p>{description}</p>
        <p>Technologies:</p>
        {technologies
          ? technologies.map((tech, key) => (
              <Tag color={'blue'} style={{ marginRight: 3 }}>
                {tech}
              </Tag>
            ))
          : null}
      </Card>
    </React.Fragment>
  );
}

export default SingleMentorCard;
