import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { AuthContext } from "../contexts/AuthContext";

const Todos = () => {
  const { todos } = useContext(TodoContext);
  // load AuthContext
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <div className="todo-list">
      <TodoForm />
      {isAuthenticated ? (
        <ul>
          {todos.map((todo) => (
            // console.log(`>>check Todo - id: `,todo.id);
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      ) : (
        <p style={{ textAlign: "center" }}>Not authorised</p>
      )}

      {/* thuong dua render <li> thanh component con; han che render lai nhieu noi dung - tang performance */}
    </div>
  );
};

export default Todos;
