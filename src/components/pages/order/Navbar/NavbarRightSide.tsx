import { styled } from "styled-components";
import Profile from "./Profile";
import { theme } from "../../../../theme";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import ToggleButton from "./ToggleButton";
import UserContext from "../../../../context/UserContext";
import { useContext } from "react";

type NavbarRightSideProps = { username: string | "" }

export default function NavbarRightSide({ username }: NavbarRightSideProps) {
  const [isChecked, setIsChecked] = useState(false);
  const { isAdmin, setIsAdmin } = useContext(UserContext);

  const onToogle = () => {
    if (!isChecked) {
      setIsAdmin(true);
      setIsChecked(true);
      toast.info("Mode admin activé", {
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setIsAdmin(!isAdmin);
  };

  return (
    <NavbarRightSideStyled className="right-side">
      <ToggleButton
        isChecked={isAdmin}
        onToggle={onToogle}
        labelIfChecked="Désactivez le mode Admin"
        labelIfUnchecked="Activer le mode Admin"
      />
      <ToastContainer className="toaster" bodyClassName="body-toast" />
      <Profile username={username} />
    </NavbarRightSideStyled>
  );
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
`;
