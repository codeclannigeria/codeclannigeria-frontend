import React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

function EnrollmentStatus({ title, status, prev }) {
  const failure = {
    title: `Enrollment in to ${title} failed`,
    subtitle: 'Kindly try again',
  };
  const success = {
    title: `Successfully Enrolled to the ${title} track`,
    subtitle:
      'A mentor will be assigned to you, and he/she will contact you soon',
  };

  return (
    // <DisplayEnrollmentStatus status={}/>
    <Result
      status={status}
      title={status === 'success' ? success.title : failure.title}
      subTitle={status === 'success' ? success.subtitle : failure.subtitle}
      extra={[
        <Button type="primary" key="console">
          {status === 'success' ? (
            <Link to="/dashboard">Go to dashboard</Link>
          ) : (
            <span onClick={() => prev()}>Go back</span>
          )}
        </Button>,
      ]}
    />
  );
}

export default EnrollmentStatus;
