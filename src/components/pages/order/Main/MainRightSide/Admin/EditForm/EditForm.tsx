import React, { useContext, useState } from "react";
import UserContext from "../../../../../../../context/UserContext";
import InstructionMessage from "./InstructionMessage";
import { replaceFrenchCommaWithDot } from "../../../../../../../utils/maths";
import SavedEditMessage from "./SavedEditMeessage";
import { useSuccessMessage } from "../../../../../../../hooks/useSuccessMessage";
import Form from "../Form/Form";

export default function EditForm() {
  const {
    username,
    productSelected,
    setProductSelected,
    handleEdit,
    inputEditRef,
  } = useContext(UserContext);
  const { isSuccess, displaySuccessMessage } = useSuccessMessage();
  const [valueOnfocus, setValueOnfocus] = useState<string>();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const productUpdated = {
      ...productSelected,
      [name]: value,
    };

    const productWithPriceUpdated = {
      ...productUpdated,
      price: replaceFrenchCommaWithDot(productUpdated.price),
    };

    setProductSelected(productUpdated); //update affichage
    handleEdit(productWithPriceUpdated, username); //update menu
  };

  const handleOnFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setValueOnfocus(event.target.value);
  };

  const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const valueOnBlur = event.target.value;
    if (valueOnfocus !== valueOnBlur) displaySuccessMessage();
  };

  return (
    <Form
      product={productSelected}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      onChange={handleChange}
      ref={inputEditRef}
    >
      {isSuccess ? <SavedEditMessage /> : <InstructionMessage />}
    </Form>
  );
}
