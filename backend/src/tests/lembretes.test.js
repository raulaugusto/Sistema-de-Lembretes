// tests/lembretes.test.js
const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

let lembretes = {};

app.get('/lembretes', (req, res) => {
  res.json(lembretes);
});

app.post('/lembretes', (req, res) => {
  const { nome, data } = req.body;
  const dataFormatada = new Date(data).toISOString().split('T')[0];

  if (!nome || !data || new Date(data) <= new Date()) {
    return res.status(400).json({ error: 'Nome e data são obrigatórios, e a data deve ser no futuro.' });
  }

  if (!lembretes[dataFormatada]) {
    lembretes[dataFormatada] = [];
  }
  lembretes[dataFormatada].push(nome);
  res.status(201).json({ nome, data: dataFormatada });
});

app.delete('/lembretes/:data/:nome', (req, res) => {
  const { data, nome } = req.params;
  if (lembretes[data]) {
    lembretes[data] = lembretes[data].filter(l => l !== nome);
    if (lembretes[data].length === 0) {
      delete lembretes[data];
    }
    return res.status(200).json({ mensagem: 'Lembrete removido.' });
  }
  res.status(404).json({ error: 'Lembrete não encontrado.' });
});

describe('Testes de API de Lembretes', () => {
  it('Deve retornar todos os lembretes', async () => {
    const response = await request(app).get('/lembretes');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({});
  });

  it('Deve criar um lembrete', async () => {
    const response = await request(app)
      .post('/lembretes')
      .send({ nome: 'Teste', data: new Date(Date.now() + 86400000).toISOString() }); // data no futuro

    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual({ nome: 'Teste', data: new Date(Date.now() + 86400000).toISOString().split('T')[0] });
  });

  it('Deve retornar erro ao criar lembrete com data no passado', async () => {
    const response = await request(app)
      .post('/lembretes')
      .send({ nome: 'Teste', data: new Date(Date.now() - 86400000).toISOString() }); // data no passado

    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe('Nome e data são obrigatórios, e a data deve ser no futuro.');
  });

  it('Deve deletar um lembrete', async () => {
    await request(app)
      .post('/lembretes')
      .send({ nome: 'Teste', data: new Date(Date.now() + 86400000).toISOString() }); // data no futuro

    const response = await request(app).delete('/lembretes/' + new Date(Date.now() + 86400000).toISOString().split('T')[0] + '/Teste');
    expect(response.statusCode).toBe(200);
    expect(response.body.mensagem).toBe('Lembrete removido.');
  });

  it('Deve retornar erro ao deletar lembrete não existente', async () => {
    const response = await request(app).delete('/lembretes/2024-01-01/NãoExiste');
    expect(response.statusCode).toBe(404);
    expect(response.body.error).toBe('Lembrete não encontrado.');
  });
});
