import { useCallback } from "react";
import { loadToDoActionCreator } from "../stores/features/ToDoSlice";
import { useAppDispatch } from "../stores/hooks";
import { ToDosStructure } from "../types/types";

const useApi = () => {
  const dispatch = useAppDispatch();

  const getToDo = useCallback(async () => {
    const response = await fetch(process.env.REACT_URL_API!);

    const taskToDo = (await response.json()) as ToDosStructure[];

    dispatch(loadToDoActionCreator(taskToDo));
  }, [dispatch]);

  return { getToDo };
};

export default useApi;
