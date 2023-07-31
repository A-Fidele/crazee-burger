import React, { useState } from "react";
import { Link } from "react-router-dom";
//import { useHistory } from 'react-router-dom';

export default function LoginForm() {

    const [prenom, setPrenom] = useState('');
    //const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        //history.push('./OrderPage');
        setPrenom('');
    };

    const handleChange = (e) => {
        setPrenom(e.target.value)
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
            <input type="text" required placeholder='Entrez votre prenom' value={prenom} onChange={handleChange} />
            <button> Accedez a votre espace </button><Link to='/order'> Order Page</Link>
        </form>

    )
}