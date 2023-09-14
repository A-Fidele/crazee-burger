import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { useContext } from "react";
import { getTabSelected, tabsConfig } from "./tabsConfig";
import Usercontext from "../../../../../../context/UserContext";
import TextInput from "../../../../../reusable-ui/TextInput";

export default function Panel() {
  const { currentTabSelected } = useContext(Usercontext);

  const tabs = tabsConfig;
  const tabSelected = getTabSelected(tabs, currentTabSelected);

  const inputFields = tabSelected.infoProduct.map((fields) => {
    return <TextInput key={fields.addIndex} Icon={fields.addIcon} label={tabSelected.label} />
  })

  return (
    <AdminPanelStyled>
      {/* <p>{tabSelected && tabSelected.label}</p> */}

      <div className="add-container">
        <div className="image-preview">imagepreview</div>
        <div className="input-fields">{inputFields}</div>
        <div className="submit-button"><button>Ajouter un produit</button></div>
      </div>
    </AdminPanelStyled>
  );
}
const AdminPanelStyled = styled.div`
  height: 250px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};

.add-container {
  width: 70%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);

  border: 1px solid black;
}

.image-preview {
  background-color: red;
  grid-area: 1/1/4/2;

}

.input-fields {
  background-color: blue;
  grid-area: 1/2/4/2;
  
}

.submit-button {
  background-color: green;
  grid-area: 4/2/5/3;
}

  p {
    padding: 0 20px;
  }
`;
