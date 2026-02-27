import express from 'express';
import { createComment, listCommentsByPublication, updateComment, deleteComment } from '../controllers/comment.controller.js';
import { authenticateJWT } from '../middlewares/auth.js';
import { commentSchema } from '../validators/comment.validator.js';
import Joi from 'joi';

const router = express.Router();

function validateComment(req, res, next) {
  const { error } = commentSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
}

router.get('/publication/:publicationId', listCommentsByPublication);
router.post('/', authenticateJWT, validateComment, createComment);
router.put('/:id', authenticateJWT, validateComment, updateComment);
router.delete('/:id', authenticateJWT, deleteComment);

export default router;
