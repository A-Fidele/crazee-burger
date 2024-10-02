import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage() {

    return(
        <div>
            <h1>ErrorPage</h1>
            <Link to='/' ><button>Retourner a la page d'acceuil</button></Link>
        </div>
    )
}