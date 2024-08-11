let lembretes = {}; // Este será o "banco de dados" temporário

// Obter todos os lembretes
exports.getLembretes = (req, res) => {
  res.json(lembretes);
};

// Criar um novo lembrete
exports.createLembrete = (req, res) => {
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
};

// Deletar um lembrete
exports.deleteLembrete = (req, res) => {
  const { data, nome } = req.params;
  if (lembretes[data]) {
    lembretes[data] = lembretes[data].filter(l => l !== nome);
    if (lembretes[data].length === 0) {
      delete lembretes[data];
    }
    return res.status(200).json({ mensagem: 'Lembrete removido.' });
  }
  res.status(404).json({ error: 'Lembrete não encontrado.' });
};
