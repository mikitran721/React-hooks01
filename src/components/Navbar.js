import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme.theme;
  // console.log(`>> check theme`, theme.theme.dark);
  // let isLightTheme = theme.isLightTheme;
  // let light = theme.light;
  // let dark = theme.dark;
  // const style = {
  //   background: "rgb(240,240,240)",
  //   color: "black",
  // };

  const style = isLightTheme ? light : dark;

  return (
    <>
      <div className="navbar" style={style}>
        <h1>My Hooks App</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
