import { Router } from 'express';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { criarCronograma } from '../controllers/cronogramaController.js';

const router = Router();

router.post('/gerar', authMiddleware, criarCronograma);

export default router;
