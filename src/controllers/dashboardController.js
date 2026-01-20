import prisma from '../database/connection.js';

export async function getDashboard(req, res) {
  const subtotais = await prisma.subtopico.findMany();
  const estudos = await prisma.estudo.findMany();

  const total = subtotais.length;
  const dominados = subtotais.filter(s => s.status === 'DOMINADO').length;

  const tempoTotal = estudos.reduce(
    (acc, e) => acc + e.tempoEstudadoMin,
    0
  );

  const desempenhoMedio =
    estudos.reduce((acc, e) => acc + e.percentualQuestoes, 0) /
    (estudos.length || 1);

  res.json({
    percentualConcluido: total ? (dominados / total) * 100 : 0,
    tempoTotalHoras: (tempoTotal / 60).toFixed(1),
    desempenhoMedio: desempenhoMedio.toFixed(1),
  });
}
