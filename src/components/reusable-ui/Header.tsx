import React from "react";
import { styled } from "styled-components";
import { theme } from "../../theme";

type HeaderProps = {
  children: JSX.Element,
}

export default function Header({ children }: HeaderProps) {
  return <HeaderStyled>{children}</HeaderStyled>;
}

const HeaderStyled = styled.div`
  height: 70px;
  background-color: ${theme.colors.background_dark};
  padding: 0px 16px;
`;
