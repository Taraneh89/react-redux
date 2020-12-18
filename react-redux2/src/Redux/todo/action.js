import { TOGGLE_TODO, INSERT_TODO } from "./type";

const initialId = 0;
export const insertTodo = (row) => {
  return {
    type: INSERT_TODO,
    payload: {
      id: initialId + 1,
      content: row,
    },
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: {
      id,
    },
  };
};
