import Task from "../Task/Task";
import TaskListStyled from "./TaskListStyled";

const TaskList = (): JSX.Element => {
  return (
    <>
      <h2>Tasks dashboard</h2>
      <TaskListStyled>
        <li>
          <Task />
        </li>
        <li>
          <Task />
        </li>
        <li>
          <Task />
        </li>
        <li>
          <Task />
        </li>
      </TaskListStyled>
    </>
  );
};

export default TaskList;
