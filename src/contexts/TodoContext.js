import React, { createContext, useState } from "react";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  //khoi tao state
  const [todos, setTodos] = useState([
    { id: "a1", title: "Viec 1" },
    { id: "a2", title: "Viec 2" },
    { id: "a3", title: "Viec 3" },
  ]);

  // functions
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  // ham xoa todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //   context data
  const todoContextData = {
    todos,
    addTodo,
    deleteTodo,
  };

  //return provider
  return (
    <TodoContext.Provider value={todoContextData}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
