import React, { HTMLFactory, ReactNode } from "react";
import { CSSProperties } from "styled-components";

export interface IBoxProps {
  style?: CSSProperties;
  children?: ReactNode;
}
