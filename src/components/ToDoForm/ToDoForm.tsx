import ToDoFormStyled from "./ToDoFormStyled";

const ToDoForm = (): JSX.Element => {
  return (
    <ToDoFormStyled className="form-tasks">
      <label htmlFor="id" aria-label="id" className="form-tasks__label-id">
        ID
      </label>
      <input type="text" className="form-tasks__id" required />
      <label
        htmlFor="name"
        aria-label="name"
        className="form-tasks__label-name"
      >
        Name
      </label>
      <input type="text" className="form-tasks__name" required />
      <label
        htmlFor="status"
        aria-label="task status"
        className="form-tasks__label-isDone"
      >
        Status
      </label>
      <input type="text" className="form-tasks__isDone" required />
      <button type="submit" className="form-tasks__button">
        Create task
      </button>
    </ToDoFormStyled>
  );
};

export default ToDoForm;
