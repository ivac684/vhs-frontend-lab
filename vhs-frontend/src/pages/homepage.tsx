import React, { useEffect, useState } from 'react';
import { useVHSData } from '@/customHooks/useVHSdata';
import { 
  Item, 
  ItemImageContainer, 
  ItemImage, 
  ItemDetails, 
  ItemTitle, 
  ItemInfo, 
  ItemsRow, 
  ItemGenre, 
  ItemDuration, 
  ItemYear, 
  ItemAvailability, 
  GenreButton, 
  GenreDropdown, 
  GenreItem, 
  GenreButtonContainer, 
  EditIcon,
  DeleteIcon
} from '@/styles/styledComponents';
import ItemContainer from '@/components/ItemContainer';
import { deleteMovie } from '@/utils/deleteMovie';

interface HomepageProps {
    searchQuery: string;
}

const Homepage = ({ searchQuery }: HomepageProps) => {
  const { data, loading, error } = useVHSData(searchQuery);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [movieData, setMovieData] = useState(data);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  const handleDelete = async (id: number) => {
    try {
      await deleteMovie(id);
      setMovieData(prevMovieData => prevMovieData.filter(item => item.id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const genres = Array.from(new Set(data.flatMap(item => item.genre)));

  return (
    <>
      <GenreButtonContainer>
        <GenreButton onClick={toggleDropdown}>GENRE</GenreButton>
        {dropdownVisible && (
          <GenreDropdown>
            {genres.map((genre, index) => (
              <GenreItem key={index}>{genre}</GenreItem>
            ))}
          </GenreDropdown>
        )}
      </GenreButtonContainer>
      <ItemContainer>
        {data.map(item => (
          <Item key={item.id}>
            <ItemImageContainer>
              <ItemImage src='/placeholder.png' alt={item.title} />
            </ItemImageContainer>
            <ItemDetails>
            <ItemsRow>
              <ItemTitle>{item.title}</ItemTitle> <ItemYear>({item.releasedAt})</ItemYear>
              </ItemsRow>
              <ItemsRow>
                <ItemGenre><b>{item.genre}</b></ItemGenre>
                <ItemDuration>{item.duration} min</ItemDuration>
              </ItemsRow>
              <ItemsRow>
              <ItemAvailability>{item.quantity > 0 ? 'AVAILABLE' : 'NOT AVAILABLE'}</ItemAvailability>
              <EditIcon /> 
              <DeleteIcon onClick={() => handleDelete(item.id)} />
              </ItemsRow>
            </ItemDetails>
          </Item>
        ))}
      </ItemContainer>
    </>
  );
};

export default Homepage;

