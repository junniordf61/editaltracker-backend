import prisma from '../database/connection.js';

export async function criarRevisoes(subtopicoId, userId) {
  const hoje = new Date();

  const revisoes = [
    { tipo: 'R24H', dias: 1 },
    { tipo: 'R7D', dias: 7 },
    { tipo: 'R30D', dias: 30 },
  ];

  for (const r of revisoes) {
    const data = new Date(hoje);
    data.setDate(data.getDate() + r.dias);

    await prisma.revisao.create({
      data: {
        userId,
        subtopicoId,
        tipo: r.tipo,
        dataAgendada: data,
        realizada: false,
      },
    });
  }
}
