import mongoose from 'mongoose';

const publicationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 100
  },
  category: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 50
  },
  content: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 2000
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

export default mongoose.model('Publication', publicationSchema);
