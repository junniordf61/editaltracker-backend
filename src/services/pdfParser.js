import pdf from 'pdf-parse';

export async function parseEdital(buffer) {
  const data = await pdf(buffer);
  const linhas = data.text.split('\n');

  let disciplinas = [];
  let disciplinaAtual = null;

  linhas.forEach(linha => {
    if (linha === linha.toUpperCase()) {
      disciplinaAtual = { nome: linha, topicos: [] };
      disciplinas.push(disciplinaAtual);
    } else if (disciplinaAtual) {
      disciplinaAtual.topicos.push(linha);
    }
  });

  return disciplinas;
}
