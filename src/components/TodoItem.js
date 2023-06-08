import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

// dung destructuring props sang todo; khong can viet prop nua
//   const todo = props.todo;
//   todo duoc gan tu tham so dau vao, nen sd luon
// chi return 1 dong nen ko can {} va tu return
// const TodoItem = props => {
const TodoItem = ({ todo, deleteTodo }) => {
  const theme = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme.theme;
  const style = isLightTheme ? light : dark;
  // console.log(`>>check key: `, todo);
  // let key = todo.id.toString();
  return (
    // <li onClick={() => deleteTodo(todo.id)} style={style} key={todo.id}>
    // <li key={key} style={style} onClick={deleteTodo.bind(this, todo.id)}>
    <li onClick={() => deleteTodo(todo.id)} style={style} key={todo.id}>
      {todo.title}
    </li>
    //   <li key={todo.id} onClick={() => deleteTodo(todo.id)}>
    //     {todo.id} - {todo.title}
    //   </li>
  );
};

export default TodoItem;
