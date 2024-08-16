import React from "react";
import { styled } from "styled-components";
import { theme } from "../../../../../theme";
import Header from "../../../../reusable-ui/Header";

export default function Footer() {
  return (
    <Header>
      <FooterStyled>
        <span className="slogan">Codé avec ❤️ et React.JS</span>
      </FooterStyled>
    </Header>
  );
}

const FooterStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  .slogan {
    font-family: ${theme.fonts.family.Amatic};
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P2};
    font-weight: ${theme.fonts.weights.bold};
  }
`;
