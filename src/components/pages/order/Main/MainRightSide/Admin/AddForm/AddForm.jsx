import React from "react";
import { useContext } from "react";
import PrimaryButton from "../../../../../../reusable-ui/PrimaryButton";
import UserContext from "../../../../../../../context/UserContext";
import { getInputTextsConfig, getSelectConfig } from "../inputTextsConfig";
import SubmitMessage from "./SubmitMessage";
import { EMPTY_PRODUCT } from "../../../../../../../enums/product";
import { useSuccessMessage } from "../../../../../../../hooks/useSuccessMessage";
import { replaceFrenchCommaWithDot } from "../../../../../../../utils/maths";
import Form from "../Form";
import SubmitButton from "./SubmitButton";

export default function AddForm() {
  const { handleAddProduct, newProduct, setNewProduct, username } =
    useContext(UserContext);
  const { isSuccess, displaySuccessMessage } = useSuccessMessage();

  const handleChange = (e) => {
    const { name, value } = e.target;

    const productBeingChanged = {
      ...newProduct,
      [name]: value,
    };

    setNewProduct(productBeingChanged);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
      price: replaceFrenchCommaWithDot(newProduct.price),
    };

    handleAddProduct(username, newProductToAdd);
    setNewProduct(EMPTY_PRODUCT); // remise a 0 des champs

    displaySuccessMessage();
  };

  const inputTexts = getInputTextsConfig(newProduct);
  const inputSelects = getSelectConfig(newProduct);

  return (
    <Form onSubmit={handleSubmit} onChange={handleChange} product={newProduct}>
      <SubmitButton isSuccess={isSuccess} />
    </Form>
  );
}
