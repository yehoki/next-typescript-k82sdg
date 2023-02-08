import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();
mongoose.set(`strictQuery`, false);

const url = process.env.MONGODB_URI;

console.log(`Connecting to  `, url);

mongoose
  .connect(url!)
  .then((result) => {
    console.log(`Connected to MongoDB`);
  })
  .catch((error) => {
    console.log(`Error connecting to MongoDB: `, error.message);
  });

const bookSchema = new mongoose.Schema({
  name: String,
  author: String,
  currentPage: Number,
});

bookSchema.set(`toJSON`, {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Book = mongoose.model('Book', bookSchema);

export default Book;
