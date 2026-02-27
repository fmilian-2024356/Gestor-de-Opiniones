import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  publicationId: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 1000
  },
  author: {
    type: String,
    required: true
  },
  authorId: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date
  }
});

export default mongoose.model('Comment', commentSchema);
