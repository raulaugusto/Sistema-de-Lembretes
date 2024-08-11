import React, { useState } from 'react';
import '../styles/Form.module.scss';
import Input from './Input';
import { registraLembrete } from '../services/Lembretes';

const Form = ({ fetchLembretes }) => {
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [erro, setErro] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!nome || !data || new Date(data) <= new Date()) {
      setErro('Nome e data são obrigatórios, e a data deve ser no futuro.');
      return;
    }
    try {
      await registraLembrete(nome, data);
      fetchLembretes();
      setNome(''); // Limpa o campo de nome
      setData(''); // Limpa o campo de data
      setErro(''); // Limpa o erro
    } catch (error) {
      setErro(error.message);
    }
  };

  return (
    <form data-testid="form" onSubmit={handleSubmit}>
      <fieldset>
        <legend><h2>Novo Lembrete</h2></legend>
        <div>
          <Input
            htmlFor="nome"
            id="nome"
            label="Nome: "
            type="text"
            placeholder="Nome do Lembrete"
            value={nome} // Adiciona o valor controlado
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <Input
            htmlFor="data"
            id="data"
            label="Data: "
            type="date"
            value={data} // Adiciona o valor controlado
            onChange={(e) => setData(e.target.value)}
          />
        </div>
      <button type="submit">Criar</button>
      {erro && <p role="alert">{erro}</p>}
      </fieldset>
    </form>
  );
};

export default Form;
