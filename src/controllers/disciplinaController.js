import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function listarDisciplinas(req, res) {
  try {
    const disciplinas = await prisma.disciplina.findMany({
      include: {
        topicos: true,
      },
    });

    return res.json(disciplinas);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: 'Erro ao buscar disciplinas',
    });
  }
}
