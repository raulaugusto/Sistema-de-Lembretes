import React from 'react';
import styles from '../styles/ReminderList.module.scss';
import { deletarLembrete } from '../services/Lembretes';

export default function ReminderList({ lembretes = {}, setLembretes }) {
    const isEmpty = Object.keys(lembretes).length === 0;

    const handleDeleteReminder = async (data, nome) => {
        try {
            await deletarLembrete(data, nome);

            const novosLembretes = { ...lembretes };
            novosLembretes[data] = novosLembretes[data].filter(item => item !== nome);

            if (novosLembretes[data].length === 0) {
                delete novosLembretes[data];
            }

            setLembretes(novosLembretes);
        } catch (error) {
            console.error('Erro ao deletar lembrete:', error);
        }
    }

    // Ordena as entradas dos lembretes por data
    const sortedEntries = Object.entries(lembretes).sort(([dateA], [dateB]) => new Date(dateA) - new Date(dateB));

    return (
        <div className={styles.box} id='dateList' >
            <div>
                <div className={styles.list}>
                    {isEmpty ? (
                        <p>Nenhum lembrete disponível.</p>
                    ) : (
                        sortedEntries.map(([date, values]) => (
                            <div id='dateList' key={date}>
                                <strong>{date}:</strong>
                                <ul>
                                    {values.map((value) => (
                                        <li key={`${date}-${value}`}>
                                            {value}
                                            <button 
                                                onClick={() => handleDeleteReminder(date, value)}
                                                aria-label={`Deletar lembrete ${value} na data ${date}`}
                                            >
                                                X
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
