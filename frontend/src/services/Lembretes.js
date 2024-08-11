import axios from 'axios';

const API_URL = 'http://localhost:5000/lembretes';

export const registraLembrete = async (nome, data) => {
    try {
        const response = await axios.post(API_URL, { nome, data });
        return response.data;
    } catch (error) {
        console.error('Erro ao criar lembrete: ' + error.message);
        throw new Error(error.response?.data?.error || 'Erro desconhecido ao criar lembrete');
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
