// src/services/Lembretes.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/lembretes';

export const criarLembrete = async (nome, data) => {
    try {
        const response = await axios.post(API_URL, { nome, data });
        return response.data;
    } catch (error) {
        throw new Error('Erro ao criar lembrete: ' + error.message);
    }
};

export const obterLembretes = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw new Error('Erro ao obter lembretes: ' + error.message);
    }
};

export const deletarLembrete = async (data, nome) => {
    try {
        const response = await axios.delete(`${API_URL}/${data}/${nome}`);
        return response.data;
    } catch (error) {
        throw new Error('Erro ao deletar lembrete: ' + error.message);
    }
};
