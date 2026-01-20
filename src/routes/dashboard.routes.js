import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    dashboard: 'ok',
    message: 'Dashboard route funcionando 🚀'
  });
});

export default router;
