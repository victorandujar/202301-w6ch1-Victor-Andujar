import { toggleIsDoneActionCreator } from "../../stores/features/ToDoSlice";
import { useAppDispatch } from "../../stores/hooks";
import { ToDoStructure } from "../../types/types";
import TaskStyled from "./TaskStyles";

interface ToDoProps {
  todo: ToDoStructure;
}

const Task = ({ todo }: ToDoProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const toggleTask = () => {
    return todo.isDone ? "✅" : "☑️";
  };

  const toggleToDo = () => {
    dispatch(toggleIsDoneActionCreator(todo));
  };

  return (
    <TaskStyled className="task">
      <h2 className="task__name">{todo.name}</h2>
      <button className="task__toggle-button" onClick={() => toggleToDo()}>
        {toggleTask()}
      </button>
      <button className="task__delete-button">🗑️</button>
    </TaskStyled>
  );
};

export default Task;
