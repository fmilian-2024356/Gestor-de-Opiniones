import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import publicationRoutes from './routes/publication.routes.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/publications', publicationRoutes);

const PORT = process.env.PORT || 3001;

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
