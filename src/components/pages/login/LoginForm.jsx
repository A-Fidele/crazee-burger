import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { theme } from "../../../theme/design";
import { IoChevronForward } from 'react-icons/io5';
import { BsPersonCircle } from "react-icons/bs";
import TextInput from "../../reusable-ui/TextInput";
import SubmitButton from "../../reusable-ui/SubmitButton";


export default function LoginForm() {

    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`order/${inputValue}`);
        setInputValue('');
    };

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <LoginFormStyled action='submit' onSubmit={handleSubmit}>
            <div>
                <h1>Bienvenue chez nous!</h1>
            </div>
            <hr />
            <div>
                <h2>Connectez-vous </h2>
            </div>

            <TextInput onChange={handleChange}
                value={inputValue}
                placeholder={"Entrez votre prénom"}
                Icon={<BsPersonCircle className="icon" />}
                required />
            <SubmitButton
                IconButton={<IoChevronForward className="arrow" />}
                label={"Accéder a votre espace"}
            />

        </LoginFormStyled>
    )
}

const LoginFormStyled = styled.form`
    text-align: center;
    max-width: 500px;
    min-width: 400px;
    margin: 0px auto;
    padding: 40px ${theme.spacing.lg};
    border-radius: ${theme.borderRadius.round};
    font-family: "Amatic SC", cursive;
    display: flex;
    flex-direction: column;
    h1 {
        color: ${theme.colors.white};
        color: ${theme.fonts.P6};
    }
    h2  {
        margin: 20px 10px 10px;
        color: ${theme.colors.white};
        font-size: ${theme.fonts.P4};
    }
    hr {
        border: 1.5px solid #f56a2c;
        margin-bottom: ${theme.gridUnit * 5}px;
        width: 400px;
    }
    .arrow {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: ${theme.fonts.P0};
        margin-left: 10px;
    }
`;
