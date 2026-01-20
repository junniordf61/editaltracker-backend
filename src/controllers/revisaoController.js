import prisma from '../database/connection.js';

export async function listarRevisoesHoje(req, res) {
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  const revisoes = await prisma.revisao.findMany({
    where: {
      dataAgendada: { lte: new Date() },
      realizada: false,
    },
    include: {
      subtopico: true,
    },
  });

  res.json(revisoes);
}

export async function concluirRevisao(req, res) {
  const { id } = req.params;

  const revisao = await prisma.revisao.update({
    where: { id },
    data: {
      realizada: true,
      dataRealizada: new Date(),
    },
  });

  res.json(revisao);
}
