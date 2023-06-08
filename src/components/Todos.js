import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const Todos = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div className="todo-list">
      <TodoForm />
      <ul>
        {/* thuong dua render <li> thanh component con; han che render lai nhieu noi dung - tang performance */}
        {todos.map((todo) => (
          // console.log(`>>check Todo - id: `,todo.id);
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
