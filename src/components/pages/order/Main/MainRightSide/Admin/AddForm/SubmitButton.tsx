import React, { Fragment } from "react";
import PrimaryButton from "../../../../../../reusable-ui/PrimaryButton";
import SubmitMessage from "./SubmitMessage";

type SubmitButtonProps = { isSuccess: boolean }

export default function SubmitButton({ isSuccess }: SubmitButtonProps) {
  return (
    <>
      <PrimaryButton
        className={"add-button"}
        version="success"
        label="Ajouter un nouveau produit au menu"
      />
      {isSuccess && <SubmitMessage />}
    </>
  );
}
