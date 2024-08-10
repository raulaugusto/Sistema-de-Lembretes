import React, { useState } from 'react';
import { criarLembrete } from '../services/Lembretes';
import Input from '../components/Input';
import './Form.css';

export default function Form({ fetchLembretes }) {
    const [nome, setNome] = useState('');
    const [data, setData] = useState('');

    const CriaLembrete = async () => {
        if (!nome || !data || new Date(data) <= new Date()) {
            alert('Nome e data são obrigatórios, e a data deve ser no futuro.');
            return;
        }

        try {
            await criarLembrete(nome, data);
            alert('Lembrete criado com sucesso!');
            setNome('');
            setData('');
            fetchLembretes(); // Atualiza a lista de lembretes
        } catch (error) {
            alert(error.message);
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
            <button id='create' onClick={CriaLembrete}>Criar</button>
        </div>
    );
}
