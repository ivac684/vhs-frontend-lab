import React from 'react'
import { useRouter } from 'next/router'
import { useVHSData } from '@/hooks/useVHSdata'
import Link from 'next/link'
import { ArrowBackIcon } from '@/styles/styledComponents'
import Header from '@/components/Header/header'
import Footer from '@/components/Footer/footer'
import { MainContent, PageContainer } from '@/components/FormStyle'
import { DetailsContainer, DetailImageContainer, DetailImage, DetailContent, DetailRow, DetailTitle, DetailYear, DetailGenre, DetailDuration, DetailInfo, RentButtonContainer, RentalInfo, DetailAvailability, RentalRowContainer, RentalRow, ButtonContainer, EditButton, DeleteButton } from './style'
import { useDeleteMovie } from '@/hooks/useDeleteMovie'

const MovieDetails = () => {
  const router = useRouter()
  const { id } = router.query
  const { data, loading, error } = useVHSData('')
  const handleDelete = useDeleteMovie()


  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  const movie = data.find(item => item.id === Number(id))

  if (!movie) {
    return <p>Movie not found</p>
  }

  return (
    <PageContainer>
      <Header />
      <MainContent>
        <Link href="/">
          <ArrowBackIcon />
        </Link>
        <DetailsContainer>
          <DetailImageContainer>
          <DetailImage
                src={movie.thumbnail ? `http://localhost:3000/${movie.thumbnail}` : '/placeholder.png'}
                alt={movie.title}
              />
          </DetailImageContainer>
          <div>
            <DetailContent>
              <DetailRow>
                <DetailTitle>{movie.title}</DetailTitle> <DetailYear>({movie.releasedAt})</DetailYear>
              </DetailRow>
              <DetailRow>
                <DetailGenre>{movie.genre}</DetailGenre>
                <DetailDuration>{movie.duration} min</DetailDuration>
              </DetailRow>
              <DetailInfo>{movie.description}</DetailInfo>
            </DetailContent>
            <RentButtonContainer>
              <RentalInfo>
              <DetailAvailability available={movie.quantity > 0}><b>{movie.quantity > 0 ? 'AVAILABLE' : 'NOT AVAILABLE'}</b></DetailAvailability>
                <RentalRowContainer>
                  <RentalRow>Rent price: ${movie.rentalPrice}</RentalRow>
                  <RentalRow>Rent duration: {movie.rentalDuration} days</RentalRow>
                  <RentalRow>In stock: {movie.quantity}</RentalRow>
                </RentalRowContainer>
              </RentalInfo>
              <ButtonContainer>
                <Link href={`/edit-movie/${movie.id}`}>
                  <EditButton>EDIT</EditButton>
                </Link>
                <DeleteButton  onClick={() => handleDelete(movie.id)}>DELETE</DeleteButton>
              </ButtonContainer>
            </RentButtonContainer>
          </div>
        </DetailsContainer>
      </MainContent>
      <Footer />
    </PageContainer>
  )
}

export default MovieDetails;