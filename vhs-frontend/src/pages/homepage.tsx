import { useVHSData } from '@/customHooks/useVHSdata';
import { Item } from '@/styles/styledComponents';

interface HomepageProps {
    searchQuery: string;
  }
  
  const Homepage = ({ searchQuery }: HomepageProps) => {
  const { data, loading, error } = useVHSData(searchQuery);

  if (loading) {
    return <p>Loading...</p>; 
  }
  if (error) {
    return <p>{error}</p>; 
  }

  return (
    <>
      {data.map(item => (
        <Item key={item.id}>{item.title}</Item>
      ))}
    </>
  );
};

export default Homepage;
