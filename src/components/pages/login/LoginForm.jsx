import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import { useHistory } from 'react-router-dom';

export default function LoginForm() {

    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`order/${ inputValue }`);
        setInputValue('');
    };

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <form action='submit' onSubmit={handleSubmit}>
            <div>
                <h1>Bienvenue chez nous!!!</h1>
            </div>
            <br />
            <div>
                <h2>Connectez - vous </h2>
            </div>
            <input type="text" required placeholder='Entrez votre prenom' value={inputValue} onChange={handleChange} />
            <button> Accedez a votre espace </button>
        </form>

    )
}