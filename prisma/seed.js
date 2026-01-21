import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.disciplina.create({
    data: {
      nome: 'Direito Constitucional',
      topicos: {
        create: [
          { nome: 'Constituição', horasEstudo: 0 },
          { nome: 'Direitos Fundamentais', horasEstudo: 0 },
        ],
      },
    },
  });

  await prisma.disciplina.create({
    data: {
      nome: 'Português',
      topicos: {
        create: [
          { nome: 'Interpretação de Texto', horasEstudo: 0 },
          { nome: 'Gramática', horasEstudo: 0 },
        ],
      },
    },
  });

  console.log('🌱 Seed executado com sucesso');
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
