import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { theme } from "../../theme/design";
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
                IconButton={<IoChevronForward />}
                label={"Accéder a votre espace"} />

        </LoginFormStyled>
    )
}

const LoginFormStyled = styled.form`
    width: 464px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;   
    align-items: center;
    font-family: 'Amatic SC', cursive;
    max-width: 500px;
    min-width: 400px;
    border-radius: 5px;
    h1 {
        color: ${theme.colors.white};
        color: ${theme.fonts.P5};
    }
    h2  {
        color: ${theme.colors.white};
        color: ${theme.fonts.P4};
        margin: 20px 10px 10px;
    }
    hr {
        border: 1.5px solid #f56a2c;
        margin-bottom: 40px;
        width: 400px;
    }

`;
