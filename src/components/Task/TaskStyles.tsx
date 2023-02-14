import styled from "styled-components";

const TaskStyled = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  border-bottom: 1px solid black;
  padding: 5px 0;

  button {
    background: none;
    border: none;
    cursor: pointer;
    width: 20px;
    height: 20px;
  }
`;

export default TaskStyled;
