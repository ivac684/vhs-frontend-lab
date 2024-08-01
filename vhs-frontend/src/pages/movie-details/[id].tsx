import React from 'react'
import { useRouter } from 'next/router'
import { useVHSData } from '@/customHooks/useVHSdata'
import Link from 'next/link'
import {
  PageContainer,
  MainContent,
  BackButton,
  DetailAvailability,
  DetailContent,
  DetailDuration,
  DetailGenre,
  DetailImage,
  DetailImageContainer,
  DetailInfo,
  DetailRow,
  DetailsContainer,
  DetailTitle,
  DetailYear,
  RentalInfo,
  RentalRow,
  RentalRowContainer,
  ButtonContainer,
  ActionButton,
  RentButtonContainer,
  EditButton,
  DeleteButton,
  ArrowBackIcon,
} from '@/styles/styledComponents'
import Header from '@/pages/header'
import Footer from '@/pages/footer'

const MovieDetails = () => {
  const router = useRouter()
  const { id } = router.query
  const { data, loading, error } = useVHSData('')

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
                <DetailAvailability>{movie.quantity > 0 ? 'AVAILABLE' : 'NOT AVAILABLE'}</DetailAvailability>
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
                <DeleteButton>DELETE</DeleteButton>
              </ButtonContainer>
            </RentButtonContainer>
          </div>
        </DetailsContainer>
      </MainContent>
      <Footer />
    </PageContainer>
  )
}

export default MovieDetails
