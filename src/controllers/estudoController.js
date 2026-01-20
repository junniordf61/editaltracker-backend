import prisma from '../database/connection.js';
import { criarRevisoes } from '../services/revisaoService.js';

export async function registrarEstudo(req, res) {
  const {
    subtopicoId,
    tempoEstudadoMin,
    percentualQuestoes,
  } = req.body;

  const userId = req.user.id;

  const estudo = await prisma.estudo.create({
    data: {
      subtopicoId,
      tempoEstudadoMin,
      percentualQuestoes,
    },
  });

  await criarRevisoes(subtopicoId, userId);

  res.json(estudo);
}
