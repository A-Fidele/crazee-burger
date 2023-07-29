import React, { useState } from "react";


export default function LoginForm() {

    const [prenom, setPrenom] = useState('');
    const handleSubmit = (event) => {
      event.preventDefault();
      alert('Bonjour ' + prenom);
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
            <button> Accedez a votre espace </button>
        </form>

    )
}