import { useEffect, useState } from 'react';
import axios from 'axios';

export function useVHSData(query: string) {
  const [data, setData] = useState<VHS[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get<VHS[]>('http://localhost:3000/api/vhs')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching data');
        setLoading(false);
      });
  }, []);

  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return { data: filteredData, loading, error };

}
