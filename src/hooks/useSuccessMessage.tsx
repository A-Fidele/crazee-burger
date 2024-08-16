import { useState } from "react";

export const useSuccessMessage = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const displaySuccessMessage = () => {
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
    }, 2000);
  };

  return { isSuccess, displaySuccessMessage };
};
