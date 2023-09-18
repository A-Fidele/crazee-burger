import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { useContext, useState } from "react";
import { getTabSelected, tabsConfig } from "./tabsConfig";
import TextInput from "../../../../../reusable-ui/TextInput";
import UserContext from "../../../../../../context/UserContext";
import PrimaryButton from "../../../../../reusable-ui/PrimaryButton";
import { FiCheck } from "react-icons/fi";

export default function Panel() {
  const { currentTabSelected, menu, handleAddProduct } = useContext(UserContext);
  const [field, setField] = useState("");
  const [isSuccess, setIsSuccess] = useState("");

  const tabs = tabsConfig;
  const tabSelected = getTabSelected(tabs, currentTabSelected);

  const product = {
    id: "",
    title: "",
    imageSource: "",
    price: "",
  };

  const [newProduct, setNewProduct] = useState(product);

  const handleChange = (e) => {
    setField(e.target.value)
    setNewProduct({
      ...newProduct,
      id: new Date().getTime(),
      [e.target.name]: [e.target.value],
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddProduct(newProduct)
    setNewProduct(product)//vider les champs
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false)
    }, 2000)
  }

  const inputFields = tabSelected.infoProduct.map((fields) => {
    return <TextInput
      key={fields.addIndex}
      Icon={fields.addIcon}
      name={fields.name}
      type={"url"}
      placeholder={fields.addPlaceholder}
      className={"input-fields-classname"}
      onChange={handleChange}
      value={field}
    />
  })

  return (
    <AdminPanelStyled>
      {/* <p>{tabSelected && tabSelected.label}</p> */}
      <form action="submit" onSubmit={handleSubmit} className="add-container">
        <div className="image-preview">
          {newProduct.imageSource ?
            <img src={newProduct.imageSource} alt={newProduct.title} /> :
            "No Image"}
        </div>
        <div className="input-fields">{inputFields}</div>
        <div className="submit-button">
          <PrimaryButton
            className={"add-product-button"}
            label="Ajouter un nouveau produit au menu"
          />
          <span className="success-message">
            {isSuccess && <span> <FiCheck /> Ajouté avec succès !
            </span>}
          </span>
        </div>
      </form>
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
  
  //border: 1px solid black;
}

.image-preview {
  //background-color: red;
  grid-area: 1/1/4/2;
  border: 1px solid black;
  margin-right: 20px;
}

.input-fields {
  background-color: blue;
  grid-area: 1/2/4/2;
  //margin-left: 20px;
}

.submit-button {
  //background-color: green;
  grid-area: 4/2/5/3;
}

p {
    padding: 0 20px;
  }

  .input-fields-classname {
     height: 35px;
     width: 645px;
     background-color: ${theme.colors.greyLight};
     margin-left: 10px;
     margin-bottom: -50px;
     margin-top: -50px;
  }

  .add-product-button {
    background-color:${theme.colors.success};
    border: none;
    height: 14px;
    width: 50%;
    margin-top: 20px;
    margin-left: 20px;
    &:hover {
      color:white;
    }
  }

  .success-message {
    color: ${theme.colors.green};
    margin-left: 5px;
    font-size: ${theme.fonts.size.SM};
    font-weight: ${theme.fonts.weights.regular}
  }
`;
