import Task from "../Task/Task";

const TaskList = (): JSX.Element => {
  return (
    <ul>
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
    </ul>
  );
};

export default TaskList;
