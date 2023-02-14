import styled from "styled-components";

const TaskStyled = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  border-bottom: 1px solid black;
  padding: 5px 0;

  .task {
    &__toggle-button {
      background: none;
      border: none;
    }

    &__delete-button {
      background: none;
      border: none;
    }
  }
`;

export default TaskStyled;
