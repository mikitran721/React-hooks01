import React, { useState, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoContext } from "../contexts/TodoContext";
import { v4 as uuidv4 } from "uuid";

const TodoForm = () => {
  // state
  const [title, setTile] = useState("");

  const onTileChange = (event) => {
    setTile(event.target.value);
  };
  // load TodoContext
  const { addTodo } = useContext(TodoContext);
  // load context
  const theme = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme.theme;
  const style = isLightTheme ? light : dark;

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
  // const style = {
  //   background: "rgb(240,240,240)",
  //   color: "black",
  // };

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
      <input type="submit" value="Add" style={style} />
    </form>
  );
};

export default TodoForm;
