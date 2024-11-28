import { createSlice } from "@reduxjs/toolkit";

type todoState = {
  nextId: number;
  todos: { id: number; done: boolean; todo: string }[];
};

const initialState: todoState = {
  nextId: 1,
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ id: state.nextId++, done: false, ...action.payload });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    modifyTodoDone: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, deleteTodo, modifyTodoDone } = todoSlice.actions;
