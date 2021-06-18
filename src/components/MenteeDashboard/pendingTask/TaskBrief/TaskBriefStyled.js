import styled from 'styled-components';

const TaskBriefStyled = styled.div`
  .task-details {
    width: 100%;
    word-wrap: break-word;
  }

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
