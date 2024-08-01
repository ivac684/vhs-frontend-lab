import React, { useState } from 'react'
import { useVHSData } from '@/customHooks/useVHSdata'
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
  DeleteIcon,
  AddButton,
  IconsWrapper,
} from '@/styles/styledComponents'
import ItemContainer from '@/components/ItemContainer'
import { deleteMovie } from '@/utils/deleteMovie'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface HomepageProps {
  searchQuery: string
}

const Catalogue = ({ searchQuery }: HomepageProps) => {
  const { data, loading, error } = useVHSData(searchQuery)
  const [dropdownVisible, setDropdownVisible] = useState(false)
  const [movieData, setMovieData] = useState(data)
  const router = useRouter()

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible)
  }

  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>{error}</p>
  }

  const handleDelete = async (id: number) => {
    try {
      await deleteMovie(id)
      setMovieData(prevMovieData => prevMovieData.filter(item => item.id !== id))
      router.reload()
    } catch (error) {
      console.error('Error deleting item:', error)
    }
  }

  const genres = Array.from(new Set(data.flatMap(item => item.genre)))

  return (
    <>
      <GenreButtonContainer>
        <GenreButton onClick={toggleDropdown}>GENRE</GenreButton>
        <Link href="/movies/add-movie">
          <AddButton>ADD MOVIE</AddButton>
        </Link>
      </GenreButtonContainer>
      {dropdownVisible && (
        <GenreDropdown>
          {genres.map((genre, index) => (
            <GenreItem key={index}>{genre}</GenreItem>
          ))}
        </GenreDropdown>
      )}

      <ItemContainer>
        {data.map(item => (
          <Item key={item.id}>
            <ItemImageContainer>
              <ItemImage src="/placeholder.png" alt={item.title} />
            </ItemImageContainer>
            <ItemDetails>
              <ItemsRow>
              <Link href={`/movies/movie-details/${item.id}`}>
                <ItemTitle>{item.title}</ItemTitle> <ItemYear>({item.releasedAt})</ItemYear>
              </Link>
              </ItemsRow>
              <ItemsRow>
                <ItemGenre>
                  <b>{item.genre}</b>
                </ItemGenre>
                <ItemDuration>{item.duration} min</ItemDuration>
              </ItemsRow>
              <ItemAvailability>{item.quantity > 0 ? 'AVAILABLE' : 'NOT AVAILABLE'}</ItemAvailability>
              <IconsWrapper>
                <Link href={`/movies/edit-movie/${item.id}`}>
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
