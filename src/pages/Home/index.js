import React, { useState } from 'react';
// import api from '../../services/api';

export default function Home({ history }) {
    const [username, setUsername] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        // const response = await api.post('/sessions', {
        //     username,
        // });

        // const { _id } = response.data;

        localStorage.setItem('user', username);

        history.push('/room');
    }

    return (
        <>
            <p>
                Ofereça <strong>spots</strong> para programadores e encontre{' '}
                <strong>talentos</strong> para sua empresa
            </p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    id="email"
                    type="text"
                    placeholder="Digite seu nome"
                    value={username}
                    onChange={event => setUsername(event.target.value)}
                />

                <button className="btn" type="submit">
                    Entrar
                </button>
            </form>
        </>
    );
}
