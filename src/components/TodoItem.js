import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoContext } from "../contexts/TodoContext";

import { DELETE_TODO } from "../reducers/types";

// dung destructuring props sang todo; khong can viet prop nua
//   const todo = props.todo;
//   todo duoc gan tu tham so dau vao, nen sd luon
// chi return 1 dong nen ko can {} va tu return
// const TodoItem = props => {
const TodoItem = ({ todo }) => {
  const theme = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme.theme;
  const style = isLightTheme ? light : dark;

  // todocontext
  const { dispatch } = useContext(TodoContext);

  // console.log(`>>check key: `, todo);
  // let key = todo.id.toString();
  return (
    // <li onClick={() => deleteTodo(todo.id)} style={style} key={todo.id}>
    // <li key={key} style={style} onClick={deleteTodo.bind(this, todo.id)}>
    <li
      onClick={() => {
        dispatch({
          type: DELETE_TODO,
          payload: { id: todo.id },
        });
      }}
      style={style}
    >
      {todo.title}
    </li>
    //   <li key={todo.id} onClick={() => deleteTodo(todo.id)}>
    //     {todo.id} - {todo.title}
    //   </li>
  );
};

export default TodoItem;
