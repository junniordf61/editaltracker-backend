import prisma from '../database/connection.js';

export async function getNotificacoes(req, res) {
  const userId = req.user.id;

  const pendentes = await prisma.revisao.count({
    where: {
      userId,
      realizada: false,
      dataAgendada: { lte: new Date() }
    }
  });

  res.json({
    revisoesPendentes: pendentes
  });
}
