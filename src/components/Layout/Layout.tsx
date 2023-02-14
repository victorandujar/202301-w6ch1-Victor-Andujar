import Task from "../Task/Task";
import ToDoForm from "../ToDoForm/ToDoForm";
import LayoutStyled from "./LayoutStyled";

const Layout = (): JSX.Element => {
  return (
    <LayoutStyled>
      <header className="header">
        <h1>To Do tasks</h1>
      </header>
      <ToDoForm />
      <Task />
    </LayoutStyled>
  );
};

export default Layout;
