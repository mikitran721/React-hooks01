import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const Todos = () => {
  // useState: quan ly trang thai cua comp
  //khoi tao state
  const [todos, setTodos] = useState([
    { id: "a1", title: "Viec 1" },
    { id: "a2", title: "Viec 2" },
    { id: "a3", title: "Viec 3" },
  ]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  // ham xoa todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-list">
      <TodoForm addTodo={addTodo} />
      <ul>
        {/* thuong dua render <li> thanh component con; han che render lai nhieu noi dung - tang performance */}
        {todos.map((todo) => (
          // console.log(`>>check Todo - id: `,todo.id);
          <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
