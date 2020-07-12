import styled from 'styled-components';

const TaskBriefStyled = styled.div`
  .btn-outline-primary {
    border-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.primaryColor};
    :hover {
      background: ${props => props.theme.primaryColor};
      color: #fff;
    }
  }
`;

export default TaskBriefStyled;
