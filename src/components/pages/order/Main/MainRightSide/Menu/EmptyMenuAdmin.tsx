import { styled } from "styled-components";
import PrimaryButton from "../../../../../reusable-ui/PrimaryButton";
import { theme } from "../../../../../../theme";

type EmptyMenuAdminprops = {
  onReset: () => void,
}

export default function EmptyMenuAdmin({ onReset }: EmptyMenuAdminprops) {
  return (
    <EmptyMenuAdminStyled>
      <div className="empty-menu-container">
        <div className="subtitle">
          <span className="title">Le MENU EST VIDE ?</span>
        </div>
        <div className="subtitle">
          <span>CLIQUEZ CI-DESSOUS POUR LE REINITIALISER</span>
        </div>
        <PrimaryButton
          label="Générer de nouveaux produits"
          className="button"
          onClick={onReset}
        />
      </div>
    </EmptyMenuAdminStyled>
  );
}

const EmptyMenuAdminStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: flex-end;
  margin-bottom: 300px;
  text-transform: uppercase;
  .subtitle {
    margin-bottom: 30px;
    font-size: ${theme.fonts.size.P4};
    font-family: ${theme.fonts.family.Amatic};
    color: ${theme.colors.greySemiDark};
    font-weight: ${theme.fonts.weights.regular};

    .title {
      font-weight: ${theme.fonts.weights.bold};
    }
  }
  .button {
    width: 224px;
    font-size: ${theme.fonts.size.XS};
    font-weight: ${theme.fonts.weights.bold};
  }
`;
