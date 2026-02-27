import express from 'express';
import { createPublication, listPublications, getPublicationById, updatePublication, deletePublication } from '../controllers/publication.controller.js';
import { authenticateJWT } from '../middlewares/auth.js';
import { publicationSchema } from '../validators/publication.validator.js';
import Joi from 'joi';

const router = express.Router();

function validatePublication(req, res, next) {
  const { error } = publicationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
}

router.get('/', listPublications);
router.get('/:id', getPublicationById);
router.post('/', authenticateJWT, validatePublication, createPublication);
router.put('/:id', authenticateJWT, validatePublication, updatePublication);
router.delete('/:id', authenticateJWT, deletePublication);

export default router;
