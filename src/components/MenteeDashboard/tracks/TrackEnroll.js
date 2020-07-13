import React, { useState, useEffect } from 'react';
import { Steps, Button, message, Modal, Radio } from 'antd';
import { connect } from 'react-redux';
import {
  getTracksAction,
  userEnrollTrackAction,
} from '../../../state/tracks/tracksActionCreator';
import TrackCard from './TracksEnrollCard';
import CustomLoader from '../../common/Spinner/CustomLoader';
import tempCourseLogo from '../../assets/image/dashboard/science_image.png';
import TrackEnrollStyled from './TrackEnrollStyled';
import TracksEnrollStages from './TracksEnrollStages';
import { Popconfirm } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import codeClanApi from '../../../api/apiUtils';
import EnrollmentStatus from './EnrollmentStatus';

// import TrackEnrollCard from './TracksEnrollCard';
const { Step } = Steps;

const steps = [
  {
    title: 'Tracks',
    content: 'First-content',
  },
  {
    title: 'Stages',
    content: 'Second-content',
  },
  {
    title: 'Confirmation',
    content: 'Last-content',
  },
];

function TrackEnroll({
  visible,
  getTracksAction,
  loading,
  error,
  userEnrollTrackAction,
  errResponse,
  data,
  onCancel,
}) {
  const [current, setCurrent] = useState(0);

  const [trackId, setTrackId] = useState(null);
  const [enrollStatus, setEnrollStatus] = useState(null);

  function next() {
    const newCurrent = current + 1;
    setCurrent(newCurrent);
  }

  function prev() {
    const newCurrent = current - 1;
    setCurrent(newCurrent);
  }

  const handleSetTrackId = e => {
    setTrackId(e.target.value);
  };

  useEffect(() => {
    if (enrollStatus) {
      next();
    }
  }, [enrollStatus]);

  // const userEnrollTrackAction = async id => {
  //   try {
  //     const res = codeClanApi.post(`/tracks/${id}/enroll`);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleEnrollTrack = async id => {
    try {
      await userEnrollTrackAction(id);
      setEnrollStatus(true);
    } catch (error) {
      setEnrollStatus(false);
    }
    // next();
  };
  const { items } = data;

  useEffect(() => {
    getTracksAction();
  }, []);

  return (
    <TrackEnrollStyled>
      <Modal
        visible={visible}
        onCancel={onCancel}
        className="custom-ant-modal"
        footer={null}
        closable={false}
      >
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>

        {current === 0 && items ? (
          <Radio.Group onChange={handleSetTrackId} defaultValue={null}>
            <div className="tracks-card">
              {items.map((item, idx) => (
                <TrackCard
                  next={() => next()}
                  data={item}
                  key={idx}
                  logo={tempCourseLogo}
                  // handleSetTrackId={id (id)}
                />
              ))}
            </div>
          </Radio.Group>
        ) : null}
        {current === 1 ? <TracksEnrollStages id={trackId} /> : null}
        {current === 2 ? (
          <EnrollmentStatus
            status={enrollStatus ? 'Success' : 'error'}
            id={trackId}
            prev={() => prev()}
          />
        ) : null}

        <div className="steps-action">
          {current === 0 && (
            <Button type="primary" disabled={!trackId} onClick={() => next()}>
              Next
            </Button>
          )}
          {current === 1 && (
            <>
              <Button type="default" onClick={() => prev()}>
                Back
              </Button>

              <Popconfirm
                title="Are you sure？"
                onConfirm={() => handleEnrollTrack(trackId)}
                icon={<QuestionCircleOutlined style={{ color: 'green' }} />}
              >
                <Button type="primary" className="ml-2">
                  Enroll
                </Button>
              </Popconfirm>
            </>
          )}
          {current === 2 && (
            <Button type="primary" onClick={() => onCancel()}>
              Done
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

const mapDispatchToProps = { getTracksAction, userEnrollTrackAction };

export default connect(mapStateToProps, mapDispatchToProps)(TrackEnroll);
