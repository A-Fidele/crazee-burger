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
            <input type="text" required placeholder='Entrez votre prénom' value={inputValue} onChange={handleChange} />
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
    h1, h2 {
        color: ${theme.colors.white};
    }
    .ligne {
        border: 3px solid #f56a2c;
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
    .arrow {
        margin-left: 10px;
    }
`;
