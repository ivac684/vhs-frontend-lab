import { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors'; 
import { Client } from 'pg';

const cors = Cors({
  methods: ['GET', 'HEAD', 'POST', 'DELETE', 'PATCH'],
  origin: 'http://localhost:3001', 
  optionsSuccessStatus: 200,
});

function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: Function) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

const editMovieById = async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, cors);

  if (req.method === 'PATCH') {
    const { id } = req.query;
    const {
      title,
      description,
      genre,
      duration,
      releasedAt,
      rentalPrice,
      rentalDuration,
      quantity,
      thumbnail,
    } = req.body;

    const client = new Client({
      connectionString: process.env.DATABASE_URL,
    });

    try {
      await client.connect();
      const result = await client.query(
        `UPDATE vhs SET 
          title = COALESCE($1, title), 
          description = COALESCE($2, description), 
          genre = COALESCE($3, genre), 
          duration = COALESCE($4, duration), 
          releasedAt = COALESCE($5, releasedAt), 
          rentalPrice = COALESCE($6, rentalPrice), 
          rentalDuration = COALESCE($7, rentalDuration), 
          quantity = COALESCE($8, quantity), 
          thumbnail = COALESCE($9, thumbnail) 
        WHERE id = $10 RETURNING *`,
        [title, description, genre, duration, releasedAt, rentalPrice, rentalDuration, quantity, thumbnail, id]
      );
      if (result.rowCount === 0) {
        res.status(404).json({ error: 'Item not found' });
      } else {
        res.status(200).json(result.rows[0]);
      }
    } catch (error) {
      console.error('Error updating item:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } finally {
      await client.end();
    }
  } else {
    res.setHeader('Allow', ['PATCH']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default editMovieById;
