import React, { ReactNode } from "react";
import styled from "styled-components";
import GlobalStyles from "../../utils/global-styles";
const Wrapper = styled.div`
  font-size: 1.6rem;
  min-height: 100vh;
  transition: all 0.2s ease-in-out;
  padding-top: 10rem;
`;

const Container = styled.main`
  max-width: 900px;
  margin: auto;
  padding: 0 1rem;
  text-align: center;
`;

/**
 * Site container to constraint max width and setting overall theme
 * @param {{ children: ReactNode }} props
 * @returns {ReactNode}
 */
export default function siteContainer(props: { children: ReactNode }) {
  return (
    <Wrapper>
      <GlobalStyles />
      <Container>{props.children}</Container>
    </Wrapper>
  );
}
