import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { ItemTitle } from '../../styles/styledComponents'
import Link from 'next/link'
import Header from '@/components/Header/header'
import Footer from '@/components/Footer/footer'
import { ErrorMessage,FormContainer,FormField,FormHeader,Input,MainContent,NavButton,PageContainer, SubmitButton, TextArea} 
from '@/components/FormStyle'

const EditMovie = () => {
  const [form, setForm] = useState<VHSForm>({
    title: '',
    description: '',
    genre: '',
    duration: 0,
    releasedAt: 0,
    rentalPrice: 0,
    rentalDuration: 0,
    quantity: 0,
    thumbnail: 'placeholder.png',
  })
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3000/api/vhs/${id}`)
        .then(response => {
          setForm(response.data)
          setLoading(false)
        })
        .catch(() => {
          setError('Failed to load movie data')
          setLoading(false)
        })
    }
  }, [id])

  const validateForm = () => {
    if (
      form.title.trim() === '' ||
      form.description.trim() === '' ||
      form.genre.trim() === '' ||
      form.duration <= 0 ||
      form.releasedAt <= 0 ||
      form.rentalPrice <= 0 ||
      form.rentalDuration <= 0 ||
      form.quantity < 0 ||
      form.thumbnail === 'placeholder.png'
    ) {
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) {
      window.confirm('All fields except thumbnail are required and must be valid.')
      return
    }
    const formData = new FormData()
    for (const [key, value] of Object.entries(form)) {
      formData.append(key, value as string | Blob)
    }
    try {
      await axios.patch(`http://localhost:3000/api/vhs/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      router.push('/')
    } catch {
      setError('Failed to update movie')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, files } = e.target as HTMLInputElement

    if (type === 'file' && files) {
      const file = files[0] || null
      setForm(prevForm => ({
        ...prevForm,
        thumbnail: file || '',
      }))
    } else {
      setForm(prevForm => ({
        ...prevForm,
        [name]: type === 'number' ? Number(value) : value,
      }))
    }
  }

  if (loading) return <p>Loading...</p>

  return (
    <PageContainer>
      <Header />
      <MainContent>
        <Link href="/">
          <NavButton>
            <b>CATALOGUE</b>
          </NavButton>
        </Link>
        <Link href={`/movie-details/${id}`}>
          <NavButton>
            <b>MOVIE DETAILS</b>
          </NavButton>
        </Link>
        <FormContainer>
          <FormHeader>EDIT MOVIE</FormHeader>
          <form onSubmit={handleSubmit}>
            <FormField>
              <ItemTitle>Title</ItemTitle>
              <Input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Title" />
            </FormField>
            <FormField>
              <ItemTitle>Synopsis</ItemTitle>
              <TextArea name="description" value={form.description} onChange={handleChange} placeholder="Description" />
            </FormField>
            <FormField>
              <ItemTitle>Genre</ItemTitle>
              <Input type="text" name="genre" value={form.genre} onChange={handleChange} placeholder="Genre" />
            </FormField>
            <FormField>
              <ItemTitle>Duration</ItemTitle>
              <Input
                type="number"
                name="duration"
                value={form.duration}
                onChange={handleChange}
                placeholder="Duration (minutes)"
              />
            </FormField>
            <FormField>
              <ItemTitle>Released in (year)</ItemTitle>
              <Input
                type="number"
                name="releasedAt"
                value={form.releasedAt}
                onChange={handleChange}
                placeholder="Released Year"
              />
            </FormField>
            <FormField>
              <ItemTitle>Rent price</ItemTitle>
              <Input
                type="number"
                name="rentalPrice"
                value={form.rentalPrice}
                onChange={handleChange}
                placeholder="Rental Price"
              />
            </FormField>
            <FormField>
              <ItemTitle>Rent duration</ItemTitle>
              <Input
                type="number"
                name="rentalDuration"
                value={form.rentalDuration}
                onChange={handleChange}
                placeholder="Rental Duration (days)"
              />
            </FormField>
            <FormField>
              <ItemTitle>In stock</ItemTitle>
              <Input
                type="number"
                name="quantity"
                value={form.quantity}
                onChange={handleChange}
                placeholder="Quantity"
              />
            </FormField>
            <FormField>
              <ItemTitle>Thumbnail</ItemTitle>
              <Input type="file" name="thumbnail" onChange={handleChange} />
              <div>
                <img
                  src={
                    typeof form.thumbnail === 'string'
                      ? `http://localhost:3000/${form.thumbnail}`
                      : form.thumbnail
                      ? URL.createObjectURL(form.thumbnail)
                      : '/placeholder.png'
                  }
                  alt="Thumbnail"
                  width={200}
                  height={130}
                />
              </div>
            </FormField>
            <SubmitButton type="submit">SAVE</SubmitButton>
            {error && <ErrorMessage>{error}</ErrorMessage>}
          </form>
        </FormContainer>
      </MainContent>
      <Footer />
    </PageContainer>
  )
}

export default EditMovie