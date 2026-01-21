-- CreateTable
CREATE TABLE "Disciplina" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Disciplina_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Topico" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "estudado" BOOLEAN NOT NULL DEFAULT false,
    "horasEstudo" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "disciplinaId" INTEGER NOT NULL,

    CONSTRAINT "Topico_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Topico" ADD CONSTRAINT "Topico_disciplinaId_fkey" FOREIGN KEY ("disciplinaId") REFERENCES "Disciplina"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
