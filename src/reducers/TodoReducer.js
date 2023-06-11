import { ADD_TODO, DELETE_TODO, GET_TODOS, SAVE_TODOS } from "./types";

export const totoReducer = (state, action) => {
  //
  const { type, payload } = action;
  switch (type) {
    case GET_TODOS:
      console.log(`getting todos`);
      const todos = localStorage.getItem("todos");
      if (todos) state = JSON.parse(todos);
      return state;
    default:
      return state;
  }
};
