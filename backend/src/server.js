const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const lembretesRoutes = require('./routes/lembretesRoutes');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());


// Usar as rotas de lembretes
app.use(lembretesRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
