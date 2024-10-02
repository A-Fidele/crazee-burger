import React, { FormEventHandler } from "react";
import { useContext } from "react";
import UserContext from "../../../../../../../context/UserContext";
import { EMPTY_PRODUCT } from "../../../../../../../enums/product";
import { useSuccessMessage } from "../../../../../../../hooks/useSuccessMessage";
import { replaceFrenchCommaWithDot } from "../../../../../../../utils/maths";
import SubmitButton from "./SubmitButton";
import Form from "../Form/Form";

export default function AddForm() {
  const { handleAddProduct, newProduct, setNewProduct, username } =
    useContext(UserContext);
  const { isSuccess, displaySuccessMessage } = useSuccessMessage();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    const productBeingChanged = {
      ...newProduct,
      [name]: value,
    };

    setNewProduct(productBeingChanged);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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

  return (
    <Form onSubmit={handleSubmit} onChange={handleChange} product={newProduct}>
      <SubmitButton isSuccess={isSuccess} />
    </Form>
  );
}
