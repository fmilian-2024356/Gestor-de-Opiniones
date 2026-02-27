import Joi from 'joi';

export const publicationSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  category: Joi.string().min(3).max(50).required(),
  content: Joi.string().min(10).max(2000).required()
});
