import express from 'express';
import multer from 'multer';
import { uploadEdital } from '../controllers/editalController.js';

const router = express.Router();
const upload = multer();

router.post('/upload', upload.single('file'), uploadEdital);

export default router;
