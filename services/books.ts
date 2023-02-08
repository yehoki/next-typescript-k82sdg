import express, { response } from 'express';
import mongoose from 'mongoose';

const booksRouter = express.Router();

var Book = mongoose.model('book');

booksRouter.get('/', async (req, res) => {
  const books: any = await Book.find({});
  res.json(books);
  console.log(res.header);
});

{
  /*booksRouter.post('/', async (req, res) => {
  const body = req.body;

  const user = await User.findById(body.userId);

  const book = new Book({
    name: body.name,
    author: body.author,
    currentPage: body.currentPage,
  });

  const savedBook = await book.save();
  user!.books = user!.books.concat(savedBook._id);
  await user!.save();
  res.json(savedBook);
});

}
booksRouter.get('/:id', async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).end();
  }
});
*/
}
export default booksRouter;
