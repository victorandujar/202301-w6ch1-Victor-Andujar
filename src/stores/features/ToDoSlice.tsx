import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToDosStructure, ToDoStructure } from "../../types/types";

const initialState: ToDosStructure = [];

export const toDoSlice = createSlice({
  name: "toDoTasks",
  initialState,
  reducers: {
    loadToDo: (
      _currentTasks: ToDosStructure,
      action: PayloadAction<ToDosStructure>
    ) => [...action.payload],
    toggleIsDone: (currentTasks, action: PayloadAction<ToDoStructure>) =>
      currentTasks.map((task) => ({
        ...task,
        isDone: task.id === action.payload.id ? !task.isDone : task.isDone,
      })),
  },
});

export const {
  loadToDo: loadToDoActionCreator,
  toggleIsDone: toggleIsDoneActionCreator,
} = toDoSlice.actions;
export const toDoReducer = toDoSlice.reducer;
