import React from "react";
import { styled } from "styled-components";
import { theme } from "../../../../../theme";

export default function Footer() {
  return (
    <FooterStyled>
      <span className="slogan">Codé avec ❤️ et React.JS</span>
    </FooterStyled>
  );
}

const FooterStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  .slogan {
    font-family: "Amatic SC";
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P2};
    font-weight: ${theme.fonts.weights.bold};
  }
`;
