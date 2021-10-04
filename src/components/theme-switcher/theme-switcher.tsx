import React, { useContext } from "react";
import themes from "../../themes/themes";
import styled, { ThemeContext } from "styled-components";
import ThemeSwitcherContext from "../../themes/theme-swicther-context";
import { IThemesNames } from "../../ts/themes/themes.types";

const Themes = styled.div`
  display: flex;
  gap: 1.5rem;
`;
const ThemeSelector = styled.button`
  background-color: ${(props) => props.style?.backgroundColor};
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  cursor: pointer;
  display: inline-block;
  border: none;
`;
const ThemeSelectorContainer = styled.div`
  padding: 0.5rem;
  border-radius: 50%;
  height: 4rem;
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

/**
 * Theme switcher to switch between themes
 * @returns
 */
export default function ThemeSwicther() {
  // Theme setter from Custom context
  const { setTheme } = useContext(ThemeSwitcherContext);

  // current applied Theme from styled-component style context
  const theme = useContext(ThemeContext);

  return (
    <Themes>
      {Object.keys(themes).map((themeName) => {
        const primary = themes[themeName as IThemesNames].primary.main;
        const secondary = themes[themeName as IThemesNames].secondary.main;
        return (
          <ThemeSelectorContainer
            style={{
              border: theme.name === themeName ? "2px solid black" : "none",
            }}
          >
            <ThemeSelector
              style={{
                background: `linear-gradient(45deg,
            ${primary} 0 50%,  ${secondary} 50%) `,
              }}
              onClick={() => setTheme(themeName as IThemesNames)}
            />
          </ThemeSelectorContainer>
        );
      })}
    </Themes>
  );
}
