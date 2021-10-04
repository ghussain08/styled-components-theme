import React from "react";
import styled from "styled-components";
import ThemeSwicther from "../theme-switcher/";
const HeaderComponent = styled.header`
  display: flex;
  padding: 2rem;
  justify-content: center;
  align-items: center;
`;

export default function Header() {
  return (
    <HeaderComponent>
      <ThemeSwicther />
    </HeaderComponent>
  );
}
