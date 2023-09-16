import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { useContext, useState } from "react";
import { getTabSelected, tabsConfig } from "./tabsConfig";
import TextInput from "../../../../../reusable-ui/TextInput";
//import { fakeMenu2 } from "../../../../../../fakeData/fakeMenu";
import UserContext from "../../../../../../context/UserContext";

export default function Panel() {
  const { currentTabSelected, menu, handleAddProduct } = useContext(UserContext);
  const [ field, setField] = useState("");

  const tabs = tabsConfig;
  const tabSelected = getTabSelected(tabs, currentTabSelected);

  const handleChange = (event) => {
    setField(e.target.value)
  }

  const submit = () => {
    handleAddProduct(newProduct)
  }

  const newProduct =
  {
    id: new Date().getTime(),
    imageSource: "/images/burger1.png",
    title: "Nouveau Produit",
    price: 5.297,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false
  }
  
  const inputFields = tabSelected.infoProduct.map((fields) => {
    return <TextInput
    key={fields.addIndex}
    Icon={fields.addIcon}
    placeholder={fields.addPlaceholder}
    className={"input-fields-classname"}
    onChange={handleChange}
    value={field}
    />
  })

return (
  <AdminPanelStyled>
    {/* <p>{tabSelected && tabSelected.label}</p> */}
    <div className="add-container">
      <div className="image-preview">imagepreview</div>
      <div className="input-fields">{inputFields}</div>
      <div className="submit-button"><button onClick={() => submit()}>Ajouter un produit</button></div>
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

  .input-fields-classname {
     height: 35px;
     //width: 645px;
     background-color: ${theme.colors.greyLight};
     margin-left: 10px;
     margin-bottom: -50px;
     margin-top: -50px;
  }
`;
