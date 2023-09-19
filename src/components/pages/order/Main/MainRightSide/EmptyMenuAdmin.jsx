import React, { useContext } from 'react'
import { styled } from 'styled-components'
import { theme } from '../../../../../theme';
import PrimaryButton from '../../../../reusable-ui/PrimaryButton';
import UserContext from '../../../../../context/UserContext';

export default function EmptyMenuAdmin() {
  const { resetMenu } = useContext(UserContext)
    return (
        <EmptyMenuAdminStyled>
            <div className="empty-menu-container">
        <div className="empty-menu"><span className="title">LE MENU EST VIDE ?</span></div>
        <div className="empty-menu"><span>CLIQUEZ CI-DESSOUS POUR LE REINITIALISER</span></div>
        <PrimaryButton label="Générer de nouveaux produits" className="button" onClick={resetMenu} />
      </div>
        </EmptyMenuAdminStyled>
    )
}

const EmptyMenuAdminStyled = styled.div`
    display: flex;
    width: 1400px;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: flex-end;
    margin-bottom: 300px;
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
  .button {
    width: 224px;
    font-size: ${theme.fonts.size.XS};
    font-weight: ${theme.fonts.weights.bold}
  }
`;