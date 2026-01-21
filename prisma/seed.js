import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed...');

  const disciplina = await prisma.disciplina.create({
    data: {
      nome: 'Direito Constitucional',
      topicos: {
        create: [
          { nome: 'Constituição Federal', estudado: false, horasEstudo: 0 },
          { nome: 'Direitos Fundamentais', estudado: false, horasEstudo: 0 },
          { nome: 'Controle de Constitucionalidade', estudado: false, horasEstudo: 0 },
        ],
      },
    },
  });

  console.log('✅ Disciplina criada:', disciplina.nome);
}

main()
  .catch((e) => {
    console.error('❌ Erro no seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
