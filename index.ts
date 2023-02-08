import express from 'express';

const app = express();

import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import cors from 'cors';
import booksRouter from '../services/books.js';

dotenv.config();

mongoose.set('strictQuery', false);

const url = process.env.MONGODB_URI;

const port = process.env.PORT;

console.log(`Connecting to  `, url);

mongoose
  .connect(url!)
  .then((result) => {
    console.log(`Connected to MongoDB`);
  })
  .catch((error) => {
    console.log(`Error connecting to MongoDB: `, error.message);
  });

app.use(cors());
app.use(express.json());

app.use('/api/books', booksRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
