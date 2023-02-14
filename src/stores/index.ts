import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { toDoReducer } from "./features/ToDoSlice";

const store = configureStore({
  reducer: {
    toDoTasks: toDoReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
