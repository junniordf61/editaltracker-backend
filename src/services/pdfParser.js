import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const pdfParse = require('pdf-parse');

export async function parseEdital(buffer) {
  const data = await pdfParse(buffer);
  const linhas = data.text.split('\n');

  let disciplinas = [];
  let disciplinaAtual = null;

  linhas.forEach(linha => {
    const texto = linha.trim();
    if (!texto) return;

    if (texto === texto.toUpperCase()) {
      disciplinaAtual = { nome: texto, topicos: [] };
      disciplinas.push(disciplinaAtual);
    } else if (disciplinaAtual) {
      disciplinaAtual.topicos.push(texto);
    }
  });

  return disciplinas;
}
