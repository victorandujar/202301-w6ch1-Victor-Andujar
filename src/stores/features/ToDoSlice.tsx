import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ToDoStructure from "../../types/types";

export const toDoSlice = createSlice({
  name: "toDoTasks",
  initialState: [] as ToDoStructure[],
  reducers: {
    loadToDo: (
      _state: ToDoStructure[],
      action: PayloadAction<ToDoStructure[]>
    ) => [...action.payload],
  },
});

export const { loadToDo: loadToDoActionCreator } = toDoSlice.actions;
export const toDoReducer = toDoSlice.reducer;
