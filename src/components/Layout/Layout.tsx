import { useEffect } from "react";
import useApi from "../../hook/useApi";
import TaskList from "../TaskList/TaskList";
import ToDoForm from "../ToDoForm/ToDoForm";
import LayoutStyled from "./LayoutStyled";

const Layout = (): JSX.Element => {
  const { getToDo } = useApi();

  useEffect(() => {
    getToDo();
  }, [getToDo]);

  return (
    <LayoutStyled>
      <header className="header">
        <h1>To Do tasks</h1>
      </header>
      <ToDoForm />
      <TaskList />
    </LayoutStyled>
  );
};

export default Layout;
