import { Router } from 'express';
import { listarDisciplinas } from '../controllers/disciplinaController.js';

const router = Router();

export async function listarDisciplinas(req, res) {
  return res.json({ ok: true });
}

router.get('/', listarDisciplinas);




export default router;
