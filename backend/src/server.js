const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Serve o favicon
app.use('/favicon.ico', express.static(path.join(__dirname, 'favicon.ico')));

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

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
