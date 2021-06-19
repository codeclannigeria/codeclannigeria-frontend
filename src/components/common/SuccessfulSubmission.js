import React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

export default function SuccessfulSubmission({ data }) {
  const { header, description, backLink } = data;
  return (
    <React.Fragment>
      <Result
        status="success"
        title={header}
        subTitle={description}
        extra={[
          <Button type="primary" key="console">
            <Link to={backLink} style={{ textDecoration: 'none' }}>
              Go Back To Tasks
            </Link>
          </Button>,
          //   <Button key="buy">Buy Again</Button>,
        ]}
      />
      ,
    </React.Fragment>
  );
}
