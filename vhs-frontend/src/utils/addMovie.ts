import axios from 'axios';

export async function addMovie(newMovie: VHSForm) {
  try {
    const response = await axios.post('http://localhost:3000/api/vhs', newMovie);
    return response.data;
  } catch (error) {
    console.error('Error adding movie:', error);
    throw new Error('Failed to add movie');
  }
}