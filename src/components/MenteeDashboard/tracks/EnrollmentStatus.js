import React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

function EnrollmentStatus({ title }) {
  return (
    <Result
      status="success"
      title={`Successfully Enrolled to the ${title} track`}
      subTitle="A mentor will be assigned to you, and he/she will contact you soon"
      extra={[
        <Button type="primary" key="console">
          <Link to="/dashboard">Go to dashboard</Link>
        </Button>,
      ]}
    />
  );
}

export default EnrollmentStatus;
