import { useState } from "react";
import { ThemeProvider as StyledComponentThemeProvider } from "styled-components";
import { IThemeProviderProps } from "../ts/themes/theme-provider";
import themes from "./themes";
import { IThemesNames } from "../ts/themes/themes.types";
import ThemeSwitcher from "./theme-swicther-context";

export const DEFAULT_THEME: IThemesNames = "kabutar";

/**
 * Theme provider, Combination of styled-component ThemeProvider and
 * custom context provider to update the theme
 * @param props
 * @returns
 */
export default function ThemeProvider(props: IThemeProviderProps) {
  const [themeName, setTheme] = useState<IThemesNames>(DEFAULT_THEME);
  return (
    <StyledComponentThemeProvider theme={themes[themeName]}>
      <ThemeSwitcher.Provider value={{ setTheme }}>
        {props.children}
      </ThemeSwitcher.Provider>
    </StyledComponentThemeProvider>
  );
}
