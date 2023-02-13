import ToDoFormStyled from "./ToDoFormStyled";

const ToDoForm = (): JSX.Element => {
  return (
    <ToDoFormStyled className="form-tasks">
      <label
        htmlFor="name"
        aria-label="name"
        className="form-tasks__label-name"
      >
        Name
      </label>
      <input type="text" className="form-tasks__name" required />
      <button type="submit" className="form-tasks__button">
        Add task
      </button>
    </ToDoFormStyled>
  );
};

export default ToDoForm;
