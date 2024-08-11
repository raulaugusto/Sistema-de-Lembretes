import React, { useState } from 'react';
import { registraLembrete } from '../services/Lembretes';
import Input from '../components/Input';
import '../styles/Form.module.scss';

export default function Form({ fetchLembretes }) {
    const [nome, setNome] = useState('');
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

    const CriaLembrete = async () => {
        if (!nome || !data || new Date(data) <= new Date()) {
            alert('Nome e data são obrigatórios, e a data deve ser no futuro.');
            return;
        }

        setLoading(true);
    setError(null);
    try {
        await registraLembrete(nome, data);
        alert('Lembrete criado com sucesso!');
        setNome('');
        setData('');
        fetchLembretes();
    } catch (error) {
        setError(error.message);
    } finally {
        setLoading(false);
    }
    };

    return (
        <div>
            <h2>Novo Lembrete</h2>
            <Input 
                type="text" 
                label="Nome: " 
                placeholder="Nome do Lembrete"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />
            <Input 
                type="date" 
                label="Data: " 
                placeholder="Data do Lembrete"
                value={data}
                onChange={(e) => setData(e.target.value)}
            />
            <button onClick={CriaLembrete} disabled={loading}>
            {loading ? 'Criando...' : 'Criar'}
        </button>
        {error && <p className="error">{error}</p>}
        </div>
    );
}
