import { ReactNode } from "react";
import { IThemesNames } from "./themes.types";

export interface IThemeProviderProps {
  children: ReactNode;
}

export interface IThemeContext {
  setTheme: (theme: IThemesNames) => void;
}
