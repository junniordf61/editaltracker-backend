import express from 'express';
import cors from 'cors';
import editalRoutes from './routes/edital.routes.js';
import dashboardRoutes from './routes/dashboard.routes.js';
import cronogramaRoutes from './routes/cronograma.routes.js';
import authRoutes from './routes/auth.routes.js';
import notificacaoRoutes from './routes/notificacao.routes.js';

const app = express();


app.get('/', (req, res) => {
  res.json({ status: 'API ONLINE 🚀' });
});

app.use(cors());
app.use(express.json());
app.use('/edital', editalRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/cronograma', cronogramaRoutes);
app.use('/auth', authRoutes);
app.use('/notificacoes', notificacaoRoutes);

export default app;
