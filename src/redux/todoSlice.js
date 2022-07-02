import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {},
  reducers: {
    addTodo(state, actions) {},
  },
});

const { actions, reducer } = todoSlice;
export const { addTodo } = actions;
export default reducer;
