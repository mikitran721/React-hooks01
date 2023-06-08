import React from "react";

// dung destructuring props sang todo; khong can viet prop nua
//   const todo = props.todo;
//   todo duoc gan tu tham so dau vao, nen sd luon
// chi return 1 dong nen ko can {} va tu return
// const TodoItem = props => {
const TodoItem = ({ todo, deleteTodo }) => {
  const style = {
    background: "rgb(240,240,240)",
    color: "black",
  };
  return (
    // <li onClick={() => deleteTodo(todo.id)} style={style} key={todo.id}>
    <li onClick={deleteTodo.bind(this, todo.id)} style={style} key={todo.id}>
      {todo.title}
    </li>
  );
};

export default TodoItem;
