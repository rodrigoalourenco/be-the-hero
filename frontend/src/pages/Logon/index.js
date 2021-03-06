import React, {useState} from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom'

import './style.css';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

export default function Logon() {
    const [id, setId] = useState('');

    const history = useHistory();
    
    async function handleLogon(e) {
        e.preventDefault();

        try {
            const response = await api.post('session', {id});
            alert(`Seu ID de acesso: ${response.data.name}`);

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name); 
            
            history.push('/profile');
        } catch (error) {
            alert('Falha no logon, tente novamente');
        }
    }
    
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>

                <form onSubmit={handleLogon}>
                    <h1>Faça seu logon</h1>
                    <input 
                        placeholder="Sua ID"
                        value={id} 
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>
                </form>

                <Link className="back-link"to="/register">
                    <FiLogIn size={16} color="#E02041"/>
                    Não tenho cadastro
                </Link>

            </section>

            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}