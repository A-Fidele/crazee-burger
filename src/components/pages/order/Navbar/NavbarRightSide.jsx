import { styled } from "styled-components";
import Profile from "./Profile";
import { theme } from "../../../../theme";
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer, toast } from "react-toastify";
//import { ToggleButton } from "./ToggleButton";
import { useState } from "react";
import ToggleButton from "./ToggleButton";

export default function NavbarRightSide({ username }) {
  const [isChecked, setIsChecked] = useState(false);
  
  const onToogle = () => {
    if (!isChecked){
      setIsChecked(true);
      toast.info("Mode admin activé", {
      // icon: <FaUserSecret size={30} />,
      theme: "dark",
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
     } else {
      setIsChecked(false)
    }
  }  
    

  return (
    <NavbarRightSideStyled className="right-side">
      <ToggleButton onToggle={onToogle} labelIfChecked="Désactivez le mode Admin" labelIfUnchecked="Activer le mode Admin"/>
      <ToastContainer className="toaster" bodyClassName="body-toast" />
      <Profile username={username} />
    </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;

  .admin-button {
    background: lightblue;
  }

  .profile {
    background: yellow;
  }

  .toaster {
    max-width: 300px;

  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`
