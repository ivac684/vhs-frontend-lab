import React, { useState } from 'react';
import { useVHSData } from '@/customHooks/useVHSdata';
import { Item, GenreButton, GenreDropdown, GenreItem, GenreButtonContainer } from '@/styles/styledComponents';
import ItemContainer from '@/components/ItemContainer';

interface HomepageProps {
    searchQuery: string;
}

const Homepage = ({ searchQuery }: HomepageProps) => {
  const { data, loading, error } = useVHSData(searchQuery);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

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
          <Item key={item.id}>{item.title}</Item>
        ))}
      </ItemContainer>
    </>
  );
};

export default Homepage;
