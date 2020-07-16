import React, { useState, useEffect } from 'react';
import { Steps, Button, Modal, Radio, Pagination } from 'antd';
import { connect } from 'react-redux';
import {
  getTracksAction,
  userEnrollTrackAction,
} from '../../../state/tracks/tracksActionCreator';
import TrackCard from './TracksEnrollCard';
// import CustomLoader from '../../common/Spinner/CustomLoader';
import tempCourseLogo from '../../assets/image/dashboard/science_image.png';
import TrackEnrollStyled from './TrackEnrollStyled';
import TracksEnrollStages from './TracksEnrollStages';
import { Popconfirm } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import EnrollmentStatus from './EnrollmentStatus';
import CustomLoader from '../../common/Spinner/CustomLoader';
const { Step } = Steps;

const steps = [
  {
    title: 'Tracks',
  },
  {
    title: 'Stages',
  },
  {
    title: 'Confirmation',
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
  const [trackTitle, setTrackTitle] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [trackPerPage, setTrackperPage] = useState(2);

  const indexOfLastTrack = currentPage * trackPerPage;
  const indexOfFirstTrack = indexOfLastTrack - trackPerPage;
  const { items } = data;

  const paginate = pageNumber => setCurrentPage(pageNumber);
  const currentTracks = items
    ? items.slice(indexOfFirstTrack, indexOfLastTrack)
    : null;

  const getTrackName = id => {
    const track = items.filter(data => data.id === id);
    console.log(track);

    setTrackTitle(track[0].title);
  };
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

  const handleEnrollTrack = async id => {
    try {
      await userEnrollTrackAction(id);
      await getTrackName(trackId);
    } catch (error) {
      console.log({ error });
    }
    next();
  };

  useEffect(() => {
    getTracksAction();
  }, [getTracksAction]);

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
          <>
            <Radio.Group onChange={handleSetTrackId} defaultValue={null}>
              <div className="tracks-card">
                {currentTracks ? (
                  currentTracks.map((item, idx) => (
                    <TrackCard
                      next={next}
                      data={item}
                      key={idx}
                      logo={tempCourseLogo}
                    />
                  ))
                ) : (
                  <CustomLoader />
                )}
              </div>
            </Radio.Group>
            <Pagination
              // postPerPage={postPerPage}
              total={currentTracks.length}
              defaultCurrent={currentPage}
              // paginate={paginate}
              onChange={paginate}
              pageSize={trackPerPage}
              showSizeChanger={false}
            />
          </>
        ) : null}
        {current === 1 ? <TracksEnrollStages id={trackId} /> : null}
        {current === 2 ? (
          <EnrollmentStatus
            status={error ? 'error' : 'success'}
            title={trackTitle}
            prev={prev}
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
