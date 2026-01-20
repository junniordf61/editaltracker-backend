import prisma from '../database/connection.js';

export async function gerarCronograma(userId, horasDia, diasSemana) {
  const subt = await prisma.subtopico.findMany({
    where: { status: { not: 'DOMINADO' } },
    include: { topico: { include: { disciplina: true } } }
  });

  const totalMinutos = horasDia * diasSemana * 60;
  const tempoPorSub = Math.floor(totalMinutos / subt.length);

  let cronograma = [];
  let dataAtual = new Date();

  for (let s of subt) {
    cronograma.push({
      userId,
      data: new Date(dataAtual),
      disciplinaId: s.topico.disciplina.id,
      subtopicoId: s.id,
      tempoPlanejadoMin: tempoPorSub,
      tipo: 'ESTUDO'
    });

    dataAtual.setDate(dataAtual.getDate() + 1);
  }

  await prisma.cronograma.createMany({ data: cronograma });
  return cronograma;
}
