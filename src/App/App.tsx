import { useEffect } from "react";
import ToDoForm from "../components/ToDoForm/ToDoForm";
import useApi from "../hook/useApi";
import AppStyled from "./AppStyled";

const App = (): JSX.Element => {
  const { getToDo } = useApi();

  useEffect(() => {
    getToDo();
  }, [getToDo]);

  return (
    <AppStyled>
      <ToDoForm />
    </AppStyled>
  );
};

export default App;
