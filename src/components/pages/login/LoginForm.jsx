import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoChevronForward } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import TextInput from "../../reusable-ui/TextInput";
import PrimaryButton from "../../reusable-ui/PrimaryButton";
import { theme } from "../../../theme";
import { authenticateUser } from "../../../api/user";
import Welcome from "./Welcome";

export default function LoginForm() {
  // state
  const [username, setUsername] = useState("Aurelien");
  const navigate = useNavigate();

  // comportements
  const handleSubmit = async (event) => {
    event.preventDefault();

    await authenticateUser(username);

    setUsername("");
    navigate(`order/${username}`);
  };

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  // affichage
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <Welcome />
      <div>
        <TextInput
          value={username}
          onChange={handleChange}
          placeholder={"Entrez votre prénom"}
          required
          Icon={<BsPersonCircle className="icon" />}
          className={"text-input-form"}
        />

        <PrimaryButton
          label={"Accéder à mon espace"}
          Icon={<IoChevronForward className="icon" />}
          className={"button"}
        />
      </div>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 40px ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.round};
  font-family: ${theme.fonts.family.Amatic}, cursive;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.SM};
    margin-left: 10px;

    .button :hover {
      color: ${theme.colors.primary};
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.primary};
      transition: all 200ms ease-out;
    }
  }

  .text-input-form {
    padding: 18px 24px;
    margin: 18px 0;
    width: 400px;
    &::placeholder {
      background: ${theme.colors.white};
      color: ${theme.colors.greyMedium};
    }
  }
`;
