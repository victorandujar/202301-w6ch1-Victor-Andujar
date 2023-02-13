import styled from "styled-components";

const ToDoFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: monospace;

  input {
    border-radius: 10px;
    border: 2px solid black;
    height: 35px;
    width: 350px;
  }

  .form-tasks {
    &__button {
      width: 350px;
      height: 35px;
      border-radius: 10px;
      border: none;
      font-family: inherit;
      background: orange;
      font-weight: bold;
      cursor: pointer;

      :active {
        background: #e0cf34;
      }

      :hover {
        background: black;
        color: white;
      }
    }
  }
`;

export default ToDoFormStyled;
