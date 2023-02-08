import mongoose from 'mongoose';
var Book = mongoose.model('Book');

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  console.log(method);
  try {
    const books = await Book.find({});
    res.status(200).json({ success: true, data: books });
    console.log('test');
  } catch (err) {
    res.status(400).json({ success: false });
    console.log('test');
  }
}
