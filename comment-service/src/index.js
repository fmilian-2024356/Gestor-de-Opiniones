import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import commentRoutes from './routes/comment.routes.js';
import { globalErrorHandler } from './middlewares/error.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/comments', commentRoutes);

app.use(globalErrorHandler);

const PORT = process.env.PORT || 3002;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});
