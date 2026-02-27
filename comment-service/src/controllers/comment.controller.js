import Comment from '../models/Comment.js';

export const createComment = async (req, res, next) => {
  try {
    const { publicationId, content } = req.body;
    const comment = new Comment({
      publicationId,
      content,
      author: req.user.username,
      authorId: req.user.id
    });
    await comment.save();
    res.status(201).json(comment);
  } catch (error) {
    next(error);
  }
};

export const listCommentsByPublication = async (req, res, next) => {
  try {
    const { publicationId } = req.params;
    const comments = await Comment.find({ publicationId }).sort({ createdAt: -1 });
    res.json(comments);
  } catch (error) {
    next(error);
  }
};

export const updateComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) return res.status(404).json({ message: 'Comentario no encontrado' });
    if (comment.authorId !== req.user.id) {
      return res.status(403).json({ message: 'No autorizado para editar este comentario' });
    }
    comment.content = req.body.content;
    comment.updatedAt = new Date();
    await comment.save();
    res.json(comment);
  } catch (error) {
    next(error);
  }
};

export const deleteComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) return res.status(404).json({ message: 'Comentario no encontrado' });
    if (comment.authorId !== req.user.id) {
      return res.status(403).json({ message: 'No autorizado para eliminar este comentario' });
    }
    await comment.deleteOne();
    res.json({ message: 'Comentario eliminado' });
  } catch (error) {
    next(error);
  }
};
