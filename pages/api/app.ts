import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  clientPromise;
  res.status(200).json('test');
}
