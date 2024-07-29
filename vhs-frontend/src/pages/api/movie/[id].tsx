import { NextApiRequest, NextApiResponse } from 'next';
import { Client } from 'pg';

const deleteMovieById = async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); 
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'DELETE') {
    const { id } = req.query;

    const client = new Client({
      connectionString: process.env.DATABASE_URL,
    });

    try {
      await client.connect();
      const result = await client.query('DELETE FROM vhs WHERE id = $1 RETURNING *', [id]);
      if (result.rowCount === 0) {
        res.status(404).json({ error: 'Item not found' });
      } else {
        res.status(200).json(result.rows[0]);
      }
    } catch (error) {
      console.error('Error deleting item:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } finally {
      await client.end();
    }
  } else {
    res.setHeader('Allow', ['DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default deleteMovieById;
