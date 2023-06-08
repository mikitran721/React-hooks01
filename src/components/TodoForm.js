import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoForm = ({ addTodo }) => {
  const [title, setTile] = useState("");

  const onTileChange = (event) => {
    setTile(event.target.value);
  };

  const handleSubmit = (event) => {
    // tranh submit default
    event.preventDefault();
    addTodo({
      id: uuidv4(),
      title,
    });
    setTile("");
  };
  //   style
  const style = {
    background: "rgb(240,240,240)",
    color: "black",
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Enter a new todo..."
        onChange={onTileChange}
        value={title}
        required
      />
      <input type="submit" value="Add" stype={style} />
    </form>
  );
};

export default TodoForm;
