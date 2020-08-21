import React, { useState } from 'react';
import { connect } from 'react-redux';
import SingleMentorCard from './SingleMentorCard';
import SingleMentorCardStyled from './SingleMentorCardStyled';
import { Radio, Pagination } from 'antd';

export const TrackMentors = ({ mentors }) => {
  const number = [1, 3, 4, 5, 6, 6];
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line
  const [cardPerPage, setCardperPage] = useState(3);

  const indexOfLastCard = currentPage * cardPerPage;
  const indexOfFirstCard = indexOfLastCard - cardPerPage;

  const paginate = pageNumber => setCurrentPage(pageNumber);
  const currentCards = mentors
    ? mentors.items.slice(indexOfFirstCard, indexOfLastCard)
    : null;

  return (
    <>
      <SingleMentorCardStyled>
        {currentCards.map(item => (
          <div className="radio-options">
            <Radio.Button value={item}>
              <SingleMentorCard mentor={item} key={item} />
            </Radio.Button>
          </div>
        ))}
      </SingleMentorCardStyled>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: '1rem',
        }}
      >
        <Pagination
          // postPerPage={postPerPage}
          total={number.length}
          defaultCurrent={currentPage}
          // paginate={paginate}
          onChange={paginate}
          pageSize={cardPerPage}
          showSizeChanger={false}
        />
      </div>
    </>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TrackMentors);
