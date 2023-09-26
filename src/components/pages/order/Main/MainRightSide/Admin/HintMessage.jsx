import React from "react";
import { HiCursorClick } from "react-icons/hi";
import { styled } from "styled-components";
import { theme } from "../../../../../../theme";

export default function HintMessage() {
  return (
    <HintMessageStyled>
      {" "}
      <span className="titre">Cliquer sur le produit pour le modifier</span>
      <HiCursorClick className="Icon" />
    </HintMessageStyled>
  );
}

const HintMessageStyled = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  .titre {
    font-family: "Amatic SC", cursive;
    font-size: ${theme.fonts.size.P3};
    font-weight: ${theme.fonts.weights.regular};
    color: ${theme.colors.greyBlue};
    margin-right: 10px;
  }
  .icon {
    color: ${theme.colors.greyBlue};
  }
`;
