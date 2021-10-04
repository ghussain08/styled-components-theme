import { createContext } from "react";
import { IThemeContext } from "../ts/themes/theme-provider";

// Context that will be used to change theme from anywhere
// in react tree.
const ThemeSwitcher = createContext({} as IThemeContext);
export default ThemeSwitcher;
