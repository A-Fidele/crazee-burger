import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { theme } from "../../theme/design";
//import { PiUserCircleFill } from 'react-icons/pi';

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
            <div className='ligne'></div>
            <div>
                <h2>Connectez-vous </h2>
            </div>
            <input className="input" type="text" required placeholder='Entrez votre prénom' value={inputValue} onChange={handleChange} />
            <button> Accédez a votre espace <span>{'>'}</span> </button>
        </LoginFormStyled>
    )
}

const LoginFormStyled = styled.form`
    border: 1px solid black;
    width: 464px;
    margin: auto;
    margin-top: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Amatic SC', cursive;
    ligne {
        border: 3px solid #f56a2c;
        width: 400px;
        height: 3px;
    }
    button {
        background-color: ${theme.colors.primary_burger};
        width: 400px;
        height: 53px;
        border-radius: 5px;
        color: ${theme.colors.white};
        font-size: ${theme.fonts.P0};
        font-weight: 700;
        font-family: 'Arial';
    }
    button:hover {
        background-color: ${theme.colors.white};
        border: 1px solid ${theme.colors.primary_burger};
        color: ${theme.colors.primary_burger};
        cursor: pointer;
    }
    input {
        width: 400px;
        height: 53px;
        margin-bottom: 18px;
        border-radius: 5px;
        border: 0px;
        background-color: ${theme.colors.white};
        color: #d3d3d3;
        font-size: ${theme.fonts.P0};
        
    }
`;
