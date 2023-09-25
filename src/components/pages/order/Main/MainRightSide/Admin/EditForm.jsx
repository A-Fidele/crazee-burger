import React from "react";
import { HiCursorClick } from "react-icons/hi";
import { styled } from "styled-components";
import { theme } from "../../../../../../theme";

export default function EditForm() {
  return (
    <EditFormStyled>
      <span className="titre">Cliquer sur le produit pour le modifier</span>
      <HiCursorClick className="Icon" />
    </EditFormStyled>
  );
}

const EditFormStyled = styled.div`
  display: flex;
  height: 100%;
  align-items: center;

  .titre {
    font-family: "Amatic SC";
    font-weight: ${theme.fonts.weights.regular};
    font-size: ${theme.fonts.size.P3};
    margin-right: 10px;
    color: ${theme.colors.greyBlue};
  }
  .Icon {
    font-size: ${theme.fonts.size.P3};
    color: ${theme.colors.greyBlue};
  }
`;
