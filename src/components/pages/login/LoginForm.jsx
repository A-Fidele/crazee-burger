import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { theme } from "../../theme/design";
//import { BsPersonIcon } from 'react-icons/bs';

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
            <div className="input-container">
            
                <input type="text"
                    required
                    placeholder='Entrez votre prénom'
                    value={inputValue}
                    onChange={handleChange} />
            </div>
            <button> Accéder a votre espace <span className="arrow">{'>'}</span> </button>
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
    button {
        background-color: ${theme.colors.primary_burger};
        width: 400px;
        height: 53px;
        border-radius: 5px;
        border: none;
        color: ${theme.colors.white};
        font-size: ${theme.fonts.P0};
        font-weight: 700;
        font-family: 'Arial';
        display: flex;
        justify-content: center;
        align-items: center;
    }
    button:hover {
        background-color: ${theme.colors.white};
        border: 1px solid ${theme.colors.primary_burger};
        color: ${theme.colors.primary_burger};
        cursor: pointer;
    }
    button:active {
        background-color: ${theme.colors.primary_burger};
        border: 1px solid ${theme.colors.white};
        color: ${theme.colors.white};
        cursor: pointer;
    }
    .input-container{
        background-color: ${theme.colors.white};
        border-radius: 5px;
        display: flex;
        align-items: center;
        padding: 18px 24px;
        margin: 18px 0;

        .icon {
            font-size: ${theme.fonts.P0};
            margin-right: 8px;
            color: ${theme.colors.greySemiDark};
        }

        input {
        border-radius: 5px;
        border: none;
        background-color: ${theme.colors.white};
        color: ${theme.colors.dark};
        font-size: ${theme.fonts.P0};
        }

        &::placeholder {
            background: ${theme.colors.white};
            color: ${theme.colors.greyLight};
        }

        }
    
    .arrow {
        margin-left: 10px;
    }
`;
