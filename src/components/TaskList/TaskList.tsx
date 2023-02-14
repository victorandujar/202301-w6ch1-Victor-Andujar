import { useAppSelector } from "../../stores/hooks";
import Task from "../Task/Task";
import TaskListStyled from "./TaskListStyled";

const TaskList = (): JSX.Element => {
  const { toDoTasks } = useAppSelector((todo) => todo);

  return (
    <>
      <h2>Tasks dashboard</h2>
      <TaskListStyled>
        {toDoTasks.map((todo) => (
          <li key={todo.id}>
            <Task todo={todo} />
          </li>
        ))}
      </TaskListStyled>
    </>
  );
};

export default TaskList;
