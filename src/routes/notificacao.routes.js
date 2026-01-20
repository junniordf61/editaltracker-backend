import express from 'express';
import { getNotificacoes } from '../controllers/notificacaoController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

// 🔔 ROTA PROTEGIDA
router.get('/', authMiddleware, getNotificacoes);

export default router;
