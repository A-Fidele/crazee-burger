import React from "react";
import { styled } from "styled-components";
import { theme } from "../../../../../theme";

export default function EmptyMenuCustomer() {
  return (
    <EmptyMenuCustomerStyled>
      <div className="empty-menu">
        <span className="title">VICTIME DE NOTRE SUCCES!! :D</span>
      </div>
      <div className="empty-menu">
        <span>DE NOUVELLES RECETTES SONT EN COURS DE PREPARATION</span>
      </div>
      <div className="empty-menu">
        <span>A TRES VITE!</span>
      </div>
    </EmptyMenuCustomerStyled>
  );
}

const EmptyMenuCustomerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 200px;
  text-transform: uppercase;

  .empty-menu {
    margin-bottom: 30px;
    font-size: ${theme.fonts.size.P4};
    font-family: "Amatic SC";
    color: ${theme.colors.greySemiDark};
    font-weight: ${theme.fonts.weights.regular};

    .title {
      font-weight: ${theme.fonts.weights.bold};
    }
  }
`;
