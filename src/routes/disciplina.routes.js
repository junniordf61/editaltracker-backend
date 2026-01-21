import { Router } from 'express';
import { listarDisciplinas } from '../controllers/disciplinaController.js';

const router = Router();

router.get('/', listarDisciplinas);

export default router;
