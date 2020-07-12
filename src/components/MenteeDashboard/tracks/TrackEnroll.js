import React, { useState, useEffect } from 'react';
import { Steps, Button, message, Modal } from 'antd';
import { connect } from 'react-redux';
import { getTracksAction } from '../../../state/tracks/tracksActionCreator';
import TrackCard from './TracksEnrollCard';
import CustomLoader from '../../common/Spinner/CustomLoader';
import tempCourseLogo from '../../assets/image/dashboard/science_image.png';
import TrackEnrollStyled from './TrackEnrollStyled';
const { Step } = Steps;

const steps = [
  {
    title: 'First',
    content: 'First-content',
  },
  {
    title: 'Second',
    content: 'Second-content',
  },
  {
    title: 'Last',
    content: 'Last-content',
  },
];

function TrackEnroll({
  visible,
  getTracksAction,
  loading,
  error,
  errResponse,
  data,
  onCancel,
}) {
  const [current, setCurrent] = useState(0);

  function next() {
    const newCurrent = current + 1;
    setCurrent(newCurrent);
  }

  function prev() {
    const newCurrent = current - 1;
    setCurrent(newCurrent);
  }
  const { items } = data;

  useEffect(() => {
    getTracksAction();
  }, []);

  return (
    <TrackEnrollStyled>
      <Modal visible={visible} onCancel={onCancel} className="custom-ant-modal">
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>

        <div className="tracks-card">
          {current === 0 && items
            ? items.map((item, idx) => (
                <TrackCard
                  next={() => next()}
                  data={item}
                  key={idx}
                  logo={tempCourseLogo}
                />
              ))
            : null}
          {current === 1 && items
            ? items.map((item, idx) => (
                <TrackCard
                  next={() => next()}
                  data={item}
                  key={idx}
                  logo={tempCourseLogo}
                />
              ))
            : null}
        </div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success('Processing complete!')}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
      </Modal>
    </TrackEnrollStyled>
  );
}

const mapStateToProps = store => {
  const { loading, data, error, errResponse } = store.tracks;
  return {
    loading,
    data,
    error,
    errResponse,
  };
};

const mapDispatchToProps = { getTracksAction };

export default connect(mapStateToProps, mapDispatchToProps)(TrackEnroll);
