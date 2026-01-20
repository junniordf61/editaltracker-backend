import { gerarCronograma } from '../services/cronogramaService.js';

export async function criarCronograma(req, res) {
  const { horasDia, diasSemana } = req.body;
  const userId = req.user.id;

  const cronograma = await gerarCronograma(userId, horasDia, diasSemana);
  res.json(cronograma);
}
