import React from "react";
import { IBoxProps } from "../../ts/box/box.types";
import styled from "styled-components";
const BoxComponent = styled.div<IBoxProps>``;
export default function Box(props: IBoxProps) {
  return <BoxComponent style={props.style}>{props.children}</BoxComponent>;
}
