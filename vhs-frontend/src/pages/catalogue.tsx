import React, { useState } from 'react'
import { useVHSData } from '@/hooks/useVHSdata'
import {
  Item,
  ItemImageContainer,
  ItemImage,
  ItemDetails,
  ItemTitle,
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
  DeleteIcon,
  AddButton,
  IconsWrapper,
  ItemDescription,
  ItemLink,
} from '@/styles/styledComponents'
import ItemContainer from '@/components/ItemContainer'
import { deleteMovie } from '@/utils/deleteMovie'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { filterMoviesByGenre } from '@/utils/handleGenreFiltering'
import useScreenSize from '@/hooks/useScreenSize'
import { CircleCheck } from '@styled-icons/fa-solid/CircleCheck'
import { CircleXmark } from '@styled-icons/fa-solid/CircleXmark'
import { useDeleteMovie } from '@/hooks/useDeleteMovie'

interface HomepageProps {
  searchQuery: string
}

const Catalogue = ({ searchQuery }: HomepageProps) => {
  const { data, loading, error } = useVHSData(searchQuery)
  const [dropdownVisible, setDropdownVisible] = useState(false)
  const [selectedGenre, setSelectedGenre] = useState<string | null>('All')
  const handleDelete = useDeleteMovie()

  const filteredMovies = filterMoviesByGenre(data, selectedGenre)
  const isSmallScreen = useScreenSize()

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible)
  }

  const handleGenreClick = (genre: string) => {
    setSelectedGenre(genre)
  }

  const genres = Array.from(new Set(data.flatMap(item => item.genre)))
  const allGenres = ['All', ...genres]

  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>{error}</p>
  }

  return (
    <>
      <GenreButtonContainer>
        <GenreButton onClick={toggleDropdown}>GENRE</GenreButton>
        <Link href="/add-movie">
          <AddButton>ADD MOVIE</AddButton>
        </Link>
      </GenreButtonContainer>
      {dropdownVisible && (
        <GenreDropdown>
          {allGenres.map((genre, index) => (
            <GenreItem
              key={index}
              onClick={() => handleGenreClick(genre)}
              style={{ cursor: 'pointer', fontWeight: selectedGenre === genre ? 'bold' : 'normal' }}
            >
              {genre}
            </GenreItem>
          ))}
        </GenreDropdown>
      )}

      <ItemContainer>
        {filteredMovies.map(item => (
          <Item key={item.id}>
            <ItemImageContainer>
              <ItemLink href={`/movie-details/${item.id}`}>
                <ItemImage
                  src={item.thumbnail ? `http://localhost:3000/${item.thumbnail}` : '/placeholder.png'}
                  alt={item.title}
                />
              </ItemLink>
            </ItemImageContainer>

            <ItemDetails>
              <ItemsRow>
                <Link href={`/movie-details/${item.id}`}>
                  <ItemTitle>{item.title}</ItemTitle> <ItemYear>({item.releasedAt})</ItemYear>
                </Link>
              </ItemsRow>
              <ItemsRow>
                <ItemGenre>
                  <b>{item.genre}</b>
                </ItemGenre>
                <ItemDuration>{item.duration} min</ItemDuration>
                <Link href={`/movie-details/${item.id}`}>
                  <ItemDescription>{item.description}...</ItemDescription>
                </Link>
              </ItemsRow>
              <ItemAvailability available={item.quantity > 0}>
                {isSmallScreen ? (
                  item.quantity > 0 ? (
                    <CircleCheck size="20" />
                  ) : (
                    <CircleXmark size="20" />
                  )
                ) : (
                  <b>{item.quantity > 0 ? 'AVAILABLE' : 'NOT AVAILABLE'}</b>
                )}
              </ItemAvailability>
              <IconsWrapper>
                <Link href={`/edit-movie/${item.id}`}>
                  <EditIcon />
                </Link>
                <DeleteIcon onClick={() => handleDelete(item.id)} />
              </IconsWrapper>
            </ItemDetails>
          </Item>
        ))}
      </ItemContainer>
    </>
  )
}

export default Catalogue