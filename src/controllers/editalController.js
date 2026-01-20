import { parseEdital } from '../services/pdfParser.js';

export async function uploadEdital(req, res) {
  const estrutura = await parseEdital(req.file.buffer);
  res.json(estrutura);
}
