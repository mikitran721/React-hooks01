import React, { createContext, useEffect, useReducer } from "react";
import todoReducer from "../reducers/TodoReducer";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  //khoi tao state
  // const [todos, setTodos] = useState([
  //   // { id: "a1", title: "di cho" },
  //   // { id: "a2", title: "nau an" },
  //   // { id: "a3", title: "Giat do" },
  //   // { id: "a4", title: "Rua bat" },
  // ]);

  // useEffect tham so vao la 1 func; chay moi khi todos thay doi
  /**
   * Moi khi todos thay doi, se luu lai vao localStories ~ 1 DB cuc bo
   * useEffect luon chay khi component render - nen neu ko check co the lam tran memory browser. (khi useEffect chay thi todos thay doi -> component render & useEffect lai chay - chay vo han :D ) -> them tham so [] vao sau ham nay.
   * Local storage chi nhan string;
   */

  //kb gom: kho - sate
  const [todos, dispatch] = useReducer(todoReducer, []);

  useEffect(() => {
    dispatch({
      type: "GET_TODOS",
      payload: null,
    });
  }, []);

  useEffect(() => {
    dispatch({
      type: "SAVE_TODOS",
      payload: { todos },
    });
  }, [todos]);

  // // functions
  // const addTodo = (todo) => {
  //   setTodos([...todos, todo]);
  // };

  // // ham xoa todo
  // const deleteTodo = (id) => {
  //   setTodos(todos.filter((todo) => todo.id !== id));
  // };

  //   context data
  const todoContextData = {
    todos,
    dispatch,
  };

  //return provider
  return (
    <TodoContext.Provider value={todoContextData}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
