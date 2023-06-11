import React, { useState, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoContext } from "../contexts/TodoContext";
import { v4 as uuidv4 } from "uuid";
import { ADD_TODO } from "../reducers/types";

const TodoForm = () => {
  // state
  const [title, setTile] = useState("");

  const onTileChange = (event) => {
    setTile(event.target.value);
  };

  // load context
  const theme = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme.theme;
  const style = isLightTheme ? light : dark;

  // load TodoContext
  const { dispatch } = useContext(TodoContext);

  const handleSubmit = (event) => {
    // tranh submit default
    event.preventDefault();
    dispatch({
      type: ADD_TODO,
      payload: {
        todo: { id: uuidv4(), title },
      },
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
