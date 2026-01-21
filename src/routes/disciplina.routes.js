import { Router } from 'express';
import { listarDisciplinas as listarDisciplinasController } 
  from '../controllers/disciplinaController.js';

const router = Router();          // ✅ primeiro cria o router

router.get('/', listarDisciplinasController); // ✅ depois usa

export default router;
