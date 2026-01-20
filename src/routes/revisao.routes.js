import express from 'express';
import {
  listarRevisoesHoje,
  concluirRevisao
} from '../controllers/revisaoController.js';

import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

// 🔐 ROTA PROTEGIDA
router.get('/hoje', authMiddleware, listarRevisoesHoje);

// 🔐 ROTA PROTEGIDA
router.put('/:id/concluir', authMiddleware, concluirRevisao);

export default router;
