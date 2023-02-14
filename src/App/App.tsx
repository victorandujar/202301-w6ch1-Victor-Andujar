import { useEffect } from "react";
import Layout from "../components/Layout/Layout";

import useApi from "../hook/useApi";

const App = (): JSX.Element => {
  const { getToDo } = useApi();

  useEffect(() => {
    getToDo();
  }, [getToDo]);

  return <Layout />;
};

export default App;
