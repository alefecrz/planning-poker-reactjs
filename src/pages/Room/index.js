import React, { useState } from 'react';
// import api from '../../services/api';

export default function Room({ history }) {
    const [vote, setVote] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        // const response = await api.post('/sessions', {
        //     username,
        // });

        // const { _id } = response.data;

        // const username = localStorage.getItem('user');
    }

    function handleBack() {
        history.push('/');
    }

    return (
        <>
            <button className="btn" type="button" onChange={handleBack}>
                voltar
            </button>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    id="email"
                    type="text"
                    placeholder="Digite seu nome"
                    value={vote}
                    onChange={event => setVote(event.target.value)}
                />

                <button className="btn" type="submit">
                    Entrar
                </button>
            </form>
        </>
    );
}
