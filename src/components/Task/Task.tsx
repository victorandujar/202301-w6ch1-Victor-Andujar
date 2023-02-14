import TaskStyled from "./TaskStyles";

const Task = (): JSX.Element => {
  return (
    <TaskStyled className="task">
      <h2 className="task__name">Take out the rubish</h2>
      <button className="task__toggle-button">✅</button>
      <button className="task__delete-button">🗑️</button>
    </TaskStyled>
  );
};

export default Task;
