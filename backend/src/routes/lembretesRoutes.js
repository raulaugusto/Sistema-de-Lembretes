const express = require('express');
const router = express.Router();
const lembretesController = require('../controllers/lembretesController');

// Rota para obter todos os lembretes
router.get('/lembretes', lembretesController.getLembretes);

// Rota para criar um novo lembrete
router.post('/lembretes', lembretesController.createLembrete);

// Rota para deletar um lembrete
router.delete('/lembretes/:data/:nome', lembretesController.deleteLembrete);

module.exports = router;
