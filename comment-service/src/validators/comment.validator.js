import Joi from 'joi';

export const commentSchema = Joi.object({
  publicationId: Joi.string().required(),
  content: Joi.string().min(1).max(1000).required()
});
