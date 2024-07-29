import axios from 'axios';

export const deleteMovie = async (id: number) => {
  try {
    const response = await axios.delete(`http://localhost:3000/api/vhs/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting item:", error);
    throw error;
  }
};
