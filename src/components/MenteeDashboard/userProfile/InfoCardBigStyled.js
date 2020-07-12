import styled from 'styled-components';

const InfoCardBigStyled = styled.div`
  margin-bottom: 1rem;
  hr {
    margin: 0;
  }

  .list__container {
    padding: 2rem;
    background: #ffffff;
    box-shadow: 2px 8px 20px rgba(181, 181, 181, 0.2);
    border-radius: 5px;
  }

  .list_header {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    color: #353a45;
    display: flex;
    justify-content: space-between;
  }

  .list-item {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #e7eaec;
  }
  .list-item i {
    color: #00aeff;
  }

  .list-item span {
    font-weight: normal;
    font-size: 1rem;
    line-height: 24px;

    margin-left: 0.5rem;
    color: #4c5059;
  }
`;

export default InfoCardBigStyled;
