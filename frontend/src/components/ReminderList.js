import React from 'react';
import './ReminderList.css';
import { deletarLembrete } from '../services/Lembretes';

export default function ReminderList({ lembretes = {}, setLembretes }) {
    const isEmpty = Object.keys(lembretes).length === 0;

    const RemoverLembrete = async (data, nome) => {
        try {
            await deletarLembrete(data, nome); // Remove o lembrete do backend

            // Remove o lembrete do estado local
            const novosLembretes = { ...lembretes };
            novosLembretes[data] = novosLembretes[data].filter(item => item !== nome);

            // Se o array de lembretes de uma data ficar vazio, remova a chave dessa data
            if (novosLembretes[data].length === 0) {
                delete novosLembretes[data];
            }

            setLembretes(novosLembretes); // Atualiza o estado com os lembretes restantes
        } catch (error) {
            console.error('Erro ao deletar lembrete:', error);
        }
    }

    return (
        <div className="box">
            <div>
                <h2>Lista de Lembretes</h2>
                <div className='list'>
                    {isEmpty ? (
                        <p>Nenhum lembrete disponível.</p>
                    ) : (
                        Object.entries(lembretes).map(([date, values]) => (
                            <div key={date}>
                                <strong>{date}:</strong>
                                <ul>
                                    {values.map((value, index) => (
                                        <li key={index}>
                                            {value}
                                            <button onClick={() => RemoverLembrete(date, value)}>
                                                Apagar
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    )}
                </div>
            </div>           
        </div>
    );
}
