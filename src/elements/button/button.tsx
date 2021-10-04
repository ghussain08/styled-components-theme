import React from "react";
import styled from "styled-components";
import { IButtonProps } from "../../ts/button/button.types";
const Button = styled.button<IButtonProps>`
  border: none;
  outline-offset: 2px;
  padding: 1rem 2rem;
  font-size: 1.6rem;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  ${(props) => {
    switch (props.variant) {
      case "secondary":
        return `
            color:${props.theme.secondary.text};
            background-color:${props.theme.secondary.main}
        `;
      case "primary":
        return `
            color:${props.theme.primary.text};
            background-color:${props.theme.primary.main}
            `;
      default:
        return `background-color:black`;
    }
  }}
`;

export default function button(props: IButtonProps) {
  const { variant, children, ...rest } = props;
  return (
    <Button variant={variant} {...rest}>
      {props.children}
    </Button>
  );
}
